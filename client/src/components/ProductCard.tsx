import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import headphone from "@/assets/headphone.jpg"

const products = Array(6).fill({
  name: "Headphone",
  description: "This is the product description and specification",
})

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product, index) => (
        <Card
          key={index}
          className="rounded-2xl m-6 shadow flex flex-col overflow-hidden"
        >
          {/* Image */}
          <CardHeader className="p-0">
            <div className="h-[180px] w-full overflow-hidden">
              <img
                src={headphone}
                alt="product image"
                className="h-full w-full object-cover block"
              />
            </div>
          </CardHeader>

          {/* Content */}
          <CardContent className="flex-1 p-4 space-y-2">
            <CardTitle className="text-lg">
              {product.name}
            </CardTitle>
            <CardDescription>
              {product.description}
            </CardDescription>
          </CardContent>
         <CardFooter
  className="
    p-4 pt-0
    flex flex-col gap-3
    sm:flex-row sm:items-center sm:justify-between
  "
>
  <Button className="w-full sm:w-auto">
    Add to cart
  </Button>

  <p className="text-lg font-semibold text-right sm:text-left">
    $254
  </p>
</CardFooter>

        </Card>
      ))}
    </div>
  )
}

export default ProductCard
