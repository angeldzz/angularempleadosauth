import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './components/navbar.component/navbar.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { SubordinadosComponent } from './components/subordinados.component/subordinados.component';
import { HomeComponent } from './components/home.component/home.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/ServiciosEmpleados';

@NgModule({
  declarations: [
    App,
    NavbarComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServiceEmpleados
  ],
  bootstrap: [App]
})
export class AppModule { }
