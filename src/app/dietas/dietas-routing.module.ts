import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietasComponent } from './components/dietas/dietas.component';
import { TiposComidaComponent } from './components/tipos-comida/tipos-comida.component';

const routes: Routes = [
  { path: '', component: DietasComponent },
  { path: 'tipos-comida', component: TiposComidaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietasRoutingModule { }