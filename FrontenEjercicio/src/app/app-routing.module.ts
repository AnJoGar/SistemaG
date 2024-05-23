import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{EjercicioComponent} from '../app/components/ejercicio/ejercicio.component'
import{EleccionEjeComponent} from '../app/components//eleccion-eje/eleccion-eje.component'
const routes: Routes = [
  
  { path: '', redirectTo: '/opcion1', pathMatch: 'full' },
  { path: 'opcion1', component: EjercicioComponent },
  { path: 'opcion2', component: EleccionEjeComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {







 }
