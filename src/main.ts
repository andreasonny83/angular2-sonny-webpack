/**
 * angular2-sonny-webpack
 *
 * Copyright 2016, Andrea Sonny, All rights reserved.
 *
 * @author: Andrea Sonny <andreasonny83@gmail.com>
 */

/*
 * Angular bootstraping
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode }         from '@angular/core';

import { AppModule }              from './app';

if ('production' === ENV) {
 // Production
 enableProdMode();
}

/*
* Bootstrap our Angular app with a top level NgModule
*/
platformBrowserDynamic().bootstrapModule(AppModule);
