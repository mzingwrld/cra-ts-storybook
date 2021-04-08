import React, { FunctionComponent } from 'react';
import cn from 'classnames'


interface ISetSVGProps {
    className?: string;
    onClick?: () => void;
}


const SetSVG: FunctionComponent<ISetSVGProps> = ({ className, onClick, ...props }): JSX.Element => (
    <svg
        className={cn(['SetSVG', className])}
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
            d="M2.72725 0.243507C2.72725 0.109022 2.83628 0 2.97076 0H7.0292C7.16369 0 7.27271 0.109022 7.27271 0.243506V1.13636H2.72725V0.243507ZM3.21429 4.34254C3.07981 4.34254 2.97078 4.23352 2.97078 4.09903V1.66667H7.02923V4.09903C7.02923 4.23352 6.9202 4.34254 6.78572 4.34254H3.21429ZM0.243506 5.41667C0.109022 5.41667 0 5.52569 0 5.66017V6.55303H4.54545V5.66017C4.54545 5.52569 4.43643 5.41667 4.30195 5.41667H0.243506ZM0.243468 9.51572C0.243468 9.65021 0.35249 9.75923 0.486975 9.75923H4.0584C4.19289 9.75923 4.30191 9.65021 4.30191 9.51572V7.08335H0.243468V9.51572ZM5.69807 5.41667C5.56358 5.41667 5.45456 5.52569 5.45456 5.66017V6.55303H10V5.66017C10 5.52569 9.89099 5.41667 9.75651 5.41667H5.69807ZM5.69808 9.51572C5.69808 9.65021 5.80711 9.75923 5.94159 9.75923H9.51302C9.6475 9.75923 9.75652 9.65021 9.75652 9.51572V7.08335H5.69808V9.51572Z"
            fill="#90CAF9"
        />
    </svg>

);


export default SetSVG;
