import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormUppercaseComponent } from './form-uppercase/form-uppercase.component';
import { FormCurrencyComponent } from './form-currency/form-currency.component';
import { JsonPipeComponent } from './json-pipe/json-pipe.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormUppercaseComponent,
    FormCurrencyComponent,
    JsonPipeComponent
  ],
  exports: [
    FormUppercaseComponent,
    FormCurrencyComponent,
    JsonPipeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
