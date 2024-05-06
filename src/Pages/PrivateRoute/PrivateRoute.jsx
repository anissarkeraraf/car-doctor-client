import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    console.log(user?.email)

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (!user || !user.email) {
        return <Navigate to='/login'></Navigate>
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;