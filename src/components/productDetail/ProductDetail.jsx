import { useLoaderData } from "react-router-dom";


const ProductDetail = () => {

    const products = useLoaderData();

    const { image, name, brandName, _id,
        short_description } = products || {};

    return (
        <div>
            <h1>Hi from: {name}</h1>
        </div>
    );
};

export default ProductDetail;