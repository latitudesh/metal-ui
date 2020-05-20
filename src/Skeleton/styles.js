import css from "styled-jsx/css";

export default css`
  @keyframes skeleton {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
  .skeleton {
    display: block;
    border-radius: 5px;
    background-image: linear-gradient(
      270deg,
      #fafafa,
      #eaeaea,
      #eaeaea,
      #fafafa
    );
    background-size: 400% 100%;
    animation: skeleton 8s ease-in-out infinite;
  }
`;
