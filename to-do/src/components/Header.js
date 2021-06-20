import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button  text={showAdd ? 'Close': 'Open'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title: 'To-Do List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor: 'black'
// }

export default Header
