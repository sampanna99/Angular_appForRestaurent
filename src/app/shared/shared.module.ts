import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/Common';
import {DropdownDirective} from './dropdown.directive'
@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule{}