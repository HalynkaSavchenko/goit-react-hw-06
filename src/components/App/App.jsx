import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import initialData from '../../contacts.json';
import { useEffect, useState } from 'react';
import css from './App.module.css'

export default function App() {

    return(
        <div className={css.container}>
            <div className={css.formwrapper}>
              <h1 className={css.title}>Phonebook</h1>
              <ContactForm />
              <SearchBox />
            </div>
            <div className={css.listwrapper}>
              <ContactList /> 
            </div>
        </div>
    )
}