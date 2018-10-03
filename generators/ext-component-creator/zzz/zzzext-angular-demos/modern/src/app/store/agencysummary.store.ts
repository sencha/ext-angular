declare var Ext: any;
import {ExtClass} from '@gusmano/ext-angular-modern/main';

export class AgencySummaryStore extends ExtClass {
	constructor (createConfig: any) {
		let className: any = 'AgencySummaryStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad:   true,
			proxy: {
				type: 'ajax',
				reader: {
					type: 'json',
					implicitIncludes: false
				},
				url: 'assets/resource/app/data/AgencySummary.json'
			},
			fields: [
				{name: 'agencyName'},
				{name: 'agencyCode'}
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}