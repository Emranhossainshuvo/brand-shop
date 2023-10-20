import { useLoaderData } from "react-router-dom";


const ProductDetail = () => {

    const products = useLoaderData();

    const { image, name, brandName, _id,
        short_description } = products || {};

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{
                    short_description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{brandName}</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;