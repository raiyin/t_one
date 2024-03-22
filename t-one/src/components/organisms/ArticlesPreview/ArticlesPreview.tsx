import { ArrowDirection } from '../../../types/ArrowProps'
import ArrowIcon from '../../atoms/ArrowIcon/ArrowIcon'
import Title from '../../atoms/Title/Title'
import PaginationArrows from '../../molecules/PaginationArrows/PaginationArrows'
import PostCard from '../../molecules/PostCard/PostCard'
import styles from './ArticlesPreview.module.css'

const ArticlesPreview = () => {
    return (
        <div className={styles['article-preview']}>
            <Title text={'Latest Articles'} selectStart={7} selectEnd={15} fontSize={45} fontWeight={600} lineHeight={54} />
            <div className={styles['articles-preview_previews']}>
                <PostCard />
            </div>
            <div className={styles['articles-preview_arrows']}>
                <PaginationArrows leftIsActive={true} rightIsActive={true} />
            </div>
        </div>
    )
}

export default ArticlesPreview
