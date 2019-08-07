import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'First', 'Last', 'Handle'];

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
