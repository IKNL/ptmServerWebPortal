import { User } from './../user';
import { TasksService } from './../tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(
    private tasksService: TasksService
  ) { }

  ngOnInit() {
  }

  login(username, password){
    console.log(`trying to login user: ${username} with password ${password}`);
    this.tasksService.login(username, password).subscribe(
      user => this.user = user
    );
    console.log(this.user);
  }

}
