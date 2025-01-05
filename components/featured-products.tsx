'use client';

import { Product } from '@/types';
import { ProductCard } from '@/components/product-card';

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Mangoes",
    description: "Juicy and sweet Indian mangoes",
    price: 5.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "2",
    name: "Okra",
    description: "Fresh and tender Indian okra",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "3",
    name: "Pomegranates",
    description: "Sweet and tangy Indian pomegranates",
    price: 4.49,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "4",
    name: "Bitter Gourd",
    description: "Fresh and bitter Indian bitter gourd",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "5",
    name: "Guavas",
    description: "Sweet and crunchy Indian guavas",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "6",
    name: "Drumsticks",
    description: "Fresh and tender Indian drumsticks",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "7",
    name: "Papayas",
    description: "Sweet and juicy Indian papayas",
    price: 4.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "8",
    name: "Snake Gourd",
    description: "Fresh and crunchy Indian snake gourd",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "9",
    name: "Sapotas",
    description: "Sweet and juicy Indian sapotas",
    price: 5.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "10",
    name: "Tindoras",
    description: "Fresh and crunchy Indian tindoras",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "11",
    name: "Custard Apples",
    description: "Sweet and creamy Indian custard apples",
    price: 4.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "12",
    name: "Yardlong Beans",
    description: "Fresh and crunchy Indian yardlong beans",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "13",
    name: "Star Fruits",
    description: "Sweet and tangy Indian star fruits",
    price: 5.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "14",
    name: "Taro Roots",
    description: "Fresh and crunchy Indian taro roots",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "15",
    name: "Wood Apples",
    description: "Sweet and tangy Indian wood apples",
    price: 4.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "16",
    name: "Water Chestnuts",
    description: "Fresh and crunchy Indian water chestnuts",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "17",
    name: "Indian Gooseberries",
    description: "Sweet and tangy Indian gooseberries",
    price: 5.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: true,
  },
  {
    id: "18",
    name: "Tapioca",
    description: "Fresh and crunchy Indian tapioca",
    price: 2.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
  {
    id: "19",
    name: "Indian Plums",
    description: "Sweet and tangy Indian plums",
    price: 4.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "fruits",
    seasonal: false,
  },
  {
    id: "20",
    name: "Indian Borage",
    description: "Fresh and crunchy Indian borage",
    price: 3.99,
    image:
      "https://images.pexels.com/photos/5060465/pexels-photo-5060465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "vegetables",
    seasonal: true,
  },
];

export function FeaturedProducts() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
