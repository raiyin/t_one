import styles from "./styles.module.scss";
import { TitleProps as TitleProps } from "@/types/TitleProps";
import { TitleType } from "@/types/TitleProps";

const Title = ({
    text = '',
    selectStart = 0,
    selectEnd = 0,
    titleType = TitleType.H1
}: TitleProps) => {

    return (

        <div className={styles[TitleType[titleType]]}>
            {text.slice(0, selectStart)}

            {
                (selectStart == 0 && selectEnd == 0) ?
                    <></>
                    :
                    <div className={styles['title_selected']}>
                        {text.slice(selectStart, selectEnd)}
                    </div>
            }

            {text.slice(selectEnd)}
        </div>
    );
};

export default Title;
