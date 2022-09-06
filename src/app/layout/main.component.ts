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

interface Product {
  id: number;
  name: string;
  rate: number;
  description: string;
  price: number;
  image: string;
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

  productList: Product[] = [
    {
      id: 1,
      name: 'Natoque penatibus',
      rate: 5,
      description: 'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
      price: 123,
      image: 'assets/images/product-1.png',
    },
    {
      id: 2,
      name: 'Ipsum a arcu',
      rate: 5,
      description: 'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
      price: 123,
      image: 'assets/images/product-2.png',
    },
    {
      id: 3,
      name: 'Vulputate eu',
      rate: 5,
      description: 'Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse.',
      price: 123,
      image: 'assets/images/product-3.png',
    },
  ];
}
