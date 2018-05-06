import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective implements OnInit{

  @Input() hasRole: Array<string>;


  constructor(private viewContainerRef: ViewContainerRef,
              private template: TemplateRef<any>) {
  }

  ngOnInit() {
    this.checkRoles('user');
  }

  checkRoles(userRole: string) {
    console.log("Роль пользователя: " + userRole);
    if (!this.hasRole || this.hasRole.indexOf(userRole) != -1) {
      console.log("Есть доступ");
      this.viewContainerRef.createEmbeddedView(this.template);
    } else {
      this.viewContainerRef.clear();
      console.log("Доступ запрещен");
    }
  }

}
