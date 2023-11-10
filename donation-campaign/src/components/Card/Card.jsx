

const Card = ({ card }) => {
    const { image, category, title, card_bg_color, text_btn_bg_color, category_bg_color } = card;


    return (
        <div className="border" style={{ backgroundColor: card_bg_color }}>
            <div>
                <img src={image} alt="" />
                <button style={{ backgroundColor: text_btn_bg_color, color: category_bg_color }} >{category}</button>
                <p style={{ color: category_bg_color }} >{title}</p>
            </div>
        </div>
    );
};

export default Card;