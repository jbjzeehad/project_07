
import { PieChart, Pie, Cell } from 'recharts';
import { storedDonationList } from "../../utility/localStorage";




const Statistics = () => {
    const storedCard = storedDonationList();
    const totalDonates = storedCard.length;
    const donatePercentage = (totalDonates / 12) * 100;
    const nonDonatePercentage = 100 - donatePercentage;
    console.log(donatePercentage, nonDonatePercentage, totalDonates);

    const data = [
        { name: 'Group A', value: donatePercentage },
        { name: 'Group B', value: nonDonatePercentage },
    ];

    const COLORS = ['#00C49F', '#FF444A'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };

    return (
        <div className='bg-white grid justify-center pb-8 pt-3'>
            <div>
                <PieChart width={700} height={300}>
                    <Pie className='text-lg font-bold'
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={130}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex justify-center items-center gap-3 my-3 font-normal text-black'>
                <p>Your Donation</p>
                <p className='w-14 h-1.5 mr-4 bg-[#00C49F]'></p>
                <p>Total Donation</p>
                <p className='w-14 h-1.5 bg-[#FF444A]'></p>
            </div>


        </div>

    );
};

export default Statistics;





















// import { storedDonationList } from "../../utility/localStorage";

// const storedCard = storedDonationList();
// const totalDonates = storedCard.length;
// const donatePercentage = (totalDonates / 12) * 100;
// const nonDonatePercentage = 100 - donatePercentage;
// ////////////////////////////////////////////