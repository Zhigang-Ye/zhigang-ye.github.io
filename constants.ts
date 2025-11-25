
import { Project, TextSection, TextEntry } from './types';

export const NAV_ITEMS = [
  { label: 'HOME', view: 'HOME' as const },
  { label: 'PORTFOLIO', view: 'PORTFOLIO' as const },
  { label: 'TEXT', view: 'TEXT' as const },
  { label: 'BIOGRAPHY', view: 'BIOGRAPHY' as const },
];

export const FONTS = [
  { name: 'Raleway', value: '"Raleway", sans-serif', weight: '400' },
  { name: 'Montserrat', value: '"Montserrat", sans-serif', weight: '400' },
  { name: 'Playfair', value: '"Playfair Display", serif', weight: '400' },
  { name: 'Bodoni', value: '"Bodoni Moda", serif', weight: '400' },
  { name: 'Syne', value: '"Syne", sans-serif', weight: '400' },
  { name: 'Space', value: '"Space Grotesk", sans-serif', weight: '400' },
  { name: 'Italiana', value: '"Italiana", serif', weight: '400' },
  { name: 'Tenor', value: '"Tenor Sans", sans-serif', weight: '400' },
  { name: 'Prata', value: '"Prata", serif', weight: '400' },
  { name: 'Cinzel', value: '"Cinzel", serif', weight: '400' },
  { name: 'DM Sans', value: '"DM Sans", sans-serif', weight: '500' },
  { name: 'Archivo', value: '"Archivo", sans-serif', weight: '500' },
  { name: 'Cormorant', value: '"Cormorant Garamond", serif', weight: '500' },
  { name: 'Anton', value: '"Anton", sans-serif', weight: '400' },
  { name: 'Inter', value: '"Inter", sans-serif', weight: '400' },
];

export const CHINESE_FONTS = [
  { name: 'Noto Sans SC', value: '"Noto Sans SC", sans-serif', weight: '400' },
  { name: 'Noto Serif SC', value: '"Noto Serif SC", serif', weight: '400' },
  { name: 'PingFang SC', value: '"PingFang SC", sans-serif', weight: '400' },
  { name: 'Hiragino Sans', value: '"Hiragino Sans GB", sans-serif', weight: '400' },
  { name: 'SimSun', value: '"SimSun", serif', weight: '400' },
  { name: 'Heiti', value: '"Heiti SC", sans-serif', weight: '400' },
  { name: 'Weibei', value: '"Weibei SC", sans-serif', weight: '400' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'PROJECT NAME 01',
    category: 'Installation / Media',
    year: '2024',
    description: 'Description of your first project. You can replace this text with details from your PDF. This project explores the relationship between space and digital noise.',
    imageUrl: 'https://picsum.photos/800/800?random=10',
  },
  {
    id: '2',
    title: 'PROJECT NAME 02',
    category: 'Visual Identity',
    year: '2023',
    description: 'Description of your second project. A comprehensive branding study focused on typography and minimalist structures.',
    imageUrl: 'https://picsum.photos/800/800?random=11',
  },
  {
    id: '3',
    title: 'PROJECT NAME 03',
    category: 'Creative Coding',
    year: '2023',
    description: 'Description of your third project. An interactive web experiment using physics engines and generative algorithms.',
    imageUrl: 'https://picsum.photos/800/800?random=12',
  },
  {
    id: '4',
    title: 'PROJECT NAME 04',
    category: 'Photography',
    year: '2022',
    description: 'Description of your fourth project. Documentation of urban landscapes and the accidental art found in city streets.',
    imageUrl: 'https://picsum.photos/800/800?random=13',
  },
  {
    id: '5',
    title: 'PROJECT NAME 05',
    category: 'Editorial Design',
    year: '2022',
    description: 'Description of your fifth project. Layout and art direction for an independent art magazine.',
    imageUrl: 'https://picsum.photos/800/800?random=14',
  },
  {
    id: '6',
    title: 'PROJECT NAME 06',
    category: 'Motion Graphics',
    year: '2021',
    description: 'Description of your sixth project. A series of kinetic type experiments and motion posters.',
    imageUrl: 'https://picsum.photos/800/800?random=15',
  },
];

