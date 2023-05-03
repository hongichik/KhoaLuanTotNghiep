import ProductType from "@/components/type/ProductType";

export const AddProducts = (products:ProductType[]) =>{
    return {
        type: 'ADD_PRODUCTS',
        products: products
    }
}

export const AddProduct = (product:ProductType) =>{
    return {
        type: 'ADD_PRODUCT',
        product: product
    }
}
export const DeleteProduct = (product:ProductType) =>{
    return {
        type: 'DELETE_PRODUCT',
        product: product
    }
}

export const DeleteAllProduct = () =>{
    return {
        type: 'DELETE_ALL_PRODUCT',
    }
}