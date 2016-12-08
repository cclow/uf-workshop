import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksComponent } from "./books.component";
import { MaterialModule } from "@angular/material";
import { ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    BooksComponent
  ],
  exports: [
    BooksComponent
  ],
  providers: [

  ]
})
export class BooksModule { }
