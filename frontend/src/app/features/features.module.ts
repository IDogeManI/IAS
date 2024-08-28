import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [CommonModule, FeaturesRoutingModule, HeaderComponent],
    declarations: [FeaturesComponent],
    providers: [],
})
export class FeaturesModule {}
