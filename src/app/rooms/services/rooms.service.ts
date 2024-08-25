import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../room';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { AppConfig } from '../../appConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  roomList: RoomDetails[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxa Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 500,
      photos: 'https://photolink/1',
      checkinTime: new Date('05/08/2024'),
      checkoutTime: new Date('10/08/2024'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 1000,
      photos: 'https://photolink/1',
      checkinTime: new Date('05/08/2024'),
      checkoutTime: new Date('10/08/2024'),
      rating: 4.1
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, BathRoom, Kitchen',
      price: 500,
      photos: 'https://photolink/1',
      checkinTime: new Date('05/08/2024'),
      checkoutTime: new Date('10/08/2024'),
      rating: 4.9
    }
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig  ) { 
    // console.log(enviroment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    
  }

  getRooms() {
    return this.roomList;
  }
}
