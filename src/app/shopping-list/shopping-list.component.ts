import { Component, OnInit } from '@angular/core';
import { AppService, Product } from '../app.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  products: Product[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProducts().subscribe(
      (products) => {
        console.log(products);
        this.products = products;
    });
  }

}
