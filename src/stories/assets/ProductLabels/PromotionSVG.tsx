import React, { FunctionComponent } from 'react';
import cn from 'classnames'


interface IPromotionSVGProps {
    className?: string;
    onClick?: () => void;
}


const PromotionSVG: FunctionComponent<IPromotionSVGProps> = ({ className, onClick, ...props }): JSX.Element => (
    <svg
        className={cn(['PromotionSVG', className])}
        onClick={onClick}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M9.29444 2.00832C9.01661 1.86894 8.68095 1.92323 8.46121 2.14294L7.04791 3.55628L5.65892 0.428387C5.54322 0.167901 5.28494 0 4.9999 0C4.71486 0 4.45657 0.167901 4.34091 0.428423L2.95188 3.55631L1.53859 2.14298C1.31888 1.92331 0.983184 1.86897 0.705356 2.00839C0.427637 2.14767 0.270372 2.44929 0.315186 2.75675L0.959786 7.18358C1.01138 7.53795 1.3152 7.80074 1.67332 7.80074H8.32648C8.6846 7.80074 8.98842 7.53795 9.04001 7.18358L9.68465 2.75672C9.72943 2.44925 9.57216 2.14763 9.29444 2.00832Z"
            fill="#AF52DE"
        />
        <path
            d="M8.32638 8.55786H1.67322C1.27497 8.55786 0.952148 8.88068 0.952148 9.27893C0.952148 9.67718 1.27497 10 1.67322 10H8.32638C8.72462 10 9.04744 9.67718 9.04744 9.27893C9.04744 8.88068 8.72462 8.55786 8.32638 8.55786Z"
            fill="#AF52DE"
        />
    </svg>

);


export default PromotionSVG;
