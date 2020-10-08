import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bootstrap4FrameworkModule } from '@ajsf/bootstrap4';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputWidgetComponent } from './components/input-widget/input-widget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionWidgetComponent } from './components/section-widget/section-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    InputWidgetComponent,
    SectionWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Bootstrap4FrameworkModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InputWidgetComponent , SectionWidgetComponent]
})
export class AppModule { }
