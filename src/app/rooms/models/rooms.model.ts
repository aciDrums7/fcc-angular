export interface Hotel {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number;
}

export interface Room {
  type: string;
  roomNumber: number;
  amenities: string;
  price: number;
  photos: string[];
  isAvailable: boolean;
  checkIn: Date;
  checkOut?: Date;
}
