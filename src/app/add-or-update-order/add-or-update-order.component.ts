import { Component } from '@angular/core';
import { OrderService } from '../service/order.service';
import { Order } from '../models/order';
import { MenuItemService } from '../service/menu-item.service';
import { MenuItem } from '../models/menuItem';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MENU_ITEMS } from '../data/validMenuItems';

@Component({
  selector: 'app-add-or-update-order',
  templateUrl: './add-or-update-order.component.html',
  styleUrls: ['./add-or-update-order.component.css']
})
export class AddOrUpdateOrderComponent {
  orders: Order[];

  private menuItems: MenuItem[];

  public total: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private menuItemService: MenuItemService, 
    private orderService: OrderService, 
    private formBuilder: FormBuilder) {

    this.orders = [new Order('', new MenuItemService())];
    this.menuItems = menuItemService.getAll();
  }

  // Formタグ
  formGroup: FormGroup = new FormGroup({});

  ngOnInit(): void {
    // 顧客名のForm値を初期化
    const customerInfoGroup = this.formBuilder.group({
      customerName: ''
    });

  this.route.params.subscribe((params) => {
      const id: number = Number(params['id']);
      const order: Order = this.orderService.get(id);
      if (order !== undefined && order.customerName != '') {
        this.orders = [];
        this.orders.push(order);
        customerInfoGroup.get('customerName')?.setValue(order.customerName);
      }
    });

    // Form Groupの初期値設定
    this.formGroup = this.formBuilder.group({
      customerInfo: customerInfoGroup,
      orderInfo: this.formBuilder.array([])
    });

    // Formタグのメニュー項目の個数設定
    MENU_ITEMS.forEach(menu => {
      const itemGroup = this.formBuilder.group({
        items: 0
      });

      this.getOrderInfo().push(itemGroup);
    });
  }

  /**
   * formGroupで定義した'orderInfo'のインスタンスを返す
   * 
   * @returns 'orderInfo'のFormArray
   */
  getOrderInfo(): FormArray {
    return this.formGroup.get('orderInfo') as FormArray;
  }

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }

  /**
   * 注文を行う
   */
  onSubmit(): void {
    console.warn('test', this.formGroup.value);
  }

  /**
   * 個数の入力時に合計金額を反映する
   * 
   * @param event change event
   */
  onChange(event: any): void {
    this.total = 0;
    this.getOrderInfo().getRawValue().forEach((item, index) => {
      this.total += MENU_ITEMS[index].price * parseFloat(item.items);
    });
  }

}
