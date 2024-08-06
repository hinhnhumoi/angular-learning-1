import { Component } from '@angular/core';
import { Room, RoomDetails } from './room';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'hinv-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {

  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomDetails[] = [
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

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
