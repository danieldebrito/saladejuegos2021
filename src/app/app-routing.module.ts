import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './games/components/board/board.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadChildren: () => import('./layout/pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/pages/login/login.module').then(m => m.LoginModule),
    data: { animation: 'login' }
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./auth/pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./auth/pages/register/register.module').then(m => m.RegisterModule),
    data: { animation: 'registro' }
  },
  {
    path: 'verification-email',
    loadChildren: () => import('./auth/pages/send-email/send-email.module').then(m => m.SendEmailModule)
  },
  {
    path: 'pass-email-incorrecto',
    loadChildren: () => import('./auth/pages/user-pass-incorrecto/user-pass-incorrecto.module').then(m => m.UserPassIncorrectoModule)
  },
  {
    path: 'permisoDenegado',
    loadChildren: () => import('./auth/pages/permiso-denegado/permiso-denegado.module').then(m => m.PermisoDenegadoModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'juegos',
    // loadChildren: () => import('./games/components/board/board.module').then(m => m.BoardModule),
    component: BoardComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./games/components/layout-games/layout.module').then(m => m.LayoutModuleModule),
      },
      {
        path: 'ppt',
        loadChildren: () => import('./games/pages/ppt/ppt.module').then(m => m.PptModule),
      }
      ,
      {
        path: 'tateti',
        loadChildren: () => import('./games/pages/tateti/tateti.module').then(m => m.TatetiModule),
      }    ]
  }
  ,
  {
    path: 'ranking',
    loadChildren: () => import('./games/components/jugadas-listado/jugadas-listado.module').then(m => m.JugadasListadoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
