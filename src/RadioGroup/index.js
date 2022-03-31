import React from "react";
import PropTypes from "prop-types";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Label from "@radix-ui/react-label";
import tw, { styled , css} from "twin.macro";

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)(({ display, variant }) => [
  variant === "card" ? tw`gap-4` : tw`gap-3`,
  display === "list" && tw`flex flex-col`,
  display === "grid" && tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`,
]);

const StyledItem = styled(RadioGroupPrimitive.Item)(({ variant, disabled }) => [
  tw`flex gap-2 cursor-pointer focus:outline-none text-left text-accent-seven`,
  disabled && tw`text-accent-four`,
  variant === "card" &&
    tw`items-center px-6 py-4 justify-between rounded border-border shadow-sm border hover:bg-accent-two`, 
  css`&[data-state="checked"] {  ${variant === "card" && tw`bg-accent-two ring-2 ring-offset-2 ring-offset-brand-uv ring-white` }  }`
]
);

const StyledIndicatorWrapper = styled.div(({ variant}) => [
  tw`flex items-center justify-center rounded-full focus:outline-none`,
  variant === "card" ?
    tw`w-6 h-6 order-last`
    :
    tw`w-4 h-4 border border-accent-three`
]);
const StyledIndicator = styled(RadioGroupPrimitive.Indicator)(({ variant, disabled }) => {
  const bg = () => {
    if ( disabled ) {
      return tw`bg-accent-four`;
    }  if ( variant === "card") {
      return tw`bg-brand-uv`;
    }
    return tw`bg-foreground`;
  };
  return [
    css`[data-state="unchecked"] & {  ${tw`hidden` }  }`,
    tw`block rounded-full`,
    bg,
    variant === "card" ?
      tw`w-6 h-6 text-white`
      :
      tw`w-2 h-2`,
  ];}
);

const RadioGroupLabel = styled(Label.Root)(() => [
  tw`block text-sm leading-4 font-medium`,
]);

const RadioGroupDescription = styled.div(() => [
  tw`block mt-1 text-sm text-accent-four`,
]);



function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M7 13l3 3 7-7"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const RadioGroupIndicator = ({value,  ...props}) => {
  return <StyledIndicatorWrapper {...props}>
    <StyledIndicator {...props}> {props.variant === "card" && <CheckIcon />} 
    </StyledIndicator>
  </StyledIndicatorWrapper>; 
};

const RadioGroupItem = ({children, showIndicator, ...props}) => {
  return <StyledItem { ...props}> 
    {(showIndicator || props.variant !== "card") && <RadioGroupIndicator  {...props}/> }
    <div>{children}</div> 
  </StyledItem>;
};
 
const RadioGroup = ({children, showIndicator, ...props}) => {
  return <StyledRadioGroup {...props}>
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...child.props, 
        variant: props.variant, 
        /**
         * `disabled` either inherits parent's prop or set its own
         * Useful for disabling whole group or specific item
        */ 
        disabled: child.props.disabled || props.disabled, 
        showIndicator: showIndicator
      }); 
    })}
  </StyledRadioGroup>;
};


RadioGroup.defaultProps = {
  variant: "default",
  display: "list",
  required: false,
  disabled: false,
  /**
   * Effective only for `card` variant
   */
  showIndicator: true,
};


RadioGroup.propTypes = {
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "card"]),
  display: PropTypes.oneOf(["list", "grid"]),
  /**
     * Only effective for `card` variation 
  */
  showIndicator: PropTypes.bool,
  onValueChange: PropTypes.func
};

RadioGroupItem.propTypes = {
  value: PropTypes.string,
  disabled: PropTypes.bool
};



export { RadioGroup, RadioGroupItem, RadioGroupLabel, RadioGroupDescription };