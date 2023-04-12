import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuentraElTesoroComponent } from './pages/encuentra-el-tesoro/encuentra-el-tesoro.component';
import { WhackamoleComponent } from './pages/whackamole/whackamole.component';

const routes: Routes = [
  {
    path:"encuentraElTesoro" , component: EncuentraElTesoroComponent
  },
  {
    path:"whackamole" , component: WhackamoleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
