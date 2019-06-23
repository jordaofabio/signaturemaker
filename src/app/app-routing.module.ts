import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakerComponent } from './maker/maker.component';

const routes: Routes = [
  { path: '', component: MakerComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
