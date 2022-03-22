// other
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { HomeComponent } from './component/home/home.component';
import { PlaceHolderComponent } from './component/place-holder/place-holder.component';
import { TabsEquipmentComponent } from './component/tabs-equipment/tabs-equipment.component';
import { TabsAboutComponent } from './component/tabs-about/tabs-about.component';
import { TabsDirectionsComponent } from './component/tabs-directions/tabs-directions.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'placeholder', component: PlaceHolderComponent, },
  { path: 'equipment', component: TabsEquipmentComponent, },
  { path: 'about', component: TabsAboutComponent, },
  { path: 'directions', component: TabsDirectionsComponent, },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
  useHash: true
});
