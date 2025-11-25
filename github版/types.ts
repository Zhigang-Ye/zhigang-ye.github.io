
export type ViewState = 'HOME' | 'PORTFOLIO' | 'TEXT' | 'BIOGRAPHY';

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  imageUrl: string;
}

export interface NavItem {
  label: string;
  view: ViewState;
}

export type TextCategory = 'Short Stories' | 'Memo Novels' | 'Essays' | 'Diaries';

export type MultiLangString = {
  cn: string;
  tw: string;
  en: string;
};

export interface TextEntry {
  id: string;
  title: MultiLangString;
  date?: string;
  publication?: string;
  // Content is now an object storing versions
  content: MultiLangString;
  link?: string;
}

export interface TextSection {
  category: MultiLangString; // Display name
  items: TextEntry[];
}
