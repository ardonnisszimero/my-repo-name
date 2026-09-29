import { Component, Host, Optional } from "@angular/core";
import { Product } from "../product";
import { ProductsService } from "../products.service";
import { CommonModule } from "@angular/common";
import { FavoritesService } from "./favorites.service";
import { favoritesFactory } from "./favorites";
import { ProductViewService } from "../product-view/product-view.service";

@Component({
  selector: "app-favorites",
  imports: [CommonModule],
  templateUrl: "./favorites.component.html",
  styleUrl: "./favorites.component.css",
  providers: [
    {
      provide: ProductsService,
      useFactory: favoritesFactory(true),
    },
  ],
})
export class FavoritesComponent {
  products: Product[] = [];
  constructor(@Host() private productService: ProductsService) {
    this.products = productService.getProducts();
  }
}
