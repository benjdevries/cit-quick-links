import { Component, OnInit } from '@angular/core';
import { DataService, StockItem } from '../data.service';

@Component({
  selector: 'app-stock-window',
  templateUrl: './stock-window.component.html',
  styleUrls: ['./stock-window.component.scss']
})
export class StockWindowComponent implements OnInit {

  items: StockItem[];

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.ds.getAllStockItems().subscribe(items => this.items = items);
  }

  onSubmit(newItem) {
    var item: StockItem = {
      model: newItem.value.model,
      quantity: newItem.value.quantity
    }
    this.ds.createNewItem(item);
    newItem.reset();
  }

}
