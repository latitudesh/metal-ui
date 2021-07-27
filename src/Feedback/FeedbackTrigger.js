import React, {useCallback} from "react";

const FeedbackTrigger = React.forwardRef(({ open, setOpen, children }, ref) => {
    return (
        <>
            {React.cloneElement(children, { open, ref, setOpen })}
        </>
    )
})

export default FeedbackTrigger
