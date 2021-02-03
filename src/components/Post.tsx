import Link from 'next/link';
import styles from '@/styles/Home.module.css';

type Props = {
  post: any;
};

const Post = ({ post }: Props) => {
  return (
    <Link href="/message/[id]" as={`/message/${post.id}`} >
      <a className={styles.card}>
        <h3>{post.title.substr(1,25)}... &rarr;</h3>
        <p>{post.body}</p>
      </a>
    </Link>
  );
};

export default Post;
