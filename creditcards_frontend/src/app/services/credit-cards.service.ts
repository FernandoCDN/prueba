import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor(private http: HttpClient) {}

  getCreditCards(clientIdentification:any): Observable<any>
  {
    let params = new HttpParams();
    
    params = params.append('client', clientIdentification);

    return this.http.get("http://localhost:8081/scotiabank/api/CreditRiskApplication/getClientsRiskEvaluationByProduct",
    {
      params: params
    });
  }

  getAllCreditCards(): Observable<any>
  {
    let params = new HttpParams();
    
    return this.http.get("http://localhost:8081/Carvajal/creditcards/api/cards/getAll",
    {
      params: params
    });
  }

}
