import ProductListApi from "@/components/product/ProductListApi";

export default function Home() {
  return (
    <main>
      <section>
        <div className="px-4 md:px-0">
          <ProductListApi />
        </div>
      </section>
    </main>
  );
}
