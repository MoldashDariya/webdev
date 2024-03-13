import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  newAlbum: Album;

  constructor(private albumService: AlbumService) {
    this.albums = [];
    this.loaded = true;
    this.newAlbum = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe((response) => {
      this.albums = this.albums.filter((a) => a.id != id);
    });
  }

  createAlbum() {
    this.loaded = false;
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(album);
      this.loaded = true;
      this.newAlbum = {} as Album;
    });
  }

  inputFilter() {
    console.log(this, this.newAlbum.title);
    if (this.newAlbum.title) {
      this.albums = this.albums.filter(
        (val) => val.title.indexOf(this.newAlbum.title.toLowerCase()) >= 0
      );
    } else {
      this.albums = this.albums;
    }
  }
}
