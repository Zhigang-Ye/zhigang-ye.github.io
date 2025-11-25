
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Matter from 'matter-js';
import { Type } from 'lucide-react';
import { FONTS, CHINESE_FONTS } from '../constants';

const PhysicsHero: React.FC = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  
  // Use refs to access physics bodies outside of useEffect
  const groundRef = useRef<Matter.Body | null>(null);
  const rightWallRef = useRef<Matter.Body | null>(null);
  
  const [fontIndex, setFontIndex] = useState(0);
  const [isFlushing, setIsFlushing] = useState(false); 
  
  // Debug state to show which Chinese font is being used
  const [debugChineseFont, setDebugChineseFont] = useState<string | null>(null);

  // --- Logic State Refs ---
  // Count how many times addFallingText has been called globally
  const generationRef = useRef(0);
  // Count drops in the current "flush cycle" (resets on flush)
  const dropsInCurrentCycleRef = useRef(0);
  
  // Track used Chinese keys in the current flush cycle to ensure uniqueness
  // Keys: 'YE', 'ZHI', 'GANG'
  const usedChineseKeysInCycleRef = useRef<Set<string>>(new Set());

  // Track last generation index a char appeared: { 'YE': 12 }
  const charLastGenRef = useRef<Record<string, number>>({});
  
  // Track if a large Chinese character (> 3.0x) has appeared in this cycle
  const hasLargeChineseRef = useRef(false);

  // Helper for Gaussian distribution (Box-Muller transform)
  const gaussianRandom = useCallback(() => {
    let u = 0, v = 0;
    while(u === 0) u = Math.random(); 
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
  }, []);

  // Function to add a new set of falling text
  const addFallingText = useCallback((fontIdx: number) => {
    const engine = engineRef.current;
    const scene = sceneRef.current;
    if (!engine || !scene) return;

    const currentEnglishFont = FONTS[fontIdx];
    const containerWidth = scene.clientWidth;
    const containerHeight = scene.clientHeight;

    // Increment counters
    generationRef.current += 1;
    const dropsInCycle = dropsInCurrentCycleRef.current; // Snapshot before increment for logic
    dropsInCurrentCycleRef.current += 1;

    const gen = generationRef.current;
    const usedKeys = usedChineseKeysInCycleRef.current;
    const lastGen = charLastGenRef.current;

    // --- LOGIC: Probabilistic Chinese Substitutions ---
    const PROBABILITY = 0.075; 

    // Helper to check constraints (Interval > 4 generations)
    const canUseKey = (key: string) => {
        // Constraint: Interval > 4 generations
        const last = lastGen[key];
        if (last !== undefined && (gen - last) <= 4) return false;
        return true;
    };

    // 1. Determine YE candidates (Leaf)
    let useYe = false;
    // Only try if not used in this cycle yet
    if (!usedKeys.has('YE') && canUseKey('YE')) {
        if (Math.random() < PROBABILITY) {
            useYe = true;
        }
    }
    const yeChar = Math.random() < 0.5 ? '叶' : '葉'; // Pre-select char

    // 2. Determine ZHI candidates (Wisdom)
    let useZhi = false;
    if (!usedKeys.has('ZHI') && canUseKey('ZHI')) {
        if (Math.random() < PROBABILITY) {
            useZhi = true;
        }
    }

    // 3. Determine GANG candidates (Port)
    let useGang = false;
    if (!usedKeys.has('GANG') && canUseKey('GANG')) {
        if (Math.random() < PROBABILITY) {
            useGang = true;
        }
    }

    // Determine sequence
    const hasChinese = useYe || useZhi || useGang;
    let parts: string[] = [];

    const yePart = useYe ? [yeChar] : ['Y','E'];
    const zhiPart = useZhi ? ['智'] : ['Z','H','I'];
    const gangPart = useGang ? ['港'] : ['G','A','N','G'];

    if (hasChinese) {
        // Reorder: YE - ZHI - GANG
        // Ensures YE (叶) is on left, ZHI (智) in middle, GANG (港) on right
        parts = [...yePart, ...zhiPart, ...gangPart];

        // Update Stats
        if (useYe) {
            usedKeys.add('YE');
            lastGen['YE'] = gen;
        }
        if (useZhi) {
            usedKeys.add('ZHI');
            lastGen['ZHI'] = gen;
        }
        if (useGang) {
            usedKeys.add('GANG');
            lastGen['GANG'] = gen;
        }
    } else {
        // Standard: ZHI - GANG - YE
        parts = ['Z','H','I', 'G','A','N','G', 'Y','E'];
    }

    const usedChineseInfos: string[] = [];
    const letterBodies: Matter.Body[] = [];
    
    // Base font size
    const baseFontSize = Math.min(containerWidth, containerHeight) * 0.15;
    
    parts.forEach((letter, index) => {
      const isChineseChar = /[\u4e00-\u9fa5]/.test(letter);
      let scale: number;

      if (isChineseChar) {
        // Chinese Logic: ALWAYS >= 1.0
        
        if (hasLargeChineseRef.current) {
            // If a large character has already appeared, float subsequent ones between 1.0 and 2.0
            scale = 1.0 + Math.random(); 
        } else {
            // Before large char appears: Increase probability significantly
            // Lower lambda means flatter curve -> higher chance of large numbers
            // Old lambda = 3.22 (0.16% chance > 3.0)
            // New lambda = 0.7 (~25% chance > 3.0)
            const lambda = 0.7;
            let u = Math.random();
            while (u === 0) u = Math.random(); 
            const addedScale = -Math.log(u) / lambda;
            let rawScale = 1.0 + addedScale;
            // New Upper Limit: 5.0x
            rawScale = Math.min(5.0, rawScale);
            scale = rawScale;
        }

        // Update flag immediately so subsequent letters in this loop (e.g., YE then ZHI) are affected
        // Threshold 3.0x
        if (scale > 3.0) {
            hasLargeChineseRef.current = true;
        }
      } else {
        // English Logic
        const p = Math.random();
        
        // Bucket 1: Mainstream (90% Probability) -> Range [0.2, 1.0]
        if (p < 0.90) {
            // First drop (dropsInCycle === 0) should be relatively average (center 0.8)
            // Subsequent drops should be small (center 0.4)
            let center = 0.8; 

            if (dropsInCycle >= 1) {
                center = 0.4; // Shift center to favor 0.2-0.6 range for later drops
            }

            const variance = 0.25;
            const rawScale = center + (gaussianRandom() * variance);
            scale = Math.min(1.0, Math.max(0.2, rawScale));
        } 
        // Bucket 2: Outliers (10% Probability) -> Range [1.0, 3.0]
        else {
            const lambda = 3.22;
            let u = Math.random();
            while (u === 0) u = Math.random(); 
            const addedScale = -Math.log(u) / lambda;
            scale = 1.0 + addedScale;
            scale = Math.min(3.0, scale);
        }
      }

      // --- BASE SIZE ADJUSTMENT ---
      // User requested Chinese base size to be 1/2 of original
      const effectiveBaseSize = isChineseChar ? (baseFontSize * 0.5) : baseFontSize;
      const fontSize = effectiveBaseSize * scale;

      // --- FONT SELECTION LOGIC ---
      let selectedFont = currentEnglishFont;
      
      if (isChineseChar) {
        // Pick a random Chinese font
        const randIdx = Math.floor(Math.random() * CHINESE_FONTS.length);
        selectedFont = CHINESE_FONTS[randIdx];
        
        // Capture debug info: Name + Scale
        usedChineseInfos.push(`${selectedFont.name} (x${scale.toFixed(2)})`);
      }

      // Adjust collision box width
      let widthMultiplier = 0.5; 
      // Chinese characters are usually square, so width ≈ height
      if (isChineseChar) widthMultiplier = 0.9; 
      else if (selectedFont.name.includes('Anton')) widthMultiplier = 0.45; 
      else if (selectedFont.name.includes('Inter')) widthMultiplier = 0.55; 
      
      const boxWidth = fontSize * widthMultiplier; 
      // Box height: Chinese is square, English is rectangular
      const boxHeight = fontSize * (isChineseChar ? 0.9 : 0.70); 

      // Spread them out initially
      const x = (containerWidth / (parts.length + 2)) * (index + 1);
      const y = -100 - (index * 60) - (Math.random() * 50); 
      
      const body = Matter.Bodies.rectangle(x, y, boxWidth, boxHeight, {
        restitution: 0.05, 
        friction: 0.9,     
        frictionAir: 0.02 - (scale * 0.005), 
        density: 0.01,     
        chamfer: { radius: 2 * scale }, 
        angle: (Math.random() - 0.5) * 0.2, 
        label: letter,
        render: {
          fillStyle: '#000000', 
          opacity: 0 
        },
        plugin: {
          // Store font info on the body
          fontFamily: selectedFont.value,
          fontWeight: selectedFont.weight,
          fontSize: fontSize,
          fontName: selectedFont.name,
          interactionTime: 0 
        }
      });
      letterBodies.push(body);
    });

    if (usedChineseInfos.length > 0) {
      setDebugChineseFont(`[TEST] ${usedChineseInfos.join(', ')}`);
    } else {
      setDebugChineseFont(null);
    }

    Matter.Composite.add(engine.world, letterBodies);
  }, [gaussianRandom]);

  useEffect(() => {
    if (!sceneRef.current) return;

    // Module aliases
    const Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      Events = Matter.Events,
      World = Matter.World;

    const engine = Engine.create();
    engineRef.current = engine;
    
    const containerWidth = sceneRef.current.clientWidth;
    const containerHeight = sceneRef.current.clientHeight;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: containerWidth,
        height: containerHeight,
        background: '#ffffff',
        wireframes: false, 
        pixelRatio: window.devicePixelRatio,
      }
    });
    renderRef.current = render;

    const wallOptions = { 
        isStatic: true, 
        render: { fillStyle: 'transparent' },
        friction: 1, 
        restitution: 0 
    };
    
    const ground = Bodies.rectangle(containerWidth / 2, containerHeight + 50, containerWidth, 100, wallOptions);
    groundRef.current = ground; 

    const leftWall = Bodies.rectangle(-50, containerHeight / 2, 100, containerHeight * 2, wallOptions);
    const rightWall = Bodies.rectangle(containerWidth + 50, containerHeight / 2, 100, containerHeight * 2, wallOptions);
    rightWallRef.current = rightWall; 
    
    Composite.add(engine.world, [ground, leftWall, rightWall]);

    // Initial drop
    addFallingText(0);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Collision Event for Chinese Characters
    const FADE_DURATION = 10000; // 10 seconds

    Events.on(engine, 'collisionStart', (event) => {
        const pairs = event.pairs;
        const now = Date.now();
        
        for (let i = 0; i < pairs.length; i++) {
            const bodyA = pairs[i].bodyA;
            const bodyB = pairs[i].bodyB;

            // Helper to handle collision coloring
            const handleCollision = (body: Matter.Body) => {
                if (body.label && /[\u4e00-\u9fa5]/.test(body.label)) {
                    // Always reset interaction time on collision to trigger red flash
                    body.plugin.interactionTime = now;
                }
            };

            handleCollision(bodyA);
            handleCollision(bodyB);
        }
    });

    Events.on(render, 'afterRender', () => {
      const ctx = render.context;
      const bodies = Composite.allBodies(engine.world);
      const currentTime = Date.now();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      bodies.forEach((body) => {
        if (!body.isStatic && body.label && body.label.length >= 1) {
          const fSize = body.plugin.fontSize || 20;
          const fFamily = body.plugin.fontFamily || 'Arial';
          const fWeight = body.plugin.fontWeight || 'normal';
          const fName = body.plugin.fontName || 'Sans';

          ctx.font = `${fWeight} ${fSize}px ${fFamily}`;
          
          if (mouseConstraint.body === body) {
            body.plugin.interactionTime = currentTime;
          }

          const lastInteraction = body.plugin.interactionTime || 0;
          const timeSinceInteraction = currentTime - lastInteraction;

          if (timeSinceInteraction < FADE_DURATION) {
            const linearProgress = timeSinceInteraction / FADE_DURATION;
            // Easing: Quartic (p^4) for sharp acceleration at end
            const curvedProgress = Math.pow(linearProgress, 4); 

            const r = Math.round(242 * (1 - curvedProgress));
            const g = Math.round(44 * (1 - curvedProgress));
            const b = Math.round(44 * (1 - curvedProgress));
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
          } else {
            ctx.fillStyle = '#000000';
          }
          
          ctx.save();
          ctx.translate(body.position.x, body.position.y);
          ctx.rotate(body.angle);
          
          let yOffset = fSize * 0.05; 
          // Center Chinese characters better
          if (/[\u4e00-\u9fa5]/.test(body.label)) {
             yOffset = 0;
          }
          // Slight vertical tweak for Serif fonts
          else if (fName.includes('Serif') || fName.includes('Classic')) {
             yOffset = 0;
          }
          
          ctx.fillText(body.label, 0, yOffset); 
          ctx.restore();
        }
      });
    });

    Render.run(render);
    
    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const handleResize = () => {
      if (!sceneRef.current || !renderRef.current || !engineRef.current) return;
      const newWidth = sceneRef.current.clientWidth;
      const newHeight = sceneRef.current.clientHeight;
      renderRef.current.canvas.width = newWidth;
      renderRef.current.canvas.height = newHeight;
      
      if (groundRef.current) {
        Matter.Body.setPosition(groundRef.current, { x: newWidth / 2, y: newHeight + 50 });
      }
      if (rightWallRef.current) {
        Matter.Body.setPosition(rightWallRef.current, { x: newWidth + 50, y: newHeight / 2 });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      if(render.canvas) render.canvas.remove();
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [addFallingText]);

  const toggleFont = () => {
    if (isFlushing) return; 

    const nextIndex = (fontIndex + 1) % FONTS.length;
    setFontIndex(nextIndex);

    const engine = engineRef.current;
    if (!engine) return;

    const allBodies = Matter.Composite.allBodies(engine.world);
    const textBodies = allBodies.filter(b => !b.isStatic && b.label && b.label.length >= 1);
    
    const canvasHeight = renderRef.current?.canvas.height || window.innerHeight;
    const topThreshold = canvasHeight * 0.15;

    const isFull = textBodies.some(b => {
      return b.bounds.min.y < topThreshold && b.position.y > 0 && b.speed < 1.0;
    });

    if (isFull) {
      setIsFlushing(true);
      
      // Reset logic state on flush
      usedChineseKeysInCycleRef.current.clear(); // Reset used keys
      dropsInCurrentCycleRef.current = 0;
      hasLargeChineseRef.current = false;

      const ground = groundRef.current;

      if (ground) {
        Matter.Composite.remove(engine.world, ground);
        setTimeout(() => {
          if (!engineRef.current) {
            setIsFlushing(false);
            return;
          }
          const currentBodies = Matter.Composite.allBodies(engine.world);
          const dynamicBodies = currentBodies.filter(b => !b.isStatic);
          Matter.Composite.remove(engine.world, dynamicBodies);
          Matter.Composite.add(engine.world, ground);
          addFallingText(nextIndex);
          setIsFlushing(false);
        }, 1200);
      }
    } else {
      addFallingText(nextIndex);
    }
  };

  const currentFont = FONTS[fontIndex];

  return (
    <div className="w-full h-full relative group">
      {/* Top Debug Bar for Chinese Fonts */}
      {debugChineseFont && (
         <div className="absolute top-4 left-0 w-full text-center text-[#F22C2C] text-xs z-40 select-none font-mono opacity-80">
            {debugChineseFont}
         </div>
      )}

       <div 
        ref={sceneRef} 
        className="w-full h-full bg-white cursor-grab active:cursor-grabbing overflow-hidden relative touch-none"
        aria-label="Interactive falling letters spelling ZHIGANGYE"
      />
      
      <button 
        onClick={toggleFont}
        disabled={isFlushing}
        className={`absolute top-1/2 right-4 md:right-8 -translate-y-1/2 z-10 p-3 bg-white text-black border border-black rounded-full transition-all duration-200 ${isFlushing ? 'opacity-50 cursor-not-allowed' : 'hover:text-[#F22C2C]'}`}
        title="Change Font"
      >
        <Type size={20} />
      </button>
    </div>
  );
};

export default PhysicsHero;
