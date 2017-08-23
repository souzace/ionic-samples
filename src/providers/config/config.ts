import { Injectable } from "@angular/core";

let config_key_name = "config";

@Injectable()
export class ConfigProvider {
  private config = {
    showSlide: false,
    name: "",
    username: ""
  }

  constructor() {
    console.log('Hello MovieProvider Provider');
  }

  getConfigData(): any{
    return localStorage.getItem(config_key_name);
  }

  setConfigData(showSlide?: boolean, username?: string){
    if (showSlide) {
      this.config.showSlide = showSlide;
    }

    if (name) {
      this.config.name = name;
    }

    if (username) {
      this.config.username = username;
    }
  
    localStorage.setItem(config_key_name, JSON.stringify(this.config));

  }

}