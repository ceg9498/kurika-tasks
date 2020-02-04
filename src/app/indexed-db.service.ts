import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const DB_VER = 1;

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  constructor() { }

  initDB(dbName:string, storeNames:string[]){// prepare the observable
    return new Observable((observer)=> {

      if(!('indexedDB' in window)){
        observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
      } else {
        // create or open IndexedDB
        let request = window.indexedDB.open(dbName,DB_VER);

        // handle errors opening DB
        request.onerror = (event:any) => {
          observer.error(request.error);
        };

        // handle any DB upgrades
        request.onupgradeneeded = (event:any) => {
          let db = event.target.result;
          storeNames.forEach((store)=>{
            let upgrade = db.createObjectStore(store, {keyPath: 'id', autoIncrement: true});

            // check for errors when upgrading the store
            upgrade.onerror = () => {
              observer.error(upgrade.error);
            };

            upgrade.onsuccess = () => {
              observer.next("DB upgrade was successful!");
            }
          });
          observer.complete();
        };
      }
    });
  }

  upgradeDB(db:any, storeName:string, error:Function){
    let upgrade = db.createObjectStore('timers', {keyPath: 'id', autoIncrement: true});

    // check for errors when upgrading the store
    upgrade.onerror = () => {
      error(upgrade.error);
    };

    upgrade.onsuccess = () => {
      console.log("DB upgrade was successful!");
    }
  }

  getData(dbName:string, storeName:string):Observable<any> {
    // prepare the observable
    return new Observable((observer)=> {

      if(!('indexedDB' in window)){
        observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
      } else {
        // create or open IndexedDB
        let request = window.indexedDB.open(dbName,DB_VER);

        // handle errors opening DB
        request.onerror = (event:any) => {
          observer.error(request.error);
        };

        // handle any DB upgrades
        request.onupgradeneeded = (event:any) => {
          this.upgradeDB(event.target.result, storeName, observer.error);
        };

        // lastly, the success situation; retrieve the data
        request.onsuccess = (event:any) => {
          let db = request.result;
          let transaction = db.transaction(storeName, 'readonly');
          let store = transaction.objectStore(storeName);
          let objStoreReq = store.getAll();

          // data retrieval successful:
          objStoreReq.onsuccess = (event:any) => {
            // resolve
            event.target.result.forEach((result)=> {
              observer.next(result);
            });
            observer.complete();
          };
          
          // data retrieval error:
          objStoreReq.onerror = (event:any) => {
            observer.error(objStoreReq.error);
          };
        };
      }
    });
  }

  getById(dbName:string, storeName:string, id:any):Observable<any> {
    // prepare the observable
    return new Observable((observer)=> {

      if(!('indexedDB' in window)){
        observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
      } else {
        // create or open IndexedDB
        let request = window.indexedDB.open(dbName,DB_VER);

        // handle errors opening DB
        request.onerror = (event:any) => {
          observer.error(request.error);
        };

        // handle any DB upgrades
        request.onupgradeneeded = (event:any) => {
          this.upgradeDB(event.target.result, storeName, observer.error);
        };

        // lastly, the success situation; retrieve the data
        request.onsuccess = (event:any) => {
          let db = request.result;
          let transaction = db.transaction(storeName, 'readonly');
          let store = transaction.objectStore(storeName);
          let objStoreReq = store.get(id);

          // data retrieval successful:
          objStoreReq.onsuccess = (event:any) => {
            // resolve
            observer.next(event.target.result);
            observer.complete();
          };
          
          // data retrieval error:
          objStoreReq.onerror = (event:any) => {
            observer.error(objStoreReq.error);
          };
        };
      }
    });
  }

  addOrUpdateOne(dbName:string, storeName:string, item:any):Observable<any> {
    return new Observable((observer)=>{

      if(!('indexedDB' in window)){
        observer.error("This browser doesn't support IndexedDB. Data saving will not work.");
      } else {
        let request = window.indexedDB.open(dbName, DB_VER);
        
        // handle errors opening DB
        request.onerror = (event:any) => {
          observer.error(request.error);
        };

        // handle any DB upgrades
        request.onupgradeneeded = (event:any) => {
          this.upgradeDB(event.target.result, storeName, observer.error);
        };

        request.onsuccess = (event:any) => {
          let db = request.result;
          let transaction = db.transaction(storeName, 'readwrite');
          let store = transaction.objectStore(storeName);
          store.put(item);
    
          transaction.oncomplete = (event:any) => {
            // promise resolve here
            observer.next(event.target.result);
          };
    
          transaction.onerror = (event:any) => {
            observer.error(transaction.error);
          };
        };
      }
    });
  }

  deleteOne(dbName:string, storeName:string, id:string|number):Observable<any> {
    return new Observable((observer)=>{

      let request = window.indexedDB.open(dbName, DB_VER);
      
      // handle errors opening DB
      request.onerror = (event:any) => {
        observer.error(request.error);
      };

      // handle any DB upgrades
      request.onupgradeneeded = (event:any) => {
        this.upgradeDB(event.target.result, storeName, observer.error);
      };

      request.onsuccess = (event:any) => {
        let db = request.result;
        let transaction = db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let objStoreReq = store.delete(id);
  
        objStoreReq.onsuccess = (event:any) => {
          // resolve
          observer.next(event.target.result);
        };
  
        objStoreReq.onerror = (event:any) => {
          observer.error(objStoreReq.error);
        };
        transaction.onerror = (event:any) => {
          observer.error(transaction.error);
        };
      };
    });
  }

  deleteAll(dbName:string, storeName:string):Observable<any> {
    return new Observable((observer)=>{

      let request = window.indexedDB.open(dbName, DB_VER);
      
      // handle errors opening DB
      request.onerror = (event:any) => {
        observer.error(request.error);
      };

      // handle any DB upgrades
      request.onupgradeneeded = (event:any) => {
        this.upgradeDB(event.target.result, storeName, observer.error);
      };

      request.onsuccess = (event:any) => {
        let db = request.result;
        let transaction = db.transaction(storeName, 'readwrite');
        let store = transaction.objectStore(storeName);
  
        let objStoreReq = store.clear();
  
        objStoreReq.onsuccess = (event:any) => {
          // resolve
          observer.next(event.target.result);
        };
  
        objStoreReq.onerror = (event:any) => {
          observer.error(objStoreReq.error);
        };
        transaction.onerror = (event:any) => {
          observer.error(transaction.error);
        };
      };
    });
  }
}
