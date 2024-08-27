import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    {
        path: '',
        component: FeaturesComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: '/news',
            },
            {
                path: 'news',
                loadChildren: () =>
                    import('./news/news.module').then((m) => m.NewsModule),
            },
            // Refactor if needed
            {
                path: '404',
                component: NotFoundComponent,
            },
            {
                path: '**',
                redirectTo: '/404',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [],
})
export class FeaturesRoutingModule {}
