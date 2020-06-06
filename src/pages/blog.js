import React from 'react'
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
    return (
        <Layout>
            <div className={styles.page}>
                <h1>This is a Blog page</h1>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Sunt explicabo animi 
                    odio assumenda illo, asperiores ad quas 
                    eos iusto magnam! Optio dolore tempore ipsa 
                    pariatur facere deserunt asperiores laborum 
                    voluptas.
                </p>
            </div>
        </Layout>
    )
}

export default blog
