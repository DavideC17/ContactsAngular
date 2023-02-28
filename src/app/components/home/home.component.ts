import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) {}



  onSubmit(formHome: NgForm) {
    console.log(formHome.value); 
    this.userService.addUser(formHome.value).subscribe((data) => {
      console.log(data);
    })
     
  }


  ngOnInit(): void {
  }

}
