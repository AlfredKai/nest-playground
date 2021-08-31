import { Injectable } from '@nestjs/common';

// No injectable why?
// @Injectable()
export class ServiceC {
  constructor() {
    console.log('Service C created');
  }

  getMessage() {
    return 'This is service C';
  }
}
