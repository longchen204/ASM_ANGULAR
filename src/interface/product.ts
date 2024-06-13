export interface Tproduct {
  name: string;
  image: string;
  price: number;
  star: number;
  id?: string;
  category?: string;
}
export type IProductLite = Pick<Tproduct, 'name' | 'image' | 'price'>;
