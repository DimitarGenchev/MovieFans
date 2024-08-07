const getAverageRating = (reviews) => {
    const ratingValues = reviews.map(item => item.rating);
    const sum = ratingValues.reduce((accumulator, current) => accumulator + current, 0);
    const average = sum / ratingValues.length;

    return average ? average.toFixed(1) : '';
};

export default getAverageRating;