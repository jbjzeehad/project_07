import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOPs !!!</h2>
            <Link to='/'>Home page</Link>
        </div>
    );
};

export default ErrorPage;