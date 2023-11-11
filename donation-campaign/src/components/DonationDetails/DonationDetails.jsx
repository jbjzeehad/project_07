import Card from "../Card/Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DonationDetails = ({ id }) => {

    const donationDone = () => {
        toast('Donation Done');

    }





    return (
        <div>
            <div>

                <img src="" />
                <div>

                    <button onClick={donationDone}>Donate { }</button>
                </div>

            </div>
            <div>
                <p>Title: <Card>{id}</Card></p>
                <p>Details: { }</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;