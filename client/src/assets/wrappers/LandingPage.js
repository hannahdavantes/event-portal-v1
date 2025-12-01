import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  background-color: var(--primary-color);
  color: var(--white);

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding: 2rem;

  .hero {
    max-width: 65rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }

  .title {
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
    margin-bottom: 1rem;
  }

  /* Image */
  .hero-svg {
    width: 60%;
    max-width: 30rem;
  }

  .subtitle {
    font-size: 2rem;
    color: var(--secondary-color-light);
    line-height: 1.6;
    margin-top: 1rem;
  }

  .actions {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
  }

  .btn-primary {
    background-color: var(--secondary-color);
    color: var(--primary-color);
    padding: 1.6rem 3rem;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    border: 2px solid var(--secondary-color);
    transition: 0.2s;

    &:hover {
      background-color: var(--secondary-color-dark);
      border-color: var(--secondary-color-dark);
      color: var(--primary-color-dark);
    }
  }

  .admin-section {
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    color: var(--secondary-color);
  }

  .admin-links {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .admin-link {
    color: var(--white);
    text-decoration: none;
    letter-spacing: 0.3rem;

    &:hover {
      color: var(--secondary-color);
    }
  }

  @media (max-width: 768px) {
    .hero-svg {
      width: 70%;
    }
  }
`;

export default Wrapper;
