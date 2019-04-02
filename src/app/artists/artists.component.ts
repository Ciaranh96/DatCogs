import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  artist : Artist ={
    id:1,
    name:'paul'
  };

 constructor(private artistService: ArtistService) { }

 ngOnInit() {
   this.getArtists();
 }

 getArtists(): void {
   this.artistService.getArtists()
   .subscribe(artists => this.artists = artists);
 }
}
