import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
import { NavbarComponent } from './navbar/navbar.component';

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
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
