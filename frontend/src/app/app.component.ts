import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  backendData: string = '';
  dbData: any;

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.get().subscribe(result => {
      this.backendData = result.message;
      console.log(this.backendData);
    });
  }

}
