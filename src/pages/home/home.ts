import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { CustomPopup } from './CustomPopup';

declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // resultData: any = "Result of the methods will be displayed here.";
  constructor(public navCtrl: NavController, public alertCtrl:AlertController, public modalCtrl: ModalController) {
    //, public plt:Platform, public rfidplugin:any
    // this.plt.ready().then((readySource) => {
    //   rfidplugin = cordova.require("cordova/plugin/RFIDConnector");
    // });
  }

  getString(value : any){
    if (value instanceof String){
      return value;
    } else {
      return JSON.stringify(value);
    }
  }

  testUI(){
    // let alert = this.alertCtrl.create({
    //   title: 'Result',
    //   subTitle: '10% of battery remaining',
    //   message: 'Test fasjdflnedl fdsayfldskmf fksadlfuekfl asfdhflksdjf dslafkjsldifnld ejfalidfe',
    //   buttons: ['Close'], 
    //   cssClass: 'alertCustomCss'
    // });
    // alert.present();
    let that:any = this;

    let alert = this.alertCtrl.create({
      title: 'Connect',
      inputs: [
        {
          name: 'deviceaddress',
          placeholder: 'Device address'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: data => {
            
            let sucess:any = {
              name: data.deviceaddress,
              email: 'john@awesome.com',
              plan: ['Pro', 'test']
            };
            //sucess = 'test sfsdfs fsdff  greg  hgsefd hgdsdf gefdf gdfhfg dsgrg xfsdgd gd fgdffgd dsfsdf sdczdf s cz dfds fdscd';
            
            let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
            modal.present()
          }
        }
      ]
    });
    alert.present();
  }

  getDeviceList(){
    let that:any = this;
    
    cordova.require("cordova/plugin/RFIDConnector").getDeviceList( 
        function(sucess){ 
          console.log(sucess);
          let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
          modal.present()
        },
        function(err){
          console.log(err);
          let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
          modal.present() 
        }
    );
  }

  public connect(){
    let that:any = this;

    let alertpopup = this.alertCtrl.create({
      title: 'Connect',
      inputs: [
        {
          name: 'deviceaddress',
          placeholder: 'Device address'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Connect',
          handler: data => {
            cordova.require("cordova/plugin/RFIDConnector").connect(data.deviceaddress, 
              function(sucess){ 
                console.log(sucess);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present()
              },
              function(err){
                console.log(err);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present() 
              }
            );
          }
        }
      ]
    });
    alertpopup.present();
  }

  public isConnected(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").isConnected(
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public disconnect(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").disconnect( 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public getDeviceInfo(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").getDeviceInfo(
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public scanRFIDs(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").scanRFIDs(false, 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public subscribeScanner(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").subscribeScanner(false, 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public unsubscribeScanner(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").unsubscribeScanner( 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public testListenerActivate(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").testListenerActivate( 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public testListenerDeactivate(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").testListenerDeactivate( 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public search(){
    let that:any = this;

    let alertpopup = this.alertCtrl.create({
      title: 'Search',
      inputs: [
        {
          name: 'tagID',
          placeholder: 'Tag ID'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Search',
          handler: data => {
            cordova.require("cordova/plugin/RFIDConnector").search(data.tagID,true, 
              function(sucess){ 
                console.log(sucess);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present()
              },
              function(err){
                console.log(err);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present() 
              }
            );
          }
        }
      ]
    });
    alertpopup.present();
  }


  public startSearch(){
    let that:any = this;

    let alertpopup = this.alertCtrl.create({
      title: 'Search',
      inputs: [
        {
          name: 'tagID',
          placeholder: 'Tag ID'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'startSearch',
          handler: data => {
            cordova.require("cordova/plugin/RFIDConnector").startSearch(data.tagID,false, 
              function(sucess){ 
                console.log(sucess);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present()
              },
              function(err){
                console.log(err);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present() 
              }
            );
          }
        }
      ]
    });
    alertpopup.present();
  }

  public stopSearch(){
    let that:any = this;
    cordova.require("cordova/plugin/RFIDConnector").stopSearch( 
      function(sucess){ 
        console.log(sucess);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present()        
      },
      function(err){
        console.log(err);
        let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
        modal.present() 
      }
    );
  }

  public setOutputPower(){
    let that:any = this;

    let alertpopup = this.alertCtrl.create({
      title: 'Scan power',
      inputs: [
        {
          name: 'scanPower',
          placeholder: 'Scan power',
          type: 'number'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Set',
          handler: data => {
            cordova.require("cordova/plugin/RFIDConnector").setOutputPower(data.scanPower, 
              function(sucess){ 
                console.log(sucess);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(sucess)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present()
              },
              function(err){
                console.log(err);
                let modal = that.modalCtrl.create(CustomPopup,{result: that.getString(err)},{showBackdrop:true, enableBackdropDismiss:true});
                modal.present() 
              }
            );
          }
        }
      ]
    });
    alertpopup.present();
  }
}
