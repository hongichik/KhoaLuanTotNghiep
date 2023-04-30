import ProductType from "@/components/type/ProductType";

export const showProduct = (product:ProductType) =>{
    return {
        type: 'SHOW_PRODUCT',
        product: product
    }
}

export const hideProduct = () =>{
    return {
        type: 'HIDE_PRODUCT',
    }
}