import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
  background-color: #292929;
  margin: 0;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3.4rem;
  grid-column-gap: 2rem;
  margin-top: 120px;
`

export const NoResults = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: #292929;
  padding: 20% 0 10% 0;
`

export const TitleNoResults = styled.div`
  text-align: center;
  color: #fff;
`