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
            <span className="selected">
                {text.slice(selectStart, selectEnd)}
            </span>
            {text.slice(selectEnd)}
        </div>
    );
};

export default Title;
