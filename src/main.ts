import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Asegúrate de importar las rutas

// Inicia la aplicación con los proveedores necesarios
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes), // Usa las rutas definidas en app.routes.ts
    CommonModule, // Asegúrate de que CommonModule esté disponible
  ]
}).catch((err) => console.error(err));
