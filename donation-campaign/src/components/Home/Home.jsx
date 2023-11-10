import Banner from "../Banner/Banner";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div className="bg-white">
            <Banner></Banner>
            <h1>This is Home page</h1>
            <Category></Category>
        </div>
    );
};

export default Home;