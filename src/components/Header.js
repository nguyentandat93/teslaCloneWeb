import React, { useState } from 'react'
import styled from 'styled-components'

const Header = () => {

    const [ showMenu, setShowMenu ] = useState(false)
  return (
    <Container>
        <MenuToggle show={showMenu}>
            <CloseBtn 
                onClick={() => setShowMenu(false)}
            >
                <a href="ass" onClick={(e) => {e.preventDefault()}}>X</a>
            </CloseBtn>
            <MenuBody>
                <li>
                    <a href="ass">
                        Existing Inventory 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Used Inventory 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Trade-In 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Test Drive
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Cybertruck
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Roadster
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Semi 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Charging
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Powerwall
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Commercial Energy 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Utilities
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Find Us
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Support 
                    </a>
                </li>
                <li>
                    <a href="ass">
                        Investor Relations
                    </a>
                </li>
                <li>
                    <a href="ass">
                    🌐 Existing Inventory 
                    </a>
                </li>
            </MenuBody>
        </MenuToggle>
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
            <a href="ass" onClick={(e) => {e.preventDefault();setShowMenu(true)}}>Menu</a>
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

const MenuToggle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    background: white;
    height: 100vh;
    padding: 20px;
    transform: ${props => props.show ? `translateX(0)`:`translateX(100%)`};
    transition: transform 0.2s ease-in-out;
    li {
        list-style: none;
        padding: 15px 10px;
        :hover {
            background: grey;
            border-radius: 20px;
            cursor: pointer;
            a {
                color: #fff;
            }
            transition: 0.2s all;
        }
        
    }

    a {
        font-size: 16px;
        font-weight: 500;
    }
`
const MenuBody = styled.div`
    text-align: start;
`
const CloseBtn = styled.div`
    a {
        color: rgba(0, 0, 0, 0.7);
        font-size: 20px;
        font-weight: 700;
    }
    text-align: end;
    padding: 20px;
`