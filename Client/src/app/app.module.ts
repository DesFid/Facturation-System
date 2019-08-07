import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './client/clients/clients.component';
import { SaleOrdersComponent } from './client/sale-orders/sale-orders.component';
import { OrderComponent } from './client/order/order.component';
import { ProvidersComponent } from './provider/providers/providers.component';
import { ProvOrdersComponent } from './provider/prov-orders/prov-orders.component';
import { DeliveryNotesComponent } from './provider/delivery-notes/delivery-notes.component';
import { ReclamationsComponent } from './provider/reclamations/reclamations.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    SaleOrdersComponent,
    OrderComponent,
    ProvidersComponent,
    ProvOrdersComponent,
    DeliveryNotesComponent,
    ReclamationsComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
