/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'fcc-angular';

  role = 'Admin';

  @ViewChild('user', { read: ViewContainerRef })
  viewContainerRef!: ViewContainerRef;

  @ViewChild('divTempRef', { static: true })
  divTempRef!: ElementRef;

  ngOnInit(): void {
    this.divTempRef.nativeElement.innerText = 'divTempRef inner text';
    console.log('app.component::ngOnInit::divTempRef');
    console.log(this.divTempRef);
  }

  ngAfterViewInit() {
    // const componentRef = this.viewContainerRef.createComponent(RoomsComponent);
    // componentRef.instance.numberOfRooms = 21;
  }
}
