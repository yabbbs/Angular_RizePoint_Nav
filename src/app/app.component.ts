import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rizepoint';
  menu = [
    {
    title: 'Define',
    children: ['blah', 'blah', 'blah']
    },
    {
      title: 'Gather',
      children: ['blah', 'blah', 'blah']
    },
    {
      title: 'See',
      children: ['blah', 'blah', 'blah', 'blah']
    },    
    {
      title: 'Act',
      children: ['blah', 'blah', 'blah']
    },
    {
      title: 'Admin',
      children: ['blah', 'blah', 'blah']
    }
  ];
  togglers = {};
  openChildren(i){
    console.log(i)
    // this.togglers[i]=!this.togglers
  }
}