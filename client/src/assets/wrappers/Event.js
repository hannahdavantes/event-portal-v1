import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.4rem;
  border: 2.2px solid var(--secondary-color);
  border-radius: 5px;

  .card-content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }

  .card-img-container {
    grid-column: 1/2;
    width: 35rem;
  }

  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card-details {
    grid-column: 2/3;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .card-description {
    text-align: justify;
  }

  .card-datetime {
    span {
      font-weight: bold;
    }
  }

  .card-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .btn-action {
      font-size: 2rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      color: white;
      transition: background 0.3s;

      &:hover {
        opacity: 0.8;
      }
    }

    .btn-warn {
      background-color: var(--secondary-color);
    }

    .btn-danger {
      background-color: var(--tertiary-color-dark);
    }
  }
`;

export default Wrapper;
