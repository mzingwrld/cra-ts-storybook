import React, { FunctionComponent } from 'react';
import cn from 'classnames'


interface IProductSVGProps {
    className?: string;
    onClick?: () => void;
}


const ProductSVG: FunctionComponent<IProductSVGProps> = ({ className, onClick, ...props }): JSX.Element => (
    <svg
        className={cn(['ProductSVG', className])}
        onClick={onClick}
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.535714 0.416656C0.239847 0.416656 0 0.656504 0 0.952371V2.91666H10V0.952371C10 0.656504 9.76015 0.416656 9.46429 0.416656H0.535714ZM0.535685 9.43449C0.535685 9.73036 0.775533 9.97021 1.0714 9.97021H8.92854C9.22441 9.97021 9.46426 9.73036 9.46426 9.43449V3.47467H0.535685V9.43449ZM3.12497 5.77378C3.12497 6.02033 3.32484 6.22021 3.5714 6.22021H6.42854C6.6751 6.22021 6.87497 6.02033 6.87497 5.77378V5.05949C6.87497 4.81294 6.6751 4.61306 6.42854 4.61306H3.5714C3.32484 4.61306 3.12497 4.81294 3.12497 5.05949V5.77378Z"
            fill="#90CAF9"
        />
    </svg>

);


export default ProductSVG;
