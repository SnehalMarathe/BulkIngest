// Angualr Base
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// UI Frameworks/modules
import { 
  AccordionModule, DataTableModule, SharedModule, MenuItem, TreeModule,TreeNode, TabViewModule, 
  DomHandler, CheckboxModule, InputSwitchModule, OverlayPanelModule } from 'primeng/primeng';
import { SplitPaneModule } from 'ng2-split-pane/lib/ng2-split-pane';

// All the components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterPanelComponent } from './search-panel/filter-panel/filter-panel.component';
import { SearchResultspanelComponent } from './search-panel/search-resultspanel/search-resultspanel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPanelComponent,
    SearchResultspanelComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    // primeng components
    DataTableModule,
    AccordionModule,
    SharedModule,
    TreeModule,
    FormsModule,
    TabViewModule,
    InputSwitchModule,
    CheckboxModule,
    OverlayPanelModule,
    // others
    SplitPaneModule
  ],
  providers: [DomHandler, SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
