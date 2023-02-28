import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContactsGuard } from './auth/auth-contacts.guard';
import { ContactComponent } from './components/contacts/contact/contact.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ElevationHelpersComponent } from './components/info/elevation-helpers/elevation-helpers.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SchematicsComponent } from './components/info/schematics/schematics.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', component: HomeComponent},
  {path: "home", redirectTo: "/"},
  {path: "Contacts", component: ContactsComponent, canActivate: [AuthContactsGuard], canActivateChild: [AuthContactsGuard], children: [
    {path: ":id", component: ContactComponent}
  ]},
  {path: "Info", component: InfoComponent, children: [
    {path: "Elevation-Helpers", component: ElevationHelpersComponent},
    {path: "Schematics", component: SchematicsComponent}
  ]},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo: "/404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
