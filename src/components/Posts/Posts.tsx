import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store/store'
import { setFilter } from '../../store/postsSlice';

import './Posts.scss';
import { Link } from 'react-router-dom';

const Posts: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { filteredPosts, filters } = useSelector((state: RootState) => state.posts);
    const { users } = useSelector((state: RootState) => state.users);

    const handleFilterChange = (key: keyof typeof filters, value: number) => {
        dispatch(setFilter({ key, value }));
    }

    return (
        <section className='posts__wrapper'>
            <h1 className='posts__title'>Posts page</h1>
            <label htmlFor="author" className='posts__label'>
                Filter by author:
                <select
                    id="author"
                    className='posts__select'
                    onChange={(e) => handleFilterChange('userId', +e.target.value)}>
                    <option value={undefined}>All</option>
                    {
                        users.map(user => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))
                    }
                </select>
            </label>
            <ul className='posts__list'>
                {
                    filteredPosts.map(post => (
                        <li key={post.id}>
                            <Link to={`/posts/${post.id}`} className='posts__item'>
                                <h2 className='posts__subtitle'>{post.title}</h2>
                                <span className='posts__author'>Author: </span>
                                <h3 className='posts__author_title'>{users.find(user => user.id === post.userId)?.name}</h3>
                                <p className='posts__text'>{post.body}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Posts;