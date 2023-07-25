import { MenuItemService } from "../service/menu-item.service";

export class Order {
    /** 顧客の名前 */
    customerName: string;
    /** 商品の個数 */
    menuItems: number[];
    /** 注文更新 時 */
    hours: number;
    /** 注文更新 分 */
    minutes: number;
    /** 注文更新 秒 */
    seconds: number;

    isCompleted: boolean;
    
    constructor(customerName: string, private menuItemService: MenuItemService) {
        this.customerName = customerName;
        this.isCompleted = false;
        const now: Date = new Date();
        this.hours = now.getHours();
        this.minutes = now.getMinutes();
        this.seconds = now.getSeconds();
        this.menuItems = [];
        menuItemService.getAll().forEach(element => {
            this.menuItems.push(0);
        });
    }

    /**
     * isCompletedをtrueに変更する.
     */
    setCompleted = (): void => {
        this.isCompleted = true;
    }

    /**
     * インデックスの要素の商品数をインクリメントする.
     * @param index 
     * @returns 
     */
    addItem = (index: number): void => {
        if (index < 0 || this.menuItems.length <= index) {
            return;
        }

        this.menuItems[index] += 1;
    }

    /**
     * インデックスの要素の商品数をデクリメントする.
     * @param index 
     * @returns 
     */
    removeItem = (index: number): void => {
        if (index < 0 || this.menuItems.length <= index) {
            return;
        }

        if (this.menuItems[index] <= 0) {
            return;
        }

        this.menuItems[index] -= 1;
    }

    /**
     * 更新時刻を設定する.
     */
    updateTime = (): void => {
        this.hours = Date.prototype.getHours();
        this.minutes = Date.prototype.getMinutes();
        this.seconds = Date.prototype.getSeconds();
    }


}