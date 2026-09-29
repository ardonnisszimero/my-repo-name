import { Component, AfterViewInit, viewChild } from "@angular/core";
import { Product } from "../product";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SortPipe } from "../sort.pipe";

@Component({
  selector: "app-product-list",
  imports: [ProductDetailsComponent, SortPipe],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
})
export class ProductListComponent implements AfterViewInit {
  babyName: string = "Syel";

  ngAfterViewInit(): void {
    console.log(this.productDetailC()!.product);
  }

  products: Product[] = [
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
    { id: 4, title: "Tablet", price: 300, categories: { 1: "Entertainment" } },
  ];

  onAdded(product: Product): void {
    alert(`${product.title} was added to the cart.`);
  }

  selectedProduct: Product | undefined = this.products[0];

  productDetailC = viewChild(ProductDetailsComponent);
}
