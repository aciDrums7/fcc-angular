import { Component, OnInit } from '@angular/core'

@Component({
   selector: 'fcc-rooms',
   templateUrl: './rooms.component.html',
   styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
   hotelName: string = 'Hilton Hotel'

   numberOfRooms: number = 7

   areRoomsHidden: boolean = false

   constructor() {}

   ngOnInit(): void {}

   toggle() {
      this.areRoomsHidden = !this.areRoomsHidden
   }
}
