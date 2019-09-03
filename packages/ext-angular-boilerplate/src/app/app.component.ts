declare var Ext: any;
import { Component, VERSION } from '@angular/core'
import { Router } from '@angular/router'
import { NgZone } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: [``]
})
export class AppComponent {
  isPhone = Ext.platformTags.phone;
  title = 'Sencha ExtAngular 7.0 Boilerplate - Angular v' + VERSION.full

  constructor(private router: Router, public zone: NgZone) {}

  showAppMenu: boolean = false;
  toggleAppMenu = () => {
      console.log('toggle')
    this.showAppMenu = !this.showAppMenu
  }

  onHideAppMenu = () => {
    this.showAppMenu = false
  }

  navigate = (event) => {
    var record = event.record;
    var me = this
    this.zone.run(function () {
        me.router.navigate([record.data.id])
    })
  }

  navStore = {
    root: {
      children: [
        { id: '/', text: 'Home', iconCls: 'x-fa fa-home', leaf: true },
        { id: '/about', text: 'About', iconCls: 'x-fa fa-info', leaf: true }
      ]
    }
  }

  responsiveConfig = {
    medium: {
      micro: true,
      width: 56
    },
    large: {
      micro: false,
      width: 200
    }
  }

}
