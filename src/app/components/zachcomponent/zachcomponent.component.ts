import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-zach',
  templateUrl: './zachcomponent.component.html',
  styleUrls: ['./zachcomponent.component.css']
})

export class ZachComponent implements OnInit {

  name:string = "Zach Byrski";
  home:string = "Washington, USA";
  interests:string[] = ["Video Games", " Marvel Cinematic Universe", " Useless facts no one needs to know", 
  " Rewatching shows I've already seen", " Catching pokemon"];
  quote:string = "My Bed is a magical place where I suddenly remember everything I forgot to do.";

  constructor() {
  }

  ngOnInit(): void {
  }

}
