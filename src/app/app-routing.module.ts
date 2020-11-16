import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login1/login1.module').then( m => m.Login1PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'problem',
    loadChildren: () => import('./pages/problem/problem.module').then( m => m.ProblemPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'problems',
    loadChildren: () => import('./pages/problems/problems.module').then( m => m.ProblemsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'subjects',
    loadChildren: () => import('./pages/subjects/subjects.module').then( m => m.SubjectsPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'subcategories',
    loadChildren: () => import('./pages/subcategories/subcategories.module').then( m => m.SubcategoriesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule),
    canActivate: [AuthGuardService]
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
