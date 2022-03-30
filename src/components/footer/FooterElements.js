import styled from 'styled-components'



export const FooterContainer = styled.div`

  position:absolute;
  left:0;
  bottom:0;
  right:0;

  background: black;
  color: white;

  margin: 0 auto;
  padding: 0 20px;
  max-width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterLeft = styled.div`
  padding: 0 40px;

  text-align: left;
`

export const FooterRight = styled.div`
  padding: 0 40px;

  text-align: right;
`

export const FooterLinks = styled.ul`
  display: flex;
`

export const FooterLink = styled.li`
  list-style: none;
  padding: 0 10px;
  padding-bottom: 30px;
`