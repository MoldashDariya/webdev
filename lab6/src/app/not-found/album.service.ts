import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { Album, Photo } from './album';

@Injectable({
  providedIn: 'root'
})

export class AlbumService {
  BASE_URL: string = "https://jsonplaceholder.typicode.com/albums";
  constructor(private client: HttpClient) { }


  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>(`${this.BASE_URL}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`${this.BASE_URL}/${id}`);
  }

  createAlbum(album : Album ): Observable<Album> {
    return this.client.post<Album>(`${this.BASE_URL}`, album);
  }

  updateAlbum(album : Album) : Observable<Album> {
    return this.client.put<Album>(`${this.BASE_URL}/${album.id}`, album);
  }

  deleteAlbum(id: number): Observable<Album> {
    return this.client.delete<Album>(`${this.BASE_URL}/${id}`);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`${this.BASE_URL}/${id}/photos`)
  }
}
