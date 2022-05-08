import { Injectable } from '@angular/core';
import { ConnectBackendServiceService } from './connect-backend-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Profile } from './models/merchantProfile';

@Injectable({
  providedIn: 'root'
})
export class MerchantClientService {

  constructor(
    private connectBackendService:ConnectBackendServiceService,
    private route:ActivatedRoute
  ) {
  }

  register_merchant(Name:string,Password:string)
  {
    return this.connectBackendService.post('merchant/register',{username:Name,password:Password});
  }
  login_merchant(Name:string,Password:string)
  {
    return  this.connectBackendService.post('merchant/login',{username:Name,password:Password});
  }
  create_merchant_profile(MerchantId:string,MerchantProfile:Profile)
  {
    return this.connectBackendService.post(`merchant/add/${MerchantId}`,MerchantProfile)
  }
  update_merchant_profile(MerchantId:string,MerchantProfile:Profile)
  {
    return this.connectBackendService.post(`merchant/update/${MerchantId}`,MerchantProfile)
  }
  update_todaysmenu(ProfileId:string,todaysMenu:string)
  {
    return this.connectBackendService.post(`merchant/update/todaysmenu/${ProfileId}`,{TodaysMenu:todaysMenu})
  }
  get_merchant_profileId(merchantId:string)
  {
    return this.connectBackendService.get(`merchant/get/profileId/${merchantId}`)
  }
}
