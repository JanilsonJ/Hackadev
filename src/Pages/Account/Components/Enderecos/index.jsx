import { UserContext } from '../../../../Context/user';
import { useContext, useState } from 'react';

import CampoTexto from '../CampoTexto'
import Button from '../../../../Components/Button';
import LoadBar from '../../../../Components/LoadBar';

import './enderecos.css'
import useFetch from '../../../../hooks/useFetch';

const Enderecos = () => {
    const { user } = useContext(UserContext);

    const [showAddressForm, setShowAddressForm] = useState(false);

    const {data: userAddresses, isFetching: loadAddresses, refetch} = useFetch(`customer_address/${user.id}`)

    const insertNewAddress = async (e) => {
        e.preventDefault();

        const AddressFormData = new FormData(e.target);
        const addressData = {};

        AddressFormData.forEach((value, key) => (addressData[key] = value));
        addressData.customer_id = user.id; 
        addressData.principal_address = addressData.principal_address === "" ? true : false; 

        const AddressOptions = {
            method: 'POST',
            body: JSON.stringify(addressData),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        //Adicionando dados base do produto ao banco
        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + 'customer_address', AddressOptions)
        .then((data) => {
            // console.log(data)
            refetch();
            setShowAddressForm(false);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const deleteAddress = async (address) => {
        const AddressOptions = {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer_address/${address.address_id}`, AddressOptions)
        .then((data) => {
            // console.log(data);
            refetch();
        })
        .catch(err => {
            console.log(err);
        });
    }

    const setprincipalAddress = async (address) => {
        const AddressOptions = {
            method: 'PUT',
            body: JSON.stringify(address),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        }

        await fetch(process.env.REACT_APP_API_URL.replaceAll('"', '') + `customer_delivery_address`, AddressOptions)
        .then((data) => {refetch()})
        .catch(err => {console.log(err)});
    }

    const addressForm = () => {
        return (
            <div className="address_form" >
                <form onSubmit={insertNewAddress}>
                    <h2>Endereço</h2>
                    <CampoTexto label="Destinátario: " maxLength='50' name='addressee' required/>
                    <CampoTexto label="CEP: " placeholder="00000-000" name='cep' required/>
                    <CampoTexto label="Endereço: " placeholder="Digite seu endereço" name='address' required/>
                    <CampoTexto label="Complemento: " placeholder="Digite o complemento" name='complement' required/>
                    <CampoTexto label="Bairro: " placeholder="Digite seu bairro" name='district' required/>
                    <CampoTexto label="Cidade: " placeholder="Digite sua cidade" name='city' required/>
                    <CampoTexto label="Estado: " placeholder="Digite o seu estado" name='state' required/>
                    <CampoTexto type="checkbox" label="Criar como destino atual?" name='principal_address'/>
                    
                    <div className='formulario__botao'>
                        <Button type="submit">Adicionar Endereço</Button>
                    </div>
                </form>
            </div>
        )
    }

    const addresses = () => {
        if (loadAddresses)
            return <LoadBar title="Carregando endereços..." />

        return userAddresses.map(address => {
            return (
                <div className='address' key={address.address_id}>
                    <div className='address_label' ><p>Destinatário:</p>{address.addressee}</div>
                    <div>
                        <label htmlFor="principal_address">Endereço de entrega?</label>
                        <input type="checkbox" id='principal_address' name='principal_address' disabled checked={address.principal_address}/>
                    </div>
                    <hr style={{width: '80%'}}/>
                    <div className='address_label' ><p>CEP:</p>{address.cep}</div>
                    <div className='address_label' ><p>Endereço:</p>{address.address}</div>
                    <div className='address_label' ><p>Complemento:</p>{address.complement}</div>
                    <div className='address_label' ><p>Bairro:</p>{address.district}</div>
                    <div className='address_label' ><p>Cidade:</p>{address.city}</div>
                    <div className='address_label' ><p>Estado:</p>{address.state}</div>

                    <div className='address_buttons'>
                        <button onClick={() => deleteAddress(address)} className='address_button address_delete'>Excluir</button>
                        {address.principal_address ? null : 
                            <button onClick={() => setprincipalAddress(address)} className='address_button address_edit'>Selecionar como destino</button>}
                    </div>
                </div>
            )
        })
    }

    return (
        <div className='user_addresses' style={{padding: '10px', minHeight: '400px'}}>
            <div className='title'>
                {
                    showAddressForm ? 
                        <p onClick={() => setShowAddressForm(false)} className="title_button">Voltar para endereços</p>
                    :
                        <p onClick={() => setShowAddressForm(true)} className="title_button">+ Cadastrar novo endereço</p>
                }
            </div>
            {showAddressForm ? addressForm() : addresses()}
        </div>
    )
}

export default Enderecos