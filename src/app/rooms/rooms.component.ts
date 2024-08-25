import { AfterViewChecked, AfterViewInit, Component, DoCheck, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomDetails } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from "../header/header.component";
import { RoomsService } from './services/rooms.service';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements DoCheck, AfterViewInit, AfterViewChecked {

  hotelName : string = 'Hilton Hotel';
  numberOfRooms : number = 10;
  hideRooms : boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room list';

  selectedRoom! : RoomDetails;

  roomList: RoomDetails[] = [];

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrens! : QueryList<HeaderComponent>; 

  constructor(private roomService : RoomsService) {};

  ngOnInit() : void {
    this.roomList = this.roomService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Updated Room List";
  }

  selectRoom(room : RoomDetails) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room : RoomDetails = {
      roomNumber : 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 1999,
      photos: 'https://photolink/5',
      checkinTime: new Date('05/08/2024'),
      checkoutTime: new Date('10/08/2024'),
      rating : 4.7
    };

    // this.roomList.push(room);

    this.roomList = [...this.roomList, room];
  }

  ngDoCheck(): void {
    // console.log("on changes is called");
  }
  ngAfterViewInit(): void {
    this.headerComponent.title = "Room view";
    this.headerChildrens.last.title = "Last Title";
  }

  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
}

