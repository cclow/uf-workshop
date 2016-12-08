import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class AuthModule { }
