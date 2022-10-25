import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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
  data:Array<{name: string, name2: string}> = [{name: 'a', name2: '123'}, {name: 'b', name2: '1w23'},{name: 'c', name2: '1dw23'},{name: 'qwe', name2: '1qwqqq3'},{name: '1a', name2: '1213'},{name: 'ae', name2: '12e3'},{name: 'abbbb', name2: '1bbbb23'},{name: 'aasdasd', name2: '1asdasd23'},{name: '3a', name2: '123aq'},{name: '3a', name2: '123aq'},{name: '3a', name2: '123aq'},{name: '3a', name2: '123aq'}];
  columns = [
    {
      columnDef: 'name',
      header: 'Name',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'name2',
      header: 'Name2',
      cell: (element: PeriodicElement) => `${element.name2}`,
    }
  ];
  displayedColumns = this.columns.map(c => c.columnDef);

  ELEMENT_DATA: Array<{name: string, name2: string}> = [
    {name: '1', name2: 'Hydrogen1'},
    {name: '12', name2: 'Hydrogen2'},
    {name: '13', name2: 'Hydrogen3'},
    {name: '14', name2: 'Hydrogen4'},
    {name: '15', name2: 'Hydrogen5'},
    {name: '16', name2: 'Hydrogen6'},
    {name: '17', name2: 'Hydrogen7'},
    {name: '18', name2: 'Hydrogen8'},
    {name: '19', name2: 'Hydrogen9'},
    {name: '21', name2: 'Hydrogen10'},
    {name: '31', name2: 'Hydrogen11'},
    {name: '41', name2: 'Hydrogen12'},
    {name: '51', name2: 'Hydrogen13'},
    {name: '61', name2: 'Hydrogen14'},
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  


}
