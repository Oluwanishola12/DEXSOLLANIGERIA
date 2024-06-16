import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name:string=''
  message:string=''
  email:string=''
  subject:string=''
  justSubmitForm: any;

 

   
  
  constructor(public dataService:DataService, public router: Router, public formbuilder:FormBuilder){
    this.justSubmitForm = this.formbuilder.group({
      name: new UntypedFormControl ('', Validators.compose([Validators.required])),
      subject: new UntypedFormControl ('', Validators.compose([Validators.required])),
      email: new UntypedFormControl ('', Validators.compose([Validators.required])),
      message: new UntypedFormControl ('', Validators.compose([Validators.required])),
      
    });}
  
  pushUp(){
    this.dataService.writeToBase(
      this.justSubmitForm.get('name').value,
      this.justSubmitForm.get('subject').value,
      this.justSubmitForm.get('email').value,
      this.justSubmitForm.get('message').value,
   
)
  
   


  console.log(
    this.justSubmitForm.get('name').value,
    this.justSubmitForm.get('subject').value,
    this.justSubmitForm.get('email').value,
    this.justSubmitForm.get('message').value
  );

  this.justSubmitForm.reset();
}


  




}
