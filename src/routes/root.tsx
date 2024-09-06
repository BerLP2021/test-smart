import React from 'react';

import { LoaderFunction, Outlet } from 'react-router-dom';
import { store } from '../store/store';
import { fetchUsers } from '../store/usersSlice';
import { fetchPosts } from '../store/postsSlice';
import SideBar from '../components/SideBar/SideBar';
import Header from '../components/Header/Header';

export const loader: LoaderFunction = async () => {
    await store.dispatch(fetchUsers());
    await store.dispatch(fetchPosts());
    return null
};

const Root: React.FC = () => {

    return (
        <>
            <Header />
            <div className="container">
                <SideBar />
                <main id="detail" className='detail'>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Root;
