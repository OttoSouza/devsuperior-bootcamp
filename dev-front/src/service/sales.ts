import { Seller } from "./seller";

export type Sale = {
  id: number;
  visited: string;
  deals: string;
  amount: number;
  date: string;
  seller: Seller;
};

export type SalePage = {
  content?: Sale[];
  last: boolean,
  totalPages: number,
  totalElements: number,
  number: number,
  numberOfElements?: number,
  size?: number,
  empty?: boolean
  first: boolean;
}

export type SaleSum = {
  sellerName: string;
  sum: number;
};

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
};
