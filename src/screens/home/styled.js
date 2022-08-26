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
  margin: 120px auto 150px auto;
  width: 80%;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
`