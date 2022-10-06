import React from 'react'
import Icon1 from '../../images/credit_card.svg'
import Icon2 from '../../images/data.svg'
import Icon3 from '../../images/chatting.svg'
import Icon4 from '../../images/data_report.svg'
import Icon5 from '../../images/online_media.svg'
import Icon6 from '../../images/portfolio_website.svg'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1>Habilidades</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon6}/>
                <ServicesH2>Lectura de PDF</ServicesH2>
                <ServicesP>Nunca fue tan sencillo ver y descargar PDF</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Envia y almacena tu info</ServicesH2>
                <ServicesP>Lo hacemos por vos</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Asistente virtual</ServicesH2>
                <ServicesP>Asistencia 24hs para tus usuarios que tengan dudas</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4}/>
                <ServicesH2>Controla tus estadisticas</ServicesH2>
                <ServicesP>Con el tipo de gráfico que quieras.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5}/>
                <ServicesH2>Comparti tu contenido</ServicesH2>
                <ServicesP>Subi tu contenido multimedia</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Adherite al cobro online</ServicesH2>
                <ServicesP>Implementa el servicio de cobro que quieras</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services