const Cake = ({cakeName, ingredients, price, rating}) => {

    return (
        <>
        <h3> {cakeName} </h3>
        <p> Ingredients List: {ingredients} </p>
        <p> Cake Price: {price} </p>
        <p> Cake Rating: {rating} </p>
        </>
    );

};

export default Cake;