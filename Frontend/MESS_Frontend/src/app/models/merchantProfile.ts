import { TypePrice } from "../merchant-profile/merchant-profile.component";

export interface Profile {
  MerchantId:string;
  RestaurantName:string;
  OwnerName:string,
  MobileNumber:string,
  Address:string;
  Price:Array<TypePrice>,
  TodaysMenu:string
}
