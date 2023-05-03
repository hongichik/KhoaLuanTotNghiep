import FilterCategory from "@/components/category/Filter";
import { useRouter } from "next/router";

const Category = () =>{
    const router = useRouter();
    const { name } = router.query;
    return(
        <div className="container mt-10 flex">
            <div className="w-80">
                <FilterCategory/>
            </div>
            <div className="flex-grow bg-yellow-300"></div>
        </div>
    )
}

export default Category;