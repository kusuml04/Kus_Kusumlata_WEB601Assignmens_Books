import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myList: ContentList;
  constructor(){

    this.myList = new ContentList();
 

    this.myList.addItem({
      id: 0,
      title: "The Immortals of Meluha",
      description: "The novel is set in ancient India and follows the life of Shiva, a warrior.",
      creator: "Amish Tripathi",
      imgURL: "assets/img/img1.jpg",
      type:"Fantasy"
    }); 
    this.myList.addItem({
      id: 1,
      title: "The White Tiger ",
      description: "The novel is a darkly funny story about a young man named Balram Halwai who goes from being a poor driver in a tiny hamlet to becoming a successful entrepreneur in Bangalore.",
      creator: "Aravind Adiga",
      imgURL: "assets/img/img2.jpg",
      type: "Fiction"
    });
    this.myList.addItem({
      id: 2,
      title: "Five Point Someone",
      description: "The novel follows three friends, Hari, Ryan, and Alok, while they study engineering at the prestigious Indian Institute of Technology (IIT) in Delhi.",
      creator: "Chetan Bhagat",
      imgURL: "assets/img/img3.jpg",
      type: "Humor"
    });

  

    // myList.items = [];
  }


  ngOnInit(): void {

  }

}
