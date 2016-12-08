import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { LayoutComponent } from "./layout.component";
import { BooksComponent } from "./books/books.component";
import { environment } from "../environments/environment";
import { BACKEND_URL, WS_BACKEND_URL } from "./tokens";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { BooksModule } from "./books/books.module";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./auth/login.component";
import { AuthModule } from "./auth/auth.module";
import { AuthGuard } from "./auth/auth.guard";

const ROUTES: Routes = [
  {path: '', component: HomeComponent,
    pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent},
  {path: 'projects', canActivateChild: [AuthGuard],
    loadChildren: "app/projects/projects.module#ProjectsModule" },
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    HomeModule,
    SharedModule,
    BooksModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  providers: [
    {provide: BACKEND_URL, useValue: environment.backendUrl},
    {provide: WS_BACKEND_URL, useValue: environment.wsBackendUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
