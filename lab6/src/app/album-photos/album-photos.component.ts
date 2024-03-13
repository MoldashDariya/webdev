import { Component, OnInit } from '@angular/core';
import {Photo} from "../album";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  loaded: boolean;
  albumId: number | undefined;

  constructor(private albumService: AlbumService,
              private route: ActivatedRoute,
              private _location: Location) {
    this.photos = [];
    this.loaded = true;
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getAlbumId(): number {
    this.route.paramMap.subscribe((params) => {
       this.albumId = Number(params.get('id')) })
    return <number>this.albumId;
  }

  getPhotos() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getPhotos(id).subscribe((photos) => {
        this.photos = photos;
        this.loaded = true;
      });
    })
  }

}
