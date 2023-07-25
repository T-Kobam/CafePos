import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { MenuItemService } from './menu-item.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Order[];

  constructor() {
    this.orders = [new Order("TEST", new MenuItemService())];
  }

  /**
   * インデックスを受け取り、注文を取得する.
   * @param index 
   * @returns Order
   */
  get = (index: number): Order => {
    if (index < 0 || this.orders.length <= index) {
      return new Order("", new MenuItemService());
    }

    return this.orders[index];
  }

  /**
   * 有効な注文を全て取得する.
   */
  getAll = (): Order[] => {
    return this.orders;
  }

  // getAllCurrent = (): Order[] => {

  // }

  /**
   * 完了した全ての注文を取得する.
   * @returns Order[]
   */
  getAllCompleted = (): Order[] => {
    return this.orders.filter(o => o.isCompleted);
  }

  /**
   * 新しい注文オブジェクトを作成し、それを注文の配列にプッシュして、その参照を返す.
   * @param customerName 顧客名
   * @returns Order[]
   */
  create = (customerName: string): Order[] => {
    this.orders.push(new Order(customerName, new MenuItemService()));
    return this.orders;
  }
}
