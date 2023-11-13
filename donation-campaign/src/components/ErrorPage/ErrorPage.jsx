import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="bg-white text-center p-48">
            <h2 className="font-bold text-4xl text-cyan-950 pb-5">404 Not Found</h2>
            <Link to='/'>Back to Home page</Link>
        </div>
    );
};

export default ErrorPage;