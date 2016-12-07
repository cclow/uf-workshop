import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from "@angular/material";
import { ProjectsComponent } from "./projects.component";
import { ProjectCardComponent } from './project-card.component';
import { MaskDirective } from "./mask.directive";
import { IfNotDirective } from "./if-not.directive";
import { TitleCasePipe } from './title-case.pipe';
import { LayoutComponent } from "./layout.component";
import { ProjectFormComponent } from "./project-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BooksComponent } from "./books.component";
import { ProjectsDataService } from "./projects-data.service";
import { environment } from "../environments/environment";
import { BACKEND_URL, WS_BACKEND_URL } from "./tokens";
import { ApiService } from "./api.service";
import { StoreService } from "./store.service";


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectCardComponent,
    MaskDirective,
    IfNotDirective,
    TitleCasePipe,
    LayoutComponent,
    ProjectFormComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProjectsDataService,
    ApiService,
    StoreService,
    {provide: BACKEND_URL, useValue: environment.backendUrl},
    {provide: WS_BACKEND_URL, useValue: environment.wsBackendUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
