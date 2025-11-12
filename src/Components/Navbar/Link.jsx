import React from 'react';

const Link = ({nav}) => {
    return (
        <div className=''>
            <li className='mr-5 '> <a href={nav.path}>{nav.name}</a></li>
        </div>
    );
};

export default Link;