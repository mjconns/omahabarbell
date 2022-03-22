//Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Other
import { routing } from './app.routing';

//Material
import { AppMaterialModule } from '../app/modules/app-material/app-material.module';

//Components
import { HomeComponent } from './component/home/home.component';
import { HomeTSComponent } from './component/home/home-ts/home-ts.component';
import { StartWorkOutComponent } from './component/start-work-out/start-work-out.component';
import { PlaceHolderComponent } from './component/place-holder/place-holder.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { WorkOutProgramsComponent } from './component/work-out-programs/work-out-programs.component';
import { TabsHomeComponent } from './component/tabs-home/tabs-home.component';
import { TabsEquipmentComponent } from './component/tabs-equipment/tabs-equipment.component';
import { TabsAboutComponent } from './component/tabs-about/tabs-about.component';
import { TabsDirectionsComponent } from './component/tabs-directions/tabs-directions.component';
import { SideInfoComponent } from './component/side-info/side-info.component';

//Services

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartWorkOutComponent,
    PlaceHolderComponent,
    ToolbarComponent,
    NavbarComponent,
    HomeTSComponent,
    WorkOutProgramsComponent,
    TabsHomeComponent,
    TabsEquipmentComponent,
    TabsAboutComponent,
    TabsDirectionsComponent,
    SideInfoComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    routing
  ],

  entryComponents: [HomeTSComponent],

  providers: [],



  bootstrap: [AppComponent]

})

export class AppModule { }
