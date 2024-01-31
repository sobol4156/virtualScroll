import { FC } from 'react';
import '../PostList.scss'
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setSelectedPost } from '../../../../shared/redux/selectedPostSlice';

interface Post {
    id: number;
    title: string;
    body: string;
}


export const PostItem: FC<{ post: Post }> = ({ post }) => {

    const dispatch = useDispatch();

    const handlePostClick = (post:Post) => {
        dispatch(setSelectedPost(post));
    };

    return (
        <div className='post'>
            <div className="id animationId">№ {post.id}</div>
            <div className='title animationTitle'>Title: {post.title}</div>
            <div className='body animationBody'>
                {post.body.length > 120 ? post.body.substring(0, 120) + '...' : post.body}
            </div>
            {post.body.length > 120 ? <div className="item-footer" >
                <Link to="/about" className="link" onClick ={() => handlePostClick(post)}><span>Подробнее</span></Link>
            </div> : ''}

        </div>
    );
};