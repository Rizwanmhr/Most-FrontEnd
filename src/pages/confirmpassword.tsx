import React from 'react';
import ConfirmPassword from '../components/confirmPassword/ConfirmPassword';
import Layout from '../components/Navbar/Layout';

const confirmpassword: React.FC = () => {
    return (
        <>
            <Layout>
                <ConfirmPassword />
            </Layout>
        </>
    );
};

export default confirmpassword;
