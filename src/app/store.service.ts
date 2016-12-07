import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Item, Id } from "./project.model";

@Injectable()
export class StoreService {
  private store = new BehaviorSubject<any>({});

  getStore$(prop: string): Observable<any> {
    return this.store
      .pluck(prop)
      .share()
      .distinctUntilChanged();
  }

  update(prop: string, value: any) {
    let state = this.store.getValue();
    this.store.next(Object.assign({}, state, {[prop]: value}));
  }

  addItem(prop: string, item: Item) {
    let state = this.store.getValue();
    let collection = state[prop] || [];
    this.store.next(Object.assign({}, state, {[prop]: [...collection, item]}));
  }

  updateItem(prop: string, item: Item) {
    let state = this.store.getValue();
    let collection = state[prop] || [];
    this.store.next(Object.assign({}, state, {
      [prop]: collection.map(member => {
        if (member.id == item.id) {
          return item;
        } else {
          return member;
        }
      })
    }));
  }

  removeItem(prop: string, id: Id) {
    let state = this.store.getValue();
    let collection = state[prop] || [];
    this.store.next(Object.assign({}, state, collection.filter(item => item.id != id)));
  }
}
