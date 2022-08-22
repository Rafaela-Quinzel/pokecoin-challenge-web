import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as S from './styled'
import Lottie from 'react-lottie'
import { goToLogin } from '../../routes/coordinator'
import animationData from '../../animations/pokemon-loading.json'



function SplashScreen() {

  const [ animationState ] = useState({
    isStopped: false, isPaused: false
  })

  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      goToLogin(history)
    }, 3000)
  }, [history])



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }


  return (
    <S.ContainerHome>
      <S.AnimationContainer>
        <S.TitleContainer>Carregando...</S.TitleContainer>
      <Lottie options={defaultOptions}
        height={350}
        width={550}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
      />
      </S.AnimationContainer>
    </S.ContainerHome>
  )
}
export default SplashScreen