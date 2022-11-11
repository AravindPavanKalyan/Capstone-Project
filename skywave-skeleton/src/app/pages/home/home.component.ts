import { Component, OnInit } from '@angular/core';
import { Settings, AppSettings } from 'src/app/app.settings';
import { AppService } from 'src/app/app.service';
import { MenuItem } from 'src/app/app.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public slides = [];
  public specialMenuItems: Array<MenuItem> = [];

  public settings: Settings;

  // background image related data
  backgroundImageForMenuImg = 'assets/images/others/homepage.jpg';
  titleForMenuImg = 'Welcome to SkyWave Restaurant';
  DescForMenuImg = 'Healthy, Authentic & Safe Food';

  constructor(
    public appSettings: AppSettings,
    public appService: AppService,
    public router: Router
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit(): void {
    this.getSpecialMenuItems();
  }

  public getSpecialMenuItems(): void {
    this.appService.getSpecialMenuItems().subscribe((menuItems) => {
      this.specialMenuItems = menuItems;
    });
  }
}
