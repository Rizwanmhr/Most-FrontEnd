import React from 'react';
interface Iprops {
    status: string;
}
const Icon: React.FC<Iprops> = ({ status }) => {
    return (
        <>
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="#D0D0D0"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill={
                        status === 'success'
                            ? '#22D329'
                            : status === 'error'
                            ? '#E52121'
                            : '#D0D0D0'
                    }
                />
                <path
                    d="M6.46691 8.09757L5.32267 6.95333C5.03079 6.66145 4.55747 6.66145 4.26559 6.95333L3.2736 7.94532C2.98172 8.2372 2.98172 8.71052 3.2736 9.0024L5.8151 11.5439C6.34181 12.0706 7.1958 12.0706 7.72252 11.5439L12.6923 6.57416C12.9841 6.28228 12.9841 5.80896 12.6923 5.51708L11.7735 4.59831C11.4816 4.30642 11.0083 4.30642 10.7164 4.59831L7.21707 8.09764C7.00992 8.30472 6.67406 8.30472 6.46691 8.09757Z"
                    fill="#ffffff"
                />
            </svg>
        </>
    );
};

export default Icon;
