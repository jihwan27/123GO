import { Component, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.get().subscribe(result => {
      this.backendData = result.message;
      console.log(this.backendData);
    });
  }

  ngOnInit() {
    console.log('FrontEnd app started.');
  }

  title = 'frontend';
  backendData: string = '';
}
