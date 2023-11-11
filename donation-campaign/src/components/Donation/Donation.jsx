import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { storedDonationList } from "../../utility/localStorage";


const Donation = () => {
    const listedCard = useLoaderData();

    const [cardSelected, setCardSelected] = useState([]);



    useEffect(() => {
        const storedCard = storedDonationList();
        if (listedCard.length > 0) {
            // const selectedCard = listedCard.filter(card => storedCard.includes(card.id));

            const appliedCard = [];
            for (const id of storedCard) {
                const card = listedCard.find(card => card.id === id);
                if (card) {
                    appliedCard.push(card);
                }
            }

            setCardSelected(appliedCard);


            // console.log(listedCard, storedCard, appliedCard);

        }

    }, []);



    return (
        <div >
            <h2 className="text-2xl">What i selected for donation : {cardSelected.length} </h2>
            <div>
                {
                    cardSelected.map(card => <li key={card.id}>
                        <span>{card.title}: {card.category}</span>

                    </li>)
                }
            </div>
        </div>
    );
};

export default Donation;