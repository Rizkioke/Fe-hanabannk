import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  @ViewChild('sidebar')
  sidebar!: SidebarComponent;
public animate: boolean = false;
public enableRtl: boolean = false;
public type: string = 'Push';
public onCreated(args: any) {
     this.sidebar.element.style.visibility = '';
}
closeClick(): void {
    this.sidebar.hide();
};

toggleClick():void{
  this.sidebar.toggle();
}
}
