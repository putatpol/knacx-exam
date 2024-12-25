import ProductListApi from "@/components/product/ProductListApi";
import ProductsApi from "@/components/product/ProductListApi2";

export default function Home() {
  return (
    <main>
      <section>
        <div>
          {/* <ProductsApi /> */}
          <ProductListApi />
        </div>
      </section>
    </main>
  );
}
