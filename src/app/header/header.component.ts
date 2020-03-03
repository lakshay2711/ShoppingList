import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { Product } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {

  item: string = "";
  count: number = 0;
  prods: Product[] = [];
  @Input() product : Product;
  @Output() emitItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.product) {
      this.prods.push(this.product);
      this.count = this.prods.length;
    }
  }

  fetchItem(event) {
    console.log(event.target.value);
    this.emitItem.emit(event.target.value);
  }

}
