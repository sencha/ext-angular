declare var Ext: any;
import {ExtClass} from '../../ext-angular-classic/ExtClass';

export class CandidateCalendarStore extends ExtClass {
	constructor (createConfig?: any) {
		let className: any = 'CandidateCalendarStore';
		let extend: any = 'Ext.data.Store';
		let defineConfig: any = {
			autoLoad: true,
			proxy: { type: 'memory' },
			data: [
				{ id: 2, title: 'Donald', eventStore: { proxy: { type: 'ajax', url: 'assets/resources/app/calendars/DonaldTrump.json' } } },
				{ id: 3, title: 'Hillary', eventStore: { proxy: { type: 'ajax', url: 'assets/resources/app/calendars/HillaryClinton.json' } } }
			]
		};

		super(className, extend, defineConfig, createConfig);
	}
}