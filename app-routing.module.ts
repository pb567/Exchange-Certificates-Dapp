import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpfsComponent } from './components/ipfs/ipfs.component';
import { LoginComponent } from './components/login/login.component';


const appRoutes: Routes = [
    {
		path: '',
		component: LoginComponent	
    },
    {
      path: 'ipfs',
      component: IpfsComponent
    } 
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
     
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule {}