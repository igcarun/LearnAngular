import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

export interface User {
  name: string;
}

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  autoCompletes = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  myAutoCompletes = new FormControl();
  myOptions: User[] = [{name: 'Arun'}, {name: 'Gunal'}, {name: 'Venkat'}, {name: 'Jai'}, {name: 'GunaSeelan'}];
  myFilteredOptions: Observable<User[]>;
  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.autoCompletes.valueChanges.pipe(startWith(''), map(value => this.filters(value)));
    this.myFilteredOptions = this.myAutoCompletes.valueChanges.pipe(
      startWith(''), map(value => {
        console.log('-----' + value + '-----');
        return typeof value === 'string' ? value : value.name;
      }),
      map(value => {
        // console.log('---------' + value + '------------');
        // console.log(this.myOptions);
        // console.log(this.myOptions.slice());
        return value ? this.myFilters(value) : this.myOptions.slice();
      })
    );
  }

  filters(value: string): string[] {
    const filter: string = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filter));
  }

  displayfns(user: User): string | undefined {
    return user ? user.name : undefined;
  }

  myFilters(value: string): User[] {
    const filter: string = value.toLowerCase();
    return this.myOptions.filter(option => {
      return option.name.toLowerCase().indexOf(filter) === 0;
    });
  }
}
