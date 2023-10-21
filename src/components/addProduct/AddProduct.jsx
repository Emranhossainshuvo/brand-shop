import { Helmet } from "react-helmet-async";
import Navbar from "../../pages/shared/navbar/Navbar";
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const short_description = form.short_description.value;
        const rating = form.rating.value;
        const image = form.image.value;
        const product = { name, brandName, type, price, short_description, rating, image };
        console.log(product);
        fetch(' https://brand-shop-server-gm6ovoet3-shuvos-projects-7bea5cfb.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Successful!',
                        text: 'You have successfully added a movie',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <Helmet>
                <title>Filmic | Add product</title>
            </Helmet>
            <Navbar></Navbar>
            <form onSubmit={handleAddProduct} className="mt-20 text-center mx-auto font-secondary">
                <div className="md:flex md:gap-8 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder=" name" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Enter brand name" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type of movie" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Add price" className="input" />
                            </label>
                        </div>

                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" placeholder="Short description" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Enter rating" className="input" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Enter image url" className="input" />
                            </label>
                        </div>

                    </div>
                </div>
                <div className="w-full gap-3 flex justify-center">
                    <input className="btn font-primary font-normal hover:bg-[#1a0804e2] border-[#423636] hover:border-[#3a2424] text-2xl bg-slate-800 text-[#f3efef] mt-6" type="submit" value="Add product" />
                    <Link to='/' className="btn font-primary font-normal hover:bg-[#1a0804e2] border-[#423636] hover:border-[#3a2424] text-2xl bg-slate-800 text-[#f3efef] mt-6" type="submit" value="Add product">Back to home</Link>
        </div>
            </form >
        </div >
    );
};

export default AddProduct;