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

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ProjectCardComponent,
    MaskDirective,
    IfNotDirective,
    TitleCasePipe,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
