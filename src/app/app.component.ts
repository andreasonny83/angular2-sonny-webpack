/**
 * angular2-sonny-webpack
 *
 * Copyright 2016, Andrea Sonny, All rights reserved.
 *
 * @author: Andrea Sonny <andreasonny83@gmail.com>
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  styleUrls: ['./app.component.css'],
  template: `
    <nav>
      <span>
        <a [routerLink]=" ['./home'] ">
          Home
        </a>
      </span>
    </nav>

    <main>
      <router-outlet></router-outlet>
    </main>

    <footer>
      <span>Copyright 2016, <a [href]="url">andreasonny83</a>, All rights reserved.</span>
    </footer>
  `
})
export class AppComponent extends OnInit {
  url = 'https://github.com/andreasonny83';

  ngOnInit() {
    console.log('App Started');
  }
}
