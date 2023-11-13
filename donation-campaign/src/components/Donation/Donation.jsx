import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { storedDonationList } from "../../utility/localStorage";


const Donation = () => {
    const listedCard = useLoaderData();
    const [cardSelected, setCardSelected] = useState([]);
    const [cardLength, setCardLength] = useState(4);



    useEffect(() => {
        const storedCard = storedDonationList();

        if (listedCard.length > 0) {

            const appliedCard = [];
            for (const id of storedCard) {
                const card = listedCard.find(card => card.id === id);
                if (card) {
                    appliedCard.push(card);
                }
            }
            setCardSelected(appliedCard);

        }

    }, []);

    return (
        <div className="bg-white">
            <div className="grid grid-cols-2 px-16 py-12 gap-4" >
                {
                    cardSelected.slice(0, cardLength).map(card =>
                        <div key={card.id} className=" flex rounded-md" style={{ backgroundColor: card.card_bg_color }}>
                            <div >
                                <img className=" rounded-l-md w-40 h-36" src={card.image[1]} />
                            </div>
                            <div className="py-3 px-4">
                                <button className="font-medium text-xs px-2 py-0.5 rounded-md" style={{ backgroundColor: card.text_btn_bg_color, color: card.category_bg_color }} >{card.category}</button>
                                <p className="font-semibold text-lg py-0.5 text-[#0B0B0B]" >{card.title}</p>
                                <p className="font-semibold  text-base pb-1" style={{ color: card.category_bg_color }} >{card.price}</p>
                                <Link to={`/donation/${card.id}`}>
                                    <button className="text-white font-semibold text-sm px-2 py-1 rounded-md" style={{ backgroundColor: card.category_bg_color }}>View Details</button>
                                </Link>
                            </div>

                        </div>)
                }
            </div>
            <div className='text-center pb-16'>
                <button onClick={() => setCardLength(listedCard.length)} className={`${cardLength === listedCard.length ? 'hidden' : ''} ${cardSelected.length < 5 ? 'hidden' : ''} ${'text-white font-semibold text-base px-5 py-2 rounded-lg bg-[#009444]'}`}>See All</button>
            </div>
        </div>
    );
};

export default Donation;