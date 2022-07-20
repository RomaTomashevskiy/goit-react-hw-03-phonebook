import PropTypes from 'prop-types'; 
import css from './Container.module.css'


function Container({ children }) {
    return <div className={css.container}>{children}</div>
}

Container.prototypes = { 
    children:PropTypes.node.isRequired
}


export default Container;