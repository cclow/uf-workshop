
import { Component } from "@angular/core";
@Component({
  selector: 'demo-layout',
  template: `
<md-sidenav-layout>
  <ng-content></ng-content>
  <md-sidenav mode="side" align="start" opened>
    <md-nav-list>
    <md-list-item>Projects</md-list-item>
</md-nav-list>
</md-sidenav>
</md-sidenav-layout>
`
})
export class LayoutComponent {

}
