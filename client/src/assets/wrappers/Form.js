import { Form } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 2.4rem;
  margin: 4rem auto;
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
      letter-spacing: 1px;
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
`;

export default Wrapper;
