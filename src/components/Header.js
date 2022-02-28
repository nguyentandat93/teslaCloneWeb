import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
        <a href="ass">
            <img src="/images/logo.svg" alt="logo"/>
        </a>

        <LinkGroup>
            <a href="ass">Model S</a>
            <a href="ass">Model X</a>
            <a href="ass">Model Y</a>
            <a href="ass">Model 3</a>
            <a href="ass">Solar Roof</a>
            <a href="ass">Solar Panels</a>
        </LinkGroup>

        <RightMenu>
            <a href="ass">Shop</a>
            <a href="ass">Account</a>
            <a href="ass">Menu</a>
        </RightMenu>
    </Container>
  )
}

export default Header

const Container = styled.div`
    height: 60px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    z-index: 100;
`

const LinkGroup = styled.div`
    a {
        padding: 0 20px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }
`

const RightMenu = styled.div`
    a {
        padding: 0 20px;
        font-size: 18px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
    }
`