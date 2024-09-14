import Header from "../components/Header";
import SalesBanner from "../components/SalesBanner";
import Carousel from "../components/Carousel";
import FeaturedProducts from "../components/FeaturedProducts";
import NewsletterBanner from "../components/NewsletterBanner";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import Values from "../components/Values";

function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <SalesBanner />
      <Header />
      <Carousel />
      <FeaturedProducts />
      <Values />
      <AdBanner />
      <NewsletterBanner />
      <Footer />
    </div>
  );
}

export default Homepage;
