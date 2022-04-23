import { Injectable } from "@angular/core";
import { CnpjService } from "./api/cnpj.service";

@Injectable({
    providedIn: 'root'
})

export class CnpjFacade {

    constructor( private cnpjService: CnpjService ){}

    getCnpj(cnpj){
        return this.cnpjService.getDadosCnpj(cnpj)
    }

}