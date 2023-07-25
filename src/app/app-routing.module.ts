import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';
import { AddOrUpdateOrderComponent } from './add-or-update-order/add-or-update-order.component';
import { CurrentOrdersComponent } from './current-orders/current-orders.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/completed-orders', pathMatch: 'full' },
  { path: 'completed-orders', component: CompletedOrdersComponent },
  { path: 'current-orders', component: CurrentOrdersComponent },
  { path: 'add-or-update-order', component: AddOrUpdateOrderComponent },
  { path: 'add-or-update-order/:id', component: AddOrUpdateOrderComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
