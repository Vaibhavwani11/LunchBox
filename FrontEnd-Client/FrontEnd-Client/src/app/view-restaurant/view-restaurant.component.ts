import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from '../models/merchantProfile';
import { ClientMerchantService } from '../client-merchant.service';
import { FilterPipe } from '../filter.pipe';

export interface TypePrice {
  type:string,
  price:string
}
@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {

  faBowlFood = faBowlFood;

  RestaurantInfo:any = []

  searchText:any = "";

  constructor(
    private clientMerchantService:ClientMerchantService
  ) { }

  ngOnInit(): void {
    this.clientMerchantService.get_restaurant().subscribe((Restaurants:any)=>{
      this.RestaurantInfo = Restaurants;
    })
  }

}
