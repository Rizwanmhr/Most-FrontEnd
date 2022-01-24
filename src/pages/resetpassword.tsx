import React from 'react';
import ResetPassword from '../components/ResetPassword/ResetPassword';
import Layout from '../components/Navbar/Layout';

const resetpassword: React.FC = () => {
    return (
        <>
            <Layout>
                <ResetPassword />
            </Layout>
        </>
    );
};

export default resetpassword;
