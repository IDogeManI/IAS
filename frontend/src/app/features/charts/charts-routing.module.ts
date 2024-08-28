import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';

const routes: Routes = [
    {
        path: '',
        component: ChartsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    exports: [RouterModule],
})
export class ChartsRoutingModule {}
