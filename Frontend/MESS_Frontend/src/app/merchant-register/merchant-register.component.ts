import { Component, OnInit } from '@angular/core';
import { MerchantClientService } from '../merchant-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant-register',
  templateUrl: './merchant-register.component.html',
  styleUrls: ['./merchant-register.component.css']
})
export class MerchantRegisterComponent implements OnInit {

  constructor(
    private merchantclientservice:MerchantClientService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  msg:string = ""

  registerMerchant(username:string,password:string)
  {
    this.merchantclientservice.register_merchant(username,password).subscribe((Merchant:any)=>{
        if(Merchant.Status == 1)
          this.router.navigate(['/login']);
        else
          this.msg = Merchant.error;
    })
  }

}
