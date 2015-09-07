/**
 * Created by lucian on 07/09/15.
 */

'use strict';
var test = require('tape');
var eslint = require('eslint');
var tempWrite = require('temp-write');
var isPlainObj = require('is-plain-object');

function runEslint(str, conf) {
	var linter = new eslint.CLIEngine({
		useEslintrc: false,
		configFile: tempWrite.sync(JSON.stringify(conf))
	});

	return linter.executeOnText(str).results[0].messages;
}

test('angular rules exist', function (t) {
	var conf = require('../');

	t.ok(isPlainObj(conf), 'a configuration object is returned');
	t.ok(isPlainObj(conf.rules), 'the configuration object has rules defined');
	t.end();
});

test('angular rules apply', function (t) {
	var conf = require('../');

	var errors = runEslint('var app = angular.module(\'app\', [\'ngAnimate\']); app.controller(\'SomeCtrl\', function() {});', conf);

	t.is(errors[0].ruleId, 'angular/module-setter');
	t.is(errors[1].ruleId, 'angular/module-getter');
	t.is(errors[2].ruleId, 'angular/controller-name');

	t.end();
});
