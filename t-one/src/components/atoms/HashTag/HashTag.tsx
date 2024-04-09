import styles from './HashTag.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const HashTag = (props: { text: string; fontSize: number; }) => {

    const titleClass = {
        title_font: true,
    }
    titleClass[('fs_' + props.fontSize) as keyof typeof titleClass] = true
    titleClass[('hashtag') as keyof typeof titleClass] = true

    const className = cx(titleClass);

    return (
        <div className={className}>
            {props.text}
        </div>
    )
}

export default HashTag
