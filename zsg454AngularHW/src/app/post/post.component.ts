import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from './post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  @Output() postCreated = new EventEmitter<Post>();
  @Input() posts = [];

  counter: number = 0;

  onAddPost(form: NgForm) {
    this.counter++;
    const post: Post = {
      id: this.counter,
      content:form.value.content
    };

    this.postCreated.emit(post);


  }
}
