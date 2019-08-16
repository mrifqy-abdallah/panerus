import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./tabs/tabs.module').then(a => a.TabsPageModule),
    canActivate: [AuthGuardService]},
  { path: 'landing',
    loadChildren: () => import('./landing/landing.module').then(b => b.LandingPageModule)},
  { path: 'landing/activate',
    loadChildren: () => import('./landing/activate/activate.module').then(c => c.ActivatePageModule)},
  { path: 'landing/create/:id',
    loadChildren: () => import('./landing/create/create.module').then(d => d.CreatePageModule)},
  { path: 'landing/login',
    loadChildren: () => import('./landing/login/login.module').then(e => e.LoginPageModule)},
  { path: 'tab2/agenda',
    loadChildren: () => import('./agenda/agenda.module').then(f => f.AgendaPageModule)},
  { path: 'tab2/grup',
    loadChildren: () => import('./grup/grup.module').then(g => g.GrupPageModule)},
  { path: 'tab2/panduan',
    loadChildren: () => import('./panduan/panduan.module').then(h => h.PanduanPageModule)},
  { path: 'tab2/presensi',
    loadChildren: () => import('./presensi/presensi.module').then(i => i.PresensiPageModule)},
  { path: 'tab2/tentang',
    loadChildren: () => import('./tentang/tentang.module').then(j => j.TentangPageModule)},
  { path: 'tab2/web',
    loadChildren: () => import('./web/web.module').then(k => k.WebPageModule)},
  { path: 'tab3/tentangapp',
    loadChildren: () => import('./tentangapp/tentangapp.module').then(l => l.TentangappPageModule)},
  { path: 'tab3/aduan',
    loadChildren: () => import('./aduan/aduan.module').then(m => m.AduanPageModule)},
  { path: 'tab3/profil',
    loadChildren: () => import('./profil/profil.module').then(n => n.ProfilPageModule)},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
