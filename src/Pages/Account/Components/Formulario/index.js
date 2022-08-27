import CampoTexto from '../CampoTexto'
import './Formulario.css'
import Botao from '../Botao';

const Formulario = () => {
    return (
        <div>
            <section className="formulario">
                <form className="Form__DadosPessoais">
                    <h2>Dados pessoais</h2>
                    <CampoTexto label="Nome Completo" placeholder="Digite seu nome completo" />
                    <CampoTexto label="CPF" placeholder="000.000.000-00" />
                    <CampoTexto id="data__nasc" label="Data de Nascimento" placeholder="DD/MM/AAAA" type="date" />
                    <CampoTexto label="Email" placeholder="Digite seu Email" />
                    <CampoTexto label="Senha" placeholder="Digite sua Senha" />
                    <CampoTexto label="Celular" placeholder="Digite o numero do celular" />
                </form>

                <form className="Form__Endereco">
                    <h2>Endereço</h2>
                    <CampoTexto label="CEP" placeholder="00000-000" />
                    <CampoTexto label="Endereço" placeholder="Digite seu endereço" />
                    <CampoTexto label="Complemento" placeholder="Digite o complemento" />
                    <CampoTexto label="Bairro" placeholder="Digite seu bairro" />
                    <CampoTexto label="Cidade" placeholder="Digite sua cidade" />
                    <CampoTexto label="Estado" placeholder="Digite o seu estado" />
                </form>

                <form className="Form__Cartao">
                    <h2>Cartão</h2>
                    <CampoTexto label="Numero do cartão" placeholder=" " />
                    <CampoTexto label="Nome no cartão" placeholder=" " />
                    <CampoTexto label="Data de expiração" placeholder="MM/AAAA" />
                    <CampoTexto label="Código de segurança (CVV)" placeholder="000" />
                </form>
            </section>

            <Botao>Alterar dados</Botao>

        </div>
    )
}

export default Formulario