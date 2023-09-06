import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { MenubarModule } from 'primeng/menubar';
import { AnimateModule } from 'primeng/animate';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { DockModule } from 'primeng/dock';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { QRCodeModule } from 'angularx-qrcode';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingsDialogComponent } from '@components/settings-dialog/settings-dialog.component';
import { ShareDialogComponent } from '@components/share-dialog/share-dialog.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';
import { CreateCardComponent } from '@pages/home/create-card/create-card.component';
import { JoinCardComponent } from '@pages/home/join-card/join-card.component';
import { AboutComponent } from '@pages/about/about.component';
import { HomeComponent } from '@pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    ShareDialogComponent,
    SettingsDialogComponent,
    JoinCardComponent,
    CreateCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SocketIoModule.forRoot({ url: 'http://localhost:5000', options: {} }),
    QRCodeModule,
    ButtonModule,
    CardModule,
    DockModule,
    AnimateModule,
    ToastModule,
    MenubarModule,
    DynamicDialogModule,
    SelectButtonModule,
    DividerModule,
    CheckboxModule,
  ],
  providers: [MessageService, DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
