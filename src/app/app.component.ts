import { Component } from '@angular/core';
import { Product } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-list';
  item: string;
  product: Product;

  fetchItem(event) {
    this.item = event;
  }

  addToCart(event) {
    this.product = event;
  }
}
