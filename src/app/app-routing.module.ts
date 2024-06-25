import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'signin', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
  { path: 'comunidad', loadChildren: () => import('./comunidad/comunidad.module').then(m => m.ComunidadModule) },
  { path: 'seguimiento', loadChildren: () => import('./seguimiento/seguimiento.module').then(m => m.SeguimientoModule) },
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'dietas',loadChildren:()=>import('./dietas/dietas.module').then(m=> m.DietasModule)},
  { path: 'perfil', loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilModule) },
  { path: 'not-auth', loadChildren: () => import('./not-auth/not-auth.module').then(m => m.NotAuthModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
