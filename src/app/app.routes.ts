import { Routes } from '@angular/router';
import { RegisterComponent } from './componentes/register/register.component';
import { TestComponent } from './componentes/test/test.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { TestConJsonComponent } from './componentes/test-con-json/test-con-json.component';

export const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },        
    { path: 'test', component: TestComponent },                
    { path: 'test-con-json', component: TestConJsonComponent },              
    { path: '**', component: PageNotFoundComponent }           
];
