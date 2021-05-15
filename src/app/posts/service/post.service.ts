import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {

  constructor(private $http: HttpClient) { }

  getPosts(): Observable<Array<any>> {
    return this.$http.get<Array<any>>('https://jsonplaceholder.typicode.com/posts');
  }
}
