import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;

  .title {
    font-size: 3.6rem;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    color: var(--white);
    text-align: center;
  }

  .subtitle {
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
    color: var(--secondary-color);
    text-align: center;
  }

  .title-link {
    text-decoration: underline;
    color: var(--secondary-color-dark);
  }

  .events-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  /* Empty Events */
  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    margin-top: 8rem;
  }

  .empty {
    font-size: 3.5rem;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: var(--secondary-color);
    text-align: center;
  }

  .add-btn {
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
    text-decoration: none;
    display: inline-block;

    &:hover {
      background-color: var(--tertiary-color-dark);
      border-color: var(--tertiary-color-dark);
      color: var(--primary-color-dark);
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.97);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.4rem;
      letter-spacing: 0.4rem;
    }

    .add-btn {
      letter-spacing: 0.6rem;
    }
  }
`;

export default Wrapper;
