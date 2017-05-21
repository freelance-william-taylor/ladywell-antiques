
import { App, components } from '../all.components';
import { AdminModule } from '../all.modules';
import { pipes } from '../all.pipes';

import { RouteRoutes, AdminRoutes } from '../model/app.routes';
import { Model } from '../model/app.model';

import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
        RouterModule.forRoot(RouteRoutes),
        NgbModule.forRoot(),
        BrowserModule,
        AdminModule,
    ],
    providers: [Model],
    declarations:  components().concat(pipes()),
    bootstrap: [App]
})
export class AppModule {

}