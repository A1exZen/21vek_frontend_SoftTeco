import { BrandsSection } from '@components/widgets/BrandsSection';
import { PopularProductsSlider } from '@components/widgets/PopularProductsSlider';
import { DiscountProductsSlider } from '@components/widgets/DiscountProductsSlider';
import ProductSlider from '@dummies/ProductSlider';

const Home = () => {
  return (
    <>
      <ProductSlider />
      <BrandsSection />
      <PopularProductsSlider />
      <DiscountProductsSlider />
    </>
  );
};

export default Home;
