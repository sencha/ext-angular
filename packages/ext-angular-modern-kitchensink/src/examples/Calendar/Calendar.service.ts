import { Injectable } from '@angular/core';

declare var Ext: any;
declare var KitchenSink: any;

@Injectable()
export class CalendarService {


	constructor() {
		console.log("Constructor called");
		this.init();
	}

	init = function () {

		Ext.define('KitchenSink.data.calendar.Util', {
			singleton: true,

			filter: function (data, start, end) {
				var R = Ext.calendar.date.Range,
					range = new R(start, end);

				return Ext.Array.filter(data, function (event) {
					return range.overlaps(R.fly(event.startDate, event.endDate));
				});
			},

			find: function (base, d, incr) {
				var D = Ext.Date;

				base = D.clone(base);

				while (base.getDay() !== d) {
					base = D.add(base, D.DAY, incr);
				}
				return base;
			},

			findNext: function (base, d) {
				return this.find(base, d, 1);
			},

			findPrevious: function (base, d) {
				return this.find(base, d, -1);
			},

			generateIds: function (data, start) {
				Ext.Array.forEach(data, function (item) {
					item.id = ++start;
				});
				return data;
			},

			generateOutput: function (data, calendarId, ctx) {
				var filtered = this.filter(data, ctx.params.startDate, ctx.params.endDate);
				return this.prepare(filtered, calendarId);
			},

			prepare: function (data, calendarId) {
				var D = Ext.Date;

				return Ext.Array.map(data, function (event) {
					event = Ext.apply({}, event);
					event.calendarId = calendarId;
					event.startDate = D.format(D.localToUtc(event.startDate), 'C');
					event.endDate = D.format(D.localToUtc(event.endDate), 'C');
					return event;
				});
			},

			setDate: function (base, d, h, m) {
				var ret = Ext.Date.clone(base);
				if (d !== undefined) {
					ret.setDate(d);
				}

				if (h !== undefined) {
					ret.setHours(h);
				}

				if (m !== undefined) {
					ret.setMinutes(m);
				}
				return ret;
			},

			setHours: function (base, h, m) {
				return this.setDate(base, undefined, h, m);
			}
		});

		Ext.define('KitchenSink.data.calendar.Full', {}, function () {

			function halfhour() {
				return Math.random() < 0.5 ? 30 : 0;
			}

			function getRandom(arr) {
				var n = N.randomInt(0, arr.length - 1);
				return arr[n];
			}

			var places = ['London', 'Paris', 'Munich', 'Amsterdam', 'Rome'],
				people = ['Louis', 'Mitch', 'Ava', 'Shelly', 'Vicki', 'Stefanie', 'Jason', 'Elena', 'Randy', 'Fred', 'Debbie'],
				teams1 = ['Release', 'QA', 'Development', 'PM', 'R&D'],
				teams2 = ['Marketing', 'Sales'],
				clients1 = ['Client A', 'Client B', 'Client C', 'Client D'],
				clients2 = ['Client E', 'Client F', 'Client G', 'Client H'],
				workActions = ['Meet', 'Call', 'Review'],
				leisure = ['Hike', 'Gallery', 'Gaming', 'Theatre', 'Bowling', 'Concert'];

			var U = KitchenSink.data.calendar.Util,
				D = Ext.Date,
				N = Ext.Number,
				now = D.clearTime(new Date(), true),
				start = D.subtract(D.subtract(now, D.YEAR, 1), D.DAY, 15),
				end = D.add(D.add(now, D.YEAR, 1), D.DAY, 15),
				data = {
					work: (function () {
						var current = D.clone(start),
							data = [],
							incr, r, n;

						while (current < end) {
							incr = 1;

							if (!D.isWeekend(current)) {
								r = Math.random();
								if (r > 0.25) {
									// Morning event
									if (Math.random() < 0.5) {
										n = N.randomInt(8, 12);
										data.push({
											title: getRandom(workActions) + ' with ' + getRandom(teams1),
											startDate: U.setDate(current, undefined, n, halfhour()),
											endDate: U.setDate(current, undefined, N.randomInt(n + 1, 13), halfhour())
										});
									}

									// Afternoon event
									if (Math.random() > 0.5) {
										n = N.randomInt(14, 18);
										data.push({
											title: getRandom(workActions) + ' with ' + getRandom(teams1),
											startDate: U.setDate(current, undefined, n, halfhour()),
											endDate: U.setDate(current, undefined, N.randomInt(n + 1, 18), halfhour())
										});
									}
								} else if (r > 0.2) {
									incr = D.FRIDAY - current.getDay() + 1;
									data.push({
										title: 'In ' + getRandom(places) + ' office',
										startDate: current,
										endDate: D.add(current, D.DAY, incr),
										allDay: true
									});

								}
							}
							current = D.add(current, D.DAY, incr);
						}
						return U.generateIds(data, 3000);
					})(),
					personal: (function () {
						var current = D.clone(start),
							data = [],
							incr, r, n;

						while (current < end) {
							incr = 1;

							if (D.isWeekend(current)) {
								r = Math.random();
								if (current.getDay() === D.SATURDAY && r < 0.1) {
									data.push({
										title: 'Weekend away in ' + getRandom(places),
										startDate: current,
										endDate: D.add(current, D.DAY, 2),
										allDay: true
									});
									incr = 2;
								} else if (r < 0.3) {
									data.push({
										title: getRandom(leisure) + ' with ' + getRandom(people),
										startDate: current,
										endDate: D.add(current, D.DAY, 1),
										allDay: true
									});
								} else if (r < 0.7) {
									n = N.randomInt(9, 18);
									data.push({
										title: getRandom(leisure) + ' with ' + getRandom(people),
										startDate: U.setDate(current, undefined, n, halfhour()),
										endDate: U.setDate(current, undefined, N.randomInt(n + 1, 21), halfhour())
									});
								}
							} else {
								if (Math.random() > 0.7) {
									data.push({
										title: 'Dinner with ' + getRandom(people),
										startDate: U.setDate(current, undefined, 19, 30),
										endDate: U.setDate(current, undefined, 22)
									});
								}
							}
							current = D.add(current, D.DAY, incr);
						}

						return U.generateIds(data, 6000);
					})(),
					projectZeus: (function () {
						var current = D.clone(start),
							data = [],
							deliverables = 0,
							incr, r, n;

						while (current < end) {
							incr = 1;

							if (!D.isWeekend(current)) {
								if (current.getDay() === D.TUESDAY || current.getDay() === D.THURSDAY) {
									data.push({
										title: 'Scrum',
										startDate: U.setDate(current, undefined, 9),
										endDate: U.setDate(current, undefined, 9, 30)
									});
								}

								r = Math.random();
								if (r > 0.6) {
									n = N.randomInt(11, 15);
									data.push({
										title: getRandom(workActions) + ' with ' + getRandom(teams2),
										startDate: U.setDate(current, undefined, n, halfhour()),
										endDate: U.setDate(current, undefined, N.randomInt(n + 1, 17), halfhour())
									});
									if (r > 0.9) {
										++deliverables;
										data.push({
											title: 'Deliverable ' + deliverables + ' Due',
											allDay: true,
											startDate: current,
											endDate: D.add(current, D.DAY, 1)
										});
									}
								}
							}

							current = D.add(current, D.DAY, incr);
						}

						return U.generateIds(data, 6000);
					})()
				};



			Ext.ux.ajax.SimManager.register({
				'/KitchenSink/CalendarFull': {
					type: 'json',
					data: [{
						id: 1,
						title: 'Work Calendar',
						eventStore: {
							proxy: {
								type: 'ajax',
								url: '/KitchenSink/CalendarFullEvents/1'
							}
						}
					}, {
						id: 2,
						title: 'Personal',
						eventStore: {
							proxy: {
								type: 'ajax',
								url: '/KitchenSink/CalendarFullEvents/2'
							}
						}
					}, {
						id: 3,
						title: 'Project Zeus',
						eventStore: {
							proxy: {
								type: 'ajax',
								url: '/KitchenSink/CalendarFullEvents/3'
							}
						}
					}]
				},
				'/KitchenSink/CalendarFullEvents/1': {
					type: 'json',
					data: function (ctx) {
						return U.generateOutput(data.work, 1, ctx);
					}
				},
				'/KitchenSink/CalendarFullEvents/2': {
					type: 'json',
					data: function (ctx) {
						return U.generateOutput(data.personal, 2, ctx);
					}
				},
				'/KitchenSink/CalendarFullEvents/3': {
					type: 'json',
					data: function (ctx) {
						return U.generateOutput(data.projectZeus, 3, ctx);
					}
				}
			});

			Ext.define('KitchenSink.data.calendar.Day', {
			}, function () {
				var U = KitchenSink.data.calendar.Util,
					D = Ext.Date,
					today = D.clearTime(new Date(), true),
					tomorrow = D.add(today, D.DAY, 1),
					data = {
						work: (function () {
							var ret = [];

							ret.push({
								title: 'All Day',
								allDay: true,
								startDate: U.setHours(today, 0, 0),
								endDate: U.setHours(tomorrow, 0, 0)
							});

							ret.push({
								title: 'Daily Stand Up',
								startDate: U.setHours(today, 8, 30),
								endDate: U.setHours(today, 9, 0)
							}, {
									title: 'Client A Meeting',
									startDate: U.setHours(today, 10, 0),
									endDate: U.setHours(today, 11, 30)
								}, {
									title: 'Team Lunch',
									startDate: U.setHours(today, 12, 30),
									endDate: U.setHours(today, 13, 30)
								}, {
									title: 'Dev Meeting',
									startDate: U.setHours(today, 14, 0),
									endDate: U.setHours(today, 15, 0)
								}, {
									title: 'PM Meeting',
									startDate: U.setHours(today, 14, 30),
									endDate: U.setHours(today, 15, 30)
								}, {
									title: 'QA Meeting',
									startDate: U.setHours(today, 15, 0),
									endDate: U.setHours(today, 16, 30)
								});

							ret.push({
								title: 'Hackathon',
								startDate: U.setHours(tomorrow, 9, 30),
								endDate: U.setHours(tomorrow, 16, 30)
							}, {
									title: 'QA Meeting',
									startDate: U.setHours(tomorrow, 11, 0),
									endDate: U.setHours(tomorrow, 11, 30)
								}, {
									title: 'Client B Meeting',
									startDate: U.setHours(tomorrow, 11, 30),
									endDate: U.setHours(tomorrow, 13, 0)
								}, {
									title: 'Review Design Concepts',
									startDate: U.setHours(tomorrow, 15, 30),
									endDate: U.setHours(tomorrow, 17, 0)
								});

							return U.generateIds(ret, 100);
						})(),
						personal: (function () {
							var ret = [];

							ret.push({
								title: 'Call Accountant',
								startDate: U.setHours(today, 8, 0),
								endDate: U.setHours(today, 8, 30)
							}, {
									title: 'Gym',
									startDate: U.setHours(today, 17, 30),
									endDate: U.setHours(today, 18, 30)
								}, {
									title: 'Dinner with Susan',
									startDate: U.setHours(today, 19, 0),
									endDate: U.setHours(today, 21, 30)
								});

							ret.push({
								title: 'Gym',
								startDate: U.setHours(tomorrow, 7, 30),
								endDate: U.setHours(tomorrow, 8, 30)
							}, {
									title: 'Weekly pickup game',
									startDate: U.setHours(tomorrow, 18, 0),
									endDate: U.setHours(tomorrow, 19, 30)
								});

							return U.generateIds(ret, 200);
						})()
					};

				Ext.ux.ajax.SimManager.register({
					'/KitchenSink/CalendarDays': {
						type: 'json',
						data: [{
							id: 1,
							title: 'Work',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarDaysEvents/1'
								}
							}
						}, {
							id: 2,
							title: 'Personal',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarDaysEvents/2'
								}
							}
						}]
					},
					'/KitchenSink/CalendarDaysEvents/1': {
						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.work, 1, ctx);
						}
					},
					'/KitchenSink/CalendarDaysEvents/2': {
						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.personal, 2, ctx);
						}
					}
				});
			});




			Ext.define('KitchenSink.data.calendar.Validation', {
			}, function () {
				var U = KitchenSink.data.calendar.Util,
					D = Ext.Date,
					data = {
						work: (function () {
							var today = D.clearTime(new Date(), true),
								tomorrow = D.add(today, D.DAY, 1),
								ret = [];

							ret.push({
								title: 'Not draggable',
								startDate: U.setHours(today, 9),
								endDate: U.setHours(today, 10)
							}, {
									title: 'Not draggable/resizable',
									startDate: U.setHours(today, 13),
									endDate: U.setHours(today, 14)
								}, {
									title: 'Not resizable',
									startDate: U.setHours(tomorrow, 9),
									endDate: U.setHours(tomorrow, 10)
								}, {
									title: 'Unrestricted',
									startDate: U.setHours(tomorrow, 13),
									endDate: U.setHours(tomorrow, 14)
								});

							return U.generateIds(ret, 0);
						})()
					};

				Ext.ux.ajax.SimManager.register({
					'/KitchenSink/CalendarValidation': {
						type: 'json',
						data: [{
							id: 1,
							title: 'Work',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarValidation/1'
								}
							}
						}]
					},
					'/KitchenSink/CalendarValidation/1': {
						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.work, 1, ctx);
						}
					}
				});
			})


			Ext.define('KitchenSink.data.calendar.Timezone', {}, function () {
				var U = KitchenSink.data.calendar.Util,
					D = Ext.Date,
					data = {
						work: (function () {
							var today = D.clearTime(new Date(), true),
								tomorrow = D.add(today, D.DAY, 1),
								ret = [];

							ret.push({
								title: 'Write unit tests',
								allDay: true,
								startDate: U.setHours(today, 0, 0),
								endDate: U.setHours(tomorrow, 0, 0)
							}, {
									title: 'Paris Client Meeting',
									startDate: U.setHours(today, 8, 30),
									endDate: U.setHours(today, 9, 30)
								}, {
									title: 'Sydney Team Meeting',
									startDate: U.setHours(today, 21, 0),
									endDate: U.setHours(today, 22, 0)
								});

							return U.generateIds(ret, 0);
						})()
					};

				Ext.ux.ajax.SimManager.register({
					'/KitchenSink/CalendarTimezone': {
						type: 'json',
						data: [{
							id: 1,
							title: 'Work',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarTimezone/1'
								}
							}
						}]
					},
					'/KitchenSink/CalendarTimezone/1': {
						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.work, 1, ctx);
						}
					}
				});
			});


			Ext.define('Kitchensink.data.calendar.Week', {}, function () {
				var U = KitchenSink.data.calendar.Util,
					D = Ext.Date,
					today = D.clearTime(new Date(), true),
					start = U.findPrevious(today, 0),
					data = {
						work: (function () {
							var sd = start.getDate(),
								data = [];
							data.push({
								title: 'Release Meeting',
								startDate: U.setDate(start, sd + 1, 9, 30),
								endDate: U.setDate(start, sd + 1, 11, 0)
							}, {
									title: 'Ben Farewell Lunch',
									startDate: U.setDate(start, sd + 2, 12, 0),
									endDate: U.setDate(start, sd + 2, 14, 0)
								}, {
									title: 'Client A Meeting',
									startDate: U.setDate(start, sd + 3, 14, 0),
									endDate: U.setDate(start, sd + 3, 16, 0)
								}, {
									title: 'Client B Meeting',
									startDate: U.setDate(start, sd + 4, 10, 0),
									endDate: U.setDate(start, sd + 4, 11, 30)
								}, {
									allDay: true,
									title: 'Help Web Team',
									startDate: U.setDate(start, sd + 4, 0, 0),
									endDate: U.setDate(start, sd + 6, 0, 0)
								})
							return U.generateIds(data, 6000);
						})(),
						personal: (function () {
							var ret = [],
								d;

							ret.push({
								title: 'Mom Bday Party',
								startDate: U.setHours(start, 11, 0),
								endDate: U.setHours(start, 16, 0)
							});

							d = D.add(start, D.DAY, 3);

							ret.push({
								title: 'Book Group',
								startDate: U.setHours(d, 18, 30),
								endDate: U.setHours(d, 19, 30)
							});

							return U.generateIds(ret, 200);
						})()
					};
				Ext.ux.ajax.SimManager.register({
					'/KitchenSink/CalendarWeek': {
						type: 'json',
						data: [{
							id: 1,
							title: 'Work',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarWeekEvents/1'
								}
							}
						}, {
							id: 2,
							title: 'Personal',
							eventStore: {
								proxy: {
									type: 'ajax',
									url: '/KitchenSink/CalendarWeekEvents/2'
								}
							}
						}]
					},
					'/KitchenSink/CalendarWeekEvents/1': {

						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.work, 1, ctx);
						}
					},
					'/KitchenSink/CalendarWeekEvents/2': {
						type: 'json',
						data: function (ctx) {
							return U.generateOutput(data.personal, 2, ctx);
						}
					}
				});
			});






		});


	}



}
