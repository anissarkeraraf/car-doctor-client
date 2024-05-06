import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Booking from "./Booking";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (user && user.email) {
            const url = `http://localhost:5000/bookings?email=${user.email}`;
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return res.json();
                })
                .then(data => {
                    setBookings(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error);
                    setLoading(false);
                });
        }
    }, [user]);

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const handleDelete = id => {
        const proced = 'Are you sure delete thid card'
        if (proced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Successfull')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })

        }
    }

    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const update = bookings.find(booking => booking._id === id);
                    update.status = 'confirm'
                    const newBookings = [update, ...remaining];
                    setBookings(newBookings)
                }
            })
    }


    return (
        <div>
            <h2 className="text-4xl mt-10">My Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Customar Name</th>
                            <th>Dete</th>
                            <th>Price</th>
                            <th>Services</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <Booking
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleBookingConfirm={handleBookingConfirm}
                            ></Booking>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;
