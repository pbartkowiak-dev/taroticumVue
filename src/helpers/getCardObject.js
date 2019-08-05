import cards from './cards';

const getCardFileName = cardNumber => {
	return `card_${cardNumber}.jpg`;
};

export const getCardUrl = cardId => {
	const rootPath = '/img/tarot-cards/'
	return `${rootPath}${getCardFileName(cardId)}`;
};


export const getCardObject = cardNumber => {
	if (cardNumber) {
		const cardObj = Object.assign({}, cards[cardNumber]);
		return cardObj;
	}
	return Object.assign({}, cards);
};
