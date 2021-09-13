import { Pipe, PipeTransform } from '@angular/core';
import { EncryptService } from './encrypt.service';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  constructor( private encryptService: EncryptService ){}

  transform(message: string, replacement: string = "-" ): String {
    return this.encryptService.encrypt(message, replacement);
  }

}
