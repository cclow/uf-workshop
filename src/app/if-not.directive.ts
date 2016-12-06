import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from "@angular/core";
@Directive({
  selector: '[demoIfNot]'
})
export class IfNotDirective {
  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set demoIfNot(condition: boolean) {
    if (condition) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.template);
    }
  }
}
