
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private userService: UserService) {}
  persone: any;
  params: any;


  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.persone = data;
      console.log(data);
    })
  }
   
}
