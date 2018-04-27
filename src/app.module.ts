import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import AppComponent from './app.component';


@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export default class AppModule {

}