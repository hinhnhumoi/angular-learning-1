import { AfterViewChecked, AfterViewInit, Component, DoCheck, ViewChild } from '@angular/core';
import { Room, RoomDetails } from './room';
import { CommonModule } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule, RoomsListComponent, HeaderComponent],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements DoCheck, AfterViewInit, AfterViewChecked{

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }
  title = 'Room list';

  selectedRoom! : RoomDetails;

  roomList: RoomDetails[] = [];

  @ViewChild(HeaderComponent) headerComponent! : HeaderComponent;

  ngOnInit() : void {

    this.roomList = [
      {
        roomNumber : 1,
        roomType: 'Deluxa Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
        price: 500,
        photos: 'https://photolink/1',
        checkinTime: new Date('05/08/2024'),
        checkoutTime: new Date('10/08/2024'),
        rating : 4.5
      },
      {
        roomNumber : 2,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
        price: 1000,
        photos: 'https://photolink/1',
        checkinTime: new Date('05/08/2024'),
        checkoutTime: new Date('10/08/2024'),
        rating : 4.1
      },
      {
        roomNumber : 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
        price: 500,
        photos: 'https://photolink/1',
        checkinTime: new Date('05/08/2024'),
        checkoutTime: new Date('10/08/2024'),
        rating : 4.9
      }
    ]
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
  }
  
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }
}

