// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from './client/clients/clients.component';
import {OrderComponent} from './client/order/order.component';

const routes: Routes = [
  {path: '', component: ClientsComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'order', component: OrderComponent}
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
