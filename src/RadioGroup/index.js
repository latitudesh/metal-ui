import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Label from "@radix-ui/react-label";
import tw, { styled, css } from "twin.macro";
import { CheckIcon as Check } from "@heroicons/react/solid";

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)(() => {
  const { display, collapsed } = useRadioGroup();

  return [
    display === "list" && tw`flex flex-col gap-3`,
    display === "grid" && tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
    collapsed && css`grid-gap: 1px`,
  ];
});

const StyledItem = styled(RadioGroupPrimitive.Item)(({ disabled }) => {
  const { variant, collapsed } = useRadioGroup();
  return [
    tw`relative flex gap-2 cursor-pointer focus:outline-none text-left text-accent-seven w-full`,
    disabled && tw`text-accent-four cursor-default`,
    variant === "card" &&
    tw`w-full px-6 py-4 items-center justify-between bg-white`,
    variant === "card" && collapsed &&
    css`box-shadow: 0 0 0 1px rgb(234, 234, 234);`,
    variant === "card" && !collapsed &&
    tw`rounded shadow-sm border-border border`,
    variant === "card" && !disabled &&
    tw`hover:bg-accent-two`,
    css`&[data-state="checked"] {  ${variant === "card" && tw`bg-accent-two ring-2 ring-offset-2 ring-inset ring-offset-brand-uv ring-white`}  }`
  ];
}
);

const StyledIndicatorWrapper = styled.div(() => {
  const { variant } = useRadioGroup();
  return [
    tw`flex items-center justify-center flex-shrink-0 rounded-full focus:outline-none`,
    variant === "card" ?
      tw`w-6 h-6 order-last`
      :
      tw`w-4 h-4 border border-accent-three`
  ];
});
const StyledIndicator = styled(RadioGroupPrimitive.Indicator)(() => {
  const { variant, disabled } = useRadioGroup();
  const bg = () => {
    if (disabled) {
      if (variant === "card") {
        return tw`bg-accent-three`;
      }
      return tw`bg-accent-four`;
    } if (variant === "card") {
      return tw`bg-brand-uv`;
    }
    return tw`bg-foreground`;
  };
  return [
    css`[data-state="unchecked"] & {  ${tw`hidden`}  }`,
    tw`flex items-center justify-center rounded-full`,
    bg,
    variant === "card" ?
      tw`w-6 h-6 text-white`
      :
      tw`w-2 h-2`,
  ];
}
);


const RadioGroupIndicator = () => {
  const { variant } = useRadioGroup();
  return <StyledIndicatorWrapper>
    <StyledIndicator> {variant === "card" && <Check className="h-4 w-4" />}
    </StyledIndicator>
  </StyledIndicatorWrapper>;
};



const RadioGroupTitle = ({ children, asLabel, htmlFor, ...props }) => {
  const { variant } = useRadioGroup();
  const style = [
    tw`block text-sm font-medium`,
    variant === "default" && tw`leading-4`,
  ];
  const RadioGroupTitleLabel = styled(Label.Root)(() => [
    style
  ]);
  const RadioGroupTitleText = styled.div(() => [
    style
  ]);

  if (asLabel) {
    return <RadioGroupTitleLabel htmlFor={htmlFor} {...props}>{children}</RadioGroupTitleLabel>;
  }
  return <RadioGroupTitleText {...props}>{children}</RadioGroupTitleText>;
};

const RadioGroupDescription = ({ children, ...props }) => (
  <div css={tw`block mt-1 text-sm text-accent-four`} {...props}> {children} </div>
);


const RadioGroupContext = createContext();

function useRadioGroup() {
  const context = useContext(RadioGroupContext);
  if (context === undefined) {
    throw new Error("useRadioGroup must be used within RadioGroupContext Provider");
  }
  return context;
}

const RadioGroup = ({ children, showIndicator, collapsed, defaultValue, variant, display, ...props }) => {
  return <RadioGroupContext.Provider
    value={{
      ...props,
      showIndicator,
      defaultValue,
      variant,
      display,
      collapsed
    }}>
    <StyledRadioGroup defaultValue={defaultValue} {...props}>
      {children}
    </StyledRadioGroup>
  </RadioGroupContext.Provider>;
};

const RadioGroupItem = ({ children, value, disabled, ...props }) => {
  const { showIndicator, disabled: disabledGroup } = useRadioGroup();
  return <StyledItem value={value} disabled={disabled || disabledGroup} {...props}>
    {showIndicator && <RadioGroupIndicator />}
    <Label.Root className="grow w-full">
      {children}
    </Label.Root>
  </StyledItem>;
};

RadioGroup.defaultProps = {
  variant: "default",
  display: "list",
  required: false,
  disabled: false,
  collapsed: false,
  showIndicator: true,
};

RadioGroup.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "card"]),
  display: PropTypes.oneOf(["list", "grid"]),
  onValueChange: PropTypes.func,
  /**
     * Only effective for `grid` display
  */
  collapsed: PropTypes.bool,
  /**
     * Only effective for `card` variation
  */
  showIndicator: PropTypes.bool,
};

RadioGroupItem.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};

RadioGroupTitle.propTypes = {
  asLabel: PropTypes.bool
};
RadioGroupTitle.defaultProps = {
  asLabel: true
};



export { RadioGroup, RadioGroupItem, RadioGroupTitle, RadioGroupDescription };
