import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialData from '../../contacts.json';
import { useEffect, useState } from 'react';
import css from './App.module.css'

export default function App() {
    const[contact, setContact] = useState(() => {
        const savedContact = localStorage.getItem('saved-contact');  
        if(savedContact !== null) {
            return JSON.parse(savedContact);
        }
        return initialData
    });

    useEffect(() => {
        localStorage.setItem('saved-contact', JSON.stringify(contact));
    }, [contact]);


    return(
        <div className={css.container}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
}