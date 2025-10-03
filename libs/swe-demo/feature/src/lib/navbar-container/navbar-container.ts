import { Component } from '@angular/core';
import { NavItem } from '@monorepo-name/shared-domain';
import { Navbar } from '@monorepo-name/swe-demo-ui';

@Component({
  selector: 'lib-swe-demo-feature-navbar-container',
  imports: [Navbar],
  templateUrl: './navbar-container.html',
  styleUrl: './navbar-container.css',
})
export class NavbarContainer {
  readonly items :NavItem[] = [
    { label: 'Home', path: '/home' },
    { label: 'Profile', path: '/profile' },
    { label: 'Settings', path: '/settings'},
  ];

  onNavigate(path: string) {
    console.log(`Navigation triggered to ${path}`);
  }

  onLogout() {
    console.log('User logged out');
  }
}
