export interface ProductApi {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export interface ProductsApiResponse {
  products: ProductApi[];
  total: number;
  skip: number;
}
