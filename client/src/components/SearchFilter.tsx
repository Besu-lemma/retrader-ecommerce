import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

const SearchFilter = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
      
      {/* SEARCH INPUT */}
      <Input
        type="text"
        placeholder="Search products..."
        className="bg-white"
      />

      {/* CATEGORY SELECT */}
      <Select>
        <SelectTrigger className="bg-white w-3xl h-11">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="clothes">Clothes</SelectItem>
            <SelectItem value="shoes">Shoes</SelectItem>
            <SelectItem value="accessory">Accessory</SelectItem>
            <SelectItem value="others">Others</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SearchFilter
