import { Link } from "react-router-dom";



const Card = ({ card }) => {
    const { id, image, category, title, card_bg_color, text_btn_bg_color, category_bg_color } = card;

    return (
        <div>
            <Link to={`/donation/${id}`}>
                <div className="rounded-md" style={{ backgroundColor: card_bg_color }}>
                    <div>
                        <img src={image[0]} />
                    </div>
                    <div className="p-3">
                        <button className="font-medium text-xs px-2 py-0.5 rounded-md" style={{ backgroundColor: text_btn_bg_color, color: category_bg_color }} >{category}</button>
                        <p className="font-semibold text-base py-1" style={{ color: category_bg_color }} >{title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;