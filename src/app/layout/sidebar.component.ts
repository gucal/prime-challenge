import { Component, Input, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
  icon: string;
  badge: number;
}

interface MenuItem {
  label: string;
  items: Item[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() mobileSidebar?: boolean;

  selectedID: number = 1;

  menuItems: MenuItem[] = [
    {
      label: 'Favorites',
      items: [
        {
          id: 1,
          name: 'Dashboard',
          icon: 'pi pi-home',
          badge: 0,
        },
        {
          id: 2,
          name: 'Bookmarks',
          icon: 'pi pi-bookmark',
          badge: 0,
        },
        {
          id: 3,
          name: 'Team',
          icon: 'pi pi-users',
          badge: 0,
        },
        {
          id: 4,
          name: 'Messages',
          icon: 'pi pi-comments',
          badge: 3,
        },
        {
          id: 5,
          name: 'Calendar',
          icon: 'pi pi-calendar',
          badge: 0,
        },
      ],
    },
    {
      label: 'Application',
      items: [
        {
          id: 6,
          name: 'Projects',
          icon: 'pi pi-folder',
          badge: 0,
        },
        {
          id: 7,
          name: 'Reports',
          icon: 'pi pi-chart-bar',
          badge: 0,
        },
        {
          id: 8,
          name: 'Projects',
          icon: 'pi pi-cog',
          badge: 0,
        },
      ],
    },
  ];

  selectMenu(item: Item) {
    this.selectedID = item.id;
  }
}
