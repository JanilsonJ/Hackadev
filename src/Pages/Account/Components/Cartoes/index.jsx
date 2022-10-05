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
        <div className="cards_form">
            <form onSubmit={insertNewCard}>
                <h2>Cartão</h2>
                <CampoTexto label="Número do cartão" maxLength="19" name='card_number' required/>
                <CampoTexto label="Nome no cartão" placeholder=" " name='card_name' required/>
                <CampoTexto label="Data de expiração" type='month' name='expiry' required/>
                <CampoTexto label="CVV" name='cvv' defaultValue='000' maxLength="3" disabled required/>
                <CampoTexto type="checkbox" label="Criar como principal?" name='payment_card'/>
                
                <div className='formulario__botao'>
                    <Button type="submit">Adicionar Cartão</Button>
                </div>
            </form>
        </div>
    )
}

const cards = () => {
    if (loadCards)
        return <LoadBar title="Carregando cartões..." />

    const monthNames = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
    
    return userCards.map(card => {
        const expiryDate = new Date(card?.expiry.split('T')[0])
        const expiry = `${monthNames[expiryDate.getMonth() + 1]} de ${expiryDate.getFullYear()}`

        return (
            <div className='card' key={card.card_id}>
                { card.payment_card ? <div style={{textAlign: "center", margin: "5px 0"}}>Cartão selecionado para pagamaneto<hr /></div> : null  }
                
                <div className='card_label' ><p>Número:</p>{card.card_number}</div>
                <div className='card_label' ><p>Nome no cartão:</p>{card.card_name}</div>
                <div className='card_label' ><p>Data de expiração:</p>{expiry}</div>
                <div className='card_label' ><p>CVV:</p>{card.cvv}</div>
                
                <div className='card_buttons'>
                    <button onClick={() => deleteCard(card)} className='card_button card_delete'>Excluir Cartão</button>
                    {card.payment_card ? null : 
                        <button onClick={() => setPaymentCard(card)} className='card_button card_edit'>Selecionar para pagamento</button>}
                </div>
            </div>
        )
    })
}

return (
    <div className='user_cards' style={{padding: '10px', minHeight: '400px'}}>
        <div className='title'>
            {
                showNewCardForm ?
                    <p onClick={() => setShowNewCardForm(false)} className="title_button">Voltar para cartões</p>
                :
                    <p onClick={() => setShowNewCardForm(true)} className="title_button">+ Cadastrar novo cartão</p>
            }
        </div>
        {showNewCardForm ? newCardForm() : cards()}
    </div>
)
}

export default Cartoes;