import { TestBed } from '@angular/core/testing';
import { EncryptPipe } from './encrypt.pipe';
import { EncryptService } from './encrypt.service';

describe('EncryptPipe', () => {

  let pipe: EncryptPipe

  beforeEach(() => {
    TestBed.configureTestingModule({});
    const service = TestBed.inject(EncryptService);
    pipe = new EncryptPipe(service)
  });
  
  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  }); 

  it('should not modify consonants', () => {
    const message="bcd"
    expect(pipe.transform(message,"x")).toEqual(message)
  })

  it('should modify vowels', () => {
    expect(pipe.transform("Test Message","*")).toEqual("T*st M*ss*g*")
  })

  it('should replace with multiple characters', () => {
    expect(pipe.transform("Aloha","##")).toEqual("##l##h##")
  })

  it('should use the default replacement character', () => {
    expect(pipe.transform("Angular")).toEqual("-ng-l-r")
  })

});
