import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
  }

  addUser(): void {
    this.apiService.addUser(this.userName).subscribe(result => {
      console.log(result);
    });
  }

}
