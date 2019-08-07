import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor(private request: AppService) {
    this.getUsers();
  }

  ngOnInit() {

  }

  getUsers() {
    this.request.get('table=clients').then( (response) => {
        console.log(response);
        return response;
      }
    ).catch( error => {
      return error;
    });
  }
}
