import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
blogTab = [
  { id:1, titre:"romulo to stay at real madrid", description:"******",date:"05/04/2023"},
  { id:2, titre:"romulo to stay at real madrid", description:"******",date:"25/07/2020"},
  { id:3, titre:"romulo to stay at real madrid", description:"******",date:"08/10/2022"},
  { id:4, titre:"romulo to stay at real madrid", description:"******",date:"09/08/2021"}
]
  constructor() { }

  ngOnInit() {
  }

}
