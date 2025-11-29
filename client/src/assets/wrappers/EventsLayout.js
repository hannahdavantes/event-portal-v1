import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: var(--black);

  & a,
  & button {
    color: var(--black);
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1rem;
    margin: 0 1rem;
    padding-left: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    font: inherit;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem; /* for icons if any */
    transition: color 0.2s ease-in-out, border-bottom 0.2s ease-in-out;
  }

  & a.active {
    font-weight: bold;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 0.2rem;
  }

  & a:hover,
  & button:hover {
    color: var(--secondary-color);
  }
`;

export default Wrapper;
