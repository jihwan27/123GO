import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  // backendData = '';
  backendData: any;
  backendDataHttp: any;

  constructor(
    private apiService: ApiService
  ) {
    // this.backendData = this.apiService.get();
    this.apiService.get().subscribe(result => {
      this.backendData = result;
      console.log(this.backendData.message);
    });
  }

}
