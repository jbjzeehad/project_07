
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
    return (
        <div className='bg-white px-20 py-6'>
            <div className=" w-full relative">
                <img src={card.image[2]} />
                <div className="absolute bottom-0 p-7 w-full bg-[#00000080]">
                    <button onClick={donationDone} className="text-white font-semibold text-sm px-3 py-2 rounded-md" style={{ backgroundColor: card.category_bg_color }}>Donate {card.price}</button>
                </div>
            </div>
            <div className='py-5'>
                <p className='font-bold text-4xl text-[#0B0B0B]'>{card.title}</p>
                <p className='text-sm font-normal pt-3 text-zinc-600'>{card.description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DonationDetails;