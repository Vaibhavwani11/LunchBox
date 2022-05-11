import { Injectable } from '@angular/core';
import { ConnectBackendService } from './connect-backend.service';


@Injectable({
  providedIn: 'root'
})
export class ClientMerchantService {

  constructor(
    private connectBackendService:ConnectBackendService
  ) { }

  get_restaurant()
  {
    return this.connectBackendService.get('client/get/restaurant');
  }

}
