import tw from "twin.macro";
import styled from '@emotion/styled'
import css from '@emotion/react'

function Index(props) {
  return (
      <div></div>
  );
}

const DropdownContent = styled(Index)(() => [
  tw`mt-2 shadow-lg bg-white rounded`,
  css`
    min-width: 150px;
  `,
]);

export {
  DropdownContent,
};
