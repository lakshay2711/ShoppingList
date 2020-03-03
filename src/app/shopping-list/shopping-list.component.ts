import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { AppService, Product } from '../app.service';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit,OnChanges {
  
  products: Product[];
  @Input() item: string;
  @Output() onCart = new EventEmitter<Product>();
  sort: string = "ASC";

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProducts().subscribe(
      (products) => {
        console.log(products);
        this.products = products;
    });

    console.log('item+++' +this.item);
  }

  ngOnChanges() {
    if(this.item) {
      this.appService.getProducts().subscribe(
        (products) => {
          this.products = products.filter(el => el.name.toLocaleLowerCase().includes(this.item.toLocaleLowerCase()));
      });
    }
  }

  addToCart(product:Product) {
    this.onCart.emit(product);
  }

  sortProducts() {
    if(SORT.asc === this.sort) {
      this.sort = "DSC";
      this.appService.getProducts().subscribe((products) => {
        if(products) {
          this.products = products.sort((a,b) => {
            return b.id - a.id;
          });
            console.log(this.products);
          }
      });
    }
    else {
      this.sort = "ASC";
      this.appService.getProducts().subscribe((products) => {
        if(products) {
          this.products = products.sort((a,b) => {
            return a.id - b.id;
          });
          console.log(this.products);
        }
    });
    }
  }

}

enum SORT {
  asc = 'ASC',
  dsc = 'DSC',

}
