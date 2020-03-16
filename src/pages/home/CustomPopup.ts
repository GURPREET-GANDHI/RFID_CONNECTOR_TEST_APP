import { Component, Renderer } from '@angular/core';
import {   ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'custom-popup',
  templateUrl: 'custom-popup.html'
})
export class CustomPopup {

  result: any;

  constructor(public renderer: Renderer, params: NavParams, public viewCtrl: ViewController) {
    this.result = params.get('result');
    console.log(this.result);
    this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}