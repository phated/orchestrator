'use strict';

var util = require('util');
var extend = util._extend;
var EventEmitter = require('eventemitter2').EventEmitter2;

function Orchestrator (opts) {
	opts = extend({
		wildcard: true,
		maxListeners: 0,
		tasks: {},
		taskTimeout: 20*1000 // ms until the task fails
	}, opts); // simple shallow clone

	EventEmitter.call(this, opts);
	this.tasks = opts.tasks;
	this.taskTimeout = opts.taskTimeout;
}
util.inherits(Orchestrator, EventEmitter);

Orchestrator.prototype.task = require('./lib/task/task');
Orchestrator.prototype.hasTask = require('./lib/task/hasTask');
Orchestrator.prototype.taskNames = require('./lib/task/taskNames');
Orchestrator.prototype.reset = require('./lib/task/reset');
Orchestrator.prototype.run = require('./lib/run');

module.exports = Orchestrator;
