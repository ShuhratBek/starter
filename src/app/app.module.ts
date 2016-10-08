import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import '@angular/material/core/theming/prebuilt/deeppurple-amber.css';
import './app-theme.scss';
import '../styles.css';
import '../angular-material.layout-attributes.css';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { routing, appRoutingProviders } from './app.routing';
import { SharedModule } from './shared';
import { CategoryModule } from './category';
import { AdminModule } from './admin/admin.module';
import { ItemModule } from './item';
import { TrayModule } from './tray';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        SharedModule,
        AdminModule,
        CategoryModule,
        ItemModule,
        TrayModule
    ],
    providers: [
        appRoutingProviders,
        AppService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
