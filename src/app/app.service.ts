import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

export interface Product {
    id: number,
    name: string,
    price: number,
    category: string,
    img_url: string,
    totalPrice?: number,
    discount: number
}

@Injectable({providedIn:'root'})
export class AppService {

    constructor(private httpClient: HttpClient) {}
    
    getProducts() : Observable<Product[]> {
        return this.httpClient.get<Product[]>('https://api.myjson.com/bins/1chtic')
        .pipe(map((response: Product[]) => {
            for (const i in response) {
                response[i].totalPrice = Math.floor(+response[i].price + (+response[i].price * (+response[i].discount/100)));
            }
            return response;
        }));
    }
}