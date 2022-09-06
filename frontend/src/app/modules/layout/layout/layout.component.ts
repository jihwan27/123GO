import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  backendData: any;  

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.get().subscribe(result => {
      this.backendData = result.message;
    });
  }



}
