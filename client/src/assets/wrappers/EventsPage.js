import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  color: var(--black);

  a,
  button.nav-link {
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
  }

  a.active {
    font-weight: bold;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 0.2rem;
  }

  button.nav-link:hover,
  a:hover {
    color: var(--secondary-color);
  }
`;

export default Wrapper;
