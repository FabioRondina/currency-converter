import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter/converter.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  { path: '',  component : ConverterComponent },
  { path: 'converter',  component : ConverterComponent },
  { path: '**', redirectTo: '', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
  , exports: [RouterModule]
})
export class AppRoutingModule { }
