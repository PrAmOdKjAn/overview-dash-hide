/*
  No overview On Activities Overview
  GNOME Shell 45+ extension
  Contributors: @pramodkjan
  License: GPL v3
*/

'use strict'

import * as Main from 'resource:///org/gnome/shell/ui/main.js';

import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class OverviewDashHideExtension extends Extension {

    constructor(metadata) {
		super(metadata);
    	this.dash = Main.overview.dash;
    }

    enable() {
    	if(this.dash) {
	    this.dash.hide();
    	}
    }

    disable() {
    	if(this.dash) {
	    this.dash.show();
    	}
    }
}
