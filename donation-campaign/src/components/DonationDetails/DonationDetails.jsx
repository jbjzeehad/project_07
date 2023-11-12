
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { donationList } from "../../utility/localStorage";


const DonationDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const card = cards.find(card => card.id === idInt);
    console.log(card);

    const donationDone = () => {
        donationList(idInt);
        toast('Donation Done');

    }
    const handleApplyCard = () => {

    }


    return (
        <div>
            <div>

                <h2>Job Details of : {id} </h2>
                <div>

                    <button onClick={() => { donationDone(), handleApplyCard() }}>Donate { }</button>
                </div>

            </div>
            <div>
                <img src={card.image} alt="" />
                <p>Title:{card.title}</p>
                <p>Details:{card.description}</p>
            </div>

            <ToastContainer />
        </div>
    );
};

export default DonationDetails;