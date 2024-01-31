import { useState, useEffect } from "react"
import { postApi } from "../../shared/redux/api"
import { PostItem } from "./widgets/function/PostItem";
import './PostList.scss'



interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export const PostList = () => {
    const [currentPostStart, setCurrentPostStart] = useState<number>(0)
    const { data: posts } = postApi.useFetchAllPostsQuery({ limit: 10, start: currentPostStart })
    const [isMyFetching, setIsFetchingDown] = useState(false)
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)

    // 


    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart(prev => {
                return prev < 93 ? prev + 3 : prev
            })
            setIsFetchingDown(false)

        }
    }, [isMyFetching])
    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart(prev => {
                return prev > 0 ? prev - 3 : prev
            })
            setIsMyFetchingUp(false)

        }
    }, [isMyFetchingUp])
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])



    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 150) {
            setIsMyFetchingUp(true)
        }
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 150) {
            setIsFetchingDown(true)
            window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    }







    return (
        <div>
            <div className='postList'>
                {posts?.map((post: Post) => <PostItem key={post.id} post={post} />)}
            </div>
        </div>
    );
};