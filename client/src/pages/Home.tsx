import ProductCard from "@/components/ProductCard"
import SearchFilter from "@/components/SearchFilter"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { products } from "@/data/product"
import ProductList from "@/components/ProductList"

const Home = () => {
  return (
    <div className="space-y-20">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-black to-gray-900 h-[340px] flex items-center rounded-3xl px-6">
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">
            Find the best products for you
          </h1>

          <p className="text-gray-300 max-w-xl">
            Browse high-quality electronics, accessories, and more at the best
            prices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl">
            <SearchFilter />
          </div>
        </div>
      </div>

      {/* RECOMMENDED PRODUCTS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Recommended Products
        </h2>

        <div className="relative">
          <Carousel>
            <CarouselContent className="w-full max-w-6xl mx-auto px-6">
              {products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 p-4"
                >
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="left-2 bg-white shadow-md hover:bg-gray-100" />
            <CarouselNext className="right-2 bg-white shadow-md hover:bg-gray-100" />
          </Carousel>
        </div>
      </section>

      {/* RECENT PRODUCTS */}
      <section>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Recent Products
        </h2>
        <ProductList />
      </section>
    </div>
  )
}

export default Home
