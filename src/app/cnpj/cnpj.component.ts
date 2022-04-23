import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CNAES_SECUNDARIOS, CnpjBrasilApi } from '../model/cnpj';
import { CnpjFacade } from './cnpj.facade';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.scss']
})
export class CnpjComponent implements OnInit {

  cnpjForm: FormGroup;
  @Input() dados: CnpjBrasilApi;
  cnaes_secundarios: CNAES_SECUNDARIOS[] = [];

  people: any[] = [
    {
      name: "Douglas  Pace",
      descricao: 'teste'
    },
    {
      name: "Mcleod  Mueller",
      descricao: 'teste'
    },
    {
      name: "Day  Meyers",
      descricao: 'teste'
    },
    {
      name: "Aguirre  Ellis",
      descricao: 'teste'
    },
    {
      name: "Cook  Tyson",
      descricao: 'teste'
    }
  ];

  constructor(
    private cnpjFacade: CnpjFacade,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.getCnpjForm()
  }

  getCnpjForm(){
    this.cnpjForm = this.fb.group({
      cnpj : ['', Validators.required]
    })
  }

  getCNpj(){
    this.cnpjFacade.getCnpj(this.cnpjForm.value.cnpj)
    .subscribe((res: any) => {
      this.dados = res;
      this.cnaes_secundarios = res.cnaes_secundarios
      console.log(this.dados)
    })
  }

}

