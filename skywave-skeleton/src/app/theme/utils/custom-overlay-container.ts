import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Injectable()
export class CustomOverlayContainer extends OverlayContainer {
  // The following method is not used anywhere in the project
  // _createContainer(): void {
  //   let container = document.createElement('div');
  //   container.classList.add('cdk-overlay-container');
  //   document.getElementById('app')?.appendChild(container);
  //   this._containerElement = container;
  // }
}
