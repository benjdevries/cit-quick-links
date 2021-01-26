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

}

export interface Link {id?: string, name: string, url: string}
