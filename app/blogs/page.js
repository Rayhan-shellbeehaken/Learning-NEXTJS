import React from 'react'
import styles from './page.module.css';
import Link from 'next/link';

export default function Blog() {
    const blogs = [
        {id : 1, title : "Blog 1" , description : "This is blog 1"},
        {id : 2, title : "Blog 2" , description : "This is blog 2"},
        {id : 3, title : "Blog 3" , description : "This is blog 3"}
    ]

    return (
        <div className={styles.blogs}>
            {
                blogs.map(blog => (
                    <li key={blog.id}><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></li>
                ))
            }        
        </div>
    )
}
