import styled from 'styled-components'

export const StyledHeader = styled.nav`
  height: 80px;
  padding: 24px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ isModal }) =>
    !isModal
      ? '0px 2px 8px rgba(0, 0, 0, 0.05)'
      : '0px 0px 0px rgba(255,255,255,1)'};

  h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 32px;
    color: #000;
  }

  .nav-btn {
    background-color: transparent;
    border: none;
  }

  svg {
    height: 24px;
    width: 24px;
    border-radius: 2px;
    color: #012c37;
    cursor: pointer;
  }

  .nav-links {
    display: none;
  }

  .nav-links ul {
    display: flex;
    flex-direction: row;
    gap: 55px;
  }

  .nav-links ul li {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    & {
      height: 88px;
      padding: 28px 80px;
    }
    h1 {
      font-size: 32px;
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: flex;
    }
  }
`
