import '../globals.css'
import Head from 'next/head';
import styles from './Header.module.css'
import Link from 'next/link';

const Header = () => {
    return (
        <>
            <Head>
                <title>My Page Title</title>
                <meta name="description" content="A description of my page" />
                <meta name="keywords" content="keyword1, keyword2, keyword3" />
                <meta property="og:title" content="My Page Title" />
                <meta property="og:description" content="A description of my page" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://example.com/path/to/image.jpg" />
                <meta property="og:url" content="https://example.com/my-page" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="My Page Title" />
                <meta name="twitter:description" content="A description of my page" />
                <meta name="twitter:image" content="https://example.com/path/to/image.jpg" />
            </Head>
            <h1>블로그 제목</h1>
            <nav>
                <ul className={styles.navMenu}>
                    <li><Link href="#">홈</Link></li>
                    <li><Link href="#">카테고리</Link></li>
                    <li><Link href="#">태그</Link></li>
                    <li><Link href="#">소개</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Header;
