import styled from "styled-components";

const Wrapper = styled.button`
  padding: 1rem 2rem;
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border: 2px solid var(--tertiary-color);
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1.2rem;
  transition: background-color 0.3s, transform 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--tertiary-color-dark);
    border: 2px solid var(--tertiary-color-dark);
    color: var(--primary-color-dark);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }
`;

export default Wrapper;
