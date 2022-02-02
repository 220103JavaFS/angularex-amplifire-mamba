import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-ian',
  templateUrl: './profile-ian.component.html',
  styleUrls: ['./profile-ian.component.css']
})
export class ProfileIanComponent implements OnInit {

name : String = "Ian Danzig Martin"; 
birthPlace : String  = "Bangkok, Thailand";
hobbies : Array<String>  = ["Listening to music", "Reading Philososphy", "Watching the news", "Long distance running", "Following political drama on social media"];

  constructor() { }

  ngOnInit(): void {
  }

}
