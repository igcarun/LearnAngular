import { Component, OnInit, HostListener } from '@angular/core';
import { TestService } from './services/test.service';
import { Datas } from './entities/Datas';
import { HttpResponse } from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learnDirective';
  profileGroup = new FormGroup({
    first: new FormControl('', [Validators.required, Validators.minLength(3)]),
    last: new FormControl('', Validators.required)
  });
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    sessionStorage.setItem('appadi podu', 'hey intha');
    localStorage.setItem('parren', 'local storeagea');
    // this.testService.getRapid().subscribe((confis: Datas) => {
    //   console.log(confis);
    // }, (error: any) => {
    //     console.log('error occured');
    // });

    // this.testService.getPostman().subscribe((confis: Datas) => {
    //   console.log(confis);
    // }, (error: any) => {
    //   console.log('error occured post users');
    // });

  }

  submit() {
    console.log(this.profileGroup);
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: any): void {
      console.log(new Date());
  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: any): void {
     console.log('appadi podu');
  }

}
