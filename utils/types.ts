export interface EventTypes {
  id: number;
  name: string;
  imageUrl: string;
  type: string;
  bookingLimit: number;
}

export interface GaAreaTypes {
  id: number;
  name: string;
  capacity: number;
  priceIds: number[];
}

export interface TicketTypes {
  id: number;
  priceName: string;
  price: number;
}
