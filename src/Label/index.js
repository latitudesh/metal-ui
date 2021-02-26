import tw, { styled, css } from "twin.macro";
import { Label as LabelPrimitive } from "@radix-ui/react-label";

export const Label = styled(LabelPrimitive)(() => [
    tw`block text-sm leading-5 font-medium text-gray-700`
]);

export default Label