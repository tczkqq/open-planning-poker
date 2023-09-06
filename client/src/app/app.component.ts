import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { ColorSchemeService } from '@services/color-scheme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private translate: TranslateService,
    private colorSchemeService: ColorSchemeService
  ) {}

  ngOnInit(): void {
    this.colorSchemeService.initialize();

    if (localStorage.getItem('lang')) {
      this.translate.use(localStorage.getItem('lang') as string);
    } else {
      this.translate.use(localStorage.getItem('lang') as string);
    }
  }
}
