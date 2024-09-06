import { RootState } from '../../store/store';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

import './UserProfile.scss';

const addDefaultImg = (e: React.SyntheticEvent<HTMLImageElement>) => (e.currentTarget.src = 'https://placehold.co/200x200?text=ups...&font=railway');

export const inputs = ['name', 'username', 'email', 'phone'];

const UserProfile: React.FC = () => {
    const { users } = useSelector((state: RootState) => state.users);
    const [isEditing, setIsEditing] = useState(false);
    const params = useParams();

    const user = users.find((user) => user.id === Number(params.userId));
    if (!user) return (
        <section className="profile__wrapper">
            <div className="profile__title_wrapper">
                <h1 className='profile__title'>User not found</h1>
            </div>
            <img
                src={`https://placehold.co/200x200?text=ups...&font=railway`}
                className="profile__image"
                alt="User photo"
                width={400}
                height={400}
            />
        </section>
    );

    const { name, username } = user;

    return (
        <section className="profile__wrapper">
            <div className="profile__title_wrapper">
                <h1 className='profile__title'>{name}</h1>
                <button
                    type="submit"
                    className="profile__button"
                    onClick={() => setIsEditing(!isEditing)}
                >{isEditing ? 'Save' : 'Edit'}</button>
            </div>
            <img
                src={`https://robohash.org/${username}.png?size=300x300`}
                className="profile__image"
                alt="User photo"
                width={300}
                height={300}
                onError={addDefaultImg}
            />
            <form className="profile__content"
            >
                {inputs.map((input, i) => (
                    <label key={input} htmlFor={input} className="profile__label">
                        {input}
                        <input
                            required
                            readOnly={!isEditing}
                            autoFocus={!i ? true : false}
                            autoComplete='off'
                            className={`${isEditing ? 'profile__input_editing' : 'profile__input'}`}
                            type="search"
                            defaultValue={user[input as keyof typeof user]}
                            id={input}
                            name={input}
                        />
                    </label>
                ))}
            </form>
        </section>
    );
};

export default UserProfile;
