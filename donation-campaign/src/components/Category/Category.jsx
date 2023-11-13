import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Category = () => {

    const [donationCard, setDonationCard] = useState([]);
    ////////////////////////////////////////////////
    const [displayCards, setDisplayCards] = useState([]);
    ////////////////////////////////////////////////
    const [inputValue, setInputValue] = useState('');
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDonationCard(data))
    }, [])
    ///////////////////////////////////////////////////
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleCardsFilter = filter => {
        if (filter === '') {
            setDisplayCards(donationCard);
        }
        else if (filter === 'food') {
            const foodCards = displayCards.filter(card => card.category === 'Food');
            setDisplayCards(foodCards);
        }
        else if (filter === 'clothing') {
            const clothingCards = displayCards.filter(card => card.category === 'Clothing');
            setDisplayCards(clothingCards);
        }
        else if (filter === 'education') {
            const educationCards = displayCards.filter(card => card.category === 'Education');
            setDonationCard(educationCards);
        }
        else if (filter === 'health') {
            const healthCards = displayCards.filter(card => card.category === 'Health');
            setDonationCard(healthCards);
        }
    }
    //////////////////////////////////////////////////////
    return (
        <div>
            <div className='bg-white pb-3'>
                <div className=" relative">
                    <img className=" opacity-10" src="https://i.ibb.co/9HrbJK8/background.png" />
                    <div className="absolute bottom-2/3 text-center w-full">
                        <p className=" font-bold text-4xl text-[#0B0B0B]">I Grow By Helping People In Need</p>
                    </div>
                    <div className="absolute bottom-1/4 left-1/3 px-10 py-14">
                        <input className="bg-white py-1 px-3 rounded-l-md border border-gray-300" type="text" placeholder="Search here.... " onChange={handleChange} />
                        <button className="text-white font-semibold text-sm px-3 py-1.5 rounded-r-md bg-[#FF444A]" onClick={() => handleCardsFilter(inputValue)}>Search</button>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-4 p-16 gap-4">
                {
                    donationCard.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;