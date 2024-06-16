import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public firestore:Firestore) { }


  async writeToBase(name:string, subject:string, email:string, message:string){
    const docRef = await addDoc(collection(this.firestore, 'emmgos'),{
      name, subject, email, message
    });}}