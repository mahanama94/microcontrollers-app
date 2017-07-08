import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {AddPage} from "../add/add";
import {Events} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab3Root = AddPage;
  tab2Root = AboutPage;

  constructor(public events: Events) {

  }

  homeSelect(){
    this.events.publish('HomeSelect');
  }
}
