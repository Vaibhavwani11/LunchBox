import { Component, OnInit} from '@angular/core';
import { MerchantClientService } from '../merchant-client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-merchant-login',
  templateUrl: './merchant-login.component.html',
  styleUrls: ['./merchant-login.component.css']
})
export class MerchantLoginComponent implements OnInit {

  errorMsg:String = "";
  merchantId:String = "";

  constructor(
    private merchantclientservice:MerchantClientService,
    private router:Router,
  ) {
    }

  ngOnInit(): void {
  }

  loginMerchant(Name:string,Password:string)
  {
    this.errorMsg = "";
    this.merchantclientservice.login_merchant(Name,Password).subscribe((Merchant:any)=>{
        if(Merchant.Status == 0)
          this.errorMsg = "Please Enter Valid Username and Password !";
        else
        {
          this.router.navigate([ `profile/${Merchant.UserId}`]);
        }
    })
  }

}
