import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabViewDemoComponent } from './tab-view-demo/tab-view-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TabViewDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
