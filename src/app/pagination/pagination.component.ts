import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  currentPage = 1;
  itemsPerPage = 5;
  data = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);

  get paginatedData() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.data.slice(start, start + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

}
