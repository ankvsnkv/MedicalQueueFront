import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SchemesOfWorkDataSource, SchemesOfWorkItem } from './schemes-of-work-datasource';

@Component({
  selector: 'app-schemes-of-work',
  templateUrl: './schemes-of-work.component.html',
  styleUrls: ['./schemes-of-work.component.css'],
})
export class SchemesOfWorkComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<SchemesOfWorkItem>;
  dataSource: SchemesOfWorkDataSource;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['actions', 'scheme_of_work', 'description', 'request_timeout', 'pages'];
  formFields = [
    { label: 'Описание', description: 'Введите описание схемы работы', value: '' },
    { label: 'Тип страницы', description: 'Добавление страницы', value: ''  },
    { label: 'Страницы', description: 'Добавление страницы', value: ''  }
  ];

  clearAllFormFields() {
    this.formFields.forEach(field => {
      field.value = '';
    });
  }

  ngOnInit() {
    this.dataSource = new SchemesOfWorkDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  
  showBlock = false;
  toggleBlock() {
    this.showBlock = !this.showBlock;
  }

}
