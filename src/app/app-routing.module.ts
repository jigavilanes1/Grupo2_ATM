import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

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

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'loginAtm', component: LoginAtmComponent},
  { path: 'cantidadDeposito', component: CantidadDepositoComponent},
  { path: 'conTarjeta', component: ConTarjetaComponent},
  { path: 'caonfirmacionDeposito', component: ConfirmacionDepositoComponent},
  { path: 'confirmacionRetiro', component: ConfirmacionRetirosComponent},
  { path: 'consultarSaldo', component: ConsultarSaldoComponent},
  { path: 'depositos', component: DepositosComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'retiros', component: RetirosComponent},
  { path: 'sinTarjeta', component:  SinTarjetaComponent},
  { path: 'depositoExitoso', component: DepositoExitosoComponent},
  { path: 'retiroExitoso', component: RetiroExitosoComponent},
  { path: 'depositoFallido', component: DepositoFallidoComponent},
  { path: 'retiroFallido', component: RetiroFallidoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
