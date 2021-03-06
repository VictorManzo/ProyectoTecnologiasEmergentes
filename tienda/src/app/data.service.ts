import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class DataService {

  constructor(private http:Http) { }

getData(){

return this.http.get(" https://tiendabixos.firebaseio.com/.json")
.map((response:Response)=>response.json());
}

SendData(data:any){
const datos=JSON.stringify(data)
return this.http.put(" https://tiendabixos.firebaseio.com/.json",datos)
.map((response:Response)=>response.json());
}

}
