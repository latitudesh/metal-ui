/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, {useCallback} from 'react'
import {Button} from "../index";
import tw from "twin.macro";

const FeedbackButton = React.forwardRef(({ open, setOpen, ...props }, ref) => {
    const combinedProps = {
        variant: "secondary",
        label: "Feedback",
        ...props
    };
    const onClick = useCallback((e) => {
        e.preventDefault();
        setOpen(true);
    }, [setOpen]);

    return (
        <Button
            ref={ref}
            css={[
                tw`flex absolute w-24`,
                tw`flex-shrink-0 transition-opacity duration-75 ease-out`,
                open &&
                tw`opacity-0 pointer-events-none text-brand-gray transition-opacity duration-75 ease-linear`,
            ]}
            onClick={onClick}
            {...combinedProps}
        />
    )
})

export default FeedbackButton
