/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useCallback } from 'react'
import Button from "../Button";
import tw from "twin.macro";

const FeedbackButton = React.forwardRef(({ open, setOpen, ...props }, ref) => {
    const combinedProps = {
        variant: "secondary",
        label: "Feedback",
        ...props
    };
    const onClick = useCallback((e) => {
        e.preventDefault();
        setOpen(!open);
    }, [setOpen]);

    return (
        <Button
            ref={ref}
            css={[
                tw`flex absolute w-24`,
            ]}
            onClick={onClick}
            {...combinedProps}
        />
    )
})

export default FeedbackButton
