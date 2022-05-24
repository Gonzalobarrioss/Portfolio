import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#0a192f')};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 1440px) {
        padding: 0;
    }

    @media screen and (max-width: 1024px) {
        padding: 150px 0;
    }
    
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }

    @media screen and (max-width: 425px) {
        padding: 50px 0;
    }

    
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    width: 100%;
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 5px;
    padding: 0;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 5px;
    padding: 0;
    grid-area: col2;
    height: 100%;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    
`

export const TopLine = styled.p`
    display: inline-block;
    
    position: relative;
    width: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-shadow: 0 0 10px #00b3ff,
                0 0 20px #00b3ff,
                0 0 40px #00b3ff,
                0 0 80px #00b3ff,
                0 0 120px #00b3ff,
                0 0 200px #00b3ff,
                0 0 300px #00b3ff;

    &:after{
        content: '';
        display: inline-block;
        position: relative;
        top: -5px;
        width: 100%;
        height: 1px;
        background: #8892b0;
    }

    &:before{
        
        content: '01.';
        display: inline-block;
        position: relative;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 16px;

    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#8892b0')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`