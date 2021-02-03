import { ReactNode } from 'react';
import Post from './Post';
import styles from '@/styles/Home.module.css';

type Props = {
  posts: any;
};

const PostList = ({ posts }: Props) => {
  return (
    <div className={styles.grid}>
      {posts.map((post: any) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
