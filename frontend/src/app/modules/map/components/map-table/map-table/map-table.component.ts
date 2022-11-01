import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MapModalComponent } from '../map-modal/map-modal.component';

export interface PeriodicElement {
  name: string;
  name2: string;
}

@Component({
  selector: 'app-map-table',
  templateUrl: './map-table.component.html',
  styleUrls: ['./map-table.component.css']
})
export class MapTableComponent implements OnInit {
  dataSource: MatTableDataSource<PeriodicElement>;
  data:Array<{name: string, name2: string}> = [{name: 'a', name2: '123'}, {name: 'b', name2: '1w23'},{name: 'c', name2: '1dw23'},{name: 'qwe', name2: '1qwqqq3'},{name: '1a', name2: '1213'},{name: 'ae', name2: '12e3'},{name: 'abbbb', name2: '1bbbb23'},{name: 'aasdasd', name2: '1asdasd23'},{name: '3a', name2: '123aq'}];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // TODO: 페이지 네이터는 전체 dataSource의 길이에 비례하니까, 잘라 쓸 리스트를 만들어서 그걸 뿌리고, 페이지 네이트는 원래 리스트 사용.
  constructor(
    public dialog: MatDialog
  ) { 
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openMapModal(): void {
    const dialogRef = this.dialog.open(MapModalComponent);
    dialogRef.afterClosed().subscribe(result => console.log(`dialog close.`));
  }

  


}
