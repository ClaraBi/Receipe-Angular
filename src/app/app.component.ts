import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBwY4LDaX4_7UVkpT0Nd9DfD6DOyLTJHL8",
      authDomain: "ng-receipe-book-5820f.firebaseapp.com",
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
