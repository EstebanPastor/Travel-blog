export interface routeProps {
  route: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface buttonProps {
  text: string;
  aria: string;
  onClick: () => void;
}

export interface TagProps {
  text: string[];
}

export interface searchParamsTypes {
  id: string;
  title: string;
  image_path: string;
  paragraph: string;
  featured: boolean;
  topPost: boolean;
  tags: string[];
  authorImage: string;
  authorName: string;
  publishDate: string;
}
