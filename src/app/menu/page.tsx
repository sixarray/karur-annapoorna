import { Metadata } from "next";
import MenuContent from "./MenuContent";

export const metadata: Metadata = {
  title: "Pure Vegetarian Menu | Karur Annapoorna - Traditional & Modern Dishes",
  description: "Explore our extensive menu of pure vegetarian delicacies. From traditional South Indian breakfast to Tandoori specialties and fresh bakery sweets. Pure taste, pure love.",
  keywords: "Vegetarian Menu, South Indian Breakfast, Lunch Meals, Parotta Karur, Tandoori Veg, Dessert and Sweets Karur",
  openGraph: {
    title: "Our Pure Veg Menu | Karur Annapoorna",
    description: "Discover a world of flavors with our authentic vegetarian menu.",
  },
};

export default function MenuPage() {
  return <MenuContent />;
}
