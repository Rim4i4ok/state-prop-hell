import React from 'react';

const Nav = ({name, price}) => {

    return (
        <nav>
            <h3>{name}</h3>
            <p>{price}</p>
        </nav>
    );
}

export default Nav;