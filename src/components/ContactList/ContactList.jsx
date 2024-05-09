import { useSelector } from 'react-redux';
import { selectContacts, selectNameFilter } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';



export default function ContactList({onDelete}) {
    const contacts = useSelector(selectContacts);
    const filters = useSelector(selectNameFilter);
    console.log(filters)

    const visibleCard = contacts.filter(({name}) => 
        name.toLowerCase().includes(filters.toLowerCase()));
    console.log(visibleCard)
    
    return(
        <ul className={css.list}>
            {visibleCard.map((card) => (
                <li className={css.card} key={card.id}>
                  <Contact data={card} onDelete={onDelete}/>
               </li>
            ))}
        </ul>
    )
}
