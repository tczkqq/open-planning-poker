import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MenuItem, PrimeIcons } from 'primeng/api';

import { SettingsDialogComponent } from '@components/settings-dialog/settings-dialog.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  ref!: DynamicDialogRef;

  menuItems: MenuItem[] = [
    {
      label: 'Planning Poker Live',
      icon: PrimeIcons.HOME,
      routerLink: ['/home'],
    },
    {
      label: this.translate.instant('Settings'),
      icon: PrimeIcons.COG,
      command: () => this.onSettingsClick(),
    },
    {
      label: this.translate.instant('About'),
      icon: PrimeIcons.INFO_CIRCLE,
      routerLink: ['/about'],
    },
  ];

  constructor(
    private dialogService: DialogService,
    private translate: TranslateService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Refresh menu items labels on language change
    this.translate.onLangChange.subscribe(() => {
      this.menuItems[1].label = this.translate.instant('Settings');
      this.menuItems[2].label = this.translate.instant('About');
      this.menuItems = [...this.menuItems];
    });
  }

  onSettingsClick(): void {
    this.ref = this.dialogService.open(SettingsDialogComponent, {
      header: 'Settings',
    });
  }
}
