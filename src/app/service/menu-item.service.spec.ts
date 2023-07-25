import { TestBed } from '@angular/core/testing';

import { MenuItemService } from './menu-item.service';
import { MenuItem } from '../models/menuItem';

describe('MenuItemService', () => {
  let service: MenuItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('正常系: getメソッド', () => {
    const expectValue: MenuItem = {
      name: "Coffee",
      imageUrl: "img",
      price: 2.00
    };

    expect(service.get(0)).toEqual(expectValue);
  });

  it('異常系: getメソッド境界値', () => {
    const expectValue: MenuItem = {
      name: '',
      imageUrl: '',
      price: 0
    };

    expect(service.get(-1)).toEqual(expectValue);
    expect(service.get(4)).toEqual(expectValue);
  });

  it('正常系: getAllメソッド', () => {
    const expectValue: MenuItem[] = [
      {
          name: "Coffee",
          imageUrl: "img",
          price: 2.00
      },
      {
          name: "Cake",
          imageUrl: "img",
          price: 3.75
      },
      {
          name: "Tea",
          imageUrl: "img",
          price: 2.00
      },
      {
          name: "Smoothie",
          imageUrl: "img",
          price: 3.50
      },
    ];

    expect(service.getAll()).toEqual(expectValue);
  });
});
