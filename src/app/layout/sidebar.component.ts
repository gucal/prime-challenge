import { Component, Input, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
  icon: string;
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
        },
        {
          id: 2,
          name: 'Bookmarks',
          icon: 'pi pi-bookmark',
        },
        {
          id: 3,
          name: 'Team',
          icon: 'pi pi-users',
        },
        {
          id: 4,
          name: 'Messages',
          icon: 'pi pi-comments',
        },
        {
          id: 5,
          name: 'Calendar',
          icon: 'pi pi-calendar',
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
        },
        {
          id: 7,
          name: 'Reports',
          icon: 'pi pi-chart-bar',
        },
        {
          id: 8,
          name: 'Projects',
          icon: 'pi pi-cog',
        },
      ],
    },
  ];

  selectMenu(item: Item) {
    this.selectedID = item.id;
  }
}
