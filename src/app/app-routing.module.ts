import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';

/************************* COMPONENTS ************************************** */
import { OpcionesComponent } from './opciones/opciones.component';
import { LoginAtmComponent } from './login-atm/login-atm.component';
import { CantidadDepositoContComponent } from './cantidad-deposito/cantidad-deposito-cont/cantidad-deposito-cont.component';
import { CantidadDepositoSintComponent } from './cantidad-deposito/cantidad-deposito-sint/cantidad-deposito-sint.component';
import { ConTarjetaComponent } from './con-tarjeta/con-tarjeta.component';
import { ConfirmacionDepositoConTComponent } from './confirmacion-deposito/confirmacion-deposito-con-t/confirmacion-deposito-con-t.component';
import { ConfirmacionDepositoSinTComponent } from './confirmacion-deposito/confirmacion-deposito-sin-t/confirmacion-deposito-sin-t.component';
import { ConfirmacionRetiroSinTComponent } from './confirmacion-retiros/confirmacion-retiro-sin-t/confirmacion-retiro-sin-t.component';
import { ConfirmacionRetiroConTComponent } from './confirmacion-retiros/confirmacion-retiro-con-t/confirmacion-retiro-con-t.component';
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
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { ValorRetiroConTComponent } from './valores/valor-retiro-con-t/valor-retiro-con-t.component';
import { FueraServicioComponent } from './fuera-servicio/fuera-servicio.component';
import { ValorRetiroSinTComponent } from './valores/valor-retiro-sin-t/valor-retiro-sin-t.component';
import { FaltaTarjetaComponent } from './falta-tarjeta/falta-tarjeta.component';

const routes: Routes = [
  
  { path: '', component: OpcionesComponent},
  { path: 'loginAtm', component: LoginAtmComponent},
  { path: 'cantidadDepositoSinT', component: CantidadDepositoSintComponent},
  { path: 'cantidadDepositoConT', component: CantidadDepositoContComponent},
  { path: 'conTarjeta', component: ConTarjetaComponent},
  { path: 'confirmacionDeposito', component: ConfirmacionDepositoConTComponent},
  { path: 'confirmacionDepositoST', component: ConfirmacionRetiroSinTComponent},
  { path: 'confirmacionRetiro', component: ConfirmacionRetiroConTComponent },
  { path: 'confirmacionRetiroST', component: ConfirmacionRetiroSinTComponent },
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
  { path: 'valorRetiroST', component: ValorRetiroSinTComponent},
  { path: 'fueraServicio', component: FueraServicioComponent},
  { path: 'faltaTarjeta', component: FaltaTarjetaComponent},
  { path: 'tarjeta', component: TarjetaComponent}
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
