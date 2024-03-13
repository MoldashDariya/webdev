import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../album.service';
import { AlbumsComponent } from '../albums/albums.component';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  album: Album;
  loaded: boolean;
  newTitle: string;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ) {
    this.newTitle = '';
    this.album = {} as Album;
    this.loaded = true;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbumTitle() {
    this.loaded = false;
    this.album.title = this.newTitle;
    this.albumService.updateAlbum(this.album).subscribe((album) => {
      this.album = album;
      this.loaded = true;
      this.newTitle = '';
    });
  }
}
