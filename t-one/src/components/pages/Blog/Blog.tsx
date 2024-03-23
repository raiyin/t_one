import ArticlesPreview from '../../organisms/ArticlesPreview/ArticlesPreview'
import Footer from '../../organisms/Footer/Footer'
import Header from '../../organisms/Header/Header'
import styles from './Blog.module.css'

const Blog = () => {
    return (
        <div>
            <Header />
            <ArticlesPreview />
            <Footer />
        </div>
    )
}

export default Blog
