import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarObjetivosComponent } from './components/buscar-objetivos/buscar-objetivos.component';
import { VerObjetivosComponent } from './components/ver-objetivos/ver-objetivos.component';
import { SeguimientoComponent } from './seguimiento.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buscar-objetivos', component: BuscarObjetivosComponent },
  { path: 'ver-objetivos', component: VerObjetivosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguimientoRoutingModule { }