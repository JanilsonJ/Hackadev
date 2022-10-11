import { useContext } from 'react';

import useFetch from '../../../../hooks/useFetch';
import LoadBar from '../../../../Components/LoadBar';
import { UserContext } from '../../../../Context/user';

import './historico.css'

const Historico = () => {
    const { user } = useContext(UserContext);

    const { data: orders, isFetching} = useFetch(`orders/customer/${user.id}`)

    const BRL = (price) => {
        return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price)
    }

    // Agrupa os items pelo id do pedido
    const groupOrdersId = () => {
        return orders?.reduce((result, currentValue) => {
            (result[currentValue.order_details_id] = result[currentValue.order_details_id] || []).push(currentValue);
            return result;
        }, {});
    };

    const userHistory = () => {
        const items = groupOrdersId();

        if(!items)
            return

        return Object.keys(items).map(order => {
            return (
                <div key={order} >
                    <div className="order">
                        <div className='order_details'>
                            <p><strong>Pedido Nº {order}</strong></p>
                            <p><strong>Endereço:</strong> {items[order][0].order_address}</p>
                            <p><strong>Destinatário:</strong> {items[order][0].addressee}</p>
                            <p><strong>Data:</strong> {items[order][0].order_date.split('T')[0]}</p>
                            <p><strong>Valor total:</strong> {BRL(items[order][0].total_price)}</p>
                            <p><strong>Parcelas:</strong> {items[order][0].installments}</p>
                        </div>
                        <div className='order_items'>
                            {
                                items[order].map(i => {
                                    return (
                                        <div key={i.order_items_id} className='order_item'>
                                            <img src={i.image1} alt={i.name}/>
                                            <div className='order_item_description'>
                                                <p><strong>{i.name}</strong></p>
                                                <p><strong>Tamanho: <span style={{color: 'var(--MetallicRed)'}}>{i.size}</span></strong></p>
                                                <p><strong>Quantidade:</strong> {i.order_items_quantity}</p>
                                                <p><strong>Valor pago:</strong> {BRL(i.order_items_price * i.order_items_quantity)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    
                    <hr />
                </div>
            )
        })
    }

    return (
        <div className='user_history'>
            <h2 className='title'>Histórico de pedidos</h2>
            {isFetching ? <LoadBar title='Carregando histórico...' /> : userHistory()}
        </div>
    )
}

export default Historico