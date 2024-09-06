import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';

import './Post.scss';

const getRandomPostId = (total: number, amount: number): Array<number> => {
    const numbers = new Set();

    while (numbers.size < amount) {
        const randomNumber = Math.floor(Math.random() * total) + 1;
        numbers.add(randomNumber);
    }

    return Array.from(numbers) as Array<number>;
}

const Post: React.FC = () => {
    const { posts } = useSelector((state: RootState) => state.posts);
    const { users } = useSelector((state: RootState) => state.users);
    const params = useParams();
    const navigate = useNavigate();

    const post = posts.find((post) => post.id === Number(params.postId));

    if (!post) {
        const randomPostIds = getRandomPostId(posts.length, 10);
        return (
            <section className='post__wrapper'>
                <div className="post__title_wrapper">
                    <h1 className='post__title'>Post not found</h1>
                    <button className='post__button'
                        onClick={() => navigate(-1)}
                    >Back</button>
                </div>
                <img
                    src={`https://placehold.co/200x200?text=ups...&font=railway`}
                    className="post__image"
                    alt="User photo"
                    width={400}
                    height={200}
                />

                <h2>You can check out our top 10 posts:</h2>
                <ul className='post__list'>
                    {
                        posts.map((post) => randomPostIds.includes(post.id) ? (
                            <li key={post.id}>
                                <Link to={`/posts/${post.id}`} className='posts__item'>
                                    <h2 className='post__subtitle'>{post.title}</h2>
                                    <span className='post__author'>Author: </span>
                                    <h3 className='post__author_title'>{users.find(user => user.id === post.userId)?.name}</h3>
                                    <p className='post__text'>{post.body}</p>
                                </Link>
                            </li>
                        ) : null)
                    }
                </ul>

            </section >
        )
    }
    const { title, body } = post;
    return (
        <section className='post__wrapper'>
            <div className="post__title_wrapper">
                <h2 className='post__title'>{title}</h2>
                <button className='post__button'
                    onClick={() => navigate(-1)}
                >Back</button>
            </div>
            <figure className='post__image_wrapper'
            >
                <img
                    src={`https://robohash.org/${users.find(user => user.id === post.userId)?.id}.png?size=300x300`}
                    className="post__image_img"
                    alt="User photo"
                    width={200}
                    height={200}
                />
                <figcaption className='post__author_title'>
                    Author: <h3 >{users.find(user => user.id === post.userId)?.name}</h3>
                </figcaption>
            </figure>
            <p className='post__text'>{body}</p>

        </section>
    )
}

export default Post;