import { Injectable } from '@angular/core';
import { NetService } from '../../services/net/net.service';
import { Observable } from 'rxjs/Observable';
import * as M from '../../app.models';

@Injectable()
export class ImageService {
  images: M.Image[] = [{title: 'cat', url: 'https://wallpaperbrowse.com/media/images/cat-1285634_960_720.png'},
                       {title: 'landscape', url: 'https://wallpaperbrowse.com/media/images/img_fjords.jpg'}];
  constructor(private net: NetService) {}

  getImages() {
   return this.images;
  }
}
