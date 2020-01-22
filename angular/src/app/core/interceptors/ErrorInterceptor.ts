import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { AlertService } from '../services/alert.service';


@Injectable({ providedIn: 'root' })
export class ErrorsHandler implements ErrorHandler {

  constructor(private alertService: AlertService) {}

  handleError(error: Error) {
    

    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        console.log("No Internet Connection");
      } else {
        const status = error.status;
        console.log(status + " " + error.message);
        this.alertService.error(status + " " + error.message);
      }
    }


    console.error('Error occured: ', error);
  }


}
