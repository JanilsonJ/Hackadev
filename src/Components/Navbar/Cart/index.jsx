import './cart.css';

const Cart = (props) => {
    return (
        <section className='cart'>
            {props.bagItems.map( (items) => { 
                return(
                    <img key={items.id} src={items.img[0]} alt={items.name} style={{width: '100px'}} />
                )
            })}
        </section>
    )
}

export default Cart