import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { UserService } from './products/user.service';
import { VolvoHeaderComponent } from './nav/volvo-header.component.';
import { UserManagementComponent } from './products/user-management.component';

@NgModule({
  imports: [ BrowserModule,
                   FormsModule,
                   AppRoutingModule,
                   HttpModule,
                   ],
  declarations: [ AppComponent,
                          UserManagementComponent,
                          VolvoHeaderComponent
                          ],
  providers: [ UserService, Title ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }