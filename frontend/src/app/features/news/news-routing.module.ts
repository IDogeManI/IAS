import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { NewsComponent } from './news.component'

const routes: Routes = [
    {
        path: '',
        component: NewsComponent,
    },
    {
        path: '',
        component: NewsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes), FormsModule],
    exports: [RouterModule],
})
export class NewsRoutingModule {}
