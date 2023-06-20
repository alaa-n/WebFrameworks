import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor (private backendService: BackendService, private router: Router){}

  logout(){
    this.backendService.logout();
    this.router.navigate(['/login']);
  }
}
