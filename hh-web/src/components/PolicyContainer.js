import styled from 'styled-components';

// Simple container to add some padding around the content
const PolicyContainer = styled.div`
  padding: 2rem 3rem; // Match general section padding
  max-width: 900px; // Limit content width for readability
  margin: 2rem auto; // Center the container
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  h2 {
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #444;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 2rem;
    margin-bottom: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }

  code {
    background-color: #f0f0f0;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.9em;
  }
`;

export default PolicyContainer; 