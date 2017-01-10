import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/index';
import {SignupComponent} from './signup/index';
import {CreatefamilyComponent} from './createfamily/index';
import { AuthGuard } from './guards/index';

const appRoutes: Routes = [
     { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
     { path: 'createfamily', component: CreatefamilyComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);