import React from "react";
import { useState } from "react";

let contacts;
let setContacts;

function Erika() {

    [contacts, setContacts] = useState([]);

    return (
        <div>
            Olá, bem-vindo ao Érika's Contact Management. Eu sou a Érika, a gerente de contatos! 📖📕📱👩
            <div>
                Adicione seus contatos abaixo:<br />
                <ContactForm />
                <ContactsDetails />
            </div>
        </div>
    )
}

function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    return (
        <div>
            <label htmlFor="nome">Nome: </label>
            <input name='nome' placeholder="nome" onChange={(event) => setName(event.target.value)} />

            <label htmlFor="telefone">Telefone: </label>
            <input placeholder="telefone" type="tel" onChange={(event) => setNumber(event.target.value)} />
            
            <button type="button" onClick={() => salvarContato({ name, number })}>Salvar</button>
        </div>
    )
}

function ContactsDetails() {
    return <ol>{contacts}</ol>
}

function salvarContato(contact: { name: string, number: string }) {
    contacts.push(<li key={Math.random()}> Nome: {contact.name} | Telefone: {contact.number} </li>);
    setContacts(() => ([...contacts]));
}

export default Erika;