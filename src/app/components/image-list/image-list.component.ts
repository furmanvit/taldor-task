import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../services/image/image.service';
import {Observable} from 'rxjs/Observable';
import * as M from '../../app.models';

@Component({
  selector: 'image-list',
  templateUrl: 'image-list.html'
})

export class ImageListComponent implements OnInit {
  images: M.Image[] = [];
  filterText = '';
  filteredImages: M.Image[];

  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.images = this.getImages();
    this.filteredImages = this.images;
  }

  filterImages() {
    this.filteredImages = [];
    if (!this.filterText) {
      this.filteredImages = this.images;
      return;
    }
    let filteredText = this.filterText.toLowerCase();
    for (let image of this.images) {
      if (image.title.toLowerCase().indexOf(filteredText) > -1 ) {
        this.filteredImages.push(image);
      }
    }
  }

  getImages(): M.Image[] {
    return this.imageService.getImages();
  }
}



