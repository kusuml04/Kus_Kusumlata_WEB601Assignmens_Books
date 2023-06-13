import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  
    
  contentList:Content[] =[
    {
      id: 0,
      title: "The Immortals of Meluha",
      description: "The novel is set in ancient India and follows the life of Shiva, a warrior.",
      creator: "Amish Tripathi",
      imgURL: "assets/img/img1.jpg",
      type:"Fantasy"
    },
    {
      id: 1,
      title: "The White Tiger ",
      description: "The novel is a darkly funny story about a young man named Balram Halwai who goes from being a poor driver in a tiny hamlet to becoming a successful entrepreneur in Bangalore.",
      creator: "Aravind Adiga",
      imgURL: "assets/img/img2.jpg",
      type: "Fiction"
    },
    {
      id: 2,
      title: "Five Point Someone",
      description: "The novel follows three friends, Hari, Ryan, and Alok, while they study engineering at the prestigious Indian Institute of Technology (IIT) in Delhi.",
      creator: "Chetan Bhagat",
      imgURL: "assets/img/img3.jpg",
      type: "History"
    },
    {
      id: 3,
      title: 'The Way I Used To Be',
      description: 'It tells the powerful and emotionally charged story of a teenage girl named Eden, who grapples with the aftermath of a traumatic event that changes her life forever.',
      creator: 'Amber Smith',
      imgURL: 'assets/img/img4.jpg',
      type: 'History',
      tags: ['hey']

      
    },
    {
      id: 4,
      title: 'Beach Read',
      description: 'The story revolves around January Andrews, a bestselling romance author, who finds herself in a writing slump after her fathers death and a shocking revelation about his secret life.',
      creator: 'Emily Henry',
      imgURL: '',
      type: ''
      
    }
    
    ];
    findTitle : string ='';
    filterResult: boolean = false;
    searchResult: string = '';
    isContentFound: boolean = false;

    findContent() {
      this.filterResult = this.contentList.some(content => content.title === this.findTitle);
      this.isContentFound = !!this.filterResult;
      this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
      }

  }