import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

    const { image, name, brandName, _id } = product;

    return (

        <div>
            <Link to={`/productdetail/${_id}`}>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a>
                        <img className="rounded-t-lg" src={image} alt="" />
                    </a>
                    <div className="p-5">
                        <a>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        </a>
                        <h3 className="mb-3 font-normal text-gray-700 dark:text-gray-400">{brandName}</h3>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default ProductCard;