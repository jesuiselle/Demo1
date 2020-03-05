import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ServerInterceptor} from './interceptor';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CdkTableModule } from '@angular/cdk/table';

// Components
import { AppComponent } from './app.component';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';


@NgModule({
    declarations: [
        AppComponent,
        StockListComponent,
        StockCreateComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        CdkTableModule,
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: ServerInterceptor, multi: true}],
    bootstrap: [AppComponent]
})

export class AppModule {
}
