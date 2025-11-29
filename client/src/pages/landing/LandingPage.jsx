import styled from "styled-components";
import { FaCalendarAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--primary-color); /* dark teal */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  background-color: var(--primary-color);
  border: 0.1rem solid var(--secondary-color-light);
  border-radius: 0.8rem;
  width: 90%;
  max-width: 45rem;
  text-align: center;
`;

const Title = styled.h1`
  color: var(--off-white);
  font-size: 2.4rem;
  margin-bottom: 2rem;
  letter-spacing: 0.2rem;
`;

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1.6rem 2rem;
  font-weight: bold;
  font-size: 1.6rem;
  background-color: var(--tertiary-color);
  color: var(--primary-color);
  border-radius: 0.6rem;
  text-decoration: none;
  margin-bottom: 1.6rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--tertiary-color-dark);
    color: var(--white);
  }
`;

const LinkGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const SecondaryLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  color: var(--off-white);
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: var(--secondary-color-light);
  }
`;

const IconLarge = styled.span`
  font-size: 1.6rem;
`;

const IconSmall = styled.span`
  font-size: 1.4rem;
`;

const LandingSection = () => {
  return (
    <Section>
      <Container>
        <Title>Events Portal</Title>
        <Button href="/events/all">
          <IconLarge>
            <FaCalendarAlt />
          </IconLarge>
          View Events
        </Button>
        <LinkGroup>
          <SecondaryLink href="/login">
            <IconSmall>
              <FaSignInAlt />
            </IconSmall>
            Login
          </SecondaryLink>
          <SecondaryLink href="/register">
            <IconSmall>
              <FaUserPlus />
            </IconSmall>
            Register
          </SecondaryLink>
        </LinkGroup>
      </Container>
    </Section>
  );
};

export default LandingSection;
