import React, {createContext, useContext}  from "react";
import PropTypes from "prop-types";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as Label from "@radix-ui/react-label";
import tw, { styled , css} from "twin.macro";
import { Check } from "heroicons-react";

const StyledRadioGroup = styled(RadioGroupPrimitive.Root)(({ display }) => [
  display === "list" && tw`flex flex-col`,
  display === "grid" && tw`grid gap-x-4`,
  display === "grid" && css`grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));`,
]);

const StyledItem = styled(RadioGroupPrimitive.Item)(({ variant, disabled }) => [
  variant === "card" ? tw`mb-4` : tw`mb-3`,
  tw`flex gap-2 cursor-pointer focus:outline-none text-left text-accent-seven w-full`,
  disabled && tw`text-accent-four cursor-default`,
  variant === "card" &&
    tw`w-auto px-6 py-4 items-center justify-between rounded border-border shadow-sm border`, 
  variant === "card" && !disabled &&
  tw`hover:bg-accent-two`, 
  css`&[data-state="checked"] {  ${variant === "card" && tw`bg-accent-two ring-2 ring-offset-2 ring-offset-brand-uv ring-white` }  }`
]
);

const StyledIndicatorWrapper = styled.div(({ variant}) => [
  tw`flex items-center justify-center flex-shrink-0 rounded-full focus:outline-none`,
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
    tw`flex items-center justify-center rounded-full`,
    bg,
    variant === "card" ?
      tw`w-6 h-6 text-white`
      :
      tw`w-2 h-2`,
  ];}
);


 
const RadioGroupTitle = ({children, asLabel, htmlFor}) => {
  const style = tw`block text-sm leading-4 font-medium`;
  const RadioGroupTitleLabel = styled(Label.Root)(() => [
    style
  ]);
  const RadioGroupTitleText = styled.div(() => [
    style
  ]);
 
  if (asLabel) {
    return <RadioGroupTitleLabel htmlFor={htmlFor}>{children}</RadioGroupTitleLabel>;
  }

  return <RadioGroupTitleText>{children}</RadioGroupTitleText>;
};    

const RadioGroupDescription = styled.div(() => [
  tw`block mt-1 text-sm text-accent-four`,
]);




const RadioGroupIndicator = ({variant}) => {
  return <StyledIndicatorWrapper variant={variant} >
    <StyledIndicator variant={variant}> {variant === "card" && <Check className="h-4 w-4"/>} 
    </StyledIndicator>
  </StyledIndicatorWrapper>; 
};

const RadioGroupContext = createContext();
 
function useRadioGroup() {
  const context = useContext(RadioGroupContext);
  if (context === undefined) {
    throw new Error("useRadioGroup must be used within RadioGroupContext Provider");
  }
  return context;
}

const RadioGroup = ({children, showIndicator, ...props}) => {
  return  <StyledRadioGroup {...props}>
    <RadioGroupContext.Provider value={ {...props, showIndicator} }> 
      {children}
    </RadioGroupContext.Provider>
  </StyledRadioGroup>; 
};

const RadioGroupItem = ({children, ...props }) => {
  const { variant, disabled, required, showIndicator } = useRadioGroup();
  return <StyledItem 
    variant={variant} 
    disabled={disabled} 
    required={required} 
    {...props}
  > 
    {showIndicator && <RadioGroupIndicator variant={variant}/>}
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

RadioGroupTitle.propTypes = {
  asLabel: PropTypes.bool
};
RadioGroupTitle.defaultProps = {
  asLabel: true
};



export { RadioGroup, RadioGroupItem, RadioGroupTitle, RadioGroupDescription };