export const TEXT_SECTIONS: TextSection[] = [
  {
    category: {
        cn: '短篇',
        tw: '短篇',
        en: 'Short Story'
    },
    items: [
      {
        id: 'ss1',
        title: {
            cn: '遗忘是件恐惧的事',
            tw: '遺忘是件恐懼的事',
            en: 'Forgetfulness is a scary thing'
        },
        content: {
          cn: `他几乎忘了他要说什么，分手一个月后从海峡的对岸寄来的包裹里，三得利翻出以前送给皮皮卢的百变怪挂饰玩偶。皮皮卢一直把它跟钥匙，一块挂在胸前。他一拿起来就闻到了，然后认出并想起了这是皮皮卢身上的味道，他觉得相当不可思议。三得利已经三个月没见过皮皮卢了，连带着淡水潮湿的空气的味道之类的全都，被这一边的干槁的东西洗刷完了肺后全都忘光光了。他拿着玩偶眼泪几乎要掉下来了，又拿起来使劲闻了闻，真是怀念极了，尽管三得利知道他并不会回去了，从各种意义上来说都是。又过了好多年，三得利还记得那个下午，甚至还记得那是什么味道。`,
          tw: `他幾乎忘了他要說什麼，分手一個月後從海峽的對岸寄來的包裹裡，三得利翻出以前送給皮皮盧的百變怪掛飾玩偶。皮皮盧一直把它跟鑰匙，一塊掛在胸前。他一拿起來就聞到了，然後認出並想起了這是皮皮盧身上的味道，他覺得相當不可思議。三得利已經三個月沒見過皮皮盧了，連帶著淡水潮濕的空氣的味道之類的全都，被這一邊的乾槁的東西洗刷完了肺後全都忘光光了。他拿著玩偶眼淚幾乎要掉下來了，又拿起來使勁聞了聞，真是懷念極了，儘管三得利知道他並不會回去了，從各種意義上來說都是。又過了許多年，三得利還記得那個下午，甚至還記得那是什麼味道。`,
          en: `He had almost forgotten what he wanted to say. One month after the breakup, inside a package sent from the other side of the strait, Suntory found the Ditto plushie keychain he had given to Pipilu in the past. Pipilu had always hung it on her chest together with her keys. As soon as he picked it up, he smelled it, and then recognized and remembered that this was the scent of Pipilu; he found it quite incredible. Suntory hadn't seen Pipilu for three months. Along with the smell of the damp air in Tamsui and such, everything had been washed out of his lungs by the dry things on this side, and he had forgotten it all completely. He held the doll, tears almost falling, and picked it up to smell it hard again. It was truly extremely nostalgic, even though Suntory knew he wouldn't go back, in every sense of the word. Many years later, Suntory still remembered that afternoon, and even remembered what that smell was.`
        }
      },
      {
        id: 'ss2',
        title: {
            cn: '杀手',
            tw: '殺手',
            en: 'Killer'
        },
        content: {
          cn: `他说：「只有最厉害的杀手才穿白西服，如同一个骄傲的油漆匠，不允许衣服上有任何一点一滴的失误痕迹。要么穿，要么就不穿。」

「但我从来没有这种执着。」他又说。而后他枪里的子弹飞进我眉间，溅了他一身的血。`,
          tw: `他說：「只有最厲害的殺手才穿白西服，如同一個驕傲的油漆匠，不允許衣服上有任何一點一滴的失誤痕跡。要麼穿，要麼就不穿。」

「但我從來沒有這種執著。」他又說。而後他槍裡的子彈飛進我眉間，濺了他一身的血。`,
          en: `He said: "Only the most formidable killers wear white suits. Like a proud painter, they do not allow any trace of error on their clothes. Either wear it, or don't."

"But I never had this obsession," he added. Then the bullet from his gun flew into the space between my eyebrows, splattering him with blood.`
        }
      },
      {
        id: 'ss3',
        title: {
            cn: '写于前往Marry葬礼的途中',
            tw: '寫於前往Marry葬禮的途中',
            en: 'Written on the way to Marry\'s funeral'
        },
        content: {
          cn: `有时候觉得，活着真是一件忙碌、漫长、无趣而又疲惫的事情。我在某个十字路口的二楼，坐在我家拘谨的小阳台的藤椅上，垂下的手里拿着根烟，心想说，啊，世界还是毁灭了好了。
倒是也想不出什么特别的理由，只是什么也不想做啊。我起身把烟丢下楼，直直的望着午后来来往往的人群，下班的人，放学的人，买菜的人，乞丐。偶尔有人会抬头看我，大部分的人就只是在忙碌的穿越那些人形道，从他们来的地方，去他们要去的地方。
「喂！！！！」楼下突然有个女人这么大喊，然后朝下面的街角追过去，看不见了。
我回到房间的床上看着自己的手指头，吃饭、喝水、排泄、睡觉、等Marry回家，我猜测，我是不是差不多麻木到去死也没关系的程度了呢。我想到国中的时候有一次不知道为什么，我一个人站在教学楼顶，突然很坚定的跟自己说，我一定不会自杀的，一定不会。现在看来真是时过境迁呢。
不过真的要我去死当然是不可能的，上吊，卧轨，服药，或是在浴缸里把手腕割开，喝着威士忌听着爵士乐。别扯了，这些对我来说都太可怕了，我不想要想多余的事情，我害怕做决定，我希望像别人按下一个开关一样，啪，我的意识就消失了那样。
手机的荧幕亮了起来，显示来电，号码是房东。
我一边拿起手机一边想着，我已经被这该死的生活困住了，就像一个泥潭一样。我的生活也好，我的身体也好，我住的房子也好，我住的城市也好。就算我已经厌倦了，也逃不走，因为这就是我唯一能呆着的地方了，或者说这就是我本身，所以我逃不走，我只能在此时此刻此地存在着。虽然我只是在自欺欺人罢了。
「你好，叶同学。」
「是的，是我」我接起讨人厌的房东打来的电话。
「有什么事吗？」我尽量客气的跟他说。
「上次跟你说的事情，如果你们可以在11月底搬出去是最好，最晚希望你们12/15之前搬出去。谢谢你哦。」
「啊 这样啊，12/15有点赶呢」
「嗯，然后你们这个月要交的房租和电费总共7500+944=8444，搬走的时候多交的房租会退给你们。」
然后他就挂了电话，至于他讲的事情是说我被邻居投诉，所以希望我在租约前提前搬走，于是我问他是什么事情，他告诉我说不方便透露。
我骑车出门，晚饭是孙东宝台式牛排教父5分熟，说实话还不错。然后左转顺便去了宠物店，结账的时候老板娘热情的问我家裡养了仓鼠还是什么啊，我说是的，于是她拿了个果冻说是招待我们家的仓鼠，我说谢谢。之后到家我就把东西拿到洗手槽，打开塑料盒的盖子，看着数量不多的几只蟑螂baby们爬进下水道，心裡为他们祈祷，希望我搬走之后你们能在这里好好的生活，健康快乐的繁衍生息，然后把给仓鼠的果冻吃掉了。
我打电话给Marry，跟她说房东要我们搬走的事情。
「Marry。」电话接通后我说，「房东要我们15号就搬走唉」。大概过了五分钟左右Marry骂我是废物，然后就挂了电话。之后我看到她传简讯来说「我们分手吧。」于是我跟marry就说拜拜了，然后她拜托我把衣服和化妆品装行李寄到她台南的家，其他她就不要了。我蹲在楼下铁门外一根又一根的抽烟，不知不觉流了几滴眼泪，才发现我真的很喜欢Marry，虽然她烫捲后的头发又丑又臭，半夜的时候还会把被子都捲走。之后上楼收拾她的东西，我还记得用了半截的口红是去年圣诞节借了她300块，买给她的圣诞礼物。
收拾完行李差不多就到了十二月初，我跟房东联络好什么时候交房，汇款，买了一堆加热食品，在家连着躺了好几天，之后离开了这个住了半年多地方，搬到另一个比较小的公寓住，新房子楼下的老奶奶养了一只很老很老的狗，我搬家的整个下午，它都趴在奶奶的脚边一动不动，奶奶也一动不动，我好奇到底谁会先去世呢。又汇款给新的房东，再等安定下来，熟悉了周围的便利商店和餐馆，十二月便差不多要过完了，春天要来了，我还是很想Marry，虽然她一次都没再打电话给我，圣诞节我买了一只新的口红送给她，然后时隔一年，我的存款就差不多又要见底。
我还记得一年前的那天晚上，我刚从大学毕业半年左右，在影视公司找了个剪辑的工作，跟Marry还没有同居，于是下班后我们出来约会。「Marry」我叫她的名字，虽然在捷运站边，但这裡没什么人，「嗯？」她转头看我，那时候她还没把头发烫捲，留着齐肩的黑色直法，她的眉毛很粗，不怎么化妆，脸上有一些零星的雀斑，嘴角的连线总是平平的，看起来有点土气。即使是这样，我低垂着眼看她，任然觉得胸口紧紧的，倒不如说我觉得她这样的长相在我看来可爱极了。
「啊，虽然我不支持婚前性行为，我们等下要不要去旅馆休息一下。」我面无表情的问她，她眯起眼看我说「好啊」，然后踹了我一脚。
「哈哈」我闪到一边。
「唉 Marry」我说。
「怎么，又是旅馆的事情？」
「不是，你好可爱」我说
「笨蛋」
「真的很可爱」
「有吗」她又转头看我，看起来很开心。
「有」
「哪裡可爱」她招呼我坐下。
我们坐在路边过道的长椅上，在一盏路灯下。
「眼睛眉毛鼻子嘴巴」我说。
「头发不可爱吗？」
「头发也可爱」
「哼，骗人，头发一定不可爱吧」她假装生气的撇过头，然后又马上转回来看我要怎么反应。
「才没有」我看着她，她好像还等我再说什么，可是我一下子突然不知道说什么好，我们沉默了一会，她说「哎，我们搬出来一起住吧」。
「啊 你说真的吗」
「当然了」
那时候我自己住在公司边上，每个月要缴房租跟还学贷，等到快月底的时候，户头基本上都没什么钱。
「可是搬家得要一笔钱呢」我有一点沮丧。
「啊，我下个月就去工作啦，我们一起存着，等有钱了我们就搬吧」
「好」
后来我问了她新工作的事情，然后她就搭捷运回去了，回去之前在那个没人的角落第一次亲了一下我的嘴唇，我虽然不是什么纯情少男，还是不由得激动了一下下，对未来也充满了期待。
后来过了半年左右，我涨了工资，还完学贷，存了笔小钱，Marry也跟家裡人讲过，于是我们一起搬到新房子里住，她烫了头发，换了份大公司的工作，我辞职在家炒股票，就这样一直到了现在。
也想不起来我跟Marry是什么时候开始不怎么讲话的，然后开始为了一些小事情发脾气，不过想来这都不重要了。我暂时找了份火锅店的打工，投了些履历，三月的时候我下楼。发现老奶奶的狗死了，四月的时候我去台南参加了Marry的葬礼，她在家睡觉的时候突然猝死，死的时候也还是捲发。`,
          tw: `有的時候覺得，活著真是一件忙碌、漫長、無趣而又疲憊的事情。我在某個十字路口的二樓，坐在我家拘謹的小陽臺的藤椅上，垂下的手裏拿著根煙，心想說，啊，世界還是毀滅了好了。
倒是也想不出什麽特別的理由，只是什麽也不想做啊。我起身把烟丟下樓，直直的望著午後來來往往的人群，下班的人，放學的人，買菜的人，乞丐。偶爾有人會擡頭看我，大部分的人就只是在忙碌的穿越那些人形道，從他們來的地方，去他們要去的地方。
「喂！！！！」樓下突然有個女人這麽大喊，然後朝下面的街角追過去，看不見了。
我回到房間的床上看著自己的手指頭，吃飯、喝水、排泄、睡覺、等Marry回家，我猜測，我是不是差不多麻木到去死也沒關係的程度了呢。我想到囯中的時候有一次不知道爲什麽，我一個人站在教學樓頂，突然很堅定的跟自己說，我一定不會自殺的，一定不會。現在看來真是時過境遷呢。
不過真的要我去死當然是不可能的，上吊，臥軌，服藥，或是在浴缸裏把手腕割開，喝著威士忌聽著爵士樂。別扯了，這些對我來説都太可怕了，我不想要想多餘的事情，我害怕做決定，我希望像別人按下一個開關一樣，啪，我的意識就消失了那樣。
手機的熒幕亮了起來，顯示來電，號碼是房東。
我一邊拿起手機一邊想著，我已經被這該死的生活困住了，就像一個泥潭一樣。我的生活也好，我的身體也好，我住的房子也好，我住的城市也好。就算我已經厭倦了，也逃不走，因爲這就是我唯一能呆著的地方了，或者説這就是我本身，所以我逃不走，我只能在此時此刻此地存在著。雖然我只是在自欺欺人罷了。
「你好，葉同學。」
「是的，是我」我接起討人厭的房東打來的電話。
「有什麽事嗎？」我盡量客氣的跟他説。
「上次跟你説的事情，如果你們可以在11月底搬出去是最好，最晚希望你們12/15之前搬出去。謝謝你哦。」
「啊 這樣啊，12/15有點趕呢」
「嗯，然後你們這個月要交的房租和電費總共7500+944=8444，搬走的時候多交的房租會退給你們。」
然後他就挂了電話，至於他講的事情是說我被鄰居投訴，所以希望我在租約前提前搬走，於是我問他是什麽事情，他告訴我說不方便透露。
我騎車出門，晚飯是孫東寳臺式牛排教父5分熟，説實話還不錯。然後左轉順便去了寵物店，結賬的時候老闆娘熱情的問我家裏養了倉鼠還是什麽啊，我說是的，於是她拿了個果凍說是招待我們家的倉鼠，我說謝謝。之後到家我就把東西拿到洗手槽，打開塑料盒的蓋子，看著數量不多的幾隻蟑螂baby們爬進下水道，心裏爲他們祈禱，希望我搬走之後你們能在這裏好好的生活，健康快樂的繁衍生息，然後把給倉鼠的果凍吃掉了。
我打電話給Marry，跟她説房東要我們搬走的事情。
「Marry。」電話接通后我說，「房東要我們15號就搬走唉」。大概過了五分鐘左右Marry駡我是廢物，然後就挂了電話。之後我看到她傳簡訊來説「我們分手吧。」於是我跟marry就說拜拜了，然後她拜托我把衣服和化妝品裝行李寄到她臺南的家，其他她就不要了。我蹲在樓下鉄門外一根又一根的抽烟，不知不覺流了几滴眼淚，才發現我真的很喜歡Marry，雖然她燙捲后的頭髮又丑又臭，半夜的時候還會把被子都捲走。之後上樓收拾她的東西，我還記得用了半截的口紅是去年聖誕節借了她300塊，買給她的聖誕禮物。
收拾完行李差不多就到了十二月初，我跟房東聯絡好什麽時候交房，匯款，買了一堆加熱食品，在家連著躺了好幾天，之後離開了這個住了半年多地方，搬到另一個比較小的公寓住，新房子樓下的老奶奶養了一只很老很老的狗，我搬家的整個下午，它都趴在奶奶的脚邊一動不動，奶奶也一動不動，我好奇到底誰會先去世呢。又匯款給新的房東，再等安定下來，熟悉了周圍的便利商店和餐館，十二月便差不多要過完了，春天要來了，我還是很想Marry，雖然她一次都沒再打電話給我，聖誕節我買了一隻新的口紅送給她，然後時隔一年，我的存款就差不多又要見底。
我還記得一年前的那天晚上，我剛從大學畢業半年左右，在影視公司找了個剪輯的工作，跟Marry還沒有同居，於是下班後我們出來約會。「Marry」我叫她的名字，雖然在捷運站邊，但這裏沒什麽人，「嗯？」她轉頭看我，那時候她還沒把頭髮烫捲，留著齊肩的黑色直法，她的眉毛很粗，不怎麽化妝，臉上有一些零星的雀斑，嘴角的連綫總是平平的，看起來有點土氣。即使是這樣，我低垂著眼看她，任然覺得胸口緊緊的，倒不如説我覺得她這樣的長相在我看來可愛極了。
「啊，雖然我不支持婚前性行爲，我們等下要不要去旅館休息一下。」我面無表情的問她，她眯起眼看我說「好啊」，然後踹了我一脚。
「哈哈」我閃到一邊。
「唉 Marry」我說。
「怎麽，又是旅館的事情？」
「不是，你好可愛」我說
「笨蛋」
「真的很可愛」
「有嗎」她又轉頭看我，看起來很開心。
「有」
「哪裏可愛」她招呼我坐下。
我們坐在路邊過道的長椅上，在一盞路燈下。
「眼睛眉毛鼻子嘴巴」我說。
「頭髮不可愛嗎？」
「頭髮也可愛」
「哼，騙人，頭髮一定不可愛吧」她假裝生氣的撇過頭，然後又馬上轉回來看我要怎麼反應。
「才沒有」我看著她，她好像還等我再説些什麽，可是我一下子突然不知道說什麽好，我們沉默了一會，她説「哎，我們搬出來一起住吧」。
「啊 你説真的嗎」
「當然了」
那時候我自己住在公司邊上，每個月要繳房租跟還學貸，等到快月底的時候，户頭基本上都沒什麽錢。
「可是搬家得要一筆錢呢」我有一點沮喪。
「啊，我下個月就去工作啦，我們一起存着，等有錢了我們就搬吧」
「好」
後來我問了她新工作的事情，然後她就搭捷運回去了，回去之前在那個沒人的角落第一次親了一下我的嘴唇，我雖然不是什麽純情少男，還是不由得激動了一下下，對未來也充滿了期待。
後來過了半年左右，我漲了工資，還完學貸，存了筆小錢，Marry也跟家裏人講過，於是我們一起搬到新房子裏住，她燙了頭髮，換了份大公司的工作，我辭職在家炒股票，就這樣一直到了現在。
也想不起來我跟Marry是什麽時候開始不怎麽講話的，然後開始爲了一些小事情發脾氣，不過想來這都不重要了。我暫時找了份火鍋店的打工，投了些履歷，三月的時候我下樓。發現老奶奶的狗死了，四月的時候我去臺南參加了Marry的葬禮，她在家睡覺的時候突然猝死，死的時候也還是捲髮。`,
          en: `Sometimes I feel that living is a busy, long, boring, and exhausting thing. I was on the second floor at some intersection, sitting on a rattan chair on my cramped little balcony, a cigarette in my dangling hand, thinking to myself, Ah, it would be better if the world just ended.
I couldn't really come up with any special reason; I just didn't want to do anything. I stood up and threw the cigarette downstairs, looking straight at the crowds coming and going in the afternoon—people getting off work, students getting out of school, people buying groceries, beggars. Occasionally someone would look up at me, but most people were just busy crossing those crosswalks, going from where they came from to where they were going.
"Hey!!!!" A woman downstairs suddenly shouted this loudly, then chased toward the street corner below and disappeared from sight.
I went back to the bed in my room and looked at my fingers. Eating, drinking, excreting, sleeping, waiting for Marry to come home. I guessed, have I reached the point of numbness where it wouldn't matter if I died? I thought of a time in junior high when, for some unknown reason, I stood alone on the roof of the school building and told myself very firmly: I will definitely not commit suicide, definitely not. Looking back now, how things have changed.
But of course, it's impossible for me to actually go and die. Hanging myself, lying on train tracks, taking pills, or slitting my wrists in the bathtub while drinking whiskey and listening to jazz. Cut the crap; these are all too terrifying for me. I don't want to think about extra things. I'm afraid of making decisions. I wish that like someone flipping a switch—snap—my consciousness would just vanish.
The phone screen lit up, showing an incoming call. The number was the landlord.
As I picked up the phone, I thought, I'm already trapped by this damn life, like a quagmire. My life, my body, the house I live in, the city I live in. Even if I'm fed up, I can't escape, because this is the only place I can be, or rather, this is me, so I can't escape; I can only exist right here, right now. Although I'm just lying to myself.
"Hello, student Ye."
"Yes, it's me." I picked up the annoying phone call from the landlord.
"Is something the matter?" I tried to be polite to him.
"Regarding what I told you last time, it would be best if you guys could move out by the end of November, latest I hope you move out before December 15th. Thanks."
"Ah, is that so? December 15th is a bit rushed."
"Yeah, and the rent and electricity you need to pay for this month total 7500 + 944 = 8444. The excess rent will be refunded to you when you move out."
Then he hung up. As for what he was talking about, he said I was complained about by the neighbors, so he hoped I would move out before the lease ended. So I asked him what it was about, and he told me it wasn't convenient to reveal.
I rode my scooter out. Dinner was Sun Dong Bao, the Godfather of Taiwanese Steak, medium rare; to be honest, it wasn't bad. Then I turned left and stopped by the pet shop. At checkout, the lady boss asked enthusiastically if I was raising a hamster or something at home. I said yes. So she grabbed a jelly and said it was a treat for our hamster. I said thanks. After getting home, I took the stuff to the sink, opened the lid of the plastic box, watched the few baby cockroaches crawl into the drain, and prayed for them in my heart, hoping that after I moved away, they could live well here, reproduce healthily and happily, and then they ate the jelly meant for the hamster.
I called Marry and told her about the landlord wanting us to move.
"Marry." After the call connected, I said, "The landlord wants us to move out by the 15th." About five minutes later, Marry called me a piece of trash and hung up. Later I saw she sent a text saying "Let's break up." So Marry and I said bye-bye. Then she asked me to pack her clothes and cosmetics into luggage and mail them to her home in Tainan; she didn't want the rest. I squatted outside the iron gate downstairs smoking one cigarette after another. Unknowingly, I shed a few tears, realizing I really liked Marry, even though her permed hair was ugly and smelly, and she would steal all the blankets in the middle of the night. Later, going upstairs to pack her things, I remembered the half-used lipstick was the Christmas gift I bought for her last year after borrowing 300 dollars.
After packing, it was about early December. I coordinated with the landlord on when to hand over the apartment and transfer the money. I bought a bunch of microwavable food and lay at home for several days in a row. Then I left this place where I had lived for over half an year and moved to a smaller apartment. The old grandmother downstairs in the new house had a very, very old dog. The whole afternoon I was moving, it lay motionless at grandma's feet, and grandma was also motionless. I wondered curiously who would pass away first. I transferred money to the new landlord, and by the time I settled down and got familiar with the surrounding convenience stores and restaurants, December was about over. Spring was coming. I still missed Marry very much, although she never called me again. On Christmas, I bought a new lipstick to send to her, and then after a year, my savings were about to hit rock bottom again.
I still remember that night a year ago. I had just graduated from university for about six months and found a job editing at a film company. I wasn't living with Marry yet, so we came out for a date after work. "Marry," I called her name. Although we were by the MRT station, there was no one here. "Hmm?" She turned to look at me. At that time, she hadn't permed her hair yet; she had shoulder-length black straight hair. Her eyebrows were thick, she didn't wear much makeup, there were some scattered freckles on her face, and the line of her mouth was always flat. She looked a bit rustic. Even so, looking down at her, I still felt my chest tighten; rather, I thought she looked extremely cute like this.
"Ah, although I don't support premarital sex, do you want to go to a hotel to rest for a bit?" I asked her expressionlessly. She squinted at me and said "Okay", then kicked me.
"Haha." I dodged to the side.
"Hey, Marry," I said.
"What, the hotel thing again?"
"No, you are so cute," I said.
"Idiot."
"Really very cute."
"Really?" She turned to look at me again, looking happy.
"Yes."
"Where am I cute?" She beckoned me to sit down.
We sat on a bench on the roadside walkway, under a streetlamp.
"Eyes, eyebrows, nose, mouth," I said.
"Is the hair not cute?"
"Hair is cute too."
"Hmph, liar, the hair must not be cute." She pretended to turn her head away in anger, then immediately turned back to see how I would react.
"Not at all." I looked at her. She seemed to be waiting for me to say something else, but suddenly I didn't know what to say. We were silent for a while. She said, "Hey, let's move out and live together."
"Ah, do you mean it?"
"Of course."
At that time, I lived alone near the company. I had to pay rent and repay student loans every month. By the end of the month, my bank account basically had no money.
"But moving requires a sum of money," I was a little depressed.
"Ah, I'm going to work next month. Let's save together. When we have money, let's move."
"Okay."
Later I asked her about her new job, and then she took the MRT back. Before going back, in that deserted corner, she kissed my`
        }
      },
    ],
  },
  {
    category: {
        cn: '备忘录小说',
        tw: '備忘錄小說',
        en: 'Memo Novel'
    },
    items: [
      {
        id: 'n1',
        title: {
            cn: '牙与尼亞 n1',
            tw: '牙與尼亞 n1',
            en: 'Memo Novel: n1'
        },
        content: {
          cn: `在杜华德还足够年轻的还没长出翅膀和得到光环的时候，他住在布什米尔的一个小村落，一座算得上大的土胚的房子里，跟其他和他看起来一样的小朋友一起，被天使长加米勒管理着。
早上的时候，猪佣人会去督促他们要起床刷牙洗脸，然后两人一组互相进行背部按摩。
每天尼亚都会跑来跟杜华德一组，然后会问杜：
「杜，为什么我们要进行背部按摩？」
杜就会回答她：
「为了找出翅膀，尼亚。」
尼亚随后沉默，隔天早上她又会问杜：
「杜，为什么要背部按摩？」
杜又会回答说：
「找出翅膀，尼亚。」
房子门前有一个根很长的金属旗杆插在地上，上面挂着一面脏兮兮的天使国国旗，本来米白色的底画着一对翅膀和一个光环，现在却被人用黑色的马克笔把光环涂成内嵌六芒星的魔法阵，并在边上落款了撒旦。
于是每年第一次升国旗的时候，天使长加米勒就会告诫大家：
之前那个在上面乱画画的孩子，
长出了羊的犄角，
蝙蝠的翅膀和蜥蜴的尾巴。
他因为做了坏事，
毕业以后，只能去地狱国工作。
尼亚午休的时候喜欢坐在这杆旗杆下，拉杜华德一起吃饭，尼亚有着可爱的虎牙，健康红润的肤色，一头乱糟糟的长发，是个相当可爱的女孩子。有的尼亚，会突然兴奋的摇一下旗杆，然后低呼：「撒旦！」嘴角露出窃窃的微笑，和牙齿的尖角。杜华德只是默默地吃着饭，等他们都吃完的时候，远没到下午的上课时间，尼亚就会把头靠在杜华德的肩膀上，用鼻尖去蹭杜的脖子，杜穿着一身相当干净的衣服，尼亚会说：「杜，我喜欢你身上的味道」，于是这时候，杜华德也能闻到尼亚头发上像是泥土的和树叶的味道，像闷热的夏天雷雨过后，空气里的潮湿味道。有的的时候杜华德转头看她，尼亚就会像小猫一样抬起脸`,
          tw: `在杜華德還足夠年輕的還沒長出翅膀和得到光環的時候，他住在布什米爾的一個小村落，一座算得上大的土胚的房子裡，跟其他和他看起來一樣的小朋友一起，被天使長加米勒管理著。
早上的時候，豬傭人會去督促他們要起床刷牙洗臉，然後兩人一組互相進行背部按摩。
每天尼亞都會跑來跟杜華德一組，然後會問杜：
「杜，為什麼我們要進行背部按摩？」
杜就會回答她：
「為了找出翅膀，尼亞。」
尼亞隨後沈默，隔天早上她又會問杜：
「杜，為什麼要背部按摩？」
杜又會回答說：
「找出翅膀，尼亞。」
房子門前有一個根很長的金屬旗桿插在地上，上面掛著一面髒兮兮的天使國國旗，本來米白色的底畫著一對翅膀和一個光環，現在卻被人用黑色的馬克筆把光環塗成內嵌六芒星的魔法陣，並在邊上落款了撒旦。
於是每年第一次升國旗的時候，天使長加米勒就會告誡大家：
之前那個在上面亂畫畫的孩子，
長出了羊的犄角，
蝙蝠的翅膀和蜥蜴的尾巴。
他因為做了壞事，
畢業以後，只能去地獄國工作。
尼亞午休的時候喜歡坐在這桿旗桿下，拉杜華德一起吃飯，尼亞有著可愛的虎牙，健康紅潤的膚色，一頭亂糟糟的長髮，是個相當可愛的女孩子。有的時候尼亞，會突然興奮的搖一下旗桿，然後低呼：「撒旦！」嘴角露出竊竊的微笑，和牙齒的尖角。杜華德只是默默地吃著飯，等他們都吃完的時候，遠沒到下午的上課時間，尼亞就會把頭靠在杜華德的肩膀上，用鼻尖去蹭杜的脖子，杜穿著一身相當乾淨的衣服，尼亞會說：「杜，我喜歡你身上的味道」，於是這時候，杜華德也能聞到尼亞頭髮上像是泥土的和樹葉的味道，像悶熱的夏天雷雨過後，空氣裡的潮濕味道。有的時候杜華德轉頭看她，尼亞就會像小貓一樣抬起臉`,
          en: `When Du Huade was still young enough that he hadn’t yet grown wings or received a halo, he lived in a small settlement in Bushmill. He lived in a reasonably large adobe house with other children who looked just like him, managed by the Archangel Gamile.
In the mornings, pig servants would urge them to get up, brush their teeth, and wash their faces, and then pair up to give each other back massages.
Every day, Nia would run over to partner with Du Huade, and then she would ask Du:
"Du, why do we have to do back massages?"
Du would answer her:
"To find the wings, Nia."
Nia would then fall silent. The next morning, she would ask Du again:
"Du, why do we need back massages?"
Du would answer again:
"To find the wings, Nia."
In front of the house, a long metal flagpole was stuck in the ground, flying a filthy flag of the Angel Kingdom. Originally, it had an off-white background painted with a pair of wings and a halo, but now someone had used a black marker to color the halo into a magic circle embedded with a hexagram, and signed "Satan" on the side.
And so, every year during the first flag-raising ceremony, Archangel Gamile would warn everyone:
"The child who drew graffiti on it before,
Grew the horns of a goat,
The wings of a bat, and the tail of a lizard.
Because he did bad things,
After graduation, he could only go to work in Hell Country."
During the lunch break, Nia liked to sit under this flagpole and pull Du Huade along to eat. Nia had cute canine teeth, a healthy rosy complexion, and a head of messy long hair; she was a very lovely girl. Sometimes, Nia would suddenly shake the flagpole excitedly and whisper: "Satan!" revealing a secretive smile and the sharp points of her teeth. Du Huade would just eat silently. When they were finished, long before the afternoon classes began, Nia would rest her head on Du Huade’s shoulder and nuzzle Du’s neck with the tip of her nose. Du wore quite clean clothes. Nia would say: "Du, I like the smell of you." At these moments, Du Huade could also smell the scent of soil and leaves in Nia’s hair, like the humid smell in the air after a thunderstorm in a muggy summer. Sometimes when Du Huade turned to look at her, Nia would lift her face like a kitten.`
        }
      },
      {
        id: 'n2',
        title: {
            cn: '牙与尼亞 n2',
            tw: '牙與尼亞 n2',
            en: 'Memo Novel: n2'
        },
        content: {
          cn: `他们的脸靠得很近，杜能数清楚尼亚的上眼睑有几根漂亮的睫毛。于是杜华德就心跳个不停，马上又低头看自己的脚趾头，他的脚趾头就跟其他小朋友的一样，每只脚有五根。
杜华德坐在天堂的酒馆里，手里拿着一只烟，恍惚的回想起这一刻，内心涌起深深的眷恋，这是一个松垮的年代，一如他并不整齐的西装和领带，留给他去回忆的仅剩贫瘠的那么几年的岁月而已，剩下便是几百年如一日天堂般的日子，自由，民主，和谐，法制。
杜说：「法式老烟，先生，你真的需要抽一口，我保证你会爱上他。」
像个推销员一样，他把烟递给对面的老头，穿着像书本上海明威那样的毛衣，背对着钢琴坐着。老头接过烟深吸一口，随着火星迅速的后退，燃着的半截法式香烟干枯成灰白的样子，几欲飘落：
「杜德，」老头说
「这烟真是棒极了。」带着干脆利落的尾音
老头把烟递回去，杜华德用双手接过又不紧不慢的抽了一口：「是的，先生，得有几百年没尝过这样的味道了吧。」
老头瞥了一眼杜华德，闭上眼睛不作声响。
杜华德的烟缓缓地飘成一条雪白的直线，只有风吹过的时候，才会散开，过了许久杜说：
「先生我得走了，明天再来看您。」
随后离开并关上了门。
过了不久，他又开门进来：
「我差点忘了，先生，我有一个可爱极了的朋友，是个女孩，我们以前在那地方一起长大的，下次我带她的相片来给你看吧。」
老头把眼睛藏在眼窝的阴影里，只是缓缓的又望了杜一眼，摆手示意他赶快离开而已。
于是随后杜华德正要关上门离开，老头突然的喊道：「等等」
于是杜半掩着门露出怎么了的神情。
老头说：「我们以前见过吗？」
杜华德笑了笑，说：「没有吧先生。」
老头皱了皱眉头，说：「我门以前见过，你说，下次再见，先生。然后你说，你叫杜德，对吧。」
老头得意的笑了笑：「你看我都想起来了，杜德。」
杜华德站在门外，新雪后的街道在人群一骚动的清晨过后，就变得脏极了，于是有三三两两的警卫背着他们小巧可爱的翅膀打扫着积雪。
他深吸一口街上冷冷的空气，把烟头丢在一边的雪堆里，眼睛垂垂的提不起劲，忍不住又想起尼亚，胸腔的左边酸酸的，他只能把双手插在外套的兜兜里，而后伸手拦下一辆黄澄澄的的士，尽快的离开这里。`,
          tw: `他們的臉靠得很近，杜能數清楚尼亞的上眼瞼有幾根漂亮的睫毛。於是杜華德就心跳個不停，馬上又低頭看自己的腳趾頭，他的腳趾頭就跟其他小朋友的一樣，每隻腳有五根。
杜華德坐在天堂的酒館裡，手裡拿著一隻煙，恍惚的回想起這一刻，內心湧起深深的眷戀，這是一個鬆垮的年代，一如他並不整齊的西裝和領帶，留給他去回憶的僅剩貧瘠的那麼幾年的歲月而已，剩下便是幾百年如一日天堂般的日子，自由，民主，和諧，法制。
杜說：「法式老煙，先生，你真的需要抽一口，我保證你會愛上他。」
像個推銷員一樣，他把煙遞給對面的老頭，穿著像書本上海明威那樣的毛衣，背對著鋼琴坐著。老頭接過煙深吸一口，隨著火星迅速的後退，燃著的半截法式香菸乾枯成灰白的樣子，幾欲飄落：
「杜德，」老頭說
「這煙真是棒極了。」帶著乾脆利落的尾音
老頭把煙遞回去，杜華德用雙手接過又不緊不慢的抽了一口：「是的，先生，得有幾百年沒嚐過這樣的味道了吧。」
老頭瞥了一眼杜華德，閉上眼睛不作聲響。
杜華德的煙緩緩地飄成一條雪白的直線，只有風吹過的時候，才會散開，過了許久杜說：
「先生我得走了，明天再來看您。」
隨後離開並關上了門。
過了不久，他又開門進來：
「我差點忘了，先生，我有一個可愛極了的朋友，是個女孩，我們以前在那地方一起長大的，下次我帶她的相片來給你看吧。」
老頭把眼睛藏在眼窩的陰影裡，只是緩緩的又望了杜一眼，擺手示意他趕快離開而已。
於是隨後杜華德正要關上門離開，老頭突然的喊道：「等等」
於是杜半掩著門露出怎麼了的神情。
老頭說：「我們以前見過嗎？」
杜華德笑了笑，說：「沒有吧先生。」
老頭皺了皺眉頭，說：「我門以前見過，你說，下次再見，先生。然後你說，你叫杜德，對吧。」
老頭得意的笑了笑：「你看我都想起來了，杜德。」
杜華德站在門外，新雪後的街道在人群一騷動的清晨過後，就變得髒極了，於是有三三兩兩的警衛背著他們小巧可愛的翅膀打掃著積雪。
他深吸一口街上冷冷的空氣，把菸頭丟在一邊的雪堆裡，眼睛垂垂的提不起勁，忍不住又想起尼亞，胸腔的左邊酸酸的，他只能把雙手插在外套的兜兜裡，而後伸手攔下一輛黃澄澄的的士，儘快的離開這裡。`,
          en: `Their faces were very close; Du could count exactly how many pretty eyelashes were on Nia’s upper eyelid. Du Huade’s heart would pound incessantly, and he would immediately look down at his own toes. His toes were just like the other children's, five on each foot.
Du Huade sat in a tavern in Heaven, holding a cigarette in his hand, recalling this moment in a trance. A deep nostalgia welled up in his heart. This was a loose, baggy era, much like his unkempt suit and tie. The years left for him to reminisce about were merely those few barren ones; the rest were hundreds of years of days in Heaven that were all the same: freedom, democracy, harmony, and rule of law.
Du said: "Old French tobacco, sir, you really need to take a puff. I guarantee you’ll fall in love with it."
Like a salesman, he handed the cigarette to the old man opposite him, who was wearing a sweater like Hemingway on book covers and sitting with his back to the piano. The old man took the cigarette and inhaled deeply. As the spark retreated rapidly, the burning half of the French cigarette withered into ash, ready to fall.
"Du De," the old man said.
"This cigarette is truly excellent," ending with a crisp tone.
The old man handed the cigarette back. Du Huade took it with both hands and took a leisurely puff: "Yes, sir, it must have been hundreds of years since you tasted a flavor like this."
The old man glanced at Du Huade, closed his eyes, and made no sound.
Du Huade’s smoke slowly drifted into a straight snowy white line; only when the wind blew did it scatter. After a long time, Du said:
"Sir, I have to go. I’ll come to see you again tomorrow."
He then left and closed the door.
Shortly after, he opened the door and came back in:
"I almost forgot, sir. I have an extremely cute friend, a girl. We grew up together in that place. Next time, I’ll bring her photo to show you."
The old man hid his eyes in the shadows of his sockets, merely gazing slowly at Du once more, and waved his hand to motion him to leave quickly.
Then, just as Du Huade was about to close the door and leave, the old man suddenly shouted: "Wait."
So Du held the door half-open, showing an expression of "what is it?"
The old man said: "Have we met before?"
Du Huade smiled and said: "I don't think so, sir."
The old man frowned and said: "We have met before. You said, 'See you next time, sir.' And then you said your name is Du De, right?"
The old man smiled triumphantly: "See, I remembered, Du De."
Du Huade stood outside the door. The streets after the fresh snow had become extremely dirty after the morning commotion of the crowds. Groups of two or three guards were sweeping the accumulated snow, carrying their small, cute wings on their backs.
He took a deep breath of the cold street air, threw the cigarette butt into a snow pile on the side, his eyes drooping and listless. He couldn't help but think of Nia again, and the left side of his chest felt sour. He could only shove his hands into his coat pockets, reach out to hail a bright yellow taxi, and leave this place as quickly as possible.`
        }
      },
      {
        id: 'n3',
        title: {
            cn: '牙与尼亞 n3',
            tw: '牙與尼亞 n3',
            en: 'Memo Novel: n3'
        },
        content: {
          cn: `尼亚睡了，杜华德偷偷的爬到上铺，望着她的脸，「尼亚」他用并不特别小的声音呼唤，「尼亚」，尼亚不满的转了个身，滑落的被子下露出她光洁的脖子、颈部，精致的锁骨和稚嫩的肩，啊，还有纤细的臂膀。杜滞滞的望着尼亚的发梢，不久后便自己又爬下了床。
他穿过密密麻麻长长的走廊，翻过院子门口的栏杆，外面是一片干净的空地，在过年的时候会在这里组织户外的电影放映。
他背对着围墙坐下，拿出早饭没吃完的面包细细地咀嚼，夜里安静得很，只有天上的星星和月亮，发出幽幽的回声，杜开始觉得，内心的沉默和世界的寂静慢慢融为一体。
每当天气开始变冷的时候，他就会很容易的想起尼亚，在吸入的空气变得冷冽的季节，尼亚总是喜欢暖暖的依偎在杜华德的身子里，软绵绵的手散发着热气，眼睛开始变的懒洋洋的，穿起厚厚的毛衣和外套，像一只毛发肥大了一整圈的猫。即使是现在，在相隔尼亚不远的空地边，一如往常安静的晚上，偶尔一些冰冷的风钻进衣服缝隙的时候，他又压倒性的想起尼亚，早晨的尼亚，中午的尼亚，傍晚的尼亚，春天，秋天，夏天，二月一月，十二月，去年，前年的尼亚，她的脸，鼻子上的可爱绒毛，和眼睛深处的暗沉，杜华德觉得悲哀极了，「尼亚」「尼亚」，杜华德对着空无一人处一遍遍重复着她的名字。`,
          tw: `尼亞睡了，杜華德偷偷的爬到上鋪，望著她的臉，「尼亞」他用並不特別小的聲音呼喚，「尼亞」，尼亞不滿的轉了個身，滑落的被子下露出她光潔的脖子、頸部，精緻的鎖骨和稚嫩的肩，啊，還有纖細的臂膀。杜滯滯的望著尼亞的發梢，不久後便自己又爬下了床。
他穿過密密麻麻長長的走廊，翻過院子門口的欄杆，外面是一片乾淨的空地，在過年的時候會在這裡組織戶外的電影放映。
他背對著圍牆坐下，拿出早飯沒吃完的麵包細細地咀嚼，夜裡安靜得很，只有天上的星星和月亮，發出幽幽的回聲，杜開始覺得，內心的沈默和世界的寂靜慢慢融為一體。
每當天氣開始變冷的時候，他就會很容易的想起尼亞，在吸入的空氣變得冷冽的季節，尼亞總是喜歡暖暖的依偎在杜華德的身子裡，軟綿綿的手散發著熱氣，眼睛開始變的懶洋洋的，穿起厚厚的毛衣和外套，像一隻毛髮肥大了一整圈的貓。即使是現在，在相隔尼亞不遠的空地邊，一如往常安靜的晚上，偶爾一些冰冷的風鑽進衣服縫隙的時候，他又壓倒性的想起尼亞，早晨的尼亞，中午的尼亞，傍晚的尼亞，春天，秋天，夏天，二月一月，十二月，去年，前年的尼亞，她的臉，鼻子上的可愛絨毛，和眼睛深處的暗沉，杜華德覺得悲哀極了，「尼亞」「尼亞」，杜華德對著空無一人處一遍遍重複著她的名字。`,
          en: `Nia was asleep. Du Huade secretly climbed onto the upper bunk and looked at her face. "Nia," he called out in a voice that wasn't particularly quiet. "Nia." Nia turned over in dissatisfaction. The slipping quilt revealed her smooth neck, nape, exquisite collarbone, and tender shoulders, ah, and her slender arms. Du gazed sluggishly at the tips of Nia's hair, and after a while, he climbed back down from the bed.
He walked through the dense, long corridors, climbed over the railing at the courtyard gate. Outside was a clean open space where outdoor movie screenings were organized during the New Year.
He sat with his back against the wall, took out the bread he hadn't finished at breakfast, and chewed it carefully. The night was very quiet; only the stars and the moon in the sky emitted a faint echo. Du began to feel that the silence in his heart and the stillness of the world were slowly merging into one.
Whenever the weather started to turn cold, he would easily think of Nia. In the season when the inhaled air became biting, Nia always liked to snuggle warmly into Du Huade’s body. Her soft hands radiated heat, her eyes became lazy, and she wore thick sweaters and coats, looking like a cat whose fur had puffed up a whole size. Even now, sitting by the open space not far from Nia, on a quiet night as usual, when occasionally some icy wind slipped into the gaps of his clothes, he would be overwhelmingly reminded of Nia. Morning Nia, noon Nia, evening Nia. Spring, autumn, summer. February, January, December. Last year’s, the year before last’s Nia. Her face, the cute fuzz on her nose, and the darkness deep in her eyes. Du Huade felt extremely sad. "Nia," "Nia," Du Huade repeated her name over and over again to the empty air.`
        }
      },
      {
        id: 'n4',
        title: {
            cn: '牙与尼亞 n4',
            tw: '牙與尼亞 n4',
            en: 'Memo Novel: n4'
        },
        content: {
          cn: `第二天早上发生了一件很突然的事情。
「我找到了你的翅膀」
尼亚这么说，于是桑田田田立马爬起身，转头看向自己的背，惊讶的说不出话来。
他是一个年纪比尼亚大了不少的男孩，不凑巧，在杜华德因为夜里吃面包感冒了的时候，他跟尼亚分到了一组。在一个黄昏把影子拉得很长的日落里，尼亚曾经这么对他说过「田，我不讨厌你，但你有办法告诉我那是什么意思吗？」
桑田田田背对着夕阳，低着头，他比尼亚高了足够多，即使这样尼亚仍然能在他的影子底下望着他的脸，他的脸紧张不安堕落愤怒且羞愧，是那样的年轻。
「我的意思是，尼亚，你可以像对杜华德一样对我一样好。」
尼亚仍然露出一副，什么意思，田，这样的可爱表情，歪头看着桑。
于是他紧接着解释「我是说，你也可以牵我的手，靠着我，跟我一组，你也可以这样的。」
尼亚看着他笑而不语，桑田田田开始觉得自己的心要裂开碎掉了，阳光照着尼亚的脸庞通红，「田，我们还是朋友对吗，田」
所以当这天早上，桑田田田要求跟尼亚一组的时候，她并没有反对。
桑田田田的背部相当的宽阔，当尼亚坐在他的腰上的时候，有别于杜华德纤细的躯干，有一种坐着一艘小船般的感觉。
于是尼亚坐着，沉默了相当长的一段时间后，嘴巴突然自己说话了：
「田，我们为什么要进行背部按摩？」
连尼亚自己好像也微微被吓了一跳。
桑从一开始就开心极了，尼亚的腿有弹力的跨在他腰的两侧，手在他的背上摩挲，兴奋的止不住眉毛的抖动，使劲屏住呼吸的快乐着，听到她问话后，下意识的回答：
「什么？」
「算了...没什么」
「你说什么？...嗯，抱歉我刚才有点走神」
尼亚开始完全不想搭理他，有点想念起杜华德来，暗自痛恨杜为什么要自己出门吃什么面包，随后又对自己说算了，没关系。
「猪，牛，猫咪」
「你在说什么？」
「飞机，大炮，坦克」
尼亚用毫不搭理桑的势头开始背起中文单词，并看着桑田田趴着的侧脸，疑惑的看着她的目光，爽朗的甜甜的笑，尼亚有的时候觉得自己奇怪极了，但她也知道虽然杜华德总是看起来一本正经，而且什么都不说，跟桑不同。但尼亚确定他也喜欢极了这样奇怪极了的尼亚，所以尼亚总是意外的觉得安心。
后来那天尼亚一不小心找到了桑田田田的翅膀，这吓了她一跳，她跟桑田田说：
「我找到了你的翅膀」`,
          tw: `第二天早上發生了一件很突然的事情。
「我找到了你的翅膀」
尼亞這麼說，於是桑田田田立馬爬起身，轉頭看向自己的背，驚訝的說不出話來。
他是一個年紀比尼亞大了不少的男孩，不湊巧，在杜華德因為夜裡吃麵包感冒了的時候，他跟尼亞分到了一組。在一個黃昏把影子拉得很長的日落裡，尼亞曾經這麼對他說過「田，我不討厭你，但你有辦法告訴我那是什麼意思嗎？」
桑田田田背對著夕陽，低著頭，他比尼亞高了足夠多，即使這樣尼亞仍然能在他的影子底下望著他的臉，他的臉緊張不安墮落憤怒且羞愧，是那樣的年輕。
「我的意思是，尼亞，你可以像對杜華德一樣對我一樣好。」
尼亞仍然露出一副，什麼意思，田，這樣的可愛表情，歪頭看著桑。
於是他緊接著解釋「我是說，你也可以牽我的手，靠著我，跟我一組，你也可以這樣的。」
尼亞看著他笑而不語，桑田田田開始覺得自己的心要裂開碎掉了，陽光照著尼亞的臉龐通紅，「田，我們還是朋友對嗎，田」
所以當這天早上，桑田田田要求跟尼亞一組的時候，她並沒有反對。
桑田田田的背部相當的寬闊，當尼亞坐在他的腰上的時候，有別於杜華德纖細的軀幹，有一種坐著一艘小船般的感覺。
於是尼亞坐著，沈默了相當長的一段時間後，嘴巴突然自己說話了：
「田，我們為什麼要進行背部按摩？」
連尼亞自己好像也微微被嚇了一跳。
桑從一開始就開心極了，尼亞的腿有彈力的跨在他腰的兩側，手在他的背上摩挲，興奮的止不住眉毛的抖動，使勁屏住呼吸的快樂著，聽到她問話後，下意識的回答：
「什麼？」
「算了...沒什麼」
「你說什麼？...嗯，抱歉我剛才有點走神」
尼亞開始完全不想搭理他，有點想念起杜華德來，暗自痛恨杜為什麼要自己出門吃什麼麵包，隨後又對自己說算了，沒關係。
「豬，牛，貓咪」
「你在說什麼？」
「飛機，大砲，坦克」
尼亞用毫不搭理桑的勢頭開始背起中文單詞，並看著桑田田趴著的側臉，疑惑的看著她的目光，爽朗的甜甜的笑，尼亞有的時候覺得自己奇怪極了，但她也知道雖然杜華德總是看起來一本正經，而且什麼都不說，跟桑不同。但尼亞確定他也喜歡極了這樣奇怪極了的尼亞，所以尼亞總是意外的覺得安心。
後來那天尼亞一不小心找到了桑田田田的翅膀，這嚇了她一跳，她跟桑田田說：
「我找到了你的翅膀」`,
          en: `The next morning, something very sudden happened.
"I found your wings."
Nia said this, so Sang Tiantian immediately sat up, turned his head to look at his own back, so surprised he couldn't speak.
He was a boy quite a bit older than Nia. Unfortunately, when Du Huade caught a cold from eating bread at night, he was assigned to Nia’s group. During a sunset where the dusk stretched the shadows very long, Nia had once said to him: "Tian, I don't dislike you, but can you tell me what that means?"
Sang Tiantian stood with his back to the setting sun, head bowed. He was tall enough compared to Nia that even so, Nia could still look at his face from beneath his shadow. His face was nervous, uneasy, depraved, angry, and ashamed; it was so young.
"I mean, Nia, you can treat me as well as you treat Du Huade."
Nia still showed that cute expression of "What do you mean, Tian?", tilting her head to look at Sang.
So he immediately explained, "I mean, you can also hold my hand, lean on me, be in a group with me. You can do that too."
Nia looked at him, smiling but saying nothing. Sang Tiantian began to feel like his heart was going to crack and shatter. The sunlight shone on Nia's face, turning it red. "Tian, we are still friends, right, Tian?"
So when Sang Tiantian asked to be in a group with Nia that morning, she didn't object.
Sang Tiantian’s back was quite broad. When Nia sat on his waist, distinct from Du Huade’s slender torso, it felt like sitting on a small boat.
So Nia sat there, and after remaining silent for quite a long time, her mouth suddenly spoke on its own:
"Tian, why do we have to do back massages?"
Even Nia herself seemed slightly startled.
Sang had been extremely happy from the start. Nia’s legs straddled the sides of his waist with elasticity, her hands rubbed his back; he was so excited his eyebrows couldn't stop twitching, holding his breath in happiness. Upon hearing her question, he answered subconsciously:
"What?"
"Never mind... it's nothing."
"What did you say?... Um, sorry, I zoned out for a bit."
Nia began to not want to pay attention to him at all, missing Du Huade a little, secretly hating Du for going out to eat some bread, then telling herself forget it, it doesn't matter.
"Pig, cow, kitty."
"What are you saying?"
"Airplane, cannon, tank."
Nia started reciting Chinese words with a momentum that completely ignored Sang, watching Sang Tiantian’s prone profile, his gaze looking at her in confusion, and his bright, sweet smile. Nia sometimes felt she was extremely strange, but she also knew that although Du Huade always looked serious and said nothing—unlike Sang—Nia was sure he also liked this extremely strange Nia very much, so Nia always felt unexpectedly reassured.
Later that day, Nia accidentally found Sang Tiantian’s wings. This startled her, and she said to Sang Tiantian:
"I found your wings."`
        }
      },
      {
        id: 'n5',
        title: {
            cn: '牙与尼亞 n5',
            tw: '牙與尼亞 n5',
            en: 'Memo Novel: n5'
        },
        content: {
          cn: `萨拉咪是逐渐的死去的，他缓慢失去记忆的过程持续了几年时间，是一段揪心的日子，对他，尼亚和杜，所有人来说都是。
最一开始是丧失部份的语言组织能力，接着就开始失忆，连肢体动作也慢慢出现了问题。例如，握错叉子的一端，没办法写自己的名字，也忘记了怎么游泳。在他要离开院子办事的时候，猪人管家就会把附近的地图放在大衣的内侧，以防万一。
后来病情恶化了。等到春天的时候，他跟尼亚像往常一样四处散步时候，会时不久地突然问尼亚「啊，你是谁？」，走了一圈又回过头再问一次「啊，你是谁」。再后来就开始整天喃喃自语，不管碰到谁跟他对上眼神的时候，都会战战兢兢的重复「对不起，对不起」，有的人觉得莫名其妙，有的人说「没关系」，于是萨拉咪就开始习惯想要躲开与人的交际似的低头快步行走，也忘了跟尼亚一起散步的习惯。
有一天，萨拉咪去音乐教室跟大家一起录制弦乐四重奏，他在控制室里提出种种修改意见，而每录好一个乐章，杜华德就问他要不要重听一遍时，他都一一拒绝。于是整个录音过程录得很快，大家都很高兴。只是结束的时候，拉威尔问了一句，「这曲子太棒了，谁作的曲？」，尼亚看着笑的极其开心的萨拉咪，不由得十分难过。
最后，拉威尔被带去看了一位顶尖的医生，后者采用了激进的做法。可怜，那位医生打开了他的头颅，十天之后，头上裹着纱布的拉威尔离开了人世。幸运的是萨拉咪死后顺利地上了天堂，失忆的症状在天堂也有所好转，特别是来到一个谁也不认识的地方，让他格外的安心。
「早安，女士们先生们」每天晚上萨拉咪穿着起球的条文羊毛衣打开酒馆的门，尽管已经是夜里了，他仍然会这么调侃道。于是人们便陆陆续续的进来喝酒，在这个靠近天堂北方的地方，人们喝酒几乎都不讲话，把高浓度的液体往杯子里一倒端给客人，他们就会像仓鼠一样嘬着嘴，像捧着暖炉一样捧着酒杯，小口小口地喝。这样工作萨拉咪勉强能够胜任，大概到早上的时候结束营业，打扫完桌椅吧台，便能一直迷迷糊糊的睡到晚上，除了起来吃几次饭。就这样过了一些日子，等到后来杜华德在天堂第一次见他的时候，整个人比死前的憔悴模样好了不少，胖了一圈，看得出来，连胡子也打理的不错。`,
          tw: `薩拉咪是逐漸的死去的，他緩慢失去記憶的過程持續了幾年時間，是一段揪心的日子，對他，尼亞和杜，所有人來說都是。
最一開始是喪失部份的語言組織能力，接著就開始失憶，連肢體動作也慢慢出現了問題。例如，握錯叉子的一端，沒辦法寫自己的名字，也忘記了怎麼游泳。在他要離開院子辦事的時候，豬人管家就會把附近的地圖放在大衣的內側，以防萬一。
後來病情惡化了。等到春天的時候，他跟尼亞像往常一樣四處散步時候，會時不時地突然問尼亞「啊，你是誰？」，走了一圈又回過頭再問一次「啊，你是誰」。再後來就開始整天喃喃自語，不管碰到誰跟他對上眼神的時候，都會戰戰兢兢的重複「對不起，對不起」，有的人覺得莫名其妙，有的人說「沒關係」，於是薩拉咪就開始習慣想要躲開與人的交際似的低頭快步行走，也忘了跟尼亞一起散步的習慣。
有一天，薩拉咪去音樂教室跟大家一起錄制弦樂四重奏，他在控制室里提出種種修改意見，而每錄好一個樂章，杜華德就問他要不要重聽一遍時，他都一一拒絕。於是整個錄音過程錄得很快，大家都很高興。只是結束的時候，拉威爾問了一句，「這曲子太棒了，誰作的曲？」，尼亞看著笑的極其開心的薩拉咪，不由得十分難過。
最後，拉威爾被帶去看了一位頂尖的醫生，後者採用了激進的做法。可憐，那位醫生打開了他的頭顱，十天之後，頭上裹著紗布的拉威爾離開了人世。幸運的是薩拉咪死後順利地上了天堂，失憶的症狀在天堂也有所好轉，特別是來到一個誰也不認識的地方，讓他格外的安心。
「早安，女士們先生們」每天晚上薩拉咪穿著起球的條文羊毛衣打開酒館的門，儘管已經是夜裡了，他仍然會這麼調侃道。於是人們便陸陸續續的進來喝酒，在這個靠近天堂北方的地方，人們喝酒幾乎都不講話，把高濃度的液體往杯子裡一倒端給客人，他們就會像倉鼠一樣嘬著嘴，像捧著暖爐一樣捧著酒杯，小口小口地喝。這樣的工作薩拉咪勉強能夠勝任，大概到早上的時候結束營業，打掃完桌椅吧台，便能一直迷迷糊糊的睡到晚上，除了起來吃幾次飯。就這樣過了好些日子，等到後來杜華德在天堂第一次見他的時候，整個人比死前的憔悴模樣好了不少，胖了一圈，看得出來，連鬍子也打理的不錯。`,
          en: `Salami died gradually. The process of slowly losing his memory lasted for several years; they were heart-wrenching days, for him, for Nia, and for Du—for everyone.
At the very beginning, it was the loss of partial language organization skills, then memory loss began, and even limb movements slowly developed problems. For example, holding the wrong end of a fork, being unable to write his own name, and forgetting how to swim. When he had to leave the courtyard for business, the pig-man butler would put a map of the vicinity inside his coat, just in case.
Later, his condition worsened. By spring, when he and Nia went for walks around the place as usual, he would occasionally ask Nia suddenly, "Ah, who are you?", walk a lap, turn his head, and ask again, "Ah, who are you?". Later still, he began muttering to himself all day long. Whenever he made eye contact with anyone, he would tremblingly repeat, "I'm sorry, I'm sorry." Some people found it baffling, others said "It's okay," so Salami began to habitually lower his head and walk quickly as if trying to avoid social interaction, and he also forgot the habit of walking with Nia.
One day, Salami went to the music classroom to record a string quartet with everyone. In the control room, he offered various suggestions for revision, and every time a movement was recorded, when Du Huade asked him if he wanted to listen to it again, he refused them all one by one. As a result, the whole recording process went very quickly, and everyone was happy. Only at the end, Ravel asked, "This piece is amazing, who composed it?" Nia looked at Salami, who was smiling incredibly happily, and couldn't help but feel very sad.
Finally, Ravel was taken to see a top doctor, who adopted a radical approach. Poor thing, that doctor opened his skull. Ten days later, Ravel, with gauze wrapped around his head, passed away. Fortunately, after Salami died, he successfully went to Heaven. His symptoms of amnesia also improved in Heaven, especially coming to a place where he knew no one, which made him exceptionally relieved.
"Good evening, ladies and gentlemen." Every night, Salami, wearing a pilled striped wool sweater, would open the door of the tavern. Even though it was already night, he would still tease like this. So people would trickle in to drink. In this place near the north of Heaven, people hardly spoke when drinking. He would pour the high-concentration liquid into a glass and serve it to the guests, and they would purse their mouths like hamsters, holding the wine glass like holding a heater, sipping it in small mouthfuls. Salami was barely competent at this job. He would end business around morning, clean the tables, chairs, and bar, and then sleep in a daze until evening, except for getting up a few times to eat. Days passed like this. Later, when Du Huade met him for the first time in Heaven, his whole person looked much better than the haggard look before he died; he had gained weight, and one could see that even his beard was well-groomed.`
        }
      },
      {
        id: 'n6',
        title: {
            cn: '牙与尼亞 n6',
            tw: '牙與尼亞 n6',
            en: 'Memo Novel: n6'
        },
        content: {
          cn: `杜华德在天堂的另一个熟人是桑田田田，他当上天使后，逐渐变得混蛋了起来，这跟尼亚后来又不断的拒绝他并无太大关系，他本该如此。
他跟天堂的第一个女孩子告白交往并睡了之后的半夜，肚子饿得不行，他悄悄地爬起来，独自到楼下的便利店买了微波的黑胡椒鸡腿饭团。那是一个非常偏僻的海边的小镇，他跟女孩一起来这里旅游，半夜的时候，笔直干净左右两排房子都只有两层楼高的街道上，一个都没有，便利店的门口有一只挂着铃铛的橘色小猫咪着眼却站坐着在睡觉。
天上的星星非常的明亮，还有一轮弯弯浅浅的月亮像微笑一样挂在天空，远处传来狗吠的声音，忙碌的人们都睡着了，女孩也睡着了，桑田坐着吃饭团，觉得心里异常的平静，淡淡的想起尼亚，想起一些偷偷喜欢了的女孩子，什么也不想做，什么话也不想说，只想就这样坐着，最好能到永远。
不过，桑过不久就吃完了饭团回去女孩睡觉的二楼民宿了，他们后来又交往了半年左右，桑田田田找了个新女朋友。
在天堂的漫长岁月里，桑也有过很长一段独身的时间，空闲下来的时候就经常找杜华德在路边喝酒，桑田田田见到杜华德的时候会难得做出一些正经的样子跟他说：呦
当然他们并不真的喜欢彼此，桑田田田跟杜说：你知道吗，我喜欢你哪一点。
杜会回他：桑，哪一点。
桑就会得意的说：跟你在一起，就好像只有我一个人在似的，我就喜欢你这一点。
杜说：你只是喜欢一个人罢了，桑。
桑田田田反驳说：才不是呢，这跟一个人的感觉又差了很多。
桑田田田转头看杜华德：你跟尼亚分开很久了吧，没有其他的女人么。
杜的表情并不十分好看：桑，没有。
田田田就露出无奈的神色：好吧，这也是没办法的事情。
而后又露出好像有所追忆的表情：那时候我可羡慕你们了。
杜不说话。
桑又转头说：唉我说，你真的不嫉妒，她找到我的翅膀这件事吗？
杜喝着酒无表情地说：不，桑。不。
杜华德转头看向桑田田田。
田喝了口酒，懒散的说：是嘛，后来是谁帮你找着翅膀的？
杜回过头去不开口。
于是过了一会，田又问：杜，为什么不会嫉妒呢，如果我是你的话一定很不甘心呢。
杜沉默了一会：桑，除了对她的追忆外，我只剩下空荡荡的躯壳罢了，再有多余的东西是很奢侈的。
于是桑田田田开始若有所思，他会这么跟杜华德说：
杜，谁不是呢，我们都是一具具塞满了感情的空壳，只有把他们吐干净了，日子才好过不是吗。
后来桑田田田邀请杜华德下次来他的生日派对，离开的时候桑问他：对了，最近工作好吗？
杜勉强提起精神：还可以，桑。
桑田田田挑了挑眉毛：好的，下次见咯。
后来过不久，桑田田田又开始和别的女人泡在一起，直到生日的时候听说杜华德工作的时候从住宅的顶楼跳了下去摔断了腿，着实吓了一跳。`,
          tw: `杜華德在天堂的另一個熟人是桑田田田，他當上天使後，逐漸變得混蛋了起來，這跟尼亞後來又不斷的拒絕他並無太大關係，他本該如此。
他跟天堂的第一個女孩子告白交往並睡了之後的半夜，肚子餓得不行，他悄悄地爬起來，獨自到樓下的便利店買了微波的黑胡椒雞腿飯糰。那是一個非常偏僻的海邊的小鎮，他跟女孩一起來這裡旅遊，半夜的時候，筆直乾淨左右兩排房子都只有兩層樓高的街道上，一個人都沒有，便利店的門口有一隻掛著鈴鐺的橘色小貓咪著眼卻站坐著在睡覺。
天上的星星非常的明亮，還有一輪彎彎淺淺的月亮像微笑一樣掛在天空，遠處傳來狗吠的聲音，忙碌的人們都睡著了，女孩也睡著了，桑田坐著吃飯糰，覺得心裡異常的平靜，淡淡的想起尼亞，想起一些偷偷喜歡了的女孩子，什麼也不想做，什麼話也不想說，只想就這樣坐著，最好能到永遠。
不過，桑過不久就吃完了飯糰回去女孩睡覺的二樓民宿了，他們後來又交往了半年左右，桑田田田找了個新女朋友。
在天堂的漫長歲月裡，桑也有過很長一段獨身的時間，空閒下來的時候就經常找杜華德在路邊喝酒，桑田田田見到杜華德的時候會難得做出一些正經的樣子跟他說：呦
當然他們並不真的喜歡彼此，桑田田田跟杜說：你知道嗎，我喜歡你哪一點。
杜會回他：桑，哪一點。
桑就會得意的說：跟你在一起，就好像只有我一個人在似的，我就喜歡你這一點。
杜說：你只是喜歡一個人罷了，桑。
桑田田田反駁說：才不是呢，這跟一個人的感覺又差了很多。
桑田田田轉頭看杜華德：你跟尼亞分開很久了吧，沒有其他的女人麼。
杜的表情並不十分好看：桑，沒有。
田田田就露出無奈的神色：好吧，這也是沒辦法的事情。
而後又露出好像有所追憶的表情：那時候我可羨慕你們了。
杜不說話。
桑又轉頭說：唉我說，你真的不嫉妒，她找到我的翅膀這件事嗎？
杜喝著酒無表情地說：不，桑。不。
杜華德轉頭看向桑田田田。
田喝了口酒，懶散的說：是嘛，後來是誰幫你找著翅膀的？
杜回過頭去不開口。
於是過了一會，田又問：杜，為什麼不會嫉妒呢，如果我是你的話一定很不甘心呢。
杜沈默了一會：桑，除了對她的追憶外，我只剩下空蕩蕩的軀殼罷了，再有多餘的東西是很奢侈的。
於是桑田田田開始若有所思，他會這麼跟杜華德說：
杜，誰不是呢，我們都是一具具塞滿了感情的空殼，只有把他們吐乾淨了，日子才好過不是嗎。
後來桑田田田邀請杜華德下次來他的生日派對，離開的時候桑問他：對了，最近工作好嗎？
杜勉強提起精神：還可以，桑。
桑田田田挑了挑眉毛：好的，下次見咯。
後來過不久，桑田田田又開始和別的女人泡在一起，直到生日的時候聽說杜華德工作的時候從住宅的頂樓跳了下去摔斷了腿，著實嚇了一跳。`,
          en: `Du Huade's other acquaintance in Heaven was Sang Tiantian. After becoming an angel, he gradually became a jerk. This didn't have much to do with Nia constantly rejecting him later; he was meant to be this way.
In the middle of the night after he confessed to, dated, and slept with the first girl in Heaven, he was incredibly hungry. He quietly got up and went alone to the convenience store downstairs to buy a microwaved black pepper chicken rice ball. It was a very remote seaside town. He came here to travel with the girl. At midnight, on the straight, clean street where the houses on both sides were only two stories high, there was not a single person. At the entrance of the convenience store, an orange kitten with a bell was squinting but sleeping while sitting up.
The stars in the sky were very bright, and a crescent moon hung in the sky like a smile. The sound of dogs barking came from afar. The busy people were all asleep, and the girl was asleep too. Sang Tiantian sat eating the rice ball, feeling strangely calm in his heart. He faintly thought of Nia, thought of some girls he had secretly liked. He didn't want to do anything, didn't want to say anything, just wanted to sit like this, preferably forever.
However, Sang finished the rice ball before long and went back to the second-floor guesthouse where the girl was sleeping. They dated for about another six months, and then Sang Tiantian found a new girlfriend.
During the long years in Heaven, Sang also had long periods of being single. When he was free, he would often find Du Huade to drink by the roadside. When Sang Tiantian saw Du Huade, he would rarely put on a serious face and say to him: Yo.
Of course, they didn't really like each other. Sang Tiantian said to Du: Do you know what point about you I like?
Du would reply: Sang, what point?
Sang would say smugly: Being with you, it feels like I'm the only one here. I like that point about you.
Du said: You just like being alone, Sang.
Sang Tiantian retorted: Not at all, that feels very different from the feeling of being alone.
Sang Tiantian turned to look at Du Huade: You've been separated from Nia for a long time, haven't you? No other women?
Du's expression was not very good: Sang, no.
Tiantian showed a helpless look: Well, that can't be helped.
Then he showed an expression as if reminiscing: I really envied you guys back then.
Du did not speak.
Sang turned his head again and said: Hey, I say, are you really not jealous about the fact that she found my wings?
Du drank his wine and said expressionlessly: No, Sang. No.
Du Huade turned to look at Sang Tiantian.
Tian took a sip of wine and said lazily: Is that so? Who helped you find your wings later?
Du turned his head back and didn't speak.
So after a while, Tian asked again: Du, why aren't you jealous? If I were you, I would definitely be very unwilling to accept it.
Du was silent for a while: Sang, apart from the memory of her, I only have an empty shell left. Having anything extra is a luxury.
So Sang Tiantian began to look thoughtful. He said to Du Huade:
Du, isn't everyone? We are all empty shells stuffed with emotions. Only when we vomit them all out clean, will life be easier, right?
Later, Sang Tiantian invited Du Huade to his birthday party next time. When leaving, Sang asked him: By the way, how is work recently?
Du barely mustered some spirit: It's okay, Sang.
Sang Tiantian raised his eyebrows: Okay, see you next time.
Not long after, Sang Tiantian started hanging out with other women again, until on his birthday, he heard that Du Huade jumped from the top floor of a residential building while working and broke his leg, which really startled him.`
        }
      },
      {
        id: 'n7',
        title: {
            cn: '牙与尼亞 n7',
            tw: '牙與尼亞 n7',
            en: 'Memo Novel: n7'
        },
        content: {
          cn: `杜曾经也在天堂找了一新女孩，在啦啦啦拐角，他伊住在一个不大的房周里，遏着挺快集的生活，她鲁做挺好吃的饭给他吃，徙不抱怨的帮他打理家务，打扮的时霍穿好看的衣服，跟他一起出去周逛。
浴室的一侧是整面的毛玻璃，有时候杜董德到早上也汝睡着，就童透遇玻璃看到朦朦腻腻的光逐渐充斥着昏暗的房，杜晋惯在遣时候到窗台瞥一眼，天刚要亮的时候如果天氟好的话，天金蓝的非常漂亮，促又深又暗的湛蓝色到暗沉蓝缘灰，再遏渡到幽幽的渗蛋光蓝。每常信时候，杜鲁在心裸想:[今天一定也雪有一调非常，非常漂亮的日出呢。J信疆时候女孩往往是睡着了的，杜萃德想起她的睡脸有的时候童和靓憧中尼亚的檬子重警，也不是她例的长相有什唐相似之虑，倒不如说在信霍时候，忽然的速其中任何一人的碑切长相都记不太的了，便大概是追踵时候房周太遏昏暗的原因，记惊也不能被要求太遇明朗。于是杜常常一个人下楼，置楼下很早明的包子作早餐，走到路口看早起的行人，清漂工，猪人假在十字路口来来去去，早晨的流水重，在那疆格外清澈的清晨的踢光裸，延路散播那湿渭的有消毒味的水的氧息.直等到吃完包子，巧克力和酸菜馅的，就上楼睡鲁有的时候女孩命醒来，一脸你去哪了的表情，杜照蛋高谁被窝，简罩交代下楼吃早餐的事情，女孩胃始述她早晨的萝，杜貌是一谩膘着 逸迷迷糊糊的睡着。
陌生。]杜革德看着沿路景色嘟暖着，随後指了指前面著便利商店的拐角，:T司楼先生，前面那逸右萼，然後那逸停吧]好的]，司楼大哥老练的打着方向整把重拐谁右侧的街道，遣裸下重嘱，客人]，伸手要去掇跳的楼器，他抖了抖被巫在背後雪白的小翅膀，韩身通给杜找的零镂和酸票，杜萃德糟貌的接遏，根司楼甄示意，在路逸下了重。追是侗挺荒凉的小地方，立着一根孤零零的公站牌早晨的新雪刚摄遏，延路堆着酵兮兮的雪堆，杜哆嗦着`,
          tw: `杜曾經也在天堂找了一新女孩，在啦啦啦拐角，他伊住在一個不大的房周裡，遏著挺快集的生活，她魯做挺好吃的飯給他吃，徙不抱怨的幫他打理家務，打扮的時霍穿好看的衣服，跟他一起出去周逛。
浴室的一側是整面的毛玻璃，有時候杜董德到早上也汝睡著，就童透遇玻璃看到朦朦膩膩的光逐漸充斥著昏暗的房，杜晉慣在遣時候到窗台瞥一眼，天剛要亮的時候如果天氟好的話，天金藍的非常漂亮，促又深又暗的湛藍色到暗沉藍緣灰，再遏渡到幽幽的滲蛋光藍。每常信時候，杜魯在心裸想:[今天一定也雪有一調非常，非常漂亮的日出呢。J信疆時候女孩往往是睡著了的，杜萃德想起她的睡臉有的時候童和靚憧中尼亞的檬子重警，也不是她例的長相有什唐相似之慮，倒不如說在信霍時候，忽然的速其中任何一人的碑切長相都記不太的了，便大概是追踵時候房周太遏昏暗的原因，記驚也不能被要求太遇明朗。於是杜常常一個人下樓，置樓下很早明的包子作早餐，走到路口看早起的行人，清漂工，豬人假在十字路口來來去去，早晨的流水重，在那疆格外清澈的清晨的踢光裸，延路散播那濕渭的有消毒味的水的氧息.直等到吃完包子，巧克力和酸菜餡的，就上樓睡魯有的時候女孩命醒來，一臉你去哪了的表情，杜照蛋高誰被窩，簡罩交代下樓吃早餐的事情，女孩胃始述她早晨的蘿，杜貌是一謾膘著 逸迷迷糊糊的睡著。
陌生。]杜革德看著沿路景色嘟暖著，隨後指了指前面著便利商店的拐角，:T司樓先生，前面那逸右萼，然後那逸停吧]好的]，司樓大哥老練的打著方向整把重拐誰右側的街道，遣裸下重囑，客人]，伸手要去掇跳的樓器，他抖了抖被巫在背後雪白的小翅膀，韓身通給杜找的零鏤和酸票，杜萃德糟貌的接遏，根司樓甄示意，在路逸下了重。追是侗挺荒涼的小地方，立著一根孤零零的公站牌早晨的新雪剛攝遏，延路堆著酵兮兮的雪堆，杜哆嗦著`,
          en: `Du had also found a new girl in Heaven. At the La La La corner, he lived in a not-too-large room, living a fairly cheerful life. She would cook quite delicious meals for him, help him with housework without complaint, dress up in nice clothes, and go shopping with him.
One side of the bathroom was a full wall of frosted glass. Sometimes when Du Huade couldn't sleep until morning, he would see the hazy light gradually filling the dim room through the glass. Du was accustomed to glancing at the windowsill at this time. When the sky was just about to brighten, if the weather was good, the sky would be a very beautiful blue, transitioning from a deep, dark azure to a dull blue-green-gray, and then to a faint egg-white blue. Every time this happened, Du would think in his heart: [There will definitely be a very, very beautiful sunrise today.] At this time, the girl was usually asleep. Du Huade thought her sleeping face sometimes overlapped with Nia's appearance in his memory. It wasn't that their looks had any similarities; rather, at this moment, he suddenly couldn't quite remember the exact appearance of either of them clearly. Perhaps it was because the room was too dim at this time; memory shouldn't be required to be too clear. So Du often went downstairs alone, bought early morning steamed buns (baozi) from downstairs as breakfast, walked to the intersection to watch the early risers, cleaners, and pig-men coming and going at the crossroad. In the morning flowing water, in that exceptionally clear morning sunshine, smelling the breath of the damp disinfectant water spread along the road. He waited until he finished eating the buns—chocolate and sauerkraut filling—then went upstairs to sleep. Sometimes the girl would wake up with an expression asking where he had been. Du would crawl into the blanket properly, briefly explain about going downstairs for breakfast. The girl would start telling him about her morning dream, and Du would squint and fall asleep in a daze.
[Stranger.] Du Huade looked at the scenery along the road, muttering. Then he pointed to the corner with the convenience store ahead, [Driver sir, turn right ahead, then stop there.] [Okay]. The driver skillfully turned the steering wheel to turn the car into the street on the right. [Here, getting off, guest]. Reaching out to press the meter, he shook the small snow-white wings tucked behind his back, turned around to give Du the change and receipt. Du Huade accepted it politely, signaled to the driver, and got out of the car on the side of the road. This was a rather desolate small place, with a solitary bus stop sign standing there. Fresh snow from the morning had just passed, and dirty piles of snow were piled along the road. Du shivered...`
        }
      },
      {
        id: 'n8',
        title: {
            cn: '牙与尼亞 n8',
            tw: '牙與尼亞 n8',
            en: 'Memo Novel: n8'
        },
        content: {
          cn: `杜哆嗦着，舒展身体，打量着四周。
「陌生」他又略带失望的说。`,
          tw: `杜哆嗦著，舒展身體，打量著四周。
「陌生」他又略帶失望的說。`,
          en: `Du shivered, stretched his body, and looked around.
"Stranger," he said again with a hint of disappointment.`
        }
      },
      {
        id: 'n9',
        title: {
            cn: '牙与尼亞 n9',
            tw: '牙與尼亞 n9',
            en: 'Memo Novel: n9'
        },
        content: {
          cn: `「唉，我说」
「怎么了」曼德拉懒散的抬起头。
「只是为了想要讲自己想讲的话，我想成为漫画家或者小说家这样好吗。」
「你说想讲的话」他拿着一份今日的报纸，现在除了老人，很少有人会看的读物，在一间体面的咖啡店，对面坐着正和他讲话德桑田田田，他说「具体是指什么？」
桑田田田接着说「因为我这个人，虽然看起来是这个样子，但意外的想很多事情，有的时候，就特别想很认真地讲出来。」
他一手托着腮，眼睛斜斜的看着地板。
「而且你知道，不是说表演性质的那种，我觉得吧，倒也不是说没有可以认真讲话的朋友，只是如果双方没有同步的感受这件事情，就难免会有某种轻浮的倾向。」
「我算是可以理解你的意思」
桑接着讲「是的，这个意思就是说，如果那样的话，好像讲着讲着就不知所云了。如果用小说的办法把自己裂解了，自己跟自己一直讲话，怎么说呢...我总觉得我有这个欲望呢。」
曼德拉缓慢地点头「嗯...在我看来，倒像是生活压力的问题，毕竟这样的感觉其实大家多少也会有，只是有的时候忽略或者压抑，又或者找人倾诉和发泄就能解决了。」
曼德拉又低头去看报纸「怎么，最近还有其他问题吗？」 
桑田田田叹了口气`,
          tw: `「唉，我說」
「怎麼了」曼德拉懶散的抬起頭。
「只是為了想要講自己想講的話，我想成為漫畫家或者小說家這樣好嗎。」
「你說想講的話」他拿著一份今日的報紙，現在除了老人，很少有人會看的讀物，在一間體面的咖啡店，對面坐著正和他講話德桑田田田，他說「具體是指什麼？」
桑田田田接著說「因為我這個人，雖然看起來是這個樣子，但意外的想很多事情，有的時候，就特別想很認真地講出來。」
他一手托著腮，眼睛斜斜的看著地板。
「而且你知道，不是說表演性質的那種，我覺得吧，倒也不是說沒有可以認真講話的朋友，只是如果雙方沒有同步的感受這件事情，就難免會有某種輕浮的傾向。」
「我算是可以理解你的意思」
桑接著講「是的，這個意思就是說，如果那樣的話，好像講著講著就不知所云了。如果用小說的辦法把自己裂解了，自己跟自己一直講話，怎麼說呢...我總覺得我有這個慾望呢。」
曼德拉緩慢地點頭「嗯...在我看來，倒像是生活壓力的問題，畢竟這樣的感覺其實大家多少也會有，只是有的時候忽略或者壓抑，又或者找人傾訴和發洩就能解決了。」
曼德拉又低頭去看報紙「怎麼，最近還有其他問題嗎？」 
桑田田田嘆了口氣`,
          en: `"Hey, I say."
"What is it?" Mandela raised his head lazily.
"Just for the sake of wanting to say what I want to say, would it be good if I became a manga artist or a novelist?"
"You mean what you want to say," he said, holding today's newspaper—reading material that few people other than the elderly read nowadays—sitting in a decent coffee shop opposite Sang Tiantian who was talking to him. He said, "What exactly do you mean?"
Sang Tiantian continued, "Because a person like me, although I look like this, unexpectedly thinks about a lot of things. Sometimes, I just really want to say them out very seriously."
He rested his chin in one hand, looking obliquely at the floor.
"And you know, not the performative kind. I feel like, it's not that I don't have friends I can talk to seriously, it's just that if both sides don't feel the same thing synchronously, it's inevitable that there will be some tendency towards frivolity."
"I think I can understand what you mean."
Sang continued, "Yes, what I mean is, if that happens, it seems like as I speak, I don't know what I'm saying anymore. If I use the method of a novel to fission myself, talking to myself continuously, how should I put it... I just feel I have this desire."
Mandela nodded slowly. "Hmm... in my opinion, it seems more like a problem of life pressure. After all, everyone has feelings like this more or less. It's just that sometimes ignoring or suppressing them, or finding someone to vent and complain to, solves it."
Mandela looked down at the newspaper again. "What, any other problems recently?"
Sang Tiantian sighed.`
        }
      }
    ],
  },
];

