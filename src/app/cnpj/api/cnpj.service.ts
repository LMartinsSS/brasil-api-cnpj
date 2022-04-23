import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CnpjService {

    constructor( private http: HttpClient ){}

        getDadosCnpj(cnpj){
            return this.http.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`)
        }

}