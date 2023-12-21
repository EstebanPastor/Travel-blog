import { FormEvent, ReactNode } from "react";

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
  action?: boolean;
  type?: "button" | "submit" | "reset";
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

export interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: (E: FormEvent<HTMLFormElement>) => void;
}

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
}
