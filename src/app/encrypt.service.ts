import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncryptService {

  constructor() { }

  encrypt( message: String, sub: String ) {

    const vowels = ['a','A','e','E','i','I','o','O','u','U']
    const chars = [ ...message ] // expand string into array
    const encryptedChars = 
      chars.map( c =>  vowels.indexOf(c) === -1 ? c : sub )
    const encryptedString = encryptedChars.join("")

    return encryptedString
    
  }
  
}
