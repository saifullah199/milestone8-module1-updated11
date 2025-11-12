import React from 'react';

const Link = ({nav}) => {
    return (
        <div className=''>
            <li className='lg:mr-10 px-4 hover:bg-amber-500 rounded-md'>
                 <a href={nav.path}>{nav.name}</a>
            </li>
        </div>
    );
};

export default Link;