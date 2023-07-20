import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>카테고리</h3>
            <ul>
                <li><a href="#">카테고리 1</a></li>
                <li><a href="#">카테고리 2</a></li>
                <li><a href="#">카테고리 3</a></li>
            </ul>
            <h3>태그</h3>
            <ul>
                <li><a href="#">태그 1</a></li>
                <li><a href="#">태그 2</a></li>
                <li><a href="#">태그 3</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
