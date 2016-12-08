import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IfNotDirective } from "./if-not.directive";
import { MaskDirective } from "./mask.directive";
import { TitleCasePipe } from "./title-case.pipe";
import { ApiService } from "./api.service";
import { StoreService } from "./store.service";
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    IfNotDirective,
    MaskDirective,
    TitleCasePipe
  ],
  exports: [
    IfNotDirective,
    MaskDirective,
    TitleCasePipe
  ],
  providers: [
    ApiService,
    StoreService
  ]
})
export class SharedModule { }
