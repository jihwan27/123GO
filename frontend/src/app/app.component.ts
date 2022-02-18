import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  backendData = '';

  constructor(
    private apiService: ApiService
  ) {
    this.apiService = new ApiService();
    this.backendData = apiService.get();
  }

}
