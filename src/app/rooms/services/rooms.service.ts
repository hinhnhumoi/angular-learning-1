import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../room';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  
  roomList: RoomDetails[] = [
  ]

  constructor(@Inject(APP_SERVICE_CONFIG) private config : AppConfig,
  private http:HttpClient ) { 
    // console.log(enviroment.apiEndpoint);
    console.log(this.config.apiEndpoint);
    
  }

  getRooms() {
    return this.http.get<RoomDetails[]>('/api/rooms');
  }
}
