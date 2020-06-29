import React from 'react';
import PropTypes from 'prop-types'


const Header = ({titulo}) => {
    return ( 
        <div className="w-full shadow-md px-2 py-2 bg-blue-500 flex justify-center ">
            <a href="#!" className="text-3xl text-center font-bold text-white">{titulo}</a>
        </div>
     );
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;