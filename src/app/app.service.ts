import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    img_url: string
}

@Injectable({providedIn:'root'})
export class AppService {

    constructor(private httpClient: HttpClient) {}
    
    getProducts() : Observable<Product[]> {
        return this.httpClient.get<Product[]>('https://api.myjson.com/bins/1chtic');
    }
}