import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { TranslateService } from '@ngx-translate/core';

import { ColorSchemeService, Theme } from '@services/color-scheme.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss'],
})
export class SettingsDialogComponent implements OnInit {
  themeControl = new FormControl('light');
  themeOptions: any[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  languageControl = new FormControl('en');
  languageOptions: any[] = [
    { label: 'English', value: 'en' },
    { label: 'Polish', value: 'pl' },
  ];

  soundControl = new FormControl(true);
  soundOptions: any[] = [
    { label: 'On', value: true },
    { label: 'Off', value: false },
  ];

  constructor(
    private colorSchemeService: ColorSchemeService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.themeControl.setValue(this.colorSchemeService.currentTheme());
    this.themeControl.valueChanges.subscribe((value) => {
      if (value) this.colorSchemeService.switchTheme(value as Theme);
    });

    // this.soundControl.setValue(Boolean(localStorage.getItem('sound')) || true);
    // this.soundControl.valueChanges.subscribe((value) => {
    //   localStorage.setItem('lang', toString(value));
    // });

    this.languageControl.setValue(localStorage.getItem('lang') || 'en');
    this.languageControl.valueChanges.subscribe((value) => {
      if (!value) return;
      this.translateService.onLangChange.emit();
      localStorage.setItem('lang', value);
      this.translateService.use(value);
    });
  }
}
