
'use strict';

class Library{
  constructor(name, creator){
    this.name = name;
    this.creator = creator;
    this.playlist = [];
  }

  addPlaylistToLibrary(playlist) {
    if(playlist instanceof Playlist) {
      this.playlist.push(playlist)
    }
  }
}

class Playlist{
  constructor(name){
    this.name = name;
    this.tracks = [];
  }

  overallRating(){
    let rating = 1;
    this.tracks.forEach((element) => {
      rating += element.rating;
    })
    return rating/this.tracks.length;
  }

  totalDuration(){
    let duration = 0;
    this.tracks.forEach((element) => {
      duration += element.length;
    })
    return duration;
  }

  addSongToPlaylist(track){
    if(track instanceof Track) {
      this.tracks.push(track)
    }
  }
}

class Track{
  constructor(title, rating, length){
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

  addToPlaylist(playlist) {
    if(playlist instanceof Playlist) {
      playlist.tracks.push(this)
    }
  }
}

const song1 = new Track('Awesome song', 10, 210);
const song2 = new Track('Normal song', 6, 100);
const song3 = new Track('Not this song again :(', 2, 300);

const musicLibrary = new Library("My music Library", "Alex")

const myPlaylist = new Playlist('another playlist');

song1.addToPlaylist(myPlaylist);
song2.addToPlaylist(myPlaylist);



myPlaylist.addSongToPlaylist(song3);
musicLibrary.addPlaylistToLibrary(myPlaylist);


console.log(musicLibrary);
console.log(myPlaylist);
console.log(myPlaylist.totalDuration());
console.log(myPlaylist.overallRating());