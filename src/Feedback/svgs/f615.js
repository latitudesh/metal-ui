import * as React from "react";

function SvgComponent(props) {
    return (
        <svg viewBox="0 0 48 48" width={48} height={48} xmlns="http://www.w3.org/2000/svg" {...props}>
            <g fill="none">
                <path
                    d="M47.5 24.25C47.5 37.367 36.867 48 23.75 48 10.634 48 0 37.367 0 24.25 0 11.134 10.634.5 23.75.5 36.867.5 47.5 11.134 47.5 24.25"
                    fill="#FFCC4D"
                />
                <path
                    d="M18.162 22.154c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89m18.162 0c0 2.702-1.564 4.89-3.493 4.89-1.93 0-3.493-2.188-3.493-4.89 0-2.7 1.564-4.89 3.493-4.89 1.93 0 3.493 2.19 3.493 4.89M15.368 38.22c2.794-6.985 18.161-6.985 18.161-4.19 0 1.396-11.176-1.398-18.161 4.19"
                    fill="#664500"
                />
            </g>
        </svg>
    );
}

export default SvgComponent;
