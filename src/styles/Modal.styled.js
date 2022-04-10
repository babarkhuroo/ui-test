import styled from 'styled-components'

export const StyledModal = styled.aside`
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 10;

  ul {
    width: 100%;
  }
  ul li {
    margin: 0 20px;
    padding: 30px 0;
    border-bottom: 1px solid #ccc;
  }
  ul li a {
    padding: 0 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    & {
      display: none;
    }
  }
`
