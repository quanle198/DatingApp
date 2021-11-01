import { AccountService } from './_services/account.service';
import { User } from './_model/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The dating app';
  users: any;

  constructor(private http: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user') || null!);
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.http.get("https://localhost:5001/api/users").subscribe(
      response => this.users = response,
      err => console.log(err),
    );
  }
}
