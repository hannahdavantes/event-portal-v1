import styled from "styled-components";

const Wrapper = styled.button`
  padding: 1rem 2rem;
  background-color: var(--tertiary-color);
  color: var(--primary-color-dark);
  border: 2px solid var(--tertiary-color);
  border-radius: 5px;
  font-size: 1.6rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: var(--tertiary-color-dark);
    border: 2px solid var(--tertiary-color-dark);
    color: var(--primary-color-dark);
  }

  &:active {
    transform: scale(0.97); /* slightly shrinks on press */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2); /* subtle pressed shadow */
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
