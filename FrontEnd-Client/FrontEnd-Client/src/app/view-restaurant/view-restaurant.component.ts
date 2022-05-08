import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-restaurant',
  templateUrl: './view-restaurant.component.html',
  styleUrls: ['./view-restaurant.component.scss']
})
export class ViewRestaurantComponent implements OnInit {

  faBowlFood = faBowlFood;

  constructor() { }

  ngOnInit(): void {
  }

}
