declare var Ext: any;
import { Component, VERSION } from '@angular/core'
import { Router } from '@angular/router'

Ext.require([
  'Ext.layout.*',
//  'Ext.MessageBox',
//  'Ext.Toast',
//  'Ext.panel.Collapser',
  'Ext.data.TreeStore'
])

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styles: [``]
})
export class AppComponent {
  isPhone = Ext.platformTags.phone;
  title = 'Sencha ExtAngular 6.7 Boilerplate - Angular v' + VERSION.full

  constructor(private router: Router) {}

  showAppMenu: boolean = false;
  toggleAppMenu = () => {
    this.showAppMenu = !this.showAppMenu
  }

  onHideAppMenu = () => {
    this.showAppMenu = false
  }

  navigate = (event) => {
    var record = event.record;
    this.router.navigate([record.data.id])
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
