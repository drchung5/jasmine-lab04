import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup
  encryptedMessage = ""

  ngOnInit() {
    this.myForm = new FormGroup({
      message: new FormControl
    })
  }

  doEncrypt() {
    this.encryptedMessage = 
        this.myForm.controls.message.value
  }

}
