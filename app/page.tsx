import { HeroCarousel } from '@/components/hero-carousel';
import { FeaturedProducts } from '@/components/featured-products';
import { Categories } from '@/components/categories';
import { Newsletter } from '@/components/newsletter';
import { Footer } from '@/components/footer';
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <div className="container mx-auto px-4 py-8">
        {/* <SearchBar /> */}
        <Categories />
        <FeaturedProducts />
      </div>
      <Newsletter />
      <Footer />
    </main>
  );
}
