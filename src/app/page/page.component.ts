import { Component } from '@angular/core';
import { dateToStringDD } from '../shared/functions/date-to-string.functions';
import { dateToStringTT } from '../shared/functions/date-to-string.functions';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  
  title: string = "";
  creationDate: string = "";
  pageType: string = "";
  content: string = "";

  admin: boolean = true;
  editingMode: boolean = false;

  dataArray: any[] = [
    { id: 1, name: 'Аквалор форте', cost: 25 },
    { id: 2, name: 'Авамис', const: 30 },
    { id: 3, name: 'Доктор мом', cost: 35 },]

  ngOnInit() {
    this.title = 'Заголовок страницы';
    var date: Date = new Date();
    this.creationDate = dateToStringTT(date);
    this.pageType = 'Тип страницы';
    this.content = '<p style="color:red">Содержимое страницы</p>';
  }

  ngAfterViewInit() {
    this.onSaveContent();
  }

  onSaveContent() {
    this.editingMode = false;
    var content = document.getElementById("content");
    if(content != null)
      content.innerHTML = this.content;
  }

  enableEditing() {
    this.editingMode = true;
  }

}
