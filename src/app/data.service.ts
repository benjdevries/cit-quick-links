import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fs: AngularFirestore) { }

  // READ all links
  getAllLinks(): Observable<Link[]> {
    return this.fs.collection<Link>('links').snapshotChanges().pipe(
      map(actions => {
        return actions.map(p => {
          const list = p.payload.doc;
          const id = list.id;
          return { id, ...list.data() as Link };
        });
      })
    )
  }

  // READ all stock items
  getAllStockItems(): Observable<StockItem[]> {
    return this.fs.collection<StockItem>('stockroom').snapshotChanges().pipe(
      map(actions => {
        return actions.map(p => {
          const list = p.payload.doc;
          const id = list.id;
          return { id, ...list.data() as StockItem };
        });
      })
    )
  }

  // CREATE new stock items
  createNewItem(newItem: StockItem): void {
    this.fs.collection<StockItem>('stockroom').add(newItem)
  }

  // UPDATE stock quantities
  updateStockQuantity(id: string, newQuantity: number): void {
    this.fs.collection<StockItem>('stockroom').doc(id).update({
      quantity: newQuantity
    });
  }

  // DELETE stock items
  deleteStockItem(id: string): void {
    this.fs.collection<StockItem>('stockroom').doc(id).delete();
  }

}

  

export interface Link {id?: string, name: string, url: string}
export interface StockItem {id?: string, model: string, quantity: number}
