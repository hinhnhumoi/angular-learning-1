export interface Room {
    totalRooms : number;
    availableRooms : number;
    bookedRooms : number;
}

export interface RoomDetails {
    roomNumber : number;
    roomType : string;
    amenities : string;
    price : number;
    photos : string;
    checkinTime : Date;
    checkoutTime : Date;
    rating : number;
}