import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Room } from '../models/rooms.model';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
})
export class RoomsListComponent {
  @Input() roomsList!: Room[];

  @Output() selectedRoom = new EventEmitter<Room>();

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }
}
