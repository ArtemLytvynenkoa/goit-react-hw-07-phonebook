import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ListItem from "../ListItem";
import s from "./ContactsList.module.css";
import { getFilter } from "../../redux/contactsFilter/slice";

function ContactsList({contacts = []}) {
    const filter = useSelector(getFilter);

    const getVisibleContacts = () => {
        const normalizedFilterText = filter.toLowerCase();
    
            return contacts?.filter(({name}) =>
            name.toLocaleLowerCase().includes(normalizedFilterText));
    };

    const visibleContacts = getVisibleContacts();

    return (
        <ul className={s.list}>
            {visibleContacts.map(({ id, name, number }) => (
                <ListItem
                    key={id}
                    name={name}
                    number={number}
                    id={id}
                />
            ))}     
        </ul>
    )   
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }))
}

export default ContactsList;