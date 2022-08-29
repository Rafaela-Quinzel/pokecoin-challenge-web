import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #292929;
  margin: 0;
  padding: 60px 50px 50px 50px;
  box-sizing: border-box;
`

export const CardContainer = styled.div`
  display: grid;
  margin: 100px auto 150px auto;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
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