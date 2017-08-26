import { Component } from '@angular/core';
import { ImageService } from './shared/image.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent {
  image: any;

  constructor(private _imageService: ImageService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this._imageService.getImage(
      +this._route.snapshot.params['id']
    )
  }
}
