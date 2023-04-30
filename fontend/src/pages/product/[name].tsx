import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const {name} =  router.query;
    return(
        <div>
            <h1>oke{name}</h1>
        </div>
    )
}
export default ProductDetail;