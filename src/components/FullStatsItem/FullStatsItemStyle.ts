import styled from "styled-components/macro";

export const FullStatsItemWrap = styled.li`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  @media (max-width: 983px) {
    width: 33%;
  }
`;

export const FullStatsTitle = styled.h5`
  font-weight: 700;
  font-size: 1.4rem;
`;

export const FullStatsValue = styled.p`
  font-weight: 400;
  font-size: 2.1rem;
`;
