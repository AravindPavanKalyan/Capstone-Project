import { Component, OnInit } from '@angular/core';
import { AppSettings, Settings } from 'src/app/app.settings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  // About Us page background image
  aboutBackgroundImage = 'assets/images/others/about.jpg';

  public settings: Settings;
  constructor(public appSettings: AppSettings) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {}
}
