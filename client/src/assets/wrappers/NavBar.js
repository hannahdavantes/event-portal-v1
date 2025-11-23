import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--primary-color);
  padding: 2rem 1rem;
  font-size: 2rem;

  a {
    color: var(--white);
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1rem;
    margin: 0 1rem;
    padding-left: 1rem;
  }

  a.active {
    font-weight: bold;
    border-bottom: 3px solid var(--secondary-color);
    padding-bottom: 0.2rem;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export default Wrapper;
