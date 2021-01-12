import styled from "styled-components/macro";

// FIXME: Объеденить magrin-top с высотой хедера
// FIXME: Можно ли что-нибудь придумать с padding-bottom?
export const FullStatsContainer = styled.div`
  padding: 0 10% 120px;
  background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255);
`;

export const FullStatsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  color: white;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
`;
