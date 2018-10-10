import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { UserManagementComponent } from './products/user-management.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: '', component: UserManagementComponent },
            { path: '**', redirectTo: '', pathMatch: 'full' }
        ] , { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }