import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private toastCtrl: ToastController, private router: Router) {}

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'top',
    });
    toast.onDidDismiss();

    toast.present();
  }

  goToTab2(){
    this.router.navigate(['/tabs/tab2']);
  }
}
