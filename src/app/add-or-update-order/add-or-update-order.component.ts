import { Component, OnInit } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order';
import { MenuItemService } from '../service/menu-item.service';
import { MenuItem } from '../models/menuItem';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-or-update-order',
  templateUrl: './add-or-update-order.component.html',
  styleUrls: ['./add-or-update-order.component.css']
})
export class AddOrUpdateOrderComponent {
  orders: Order[];

  private menuItems: MenuItem[];

  constructor(private route: ActivatedRoute, private menuItemService: MenuItemService, private orderService: OrderService) {
    this.orders = [new Order('', new MenuItemService())];
    this.menuItems = menuItemService.getAll();

  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id: number = Number(params['id']);
      const order: Order = this.orderService.get(id);
      if (order.customerName != '') {
        this.orders = [];
        this.orders.push(order);
      }
    });
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

}
