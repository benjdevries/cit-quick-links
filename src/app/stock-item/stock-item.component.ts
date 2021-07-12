import { Component, Input, OnInit } from '@angular/core';
import { DataService, StockItem } from '../data.service';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.scss']
})
export class StockItemComponent implements OnInit {

  @Input() item: StockItem

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  incrementQuantity(): void {
    var newQuantity = this.item.quantity + 1;
    this.ds.updateStockQuantity(this.item.id, newQuantity)
  }

  decrementQuantity(): void {
    if (this.item.quantity > 0){
      var newQuantity = this.item.quantity - 1;
      this.ds.updateStockQuantity(this.item.id, newQuantity)
    }
  }

  deleteItem(): void {
    this.ds.deleteStockItem(this.item.id);
  }

}
