import styled from "styled-components"

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: row;
    background:rgb(204, 43, 43);
    color:white;
    justify-content: space-between;
    height: 70px;
    z-index: 1;
    margin: 0px;
    padding: 10px 15px;
    font-size: 1.5rem;
    border-bottom: rgb(138, 59, 48) 2px solid;
`
export const LogoContainer = styled.div`
    padding-left: 40px;
    display: flex;
    align-items: center;
`

export const NavMenu = styled.div`
    padding-right: 40px;
    text-align: right;
    display: flex;
    align-items: center;
`

export const NavItems = styled.div`
    padding-right: 40px;
    text-align: right;
    display: flex;
    align-items: center;
`

export const NavButton = styled.button`
cursor:pointer;
background: none;
color: inherit;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
outline: inherit;
`