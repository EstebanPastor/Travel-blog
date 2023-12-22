import { User } from "@prisma/client";

export interface PostTypes {
  id: string;
  title: string;
  image: string;
  desc: string;
  featured: boolean;
  topPost: boolean;
  category: string;
  authorImage: string;
  publishDate: string;
  createdAt: string;
  user: User;
}
