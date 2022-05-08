import { Component, OnInit , Inject } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  animal: string | undefined;
  name: string | undefined;

  constructor(

  ) {}

  ngOnInit(): void {
  }

}
