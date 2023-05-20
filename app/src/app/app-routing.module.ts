import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDarkComponent } from './access-dark/access-dark.component';
import { ShopDarkComponent } from './shop-dark/shop-dark.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'access-dark', component: AccessDarkComponent },
  { path: 'shop', component: ShopComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
  { path: 'shop-dark', component: ShopDarkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
