import { Component } from '@angular/core';
import { Hotel, Room } from './models/rooms.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 7;

  isRoomCountShown = true;

  hotel: Hotel = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomsList: Room[] = [
    {
      type: 'Deluxe Room',
      roomNumber: 301,
      amenities: 'Air conditioner, Free Wi-Fi, TV',
      price: 500,
      isAvailable: false,
      photos: [
        'https://cache.marriott.com/marriottassets/marriott/STFCT/stfct-guestroom-0045-hor-clsc.jpg?interpolation=progressive-bilinear&',
      ],
      checkIn: new Date('11-Nov-2021'),
    },
    {
      type: 'Private Suite',
      roomNumber: 703,
      amenities: 'Air conditioner, Free Wi-Fi, TV',
      price: 500,
      isAvailable: false,
      photos: [
        'https://cache.marriott.com/marriottassets/marriott/STFCT/stfct-guestroom-0045-hor-clsc.jpg?interpolation=progressive-bilinear&',
      ],
      checkIn: new Date('11-Nov-2021'),
      checkOut: new Date('12-Nov-2021'),
    },
  ];

  toggle() {
    this.isRoomCountShown = !this.isRoomCountShown;
  }
}
