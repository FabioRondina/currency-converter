import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConverterService } from '../services/converter.service';
import { ConvertEntity} from './model/convertEntity';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{

  converterFormGroup!: FormGroup;
  currencyList!: string[];
  convertEntity: ConvertEntity;
  convertedAmount : number = 0 ;

  constructor(
    private _converteService : ConverterService
  )
  {}

  ngOnInit(){
    this.createFormGroup();
    // get currency dropdown

    this._converteService.getCurrencyList().subscribe(currencyList => { this.currencyList = currencyList})
  }


  createFormGroup(): void{
    this.converterFormGroup = new FormGroup({
      fromCurrency: new FormControl('', Validators.required),
      fromAmount: new FormControl(0, Validators.required),
      toCurrency: new FormControl('', Validators.required)
    })
  }


 convertAmount(): void{

  if(this.converterFormGroup.valid){
    this.convertEntity = this.converterFormGroup.value
    this._converteService.getConvertedAmount(this.convertEntity.from, this.convertEntity.to, this.convertEntity.fromAmount)
    .subscribe(response => { this.convertedAmount = response['value']});   
    
  }
 }
  
}
