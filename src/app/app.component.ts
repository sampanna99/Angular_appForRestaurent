import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
loadedFeature = 'recipe';

ngOnInit(){
  firebase.initializeApp({
    apiKey: "AIzaSyDnp0Q0ctvEQ_OXW8ppWNe9oUASyVv6wfU",
    authDomain: "ng-recipe-book-3e649.firebaseapp.com"
  });
}

  onNavigate(feature: string){
this.loadedFeature = feature;
  }
}
