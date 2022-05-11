import { Component, OnInit} from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MerchantClientService } from '../merchant-client.service';
import { Profile } from '../models/merchantProfile';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { faFloppyDisk,fa4 } from '@fortawesome/free-solid-svg-icons';

export interface TypePrice {
  rateType:string,
  price:string
}

@Component({
  selector: 'app-merchant-profile',
  templateUrl: './merchant-profile.component.html',
  styleUrls: ['./merchant-profile.component.css']
})
export class MerchantProfileComponent implements OnInit {

  merchantId:string = "";
  canupdateTodaysMenu = false;

  faFloppyDisk = faFloppyDisk;
  fa4 = fa4;



  constructor(
    private merchantclientservice:MerchantClientService,
    private activeroute : ActivatedRoute
  ) {
    this.activeroute.params.subscribe((params:Params) =>{
      this.merchantId = params['name'];
  }
  )}

  ngOnInit(): void {
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  typePrice: TypePrice[] = [];

  msg:string = "";

  todaymenuupdatedmsg:string = "";

  updateMerchantProfileId : string = "";

  profileCreated = false;

  updateProfilemsg:string = ""

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    const typeprice = value.split('-');

    const regex = new RegExp(/[0-9]/);

    if(regex.test(typeprice[1]))
    {
      //Add our fruit
      if (value) {
        this.typePrice.push({rateType:typeprice[0],price:typeprice[1]});
      }
    }else
    {
      this.msg = "please enter valid price !"
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: TypePrice): void {
    const index = this.typePrice.indexOf(fruit);

    if (index >= 0) {
      this.typePrice.splice(index, 1);
    }
  }

  createProfile(RestaurantName:string,OwnerName:string,MobileNumber:string,Address:string)
  {
    const newProfile : Profile = {
      MerchantId:this.merchantId,
      RestaurantName:RestaurantName,
      OwnerName:OwnerName,
      MobileNumber:MobileNumber,
      Address:Address,
      Price:this.typePrice,
      TodaysMenu:""
    }
    const regex = new RegExp(/[0-9]/);
    if(regex.test(newProfile.MobileNumber))
    {
      this.merchantclientservice.create_merchant_profile(this.merchantId,newProfile).subscribe((MerchantData:any)=>{
        this.updateMerchantProfileId =  MerchantData.MerchantDetails[0]._id;
        if(MerchantData.Status == 1)
        {
          this.msg = "Profile Created ! , now you can update today's menu !"
          this.canupdateTodaysMenu = true;
          this.profileCreated = true;
        }
        else
        {
          this.msg = "Sorry , plz try later !"
        }
    })
    }else
    {
         this.msg = "Please enter valid Mobile Number !";
    }
  }

  updateProfile(RestaurantName:string,OwnerName:string,MobileNumber:string,Address:string)
  {
    const newProfile : Profile = {
      MerchantId:this.merchantId,
      RestaurantName:RestaurantName,
      OwnerName:OwnerName,
      MobileNumber:MobileNumber,
      Address:Address,
      Price:this.typePrice,
      TodaysMenu:""
    }
    this.merchantclientservice.update_merchant_profile(this.updateMerchantProfileId,newProfile).subscribe((Status:any)=>{
      if(Status.Status == 1)
      {
        this.updateProfilemsg = "Profile Successfully updated !"
      }else
      {
        this.updateProfilemsg = "Sorry , could not update profile !"
      }
    })
  }

  updateTodaysMenu(TodaysMenu:string)
  {
    this.merchantclientservice.get_merchant_profileId(this.merchantId).subscribe((ProfileId:any)=>{
      this.merchantclientservice.update_todaysmenu(ProfileId.profileId,TodaysMenu).subscribe((Status:any)=>{
        if(Status.Status == 1)
        {
          this.todaymenuupdatedmsg = "Today's Menu set to : " + TodaysMenu;
        }
      })
    })
  }

}
