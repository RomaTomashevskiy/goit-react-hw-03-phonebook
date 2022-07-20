import PropTypes from 'prop-types'; 
import css from './Filter.module.css'
import shortid from "shortid";
function Filter({ value, onChange }) {

    const filterId = shortid.generate();
    
    return (
        <label htmlFor={filterId} className={css.filter_label}>
            Find contacts by name
            <input id={filterId} type="text" value={value} onChange={onChange}  className={css.filter_input} />
        </label>
    )
};

Filter.prototypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default Filter;