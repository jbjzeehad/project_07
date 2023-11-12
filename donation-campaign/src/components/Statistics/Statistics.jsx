import { storedDonationList } from "../../utility/localStorage";

const Statistics = () => {
    const storedCard = storedDonationList();
    const totalDonates = storedCard.length;
    const donatePercentage = (totalDonates / 12) * 100;
    const nonDonatePercentage = 100 - donatePercentage;
    return (
        <div className="bg-white">
            <h3>This is Statistis :{storedCard.length}</h3>
            <h3>This is donates Statistis :{donatePercentage.toFixed(1)}%</h3>
            <h3>This is Non donates Statistis :{nonDonatePercentage.toFixed(1)}%</h3>
        </div>
    );
};

export default Statistics;