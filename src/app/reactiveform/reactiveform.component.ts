import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, Form, FormArray, AbstractControl } from '@angular/forms';
import { min } from 'rxjs/operators';
import { CustomValidator } from './customvalidators';

// export function CustomValidator(control: AbstractControl) {
//   console.log('custom validators');
//   console.log(control.value);
//   if (!control.value.startsWith('arun')) {
//     return {valid: true};
//   }
//   return null;
// }

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent implements OnInit {

  name: FormControl = new FormControl('', [CustomValidator]);

  userDetails: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    lastName: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl('')
    })
  });

  price = 10;

  formBuilder: FormBuilder;

  isChangeValues = false;

  formArrayGroup: FormGroup;


  constructor(formBuilder: FormBuilder) {
    this.formBuilder = formBuilder;
    this.formArrayGroup = this.formBuilder.group({
      formArrays: this.formBuilder.array([
        this.formBuilder.group({
          size: new FormControl('X'),
          price: new FormControl(this.price, [Validators.required, Validators.min(0), Validators.max(100)])
        })
      ])
    });
  }

  ngOnInit() {
    this.userDetails.get('firstName').valueChanges.subscribe((firstName: string) => {
      console.log(firstName);
    });
    this.userDetails.valueChanges.subscribe((user: object) => {
      console.log(user);
    });

    this.userDetails.statusChanges.subscribe((user: string) => {
      console.log(user);
    });

    this.formArrays.valueChanges.subscribe((arrays: any) => {
      console.log(arrays);
      this.isChangeValues = true;
    });

    this.name.valueChanges.subscribe((usere: any) => {
      console.log(usere);
      console.log(this.name.errors);
    });

    this.name.statusChanges.subscribe((usere: any) => {
      console.log(usere);
    });

  }

  submit() {
    console.log(this.userDetails);
  }

  update() {
    this.userDetails.setValue({
      firstName: 'ArunGunal',
      address: {
        street: 'Sevur',
        city: 'arani',
      }
    });
  }

  addUser() {
    this.price = this.price + 5;
    this.formArrays.push(this.formBuilder.group({
      size: new FormControl('Y'),
      price: new FormControl(this.price, [Validators.required, Validators.min(0), Validators.max(100)])
    }));
  }

  get formArrays(): FormArray {
    return this.formArrayGroup.get('formArrays') as FormArray;
  }

  builderSubmit(): void {
    console.log('ping pong');
  }

}
