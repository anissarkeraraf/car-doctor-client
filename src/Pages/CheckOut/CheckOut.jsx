import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const CheckOut = () => {

    const service = useLoaderData();
    const { title, _id, price, img } = service;
    const { user } = useContext(AuthContext);


    const handleConfirmOder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const price = form.price.value;
        const order = {
            customarName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(order);

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Great!",
                        text: "Your Servic Booking Successfully",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl text-center my-10 font-medium">Checkout Your Services : {title}</h2>
            <form onSubmit={handleConfirmOder} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name="price" defaultValue={'$' + price} className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" className="btn btn-block btn-primary" value="Order Confirm" />
                </div>
            </form>

        </div>
    );
};

export default CheckOut;