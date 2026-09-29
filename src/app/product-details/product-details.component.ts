import {
  Component,
  input,
  output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy,
  DestroyRef,
  OnChanges,
  SimpleChanges,
  SimpleChange,
} from "@angular/core";
import { Product } from "../product";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-details",
  imports: [CommonModule],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.css",
  // encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit, OnDestroy, OnChanges {
  ngOnInit(): void {
    console.log("Product-OnInit", this.product());
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    const productChange: SimpleChange = changes["product"];
    if (!productChange.firstChange) {
      let previousValue: Product = productChange.previousValue;
      let currentValue: Product = productChange.currentValue;
      console.log("old value", previousValue);
      console.log("current value", currentValue);
    }
  }

  constructor(destroyRef: DestroyRef) {
    console.log("Product-Constructor", this.product());
    destroyRef.onDestroy(() => {});
  }
  product = input<Product>();
  //product = input.required<Product>();
  added = output<Product>();

  addToCart() {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }
}
