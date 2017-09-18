import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterPanelComponent } from './filter-panel/filter-panel.component';
import { SearchResultspanelComponent } from './search-resultspanel/search-resultspanel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent,
    SearchResultspanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
