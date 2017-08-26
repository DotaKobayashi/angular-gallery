import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images: any[];
  filterBy?: string = 'all';
  visibleImages: any[] = [];

  constructor(private _imageService: ImageService) {
    this.visibleImages = this._imageService.getImages();
  }

  ngOnChanges() {
    this.visibleImages = this._imageService.getImages();
  }
}
