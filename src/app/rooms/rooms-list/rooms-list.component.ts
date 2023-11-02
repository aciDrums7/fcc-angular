import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Room } from '../models/rooms.model';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  //! Requirements for 'strict' change detection strategy:
  // 1 No change of internal data
  // 2 Data coming from parent component should be immutable
  // 2 (every time something changes, return a new object)
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges {
  @Input() roomsList!: Room[];

  @Input() title!: string;

  @Output() selectedRoom = new EventEmitter<Room>();

  //! will work only on components with @Input() props IF they get a new value!
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: Room) {
    this.selectedRoom.emit(room);
  }
}
