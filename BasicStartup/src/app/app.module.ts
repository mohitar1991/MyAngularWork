import { ServiceModule } from './ServicesComponent/service-component.module';
import { UnlessDirectiveDirective } from './CustomDirectives/unless-directive.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { FormsModule } from '@angular/forms';
import { DirectivesComponent } from './directives/directives.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerComponent } from './server/server.component';
import { GameControlComponent } from './ComponentAssignment/game-control/game-control.component';
import { OddComponentComponent } from './ComponentAssignment/odd-component/odd-component.component';
import { EvenComponentComponent } from './ComponentAssignment/even-component/even-component.component';
import { ServiceComponentComponent } from './ServicesComponent/service-component.component';
import { ServicesAssignmentComponent } from './services-assignment/services-assignment.component';
import { ServicesAssignmentModule } from './services-assignment/services-assignment.module';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PropertyBindingComponent,
    DirectivesComponent,
    CockpitComponent,
    ServerComponent,
    GameControlComponent,
    OddComponentComponent,
    EvenComponentComponent,
    HighlightDirective,
    UnlessDirectiveDirective,
    ServiceComponentComponent,
    ServicesAssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceModule,
    ServicesAssignmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
