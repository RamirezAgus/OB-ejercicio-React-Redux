import PropTypes from 'prop-types';

// active
const Filter = ({ onClick, children }) => {
    return (
        <button className='filter'
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}>
            {children}
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
};


export default Filter;
