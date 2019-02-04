import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cfs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public methodsTextCSS: {[key: string]: any};
  public methodsBackgroundCSS: {[key: string]: any};

  public teamTextCSS: {[key: string]: any};
  public teamBackgroundCSS: {[key: string]: any};

  public localTextCSS: {[key: string]: any};
  public localBackgroundCSS: {[key: string]: any};

  public enjoyTextCSS: {[key: string]: any};
  public enjoyBackgroundCSS: {[key: string]: any};

  public whyCafferingTextCSS: {[key: string]: any};
  public whyCafferingBackgroundCSS: {[key: string]: any};

  public hashTagTextCSS: {[key: string]: any};
  public hashTagBackgroundCSS: {[key: string]: any};

  constructor() { }

  public ngOnInit(): void {
    this.methodsTextCSS = {
      'color': '#FFF',
      'max-width': '300px'
    };
    this.methodsBackgroundCSS = {
      'background-image': 'url(\'../../../assets/images/bg1.jpg\')',
      'background-attachment': 'fixed'
    };

    this.teamTextCSS = {};
    this.teamBackgroundCSS = {};

    this.localTextCSS = {};
    this.localBackgroundCSS = {};

    this.enjoyTextCSS = {
      'color': '#FFF',
      'max-width': '50%',
    };
    this.enjoyBackgroundCSS = {
      'height': '100vh',
      'background-image': 'url(\'../../../assets/images/bg2.jpg\')',
      'background-attachment': 'fixed'
    };

    this.whyCafferingTextCSS = {
      'color': '#FFF',
    };
    this.whyCafferingBackgroundCSS = {
      'background-color': '#000',
    };

    this.hashTagTextCSS = {
      'color': '#FFF',
      'font-size': '40px',
    };
    this.hashTagBackgroundCSS = {
      'height': '100vh',
      'background-image': 'url(\'../../../assets/images/bg4.jpg\')',
      'background-attachment': 'fixed'
    };
  }
}
