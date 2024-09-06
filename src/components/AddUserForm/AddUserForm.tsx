import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';

import { addUser } from '../../store/usersSlice';
import { AppDispatch } from '../../store/store';
import { inputs } from '../USerProfile/UserProfile';

import './AddUserForm.scss';

type Props = { parentRef: React.RefObject<HTMLDialogElement> }
const AddUserForm: React.FC<Props> = ({ parentRef }) => {
    const dispatch = useDispatch<AppDispatch>();

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const phone = formData.get('phone') as string;

        const id = Math.trunc(Math.random() * 1000000);
        const user = { name, username, email, phone, id };
        dispatch(addUser({ user }));
        e.currentTarget.reset();
        parentRef.current?.close();
    }

    const handleCloseForm = () => {
        formRef.current?.reset();
        parentRef.current?.close();
    }
    return (
        <>
            <h1 className='title'>Add User</h1>
            <form className='add-user__form'
                ref={formRef}
                onSubmit={handleSubmit}
            >
                {inputs.map((input, i) => (
                    <label key={input} htmlFor={input} className='add-user__label'>
                        {input}
                        <input
                            required
                            autoFocus={!i ? true : false}
                            autoComplete='off'
                            className='add-user__input'
                            type="search"
                            id={input}
                            name={input}
                        />
                    </label>
                ))}
                <div className="add-user__btns_wrapper">
                    <button
                        className='add-user__btn'
                        type='button'
                        onClick={handleCloseForm}
                    >Close</button>
                    <button
                        className='add-user__btn'
                        type='submit'
                    >
                        Add User
                    </button>
                </div>

            </form>
        </>
    )
}

export default AddUserForm;