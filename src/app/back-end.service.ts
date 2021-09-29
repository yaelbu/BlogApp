import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../app/post.model';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
/*
Data Path : 
https://blogapp-2f783-default-rtdb.firebaseio.com/ 
*/

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //Fun 1 - Save
  saveData() {
    //Step1 - get list of posts from post.service
    const listOfPosts: Post[] = this.postService.getPosts();

    //Step2 - send lsit of posts to backend
    this.http
      .put(
        'https://blogapp-2f783-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {});
  }

  //Fun 2 - fetch
  fetchData() {
    this.http.get<Post[]>(
      'https://blogapp-2f783-default-rtdb.firebaseio.com/posts.json'
    ).pipe(
        tap((listOfPosts:Post[])=>{
        
            //send to post.service
            this.postService.setPosts(listOfPosts);
            console.log(listOfPosts)

        })
    ).subscribe();
  }
}
