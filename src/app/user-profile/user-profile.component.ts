import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }


  public user = {};
  onSubmit() {
    console.log('asas');
  }


  ngOnInit() {
    this.user = {
      name: 'dfdfd',
      address: {
        street: '4545',
        postcode: '12104'
      },
      list: [{
        id: 1,
        street: '9000',
        postcode: '11000'
      },
      {
        id: 2,
        street: '1222',
        postcode: '1000'
      }]
    };
  }

}
