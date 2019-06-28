import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     const xhttp: XMLHttpRequest = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
       document.getElementById('demo').innerHTML = this.responseText;
      }
    };
    xhttp.open('GET', 'ajax_info.txt', true);
    xhttp.send();

  }

}
