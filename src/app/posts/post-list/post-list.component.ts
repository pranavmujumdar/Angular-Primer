import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    {title: "this is the first title", content: "this is the first content"},
    {title: "this is the second title", content: "this is the second content"},
    {title: "this is the third title", content: "this is the third content"}
  ];
}
