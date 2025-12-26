import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Product = {
  name: string
  description: string
  image: string
  price: number
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
      
      {/* IMAGE */}
      <CardHeader className="p-0">
        <div className="h-[280px] w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover block"
          />
        </div>
      </CardHeader>

      {/* CONTENT */}
      <CardContent className="flex-1 space-y-2 p-4">
        <CardTitle className="text-xl font-bold">
          {product.name}
        </CardTitle>
        <CardDescription className="text-sm">
          {product.description}
        </CardDescription>
      </CardContent>

      {/* FOOTER */}
      <CardFooter className="flex flex-col gap-3 p-4 pt-0 sm:flex-row sm:justify-between sm:items-center">
        <Button className="w-full sm:w-auto">
          Add to Cart
        </Button>
        <p className="text-lg font-bold text-green-600">
          ${product.price}
        </p>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
