import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 2rem;
  width: 75%;
  border: 2.2px solid var(--secondary-color);
  border-radius: 5px;
  padding: 2.4rem;
  background: var(--off-white);
  color: var(--black);

  .card-title {
    font-size: 3rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    color: var(--primary-color-dark);
    word-wrap: break-word;
  }

  .card-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: stretch;
    gap: 2.5rem;
  }

  /* Card Imagee */
  .card-img-container {
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    border: 2px solid var(--secondary-color-light);
    height: 100%;
    max-height: 100%;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* Card Details */
  .card-details {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    font-size: 1.8rem;
  }

  .card-description {
    line-height: 1.6;
    color: var(--gray-6);
  }

  .card-datetime span {
    font-weight: bold;
    color: var(--primary-color);
  }

  /* Card Actions/buttons  */
  .card-actions {
    margin-top: 2rem;
    display: flex;
    gap: 1.4rem;
    flex-wrap: wrap;
    font-size: 1.4rem;
  }

  .btn-action {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    padding: 1rem 1.8rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 1.4rem;
    font-weight: bold;

    border-radius: 5px;
    border: none;
    cursor: pointer;
    text-decoration: none;

    transition: all 0.15s ease-in-out;
    color: var(--white);

    white-space: nowrap;
    appearance: none;
    vertical-align: middle;

    & a {
      margin: 0;
    }
  }

  .btn-warn {
    background-color: var(--secondary-color);
    border: 2px solid var(--secondary-color);

    &:hover {
      background-color: var(--secondary-color-dark);
      border-color: var(--secondary-color-dark);
    }
  }

  .btn-danger {
    background-color: var(--tertiary-color);
    border: 2px solid var(--tertiary-color);

    &:hover {
      background-color: var(--tertiary-color-dark);
      border-color: var(--tertiary-color-dark);
    }
  }

  .btn-success {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    color: var(--white);

    &:hover {
      background-color: var(--primary-color-dark);
      border-color: var(--primary-color-dark);
    }
  }

  @media (max-width: 768px) {
    .card-content {
      grid-template-columns: 1fr;
    }

    .card-img-container {
      height: 22rem;
    }

    .card-title {
      font-size: 2.4rem;
      letter-spacing: 0.2rem;
    }
  }
`;

export default Wrapper;
