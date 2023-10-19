import Navbar from "../../pages/shared/navbar/Navbar";
import Swal from 'sweetalert2'


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
                if(data.insertedId){
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
            <Navbar></Navbar>
            <h3 className="text-5xl">Add a Movie</h3>
            <form onSubmit={handleAddProduct} className="mt-8 text-center mx-auto font-secondary">
                <div className="md:flex md:gap-8 justify-center">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Movie name" className="input" />
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
                <input className="btn font-primary font-normal hover:bg-[#1a0804e2] border-[#dc3a3a] hover:border-[#a02525] text-2xl bg-[#080413] text-[#f3efef] md:w-2/5 w-4/5 mt-6" type="submit" value="Add to cart" />
            </form>
        </div>
    );
};

export default AddProduct;