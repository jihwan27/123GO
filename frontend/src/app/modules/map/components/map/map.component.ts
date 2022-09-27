import { Component, OnInit } from '@angular/core';

declare var kakao: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapContainer: any;
  mapOption: any;
  map: any;
  
  constructor() {
   }

  ngOnInit(): void {
    this.mapContainer = document.getElementById('map'); // 지도를 표시할 div 
		this.mapOption = {
		        center: new kakao.maps.LatLng(37.57147, 126.99103), // 지도의 중심좌표
		        level: 4, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 
        
		this.map = new kakao.maps.Map(this.mapContainer, this.mapOption);
  }



}
