import type { User } from '@/modules/auth/interfaces/user.interface';

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: string;
  tags: string[];
  images: string[];
  user: User;
}

export enum Size {
  L = 'L',
  M = 'M',
  S = 'S',
  XL = 'XL',
  Xs = 'XS',
  Xxl = 'XXL',
}

export enum Tag {
  Hats = 'hats',
  Hoodie = 'hoodie',
  Shirt = 'shirt',
}
