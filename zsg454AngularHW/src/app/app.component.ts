import { Component } from '@angular/core';
import { Post } from './post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}

