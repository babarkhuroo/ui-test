import styled from 'styled-components'

export const StyledMain = styled.main`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 50px;

  .form {
    min-width: 320px;
    width: 100%;
    max-width: 768px;
    margin: 0 auto;
    margin: 20px 0 0 0;
  }

  /* .form .form-heading {
    width: 100%;
    display: flex;
    flex-direction: column;
  } */

  .form h2 {
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    letter-spacing: 0.25px;
    line-height: 32px;
  }

  .progress-container {
    margin: 10px auto;
    width: 100%;
  }

  .progress-bar {
    counter-reset: step;
  }

  .progress-bar li {
    font-size: 16px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0.1px;
    list-style: none;
    width: 50%;
    color: #292929;
    text-align: center;
    display: inline-block;
    position: relative;
  }

  .progress-bar li::before {
    content: counter(step);
    color: ${({ theme }) => theme.colors.accent};
    counter-increment: step;
    width: 24px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 50%;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    background-color: #fff;
  }

  .progress-bar li::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  .progress-bar li:first-child::after {
    content: none;
  }
  .progress-bar li.active {
    color: #000;
    font-weight: 500;
  }
  .progress-bar li.active::before {
    color: #fff;
    background-color: ${({ theme }) => theme.colors.accent};
    border-color: ${({ theme }) => theme.colors.accent};
  }
  .progress-bar li.active + li::after {
    background-color: ${({ theme }) => theme.colors.accent};
  }

  .form-input {
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .form-input .medical {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .form-input .medical label {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  .form-input .medical input {
    height: 50px;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #595959;
    margin: 3px 0px;
    padding: 12px 16px;
  }

  .insurance-label {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  .radio-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 3px 0;
  }

  .radio-container input {
    display: none;
  }

  .radio-container label {
    height: 50px;
    width: 50%;
    text-align: center;
    padding: 12px 16px;
    border: 1px solid #595959;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
    cursor: pointer;
  }

  .radio-container .yes {
    border-radius: 5px 0 0 5px;
  }

  .radio-container .no {
    border-radius: 0 5px 5px 0;
  }

  .radio-container input:checked + label {
    color: #fff;
    background-color: #202020;
    transition: background-color 0.1s linear;
  }

  .img-picker {
    display: flex;
    flex-direction: column;
  }

  .img-picker .img-label {
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.1px;
    margin: 3px 0;
  }

  .img-picker input {
    display: none;
  }

  .img-picker label {
    text-align: center;
    height: 90px;
    width: 100%;
    border: 2px dashed #595959;
    border-radius: 4px;
    padding: 14px 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .img-picker label span {
    color: #fff;
    background-color: #595959;
    border-radius: 5px;
    padding: 12px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 1.25px;
  }

  .form .btn {
    height: 60px;
    width: 100%;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.accent};
    border: none;
    border-radius: 40px;
    font-family: 'Lato', sans-serif;
    font-size: 22px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 1.25px;
    cursor: pointer;
    transition: background-color 0.1s linear;
  }

  .form .btn:hover {
    background-color: rgba(176, 51, 144, 0.8);
  }

  @media ${({ theme }) => theme.breakpoints.desktop} {
    .form h2 {
      font-size: 48px;
      line-height: 53px;
      letter-spacing: 0.1px;
    }
    .progress-container {
      margin: 37px auto;
    }
    .progress-bar li {
      font-size: 20px;
      line-height: 22px;
      letter-spacing: 0.25px;
    }
    .progress-bar li::before {
      width: 50px;
      height: 50px;
      border: 3px solid ${({ theme }) => theme.colors.accent};
      font-size: 25px;
      line-height: 50px;
      letter-spacing: 0.25px;
    }
    .progress-bar li::after {
      top: 27px;
      height: 3px;
    }
    .form-input .medical label,
    .insurance-label,
    .radio-container label,
    .img-picker .img-label {
      font-size: 25px;
      letter-spacing: 0.25;
    }
    .form-input .medical input,
    .radio-container,
    .img-picker .img-label {
      margin: 8px 0;
    }
    .radio-container label {
      height: 60px;
      font-size: 25px;
      letter-spacing: 0.25px;
      line-height: 34px;
    }
    .img-picker label {
      height: 120px;
    }
    .form .btn {
      height: 70px;
      margin: 60px auto;
      font-size: 26px;
      line-height: 26px;
    }
  }
`
