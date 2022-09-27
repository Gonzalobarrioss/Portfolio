import styled from 'styled-components'


export const WorksWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    

`

export const WorksContainer = styled.div`    
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 0;
    min-height: 100vh;
`
export const WorksContent = styled.div`
    padding: 20px;
    text-align: center;
    transform: translateY(100px);
    opacity: 0;
    transition: 0.5s;

    a{
        position: relative;
        display: inline-block;
        padding: 8px 20px;
        margin-top: 15px;
        background: #fff;
        color: #000;
        border-radius: 20px;
        text-decoration: none;
        font-weight: 500;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`
export const ImgBx = styled.div`
    position: absolute;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
}
`

export const WorksCard = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
    image-rendering: auto;
    margin: 15px 0;
    border-radius: 15px;
    box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    overflow: hidden;

    @media (min-width: 375px) {
        height: 450px;
    }

    @media (min-width: 425px) {
        height: 500px;
    }

    @media (min-width: 480px) {
        height: 100px;
        width: 200px;
    }

    &:hover{
        
        ${ImgBx}{
            opacity: 0.3;
        }
        ${WorksContent}{
            transform: translateY(0px);
            opacity: 1;
            
        }
    }
`
export const VideoBx = styled.video`
    position: absolute;
    border-radius: 15px;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    
`

export const WorksTitle = styled.p`
    position: relative;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    line-height: 16px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 16px;
    padding: 0;
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
        content: '03.';
        display: inline-block;
        position: relative;
        left: 0;
        top: 0;
        color: #fff;
        font-size: 16px;

    }
`
export const WorksH2 = styled.h2`
    position: absolute;
    top: -200px;
    right: 0;
    font-size: 8em;
    color: rgba(255, 255, 255, 0.05);
    pointer-events: none;
`

export const WorksH3 = styled.div`
    font-size: 1.8em;
    color: #fff;
    z-index: 1;
`

export const WorksP = styled.p`
    font-size: 1em;
    color: #fff;
    font-weight: 300;
`