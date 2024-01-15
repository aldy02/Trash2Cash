import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStatus from '../hooks/useAuthStatus';


const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isSignedIn] = useAuthStatus();

    useEffect(() => {
        if (isSignedIn == false) {
            navigate('/sign-in');
        }
    }, [isSignedIn, navigate]);

    return children;
};

export default ProtectedRoute;