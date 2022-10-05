import CampoTexto from '../CampoTexto'

import { UserContext } from '../../../../Context/user';
import { useContext, useState } from 'react';

import Button from '../../../../Components/Button';

import './cartoes.css'
import LoadBar from '../../../../Components/LoadBar';
import useFetch from '../../../../hooks/useFetch';

const Cartoes = () => {const { user } = useContext(UserContext);

const [showNewCardForm, setShowNewCardForm] = useState(false);

const {data: userCards, isFetching: loadCards, refetch} = useFetch(`customer_cards/${user.id}`)

const insertNewCard = async (e) => {
    e.preventDefault();

    const CardFormData = new FormData(e.target);
    const cardData = {};

    CardFormData.forEach((value, key) => (cardData[key] = value));
    cardData.customer_id = user.id; 
    cardData.payment_card = cardData.payment_card === "" ? true : false; 

    console.log(cardData)
    const AddressOptions = {
        method: 'POST',
        body: JSON.stringify(cardData),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }

    //Adicionando dados base do produto ao banco
    await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'customer_card', AddressOptions)
    .then((data) => {
        // console.log(data)
        refetch();
        setShowNewCardForm(false);
    })
    .catch(err => {
        console.log(err);
    });
}

const deleteCard = async (card) => {
    const AddressOptions = {
        method: 'DELETE',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }

    await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer_card/${card.card_id}`, AddressOptions)
    .then((data) => {
        // console.log(data);
        refetch();
    })
    .catch(err => {
        console.log(err);
    });
}

const setPaymentCard = async (card) => {
    const AddressOptions = {
        method: 'PUT',
        body: JSON.stringify(card),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        })
    }

    await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer_payment_card`, AddressOptions)
    .then((data) => {refetch()})
    .catch(err => {console.log(err)});
}

const newCardForm = () => {
    return (
        <div>
            <section className="formulario">
                <form className="Form__Cartao" onSubmit={insertNewCard}>
                    <h2 >Cartão</h2>
                    <CampoTexto label="Número do cartão" placeholder=" " name='card_number' required/>
                    <CampoTexto label="Nome no cartão" placeholder=" " name='card_name' required/>
                    <CampoTexto label="Data de expiração" placeholder="MM/AAAA" type='month' name='expiry' required/>
                    <CampoTexto label="CVV" name='cvv' required/>
                    <CampoTexto type="checkbox" label="Criar como principal?" name='payment_card'/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Adicionar Cartão</Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

const cards = () => {
    if (loadCards)
        return <LoadBar title="Carregando cartões..." />

    return userCards.map(card => {
        return (
            <div className='card' key={card.card_id}>
                { card.payment_card ? <div style={{textAlign: "center", margin: "5px 0"}}>Cartão selecionado para pagamaneto<hr /></div> : null  }
                
                <div className='card_label' ><p>Número:</p>{card.card_number}</div>
                <div className='card_label' ><p>Nome no cartão:</p>{card.card_name}</div>
                <div className='card_label' ><p>Data de expiração:</p>{card.expiry}</div>
                <div className='card_label' ><p>CVV:</p>{card.cvv}</div>
                
                <div className='card_buttons'>
                    <button onClick={() => deleteCard(card)} className='card_button card_delete'>Excluir Cartão</button>
                    {card.payment_card ? null : 
                        <button onClick={() => setPaymentCard(card)} className='card_button card_edit'>Selecionar como para pagamento</button>}
                </div>
            </div>
        )
    })
}

return (
    <div className='user_cards' style={{padding: '10px', minHeight: '400px'}}>
        <div className='title'>
            <p onClick={() => setShowNewCardForm(false)} >Cartões</p>
            <p onClick={() => setShowNewCardForm(true)} className="title_newCard" >+ Cadastrar novo cartão</p>
        </div>
        {showNewCardForm ? newCardForm() : cards()}
    </div>
)
}

export default Cartoes;