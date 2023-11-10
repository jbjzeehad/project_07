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
            <h1>Donation Category Cards: {donationCard.length}</h1>
            <div className="grid grid-cols-4 mx-24">
                {
                    donationCard.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
            </div> */}
        </div>
    );
};

export default Category;