import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { CompleteNavbarComponent } from './complete-navbar/complete-navbar.component';
import { DeleteCommentComponent } from './delete-comment/delete-comment.component';
import { ChangeThemeComponent } from './change-theme/change-theme.component';
import { ValidateProjectsComponent } from './validate-project/validate-project.component';  
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminMessagesComponent } from './admin-messages/admin-messages.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarCreatComponent } from './navbar-creat/navbar-creat.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { SolutionComponent } from './solution/solution.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { DonationProjetComponent } from './donation-projet/donation-projet.component';
import { DonationFormComponent } from './donation-form/donation-form.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'admin-auth', component: AdminAuthComponent },
  { path: 'complete-navbar', component: CompleteNavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'delete-comment', component: DeleteCommentComponent },
  { path: 'change-theme', component: ChangeThemeComponent },
  { path: 'validate-projects', component: ValidateProjectsComponent },  
  { path: 'navbar', component: MainPageComponent },
  { path: 'admin-messages', component: AdminMessagesComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'navbar-creat',component: NavbarCreatComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'project-form',component: ProjectFormComponent},
  { path: 'contact-us', component:ContactUsComponent},
  { path: 'about', component:AboutComponent},
  { path: 'solution', component:SolutionComponent},
  { path: 'accueil', component:AccueilComponent},
  { path: 'resetpassword', component:ResetpasswordComponent},
  { path: 'donation-projet', component:DonationProjetComponent},
  { path: 'donation-form', component:DonationFormComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
