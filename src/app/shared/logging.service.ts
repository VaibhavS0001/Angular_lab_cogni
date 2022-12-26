import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  errorlog(str: string){
    console.error(str)
  }

  warnlog(str: string){
    console.warn(str)
  }

  log(str: string){
    console.log(str)
  }

}
