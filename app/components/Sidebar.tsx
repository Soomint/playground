import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>카테고리</h3>
            <ul>
                <li><Link href="#">카테고리 1</Link></li>
                <li><Link href="#">카테고리 2</Link></li>
                <li><Link href="#">카테고리 3</Link></li>
            </ul>
            <h3>태그</h3>
            <ul>
                <li><Link href="#">태그 1</Link></li>
                <li><Link href="#">태그 2</Link></li>
                <li><Link href="#">태그 3</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
