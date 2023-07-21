import { Component } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kus_Kusumlata_Books';
  singleContentItem:any;
  requestedContentId: any;
  constructor(private movieService:BookService){

  }
  ngOnInit(): void {
    const idNumber = 3;
    this.movieService.getContentItemById(idNumber).subscribe((data)=>{
        this.singleContentItem = data;
        console.log('singleContentItem', this.singleContentItem);
    });
  }

  getRequestedContent() {
    console.log('this.requestedContentId',this.requestedContentId);
    this.movieService.getContentItemById(this.requestedContentId).subscribe(item => {
      console.log('item',item);
      this.singleContentItem = item;
      console.log('singleContentItem click',this.singleContentItem);
    });
  }
}
