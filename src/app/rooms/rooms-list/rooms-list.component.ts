import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomDetails } from '../room';

@Component({
  selector: 'hinv-rooms-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges {

  @Input() rooms : RoomDetails[] = [];

  @Input() title : string = '';

  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  selectRoom(room : RoomDetails) {
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

    if(changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }

  }
}
