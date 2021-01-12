import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export default class UserServiceMock {
  private _httpClient: HttpClient;

  /**
   * Getter HttpClient
   * @return {HttpClient}
   */

   public get httpClient() : HttpClient {
     return this._httpClient;
   }

   /**
    * Setter HttpClient
    * @param {HttpClient} value
    */
   public set httpClient(value: HttpClient){
     this._httpClient = value
   }

   getAllUsers(): Observable<any>{
     return null
   }
   getMaleUsers(): Observable<any>{
     return null;
   }
   getFemaleUsers():Observable<any>{
     return null;
   }
}
