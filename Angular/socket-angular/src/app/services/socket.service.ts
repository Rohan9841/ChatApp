import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';
import { Message } from 'src/message';
//import { Message } from 'src/model/message';

@Injectable()
export class SocketService {
  url: string = environment.url + "api/socket";

  constructor(private http: HttpClient) { }

  post(data: Message) {
    return this.http.post(this.url, data)
      .pipe(map((data: Message) => { return data; }))
      ;
  }
}