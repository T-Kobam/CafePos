import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menuItem';
import { MENU_ITEMS } from '../data/validMenuItems';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  /**
   * インデックスにあるメニュー項目を取得する
   * @param index 
   * @returns MenuItem
   */
  get = (index: number): MenuItem => {
    if (index < 0 || MENU_ITEMS.length <= index) {
      return {name: "", imageUrl: "", price: 0};
    }
    
    return MENU_ITEMS[index]
  };

  /**
   * メニュー項目を全て取得する
   * @returns MenuItem[]
   */
  getAll = (): MenuItem[] => {
    return MENU_ITEMS;
  }
}
