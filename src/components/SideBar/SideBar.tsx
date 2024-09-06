import React, { useEffect } from 'react'
import { AppDispatch, RootState } from '../../store/store';
import { Link, NavLink, NavLinkRenderProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import './SideBar.scss';
import Spinner from '../Spinner/Spinner';
import useDebounce from '../../hooks/useDebounce';
import { setFilter } from '../../store/usersSlice';
import AddUserForm from '../AddUserForm/AddUserForm';
import { Modal } from '../Modal/Modal';

const activeStyles = ({ isActive }: NavLinkRenderProps): React.CSSProperties => ({
    fontWeight: isActive ? 'bold' : 'normal',
    marginLeft: isActive ? '15px' : '0px'
});

const SideBar: React.FC = () => {
    const [searchQuery, setSearchQuery] = React.useState<string>('');
    const modalRef = React.useRef<HTMLDialogElement>(null);
    const { debouncedValue } = useDebounce<string>(searchQuery, 500);

    const dispatch = useDispatch<AppDispatch>();
    const { filters } = useSelector((state: RootState) => state.users);
    const { filteredUsers, loading, error } = useSelector((state: RootState) => state.users);


    useEffect(() => {
        dispatch(setFilter({ key: 'name', value: debouncedValue }));
    }, [debouncedValue, dispatch]);
    console.log('SideBar')

    if (loading) {
        return (
            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center', height: "calc(100vh - 100px)",
                alignItems: 'center', minWidth: '250px',
            }}>
                <Spinner />
            </div>);
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    }

    return (
        <>
            <aside id="sidebar" className='sidebar'>
                <div className="sidebar__wrapper">
                    <h2 className='sidebar__title'>Teammate's Contacts</h2>
                    <div className="sidebar__search">
                        <form
                            id="search-form"
                            className='sidebar__search_search'
                        >
                            <input
                                id="q"
                                className='sidebar__search_input'
                                placeholder="Search"
                                autoComplete="off"
                                type="search"
                                value={filters['name' as keyof typeof filters]}
                                name="q"
                                onChange={handleChange}
                            />
                        </form>
                        <button
                            type="submit"
                            className='sidebar__search_add'
                            onClick={() => modalRef.current?.showModal()}
                        >New</button>
                    </div>
                    <nav className="sidebar__links">
                        <ul>
                            {
                                filteredUsers.map(user => (
                                    <li key={user.id}>
                                        <NavLink to={`/users/${user.id}`} style={activeStyles}>{user.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <div className="sidebar__logo">
                        <Link to={`/`}><img src="/logo.png" alt="Test Logo" /></Link>
                    </div>
                </div>
            </aside>
            <Modal ref={modalRef}>
                <AddUserForm parentRef={modalRef} />
            </Modal>
        </>
    )
}
export default SideBar;