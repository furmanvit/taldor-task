import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as M from '../../app.models';

@Injectable()
export class NetService {
  private key = 'b3b6ad792888e10eaf2ea908a7517c3e';
  private url = `http://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${this.key}&per_page=30&format=json&jsoncallback=JSON_CALLBACK`;
  constructor(private http: HttpClient) {
  }

  getImages(query: string) {
    // didnt find the way to get data from flickr
  }

}
