import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  title: string;
  tags: Tag[];
  brand: string;
  rate: number;
  image: string;
  totalPrice: number;
  reviews: number;
}

interface Tag {
  class: string;
  text: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  itemList: Item[] = [
    {
      id: 1,
      title: 'Dui id ornare arcu',
      tags: [
        {
          class: 'bg-green-100 text-green-600',
          text: '$12.34',
        },
      ],
      brand: 'Zara',
      rate: 4,
      image: 'assets/images/item-1.png',
      totalPrice: 12345.0,
      reviews: 123,
    },
    {
      id: 2,
      title: 'Nulla pellentesque',
      tags: [
        {
          class: 'bg-green-100 text-green-600',
          text: '$12.34',
        },
      ],
      brand: 'H&M',
      rate: 5,
      image: 'assets/images/item-2.png',
      totalPrice: 12345.0,
      reviews: 123,
    },
    {
      id: 3,
      title: 'Semper eget',
      tags: [
        {
          class: 'bg-green-100 text-green-600',
          text: '$12.34',
        },
      ],
      brand: 'Zara',
      rate: 3,
      image: 'assets/images/item-3.png',
      totalPrice: 12345.0,
      reviews: 123,
    },
    {
      id: 4,
      title: 'Dui id ornare arcu',
      tags: [
        {
          class: 'bg-purple-100 text-purple-600',
          text: 'Sale',
        },
        {
          class: 'bg-green-100 text-green-600',
          text: '$12.34',
        },
      ],
      brand: 'Nike',
      rate: 2,
      image: 'assets/images/item-4.png',
      totalPrice: 12345.0,
      reviews: 123,
    },
    {
      id: 5,
      title: 'Dui id ornare arcu',
      tags: [
        {
          class: 'bg-green-100 text-green-600',
          text: '$12.34',
        },
      ],
      brand: 'GAP',
      rate: 4,
      image: 'assets/images/item-5.png',
      totalPrice: 12345.0,
      reviews: 123,
    },
  ];
}
