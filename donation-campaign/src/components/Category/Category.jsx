import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Category = () => {

    const [donationCard, setDonationCard] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonationCard(data))
    }, [])


    return (
        <div>
            <div className="border border-red-500 grid grid-cols-4 p-16 gap-4">
                {
                    donationCard.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;