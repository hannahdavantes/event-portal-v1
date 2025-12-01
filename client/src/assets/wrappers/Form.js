import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: 4rem auto;
  width: 30%;
  padding: 2.4rem;
  border: 2.2px solid var(--secondary-color);
  border-radius: 5px;
  gap: 2rem;

  .title {
    font-size: 3rem;
    font-weight: 600;
    color: var(--primary-color-dark);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    margin-bottom: 2rem;
  }

  .form-row {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.8rem;
      color: var(--primary-color-dark);
      text-transform: uppercase;
      /* consistent units: use rem (1px ≈ 0.1rem at current root) */
      letter-spacing: 0.1rem;
      line-height: 1.4;
      margin-bottom: 0.5rem;
    }

    input {
      padding: 0.8rem 1rem;
      font-size: 1.6rem;
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      color: var(--primary-color-dark);
      background-color: var(--low-opacity-white);
    }
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  .back-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: var(--primary-color-dark);
    color: var(--off-white);
    text-decoration: none;
    padding: 0.6rem 1.2rem;
    font-size: 2rem;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
    cursor: pointer;
  }

  .back-button:hover {
    background-color: var(--primary-color-dark);
    transform: scale(1.05);
  }

  .back-button:active {
    transform: scale(0.98);
  }

  p {
    text-align: center;
    font-size: 1.6rem;
  }
  a {
    font-weight: bold;
  }

  a:visited {
    color: var(--off-white);
  }
`;

export default Wrapper;
