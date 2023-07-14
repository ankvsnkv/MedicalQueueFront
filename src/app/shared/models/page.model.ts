export class Page{
    id: number;
    title: string;
    creationDate: Date;
    pageType: string;
    content: string;
    constructor(Id: number, title: string, creationDate: Date, pageType: string, content: string) {
      this.id = Id;
      this.title = title;
      this.creationDate = creationDate;
      this.pageType = pageType;
      this.content = content;
    }
  }