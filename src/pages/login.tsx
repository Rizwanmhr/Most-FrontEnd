import React from 'react';
import Login from '../components/login/Login';
import Layout from '../components/Navbar/Layout';
const login: React.FC = () => {
    return (
        <div>
            <Layout>
                <Login />
            </Layout>
        </div>
    );
};

export default login;
