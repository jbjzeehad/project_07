const storedDonationList = () => {
    const listItem = localStorage.getItem('donation-card');
    if (listItem) {
        return JSON.parse(listItem);
    }
    return [];
}

const donationList = id => {
    const listItem = storedDonationList();
    const cardExist = listItem.find(cardId => cardId === id);
    if (!cardExist) {
        listItem.push(id);
        localStorage.setItem('donation-card', JSON.stringify(listItem));
    }


}

export { storedDonationList, donationList }