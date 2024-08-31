import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';

@NgModule({
    declarations: [ChartsComponent],
    imports: [CommonModule, ChartsRoutingModule, FormsModule],
})
export class ChartsModule {}
