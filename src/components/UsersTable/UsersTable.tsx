import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { setFilter, removeUser } from '../../store/usersSlice';

import './UsersTable.scss';
import { Modal } from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import AddUserForm from '../AddUserForm/AddUserForm';

const columns = ['name', 'username', 'email', 'phone', ''];

const UsersTable: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filteredUsers, filters, loading, error } = useSelector((state: RootState) => state.users);
    const modalRef = useRef<HTMLDialogElement>(null);

    const handleFilterChange = (key: keyof typeof filters, value: string) => {
        dispatch(setFilter({ key, value }));
    };

    if (loading) {
        return (
            <div style={{
                display: 'flex', justifyContent: 'center', height: "calc(100dvh - 100px)", alignItems: 'center'
            }}>
                <Spinner />
            </div>);
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <section>
            <h1 className='title_main'>User Management Table</h1>
            <table className='table'>
                <thead>
                    <tr>
                        {columns.map((column, i) => (
                            <th key={column + i}>
                                {i !== columns.length - 1 ?
                                    (<>
                                        {column}
                                        <input
                                            className='table__input'
                                            type="search"
                                            value={filters[column as keyof typeof filters]}
                                            onChange={(e) => handleFilterChange(column as keyof typeof filters, e.target.value)}
                                        />
                                    </>) :
                                    <button
                                        className='table__addUser'
                                        onClick={() => modalRef.current?.showModal()}
                                    >
                                        &times;
                                    </button>
                                }
                            </th>

                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>
                                <button
                                    onClick={() => dispatch(removeUser({ id: user.id }))}
                                    className='table__removeUser'
                                >
                                    &times;
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal ref={modalRef}>
                <AddUserForm parentRef={modalRef} />
            </Modal>
        </section>
    );
};

export default UsersTable;