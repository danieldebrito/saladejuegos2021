import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// ============================== FIREBASE ==================================== //
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
// ============================== mys modules ============================== //
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { GamesModuleModule } from './games/games-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    // ****************** SERVICES MODULES ************************ //
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    // ****************** MYS MODULES ************************ //
    LayoutModule,
    AuthModule,
    GamesModuleModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
