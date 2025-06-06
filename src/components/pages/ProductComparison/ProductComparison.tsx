import smartphones from "./constants";
import ProductShow from "./ProductShow";

export const ProductComparison = () => {
  return (
    <div>
      <h1>Сравнение смартфонов</h1>
      <ProductShow products={smartphones} />
    </div>
  );
};