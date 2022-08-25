import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #292929;
  margin: 0;
  padding: 0;
`

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #292929;
`

export const CardContainer = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-row-gap: 3.4rem;
  background-color: #292929;
  margin: 120px auto 150px auto;
  width: 80%;
  height: 80%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
  }
`