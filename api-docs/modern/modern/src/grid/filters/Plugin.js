/**
 * This plugin enables user-defined filters for a grid.
 * @since 6.7.0
 *
 * In general an gridfilters plugin will be passed to the grid:
 *
 *     @example
 *     import { Component } from '@angular/core'
 *              declare var Ext: any;
 *  
 *              Ext.require('Ext.grid.filters');
 *              @Component({
 *                  selector: 'app-root-1',
 *                  styles: [`
 *                          `],
 *                  template: `
 *                    <grid #item
 *                        [height]="600"
 *                        [title]="'Filter Grid Demo'"
 *                        [itemConfig]="{viewModel: true}"
 *                        [plugins]="{gridfilters: true}"
 *                        [store]="store"
 *                        [columns]="columns"
 *                    ></grid>
 *                  `
 *              })
 *              export class AppComponent {
 *                store = Ext.create('Ext.data.Store', {
 *                    fields: ['firstname', 'lastname', 'seniority', 'department', 'hired', 'active'],
 *                    data: [
 *                        {
 *                            firstname:"Michael",
 *                            lastname:"Scott",
 *                            seniority:7,
 *                            department:"Management",
 *                            hired:"01/10/2004",
 *                            active: true
 *                        },
 *                        {
 *                            firstname:"Dwight",
 *                            lastname:"Schrute",
 *                            seniority:2,
 *                            department:"Sales",
 *                            hired:"04/01/2004",
 *                            active: true
 *                        },
 *                        {
 *                            firstname:"Jim",
 *                            lastname:"Halpert",
 *                            seniority:3,
 *                            department:"Sales",
 *                            hired:"02/22/2006",
 *                            active: false
 *                        },
 *                        {
 *                            firstname:"Kevin",
 *                            lastname:"Malone",
 *                            seniority:4,
 *                            department:"Accounting",
 *                            hired:"06/10/2007",
 *                            active: true
 *                        },
 *                        {
 *                            firstname:"Angela",
 *                            lastname:"Martin",
 *                            seniority:5,
 *                            department:"Accounting",
 *                            hired:"10/21/2008",
 *                            active: false
 *                        }
 *                    ]
 *                });
 *
 *                columns = [
 *                    {text: 'First Name', width: 120, dataIndex:'firstname'},
 *                    {text: 'Last Name',  width: 120, dataIndex:'lastname'},
 *                    {text: 'Hired Month', width: 150, dataIndex:'hired'},
 *                    {text: 'Department', width: 200, cell: {bind: '{record.department} ({record.seniority})'}}
 *                ]
 *              }
 * *
 * # Convenience Subclasses
 *
 * There are several menu subclasses that provide default rendering for various data types
 *
 *  - {@link Ext.grid.filters.menu.Boolean}: Renders for boolean input fields
 *  - {@link Ext.grid.filters.menu.Date}: Renders for date input fields
 *  - {@link Ext.grid.filters.menu.Number}: Renders for numeric input fields
 *  - {@link Ext.grid.filters.menu.String}: Renders for string input fields
 *  
 *  These subclasses can be configured in columns as such:
 *
 *
 *      columns: [
 *          {text: 'First Name',  dataIndex:'firstname'},
 *          {text: 'Last Name',  dataIndex:'lastname', filter: 'string'},
 *          {text: 'seniority', dataIndex: 'seniority', filter: 'number'},
 *          {text: 'Hired Month',  dataIndex:'hired', filter: 'date'},
 *          {text: 'Active',  dataIndex:'active', filter: 'boolean'}
 *      ]
 *
 *
 *  Menu items can also be customised as shown below:
 *
 *
 *      columns: [
 *          {
 *              text: 'First Name',
 *              dataIndex:'firstname'
 *          },
 *          {
 *              text: 'Last Name',
 *              filter: {
 *                  type: 'string',
 *                  menu: {
 *                      items: {
 *                          like: {
 *                              placeholder: 'Custom Like...'
 *                          }
 *                      }
 *                  }
 *              }
 *         },
 *         {
 *            text: 'Hired Month',
 *            filter: {
 *              type: 'date',
 *              menu: {
 *                  items: {
 *                      lt: {
 *                          label: 'Custom Less than',
 *                          placeholder: 'Custom Less than...',
 *                          dateFormat: 'd-m-y'
 *                      },
 *                      gt: {
 *                          label: 'Custom Greater than',
 *                          placeholder: 'Custom Greater than...',
 *                          dateFormat: 'd-m-y'
 *                      },
 *                      eq: {
 *                          label: 'Custom On',
 *                          placeholder: 'Custom On...',
 *                          dateFormat: 'd-m-y'
 *                      }
 *                  }
 *              }
 *            }
 *         },
 *         {
 *              text: 'seniority'
 *              filter: {
 *                  type: 'number',
 *                  menu: {
 *                      items: {
 *                          lt: {
 *                              label: 'Custom Less than',
 *                              placeholder: 'Custom Less than...',
 *                          },
 *                          gt: {
 *                              label: 'Custom Greater than',
 *                              placeholder: 'Custom Greater than...',
 *                          },
 *                          eq: {
 *                              label: 'Custom Equal to',
 *                              placeholder: 'Custom Equal to...',
 *                          }
 *                      }
 *                  }
 *              }
 *          },
 *          {
 *              text: 'Active',
 *              filter: {
 *                  type: 'boolean',
 *                  menu: {
 *                      items: {
 *                          yes: {
 *                              text: 'Custom True'
 *                          },
 *                          no: {
 *                              text: 'Custom False'
 *                          }
 *                      }
 *                  }
 *              }             
 *          }
 *      ]
 *
 */

 /**
 * @cfg {String/Object} activeFilter
 * This config holds the current filter. This config is stateful.
 * @private
 */
