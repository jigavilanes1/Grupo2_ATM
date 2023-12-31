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
import { DepositosConTarjetaComponent } from './depositos/depositos-con-tarjeta/depositos-con-tarjeta.component';
import { DepositosSinTarjetaComponent } from './depositos/depositos-sin-tarjeta/depositos-sin-tarjeta.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RetiroConTarjetaComponent } from './retiros/retiro-con-tarjeta/retiro-con-tarjeta.component';
import { RetiroSinTarjetaComponent } from './retiros/retiro-sin-tarjeta/retiro-sin-tarjeta.component';
import { SinTarjetaComponent } from './sin-tarjeta/sin-tarjeta.component';
import { DepositoExitosoComponent } from './transaccion-exitosa/deposito-exitoso/deposito-exitoso.component';
import { RetiroExitosoComponent } from './transaccion-exitosa/retiro-exitoso/retiro-exitoso.component';
import { DepositoFallidoComponent } from './transaccion-fallida/deposito-fallido/deposito-fallido.component';
import { RetiroFallidoComponent } from './transaccion-fallida/retiro-fallido/retiro-fallido.component';
import { ValorDepositoConTComponent } from './valores/valor-deposito-con-t/valor-deposito-con-t.component';
import { ValorDepositoSinTComponent } from './valores/valor-deposito-sin-t/valor-deposito-sin-t.component';
import { ValorRetiroConTComponent } from './valores/valor-retiro-con-t/valor-retiro-con-t.component';
import { ValorRetiroSinTComponent } from './valores/valor-retiro-sin-t/valor-retiro-sin-t.component';

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'loginAtm', component: LoginAtmComponent},
  { path: 'cantidadDeposito', component: CantidadDepositoComponent},
  { path: 'conTarjeta', component: ConTarjetaComponent},
  { path: 'confirmacionDeposito', component: ConfirmacionDepositoComponent},
  { path: 'confirmacionRetiro', component: ConfirmacionRetirosComponent},
  { path: 'consultarSaldo', component: ConsultarSaldoComponent},
  { path: 'depositosConTarjeta', component: DepositosConTarjetaComponent},
  { path: 'depositosSinTarjeta', component: DepositosSinTarjetaComponent},
  { path: 'registrarse', component: RegistrarseComponent},
  { path: 'retirosConTarjeta', component: RetiroConTarjetaComponent},
  { path: 'retirosSinTarjeta', component: RetiroSinTarjetaComponent},
  { path: 'sinTarjeta', component:  SinTarjetaComponent},
  { path: 'depositoExitoso', component: DepositoExitosoComponent},
  { path: 'retiroExitoso', component: RetiroExitosoComponent},
  { path: 'depositoFallido', component: DepositoFallidoComponent},
  { path: 'retiroFallido', component: RetiroFallidoComponent},
  { path: 'valorDepositoCT', component: ValorDepositoConTComponent},
  { path: 'valorDepositoST', component: ValorDepositoSinTComponent},
  { path: 'valorRetiroCT', component: ValorRetiroConTComponent},
  { path: 'valorRetiroST', component: ValorRetiroSinTComponent}
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
