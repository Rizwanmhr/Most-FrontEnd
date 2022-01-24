import React, { ReactChild } from 'react';
import Navbar from './Navbar';

interface AuxProps {
    children: ReactChild | React.ReactChildren;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Layout = ({ children }: AuxProps) => {
    return (
        <div className="layout">
            <Navbar />
            <div>{children}</div>
        </div>
    );
};

export default Layout;
