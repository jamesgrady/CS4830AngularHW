import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostList } from './post-list.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {

  @Input() posts = [];
  @Output() post = new EventEmitter<PostList>();
}
