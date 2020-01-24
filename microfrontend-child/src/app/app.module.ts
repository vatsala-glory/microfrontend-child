import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AdminComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
  }

  ngDoBootstrap(){
    const mycomponent = createCustomElement(AdminComponent, {injector: this.injector});
    customElements.define('app-admin', mycomponent);
  }
}
