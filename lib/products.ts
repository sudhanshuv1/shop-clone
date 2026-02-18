import { Product } from "./types";

export const products: Product[] = [
  // Electronics
  {
    id: 1,
    title: "Wireless Noise-Cancelling Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and rich bass response. Foldable design with a carrying case included.",
    price: 249.99,
    image: "https://picsum.photos/seed/headphones/400/400",
    category: "Electronics",
  },
  {
    id: 2,
    title: '4K Ultra HD Monitor 27"',
    description:
      "Stunning 27-inch IPS display with 4K resolution, HDR10 support, and 99% sRGB color accuracy. Ideal for creative professionals and gamers alike.",
    price: 379.99,
    image: "https://picsum.photos/seed/monitor/400/400",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Mechanical Keyboard RGB",
    description:
      "Compact tenkeyless mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a detachable USB-C cable.",
    price: 129.99,
    image: "https://picsum.photos/seed/keyboard/400/400",
    category: "Electronics",
  },
  {
    id: 4,
    title: "Portable Bluetooth Speaker",
    description:
      "Waterproof portable speaker with 360-degree sound, 12-hour playtime, and built-in microphone for hands-free calls.",
    price: 59.99,
    image: "https://picsum.photos/seed/speaker/400/400",
    category: "Electronics",
  },

  // Clothing
  {
    id: 5,
    title: "Classic Fit Denim Jacket",
    description:
      "Timeless denim jacket made from heavyweight 100% cotton denim. Features button closure, chest pockets, and a comfortable relaxed fit.",
    price: 89.99,
    image: "https://picsum.photos/seed/denim-jacket/400/400",
    category: "Clothing",
  },
  {
    id: 6,
    title: "Merino Wool Crewneck Sweater",
    description:
      "Lightweight yet warm merino wool sweater with a classic crewneck design. Naturally breathable and odor-resistant for all-day comfort.",
    price: 74.99,
    image: "https://picsum.photos/seed/sweater/400/400",
    category: "Clothing",
  },
  {
    id: 7,
    title: "Running Shoes Ultra Boost",
    description:
      "High-performance running shoes with responsive cushioning, breathable mesh upper, and durable rubber outsole for road and trail.",
    price: 139.99,
    image: "https://picsum.photos/seed/running-shoes/400/400",
    category: "Clothing",
  },

  // Home
  {
    id: 8,
    title: "Ceramic Pour-Over Coffee Set",
    description:
      "Handcrafted ceramic dripper with a double-wall glass carafe. Brews a clean, full-bodied cup of coffee. Includes 50 paper filters.",
    price: 44.99,
    image: "https://picsum.photos/seed/coffee-set/400/400",
    category: "Home",
  },
  {
    id: 9,
    title: "Bamboo Desk Organizer",
    description:
      "Multi-compartment desktop organizer made from sustainable bamboo. Keeps pens, phones, mail, and office supplies neatly sorted.",
    price: 34.99,
    image: "https://picsum.photos/seed/desk-organizer/400/400",
    category: "Home",
  },
  {
    id: 10,
    title: "Scented Soy Candle Trio",
    description:
      "Set of three hand-poured soy wax candles in lavender, vanilla, and cedarwood. Each candle provides up to 45 hours of burn time.",
    price: 29.99,
    image: "https://picsum.photos/seed/candles/400/400",
    category: "Home",
  },

  // Books
  {
    id: 11,
    title: "Design Patterns: Elements of Reusable Software",
    description:
      "The classic Gang of Four reference on software design patterns. Essential reading for any developer looking to write flexible, maintainable code.",
    price: 42.99,
    image: "https://picsum.photos/seed/design-patterns-book/400/400",
    category: "Books",
  },
  {
    id: 12,
    title: "The Art of Doing Twice the Work in Half the Time",
    description:
      "A practical guide to the Scrum framework and agile project management. Learn how small teams can achieve extraordinary results.",
    price: 18.99,
    image: "https://picsum.photos/seed/scrum-book/400/400",
    category: "Books",
  },
  {
    id: 13,
    title: "Atomic Habits",
    description:
      "A proven framework for building good habits and breaking bad ones. Packed with evidence-based strategies for making small changes that deliver remarkable results.",
    price: 16.99,
    image: "https://picsum.photos/seed/atomic-habits/400/400",
    category: "Books",
  },
];
