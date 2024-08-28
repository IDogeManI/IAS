import { NgForOf } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';

@NgModule({
    imports: [NewsRoutingModule, FormsModule, NgForOf],
    declarations: [NewsComponent],
    exports: [NewsComponent],
})
export class NewsModule {}
