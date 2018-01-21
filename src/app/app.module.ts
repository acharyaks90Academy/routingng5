import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SalesComponent } from './sales/sales.component';

import { RouterModule , Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: 'sales',
    component: SalesComponent
   },
  {
    path: 'user',
    component: UserProfileComponent
  },

  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
  { path: '**',
    component: PageNotFoundComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    SalesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
