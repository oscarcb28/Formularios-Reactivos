import { Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component';
import { TestComponent } from './componentes/test/test.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { TestConJsonComponent } from './componentes/test-con-json/test-con-json.component';
import { SemaforoComponent } from './componentes/semaforo/semaforo.component';
import { FotosComponent } from './componentes/carrusel/fotos/fotos.component';
import { CoordenadasComponent } from './componentes/coordenadas/coordenadas.component';

export const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },        
    { path: 'test', component: TestComponent },                
    { path: 'test-con-json', component: TestConJsonComponent },
    { path: 'semaforo', component: SemaforoComponent },
    { path: 'fotos', component: FotosComponent},
    { path: 'coordenadas', component: CoordenadasComponent},          
    { path: '**', component: PageNotFoundComponent }           
];
