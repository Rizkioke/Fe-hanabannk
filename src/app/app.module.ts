
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Imported syncfusion sidebar module from navigations package
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import {CheckboxTreeViewComponent} from './treeview/treeview.component'

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, CheckboxTreeViewComponent, HeaderComponent, FooterComponent],
  imports: [
BrowserModule,
// Registering EJ2 Sidebar Module
SidebarModule,
TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }