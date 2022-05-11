import { Component, OnInit , Inject } from '@angular/core';
import { faUser ,fa3} from '@fortawesome/free-solid-svg-icons';
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

  faUser = faUser;
  fa3=fa3;

  ngOnInit(): void {
  }

}
