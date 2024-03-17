import React from 'react';
import NavMenu from './NavMenu';
import Logout from './Logout';

const PageHeader = () => {

    return (
        <div className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <h1>Logo</h1>
            <div className="grow">
                <NavMenu />
            </div>
            <div className="flex flex-row gap-2">
                <Logout />
            </div>
        </div>
    );
};

export default PageHeader;