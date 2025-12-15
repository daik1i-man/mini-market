function CardItem({ product, onRemove }) {
    return (
        <div className="card-item">
            <div className="card-item-container">
                <img src={product.image} alt={product.title} />
                <div className="cart-item-texts">
                    <h3>{product.title}</h3>
                    <p>{product.price}$</p>
                    <p>Quantity: {product.quantity}</p>
                    <button onClick={() => onRemove(product.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default CardItem;