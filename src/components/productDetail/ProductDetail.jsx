import { useLoaderData } from "react-router-dom";


const ProductDetail = () => {

    const products = useLoaderData();

    const { image, name, brandName, _id,
        short_description } = products || {};

    return (
        <div>
            <h1>Hi from: {_id}</h1>
        </div>
    );
};

export default ProductDetail;