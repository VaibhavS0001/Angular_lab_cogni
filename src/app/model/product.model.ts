export enum category {
  clothing = 'clothing',
  grocery = 'grocery',
  decor = 'decor',
  electronics = 'electronics',
}

export interface Product {
  id: number;
  name: string;
  price: number;
  category: category;
  rating: number;
  image: string;
}
