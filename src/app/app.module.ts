import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

/************************* COMPONENTS ************************************** */
import { OpcionesComponent } from './opciones/opciones.component';
import { LoginAtmComponent } from './login-atm/login-atm.component';
import { CantidadDepositoComponent } from './cantidad-deposito/cantidad-deposito.component';
import { ConTarjetaComponent } from './con-tarjeta/con-tarjeta.component';
import { ConfirmacionDepositoComponent } from './confirmacion-deposito/confirmacion-deposito.component';
import { ConfirmacionRetirosComponent } from './confirmacion-retiros/confirmacion-retiros.component';
import { ConsultarSaldoComponent } from './consultar-saldo/consultar-saldo.component';
import { DepositosComponent } from './depositos/depositos.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RetirosComponent } from './retiros/retiros.component';
import { SinTarjetaComponent } from './sin-tarjeta/sin-tarjeta.component';
import { DepositoExitosoComponent } from './transaccion-exitosa/deposito-exitoso/deposito-exitoso.component';
import { RetiroExitosoComponent } from './transaccion-exitosa/retiro-exitoso/retiro-exitoso.component';
import { DepositoFallidoComponent } from './transaccion-fallida/deposito-fallido/deposito-fallido.component';
import { RetiroFallidoComponent } from './transaccion-fallida/retiro-fallido/retiro-fallido.component';



@NgModule({
  declarations: [
    AppComponent,
    OpcionesComponent,
    LoginAtmComponent,
    CantidadDepositoComponent,
    ConTarjetaComponent,
    ConfirmacionDepositoComponent,
    ConfirmacionRetirosComponent,
    ConsultarSaldoComponent,
    DepositosComponent,
    RegistrarseComponent,
    RetirosComponent,
    SinTarjetaComponent,
    DepositoExitosoComponent,
    RetiroExitosoComponent,
    DepositoFallidoComponent,
    RetiroFallidoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
