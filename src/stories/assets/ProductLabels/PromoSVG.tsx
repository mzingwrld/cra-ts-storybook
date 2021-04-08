import React, { FunctionComponent } from 'react';
import cn from 'classnames'


interface IPromoSVGProps {
    className?: string;
    onClick?: () => void;
}


const PromoSVG: FunctionComponent<IPromoSVGProps> = ({ className, onClick, ...props }): JSX.Element => (
    <svg
        className={cn(['PromoSVG', className])}
        onClick={onClick}
        width="8"
        height="10"
        viewBox="0 0 8 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M6.57857 0H1.42179C1.04861 0 0.746094 0.302511 0.746094 0.675701V9.32427C0.746094 9.59357 0.905998 9.83716 1.1531 9.94425C1.40014 10.0513 1.68728 10.0015 1.88377 9.81736L4.0002 7.83451L6.11663 9.81736C6.24434 9.93706 6.41032 10 6.57874 9.99997C6.66945 9.99997 6.76084 9.98172 6.8473 9.94425C7.09437 9.83716 7.25431 9.59357 7.25431 9.32427V0.675701C7.25427 0.302511 6.95176 0 6.57857 0Z"
            fill="#AF52DE"
        />
    </svg>

);


export default PromoSVG;
