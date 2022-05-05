import PropTypes from "prop-types";
import { useDeleteContactMutation } from "redux/contactsList/slice";
import s from "./ListItem.module.css";

function ListItem({ name, number, id }) {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
    
    return (
        <li className={s.item} >
            <p>{name}</p>
            <a className={s.link} href={`tel:+${number.split('-').join('')}`}>{number}</a>
            <button
                disabled={isDeleting} 
                className={s.button}
                type="button"
                onClick={() => deleteContact(id)}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
        </li >
    )
}

ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default ListItem;