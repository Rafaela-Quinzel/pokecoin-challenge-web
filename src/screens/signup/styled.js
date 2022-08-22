import styled from "styled-components";
import { primaryColor } from "../../constants/colors";


export const Wrapper = styled.div` 
  width: 100vw;
  max-width: 420px;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const Logo = styled.img`
  width: 5rem;
`

export const TitlePage = styled.p`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: -0.40px;
  color: ${primaryColor};
  margin: 8% 0 5% 0;
`

export const FormConteiner = styled.form`
  display: grid;
  gap: 1.5em;
  align-self: center;
  width: 100%;
  height: 100%;
  max-width: 300px;
  border-radius: 2px;
`

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
`