export const CONTACT_INFO = {
  name: 'Zhigang Ye',
  location: 'Base London/Hangzhou',
  phones: ['(+86) 18758100197', '(+44) 07940889153'],
  email: '7256028@network.rca.ac.uk',
  instagram: 'Zhigang.x',
};

export const BIO_TIMELINE = [
  { year: '1997', text: 'Born in Wenzhou, China' },
  { year: '2015-2017', text: 'Lived and studied in Hangzhou, studied at Hangzhou No. 2 High School' },
  { year: '2017-2020', text: 'Studied at National Taipei University of the Arts, Taiwan' },
  { year: '2020-2022', text: 'Studied MA in Photography at the Royal College of Art, UK' },
  { year: '2022-2025', text: 'Lived and worked in London/Shanghai/Hangzhou' },
  { year: 'Since 2025', text: 'Studying for a PhD in Soah at the Royal College of Art, UK' },
];

export const EXHIBITIONS = [
  { year: '2025', text: 'Surfaced, Beaconsfield Gallery, London, UK' },
  { year: '2024', text: 'Algorithmic Nature, System, Shanghai, China' },
  { year: '2024', text: 'The Garden of Forking Paths, Martin Goya Business, Hangzhou, China' },
  { year: '2022', text: 'RCA Photography MA 22 Degree Show, RCA Battersea Campus, London, UK' },
  { year: '2022', text: 'Uncertainty Principle, The Ugly Duck, London, UK' },
  { year: '2021', text: 'Third Floor 3rd, RCA, Battersea, London, UK' },
  { year: '2021', text: 'Liminal Space, Safehouse 1, London, UK' },
  { year: '2019', text: 'Reentry, Songshan Cultural and Creative Park, Taipei, Taiwan' },
  { year: '2018', text: 'Marriott Hotel Archive, Cattin Art Space, Taipei, Taiwan | 09/2018' },
  { year: '2017', text: 'Back Street, Underground Art Gallery of Taipei National University of the Arts, Taipei, Taiwan' },
  { year: '2017', text: 'Free Art Fair, Songshan Cultural and Creative Park, Taipei, Taiwan' },
];

export const TEXT_ENTRIES: TextEntry[] = TEXT_SECTIONS.flatMap(section => 
  section.items.map(item => ({
    ...item,
    publication: 'Collection', 
    date: '2023'
  }))
);
