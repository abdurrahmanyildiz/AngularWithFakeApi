import { Injectable } from '@angular/core';

declare let $: any;

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  success(message: string) {
    this.alert('success', message, 'top', 'right');
  }

  info(message: string) {
    this.alert('primary', message, 'top', 'right');
  }

  warning(message: string) {
    this.alert('warning', message, 'top', 'right');
  }

  error(message: string) {
    this.alert('danger', message, 'top', 'right');
  }

  alert(color: string, msg: string, from: string, align: string) {

    $.notify({
      icon: "nc-icon nc-bell-55",
      message: msg

    }, {
        type: color,
        timer: 2000,
        placement: {
          from: from,
          align: align
        }
      });
  }
}
