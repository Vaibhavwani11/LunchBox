import { TypePrice } from "../view-restaurant/view-restaurant.component";

export interface Profile {
  MerchantId:string;
  RestaurantName:string;
  OwnerName:string,
  MobileNumber:string,
  Address:string;
  Price:Array<TypePrice>,
  TodaysMenu:string
}
