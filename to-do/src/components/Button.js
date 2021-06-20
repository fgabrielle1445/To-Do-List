import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    const btn_style = {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      };
    return (
        <button 
            onClick={onClick} 
            style={ btn_style } 
            className = 'btn'  
        >
        { text }
        </button>
    )
}

Button.defaultProps = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    EboxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
