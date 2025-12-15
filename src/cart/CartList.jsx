import CardItem from './CartItem';
import { useEffect } from 'react';
import { useState } from 'react';

function CardList() {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const localStorageStore = localStorage.getItem('cart-products');
        if (localStorageStore) {
            setCartProducts(JSON.parse(localStorageStore));
        }
    }, []);

    const onRemove = (p_id) => {
        const filtered = cartProducts.filter(p => p.id !== p_id);
        localStorage.setItem('cart-products', JSON.stringify(filtered));
    }

    return (
        <div>
            {cartProducts.length === 0 ? (
                <div>
                    <h3 className='empty-text'>Cart empty</h3>
                </div>
            ) : (
                <div className='card-list'>
                    {cartProducts.map((p) => (
                        <CardItem key={p.id} product={p} onRemove={onRemove} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CardList;