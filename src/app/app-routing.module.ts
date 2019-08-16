import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./tabs/tabs.module').then(a => a.TabsPageModule),
    canActivate: [AuthGuardService]},
  { path: 'login',
    loadChildren: () => import('./login/login.module').then(b => b.LoginPageModule)},
  { path: 'tabs/agenda',
    loadChildren: () => import('./agenda/agenda.module').then(c => c.AgendaPageModule)},
  { path: 'tabs/grup',
    loadChildren: () => import('./grup/grup.module').then(d => d.GrupPageModule)},
  { path: 'tabs/panduan',
    loadChildren: () => import('./panduan/panduan.module').then(f => f.PanduanPageModule)},
  { path: 'tabs/presensi',
    loadChildren: () => import('./presensi/presensi.module').then(g => g.PresensiPageModule)},
  { path: 'tabs/tentang',
    loadChildren: () => import('./tentang/tentang.module').then(h => h.TentangPageModule)},
  { path: 'tabs/web',
    loadChildren: () => import('./web/web.module').then(i => i.WebPageModule)},
  { path: 'tabs/tab3/tentangapp',
    loadChildren: () => import('./tentangapp/tentangapp.module').then(j => j.TentangappPageModule)},
  { path: 'tabs/tab3/aduan',
    loadChildren: () => import('./aduan/aduan.module').then(m => m.AduanPageModule)},
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
