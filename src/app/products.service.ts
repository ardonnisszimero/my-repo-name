import { Injectable } from "@angular/core";
import { Product } from "./product";

@Injectable()
export class ProductsService {
  constructor() {}

  getProducts(): Product[] {
    return [
      {
        id: 1,
        title: "Keyboard",
        price: 350,
        categories: { 1: "Periperhals", 2: "Computing" },
      },
      {
        id: 2,
        title: "Microphone",
        price: 150,
        categories: { 1: "Periperhals", 2: "Multimedia" },
      },
      {
        id: 3,
        title: "Web camera",
        price: 50,
        categories: { 1: "Periperhals", 2: "Multimedia" },
      },
      {
        id: 4,
        title: "Tablet",
        price: 300,
        categories: { 1: "Entertainment" },
      },
    ];
  }
}
