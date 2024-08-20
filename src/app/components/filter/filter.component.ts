import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Output() filterEvent = new EventEmitter<any>();

  countries = ['us', 'uk', 'ca'];
  selectedCountry: string = '';

  onFilterChange(country: string, from: string, to: string): void {
    console.log(country)
    this.selectedCountry = country
    this.filterEvent.emit({ country, from, to });
  }
}
