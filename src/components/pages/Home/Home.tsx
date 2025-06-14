import { BrandsSection } from '@components/widgets/BrandsSection';
import { PopularProductsSlider } from '@components/widgets/PopularProductsSlider';
import { DiscountProductsSlider } from '@components/widgets/DiscountProductsSlider';

const Home = () => {
  // useAuthCheck()
  return (
    <>
      {/*<ProductSlider />*/}
      {/*<AllProductsPage/>*/}
      <BrandsSection />
      <PopularProductsSlider />
      <DiscountProductsSlider />
    </>
  );
};

export default Home;
