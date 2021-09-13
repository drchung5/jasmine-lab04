import { TestBed } from '@angular/core/testing';

import { EncryptService } from './encrypt.service';

describe('EncryptService', () => {
  
  let service: EncryptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncryptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not modify consonants', () => {
    const message="bcd"
    expect(service.encrypt(message,"x")).toEqual(message)
  })

  it('should modify vowels', () => {
    expect(service.encrypt("Test Message","*")).toEqual("T*st M*ss*g*")
  })

  it('should replace with multiple characters', () => {
    expect(service.encrypt("Aloha","##")).toEqual("##l##h##")
  })

});
