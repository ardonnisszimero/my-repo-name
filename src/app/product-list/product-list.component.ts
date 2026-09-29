import {
  Component,
  AfterViewInit,
  viewChild,
  OnInit,
  inject,
} from "@angular/core";
import { Product } from "../product";
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { SortPipe } from "../sort.pipe";
import { ProductsService } from "../products.service";
import { FavoritesComponent } from "../favorites/favorites.component";
import { ProductViewComponent } from "../product-view/product-view.component";

@Component({
  selector: "app-product-list",
  imports: [
    ProductDetailsComponent,
    SortPipe,
    FavoritesComponent,
    ProductViewComponent,
  ],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.css",
  providers: [ProductsService],
})
export class ProductListComponent implements AfterViewInit, OnInit {
  private babyName: string = "Syel";
  public products: Product[] = [];

  private productService: ProductsService = inject(ProductsService);

  // constructor(private readonly productService: ProductsService) {}  --constructor injection

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  ngAfterViewInit(): void {
    console.log(this.productDetailC()!.product);
  }

  onAdded(product: Product): void {
    alert(`${product.title} was added to the cart.`);
  }

  selectedProduct: Product | undefined = this.products[0];

  productDetailC = viewChild(ProductDetailsComponent);
}
