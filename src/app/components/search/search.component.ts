import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() searchEvent = new EventEmitter<string>();

  onSearch(search: string): void {
    this.searchEvent.emit(search);
  }
}
