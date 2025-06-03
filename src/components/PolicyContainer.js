import styled from 'styled-components';

// Simple container to add some padding around the content
const PolicyContainer = styled.div`
  padding: 2rem 3rem; // Match general section padding
  max-width: 900px; // Limit content width for readability
  margin: 2rem auto; // Center the container
  background-color: var(--color-card-bg); // Use theme variable
  border-radius: 8px;
  box-shadow: var(--card-shadow); // Use theme variable
  transition: background-color 0.3s ease, box-shadow 0.3s ease; // Add transitions

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-text-header); // Use theme variable
    transition: color 0.3s ease;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--color-text-header-secondary); // Use theme variable
    transition: color 0.3s ease;
  }

  p, li {
    font-size: 1rem;
    line-height: 1.7;
    color: var(--color-text-secondary); // Use theme variable
    margin-bottom: 1rem;
    transition: color 0.3s ease;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
    // color is inherited from p, li rule above
  }

  a { // Add link styling for dark mode
    color: var(--color-primary); // Use theme primary color for links
    text-decoration: underline;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-primary-hover); // Use a hover variant if available
    }
  }
  
  strong { // Ensure strong text is also visible
    color: var(--color-text); 
    transition: color 0.3s ease;
  }

  code {
    background-color: var(--color-code-bg); // Use theme variable
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
    color: var(--color-text-secondary); // Use theme variable
    transition: background-color 0.3s ease, color 0.3s ease;
  }
`;

export default PolicyContainer; 