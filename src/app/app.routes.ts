// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { LayoutComponent } from './pages/layout/layout.component';
// import {LocationStrategy, HashLocationStrategy} from '@angular/common';

// export const routes: Routes = [
//     {
//         path: '',
//         redirectTo: 'Home',
//         pathMatch: 'full'
//     },
//     { 
//         path: 'Home', 
//         component: LayoutComponent 
//     }
//  ];
 
// export const routing: ModuleWithProviders = RouterModule.forRoot(routes,{useHash: true});




import { NgModule } from '@angular/core';
import { ExtraOptions,Routes, RouterModule} from "@angular/router";
 
import { LayoutComponent } from './pages/layout/layout.component';


const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    { 
        path: 'Home', 
        component: LayoutComponent 
    }
];

const config: ExtraOptions = {
    useHash: true,
};

  @NgModule({
    imports: [RouterModule.forRoot(ROUTES, config)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {
  }  