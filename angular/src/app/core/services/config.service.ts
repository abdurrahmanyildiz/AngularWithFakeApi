import { Injectable } from "@angular/core";

/**
 * author: abdurrahman
 * */

@Injectable({
  providedIn: 'root'
})
export class ConfigService {


  getApiUrl(): string {
    return window.location.protocol + "//"+ window.location.hostname + (window.location.port != "" ? (":" + window.location.port) : "") + "/api";
  }
}
