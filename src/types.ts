export interface StyleSizes {
  [index: string]: any;
  xs?: string;
  s?: string;
  m?: string;
  l?: string;
  xl?: string;
}

export interface Listing {
  category: string;
  name: string;
  image: string;
  imageFull?: string;
  url: string;
  darkText?: boolean;
  description?: string;
  greatFor?: string[];
}
