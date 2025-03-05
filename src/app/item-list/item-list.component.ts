import { Component } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent {
  items = ['Apple', 'Banana', 'Cherry'];
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
