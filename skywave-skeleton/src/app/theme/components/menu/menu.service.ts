import { Injectable } from '@angular/core';

import { Menu } from './menu.model';
import { horizontalMenuItems } from './menu';

@Injectable()
export class MenuService {
  constructor() {}

  public getHorizontalMenuItems(): Array<Menu> {
    return horizontalMenuItems;
  }

  // the following method is not used in the project
  // public expandActiveSubMenu(menu:Array<Menu>){
  //   let url = this.location.path();
  //   let routerLink = decodeURIComponent(url);
  //   let activeMenuItem = menu.filter(item => item.routerLink === routerLink);
  //   if(activeMenuItem[0]){
  //     let menuItem = activeMenuItem[0];
  //     while (menuItem.parentId != 0){
  //       let parentMenuItem = menu.filter(item => item.id == menuItem.parentId)[0];
  //       menuItem = parentMenuItem;
  //       this.toggleMenuItem(menuItem.id);
  //     }
  //   }
  // }

  // the following method is not used in the project
  // public toggleMenuItem(menuId:number){
  //   let menuItem = document.getElementById('menu-item-'+menuId);
  //   let subMenu = document.getElementById('sub-menu-'+menuId);
  //   if(subMenu){
  //     if(subMenu.classList.contains('show')){
  //       subMenu.classList.remove('show');
  //       menuItem?.classList.remove('expanded');
  //     }
  //     else{
  //       subMenu.classList.add('show');
  //       menuItem?.classList.add('expanded');
  //     }
  //   }
  // }

  // the following method is not used in the project
  // public closeOtherSubMenus(menu:Array<Menu>, menuId:number){
  //   let currentMenuItem = menu.filter(item => item.id == menuId)[0];
  //   menu.forEach(item => {
  //     if((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId) ){
  //       let subMenu = document.getElementById('sub-menu-'+item.id);
  //       let menuItem = document.getElementById('menu-item-'+item.id);
  //       if(subMenu){
  //         if(subMenu.classList.contains('show')){
  //           subMenu.classList.remove('show');
  //           menuItem?.classList.remove('expanded');
  //         }
  //       }
  //     }
  //   });
  // }
}
