import React from 'react'
import styled from 'styled-components'

const Section = (props) => {
    const { title, desc, leftBtnText, rightBtnText, imageBG } = props
  return (
    <Container backgroundImg={imageBG}>
        <SectionTitle>
            <h1>{title}</h1>
            {
                desc && <p>{desc}</p>
            }
        </SectionTitle>

        <SectionButton>
            <Buttons>
                <LeftButton>{leftBtnText}</LeftButton>
                {
                    rightBtnText && <RightButton>{rightBtnText}</RightButton>
                }
            </Buttons>
            <DownArrow src="/images/down-arrow.svg"/>
        </SectionButton>
    </Container>
  )
}

export default Section

const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    background-size: cover;
    background-position: center;
    background-repeat: no-reapet;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${props => `url('/images/${props.backgroundImg}')`};
`

const SectionTitle = styled.div`
    padding-top: 15vh;
`

const SectionButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DownArrow = styled.img`
    height: 40px;
    animation: downAnimate 2s infinite;
    margin-bottom: 40px;
`

const Buttons = styled.div`
    display: flex;
    margin-bottom: 5vh;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    width: 250px;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.6);
    margin: 8px;
    padding: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: white;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background: white;
    color: rgba(0, 0, 0, 0.6);
`
