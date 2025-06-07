import styled from 'styled-components';
import { motion } from 'framer-motion';

// Individual feature section
export const FeatureSection = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  &:nth-child(odd) {
    background: linear-gradient(135deg, var(--color-background) 0%, rgba(232, 144, 49, 0.03) 100%);
  }
  
  &:nth-child(even) {
    background: linear-gradient(135deg, var(--color-header-bg) 0%, rgba(199, 109, 82, 0.05) 100%);
  }

  body.dark-mode & {
    &:nth-child(odd) {
      background: linear-gradient(135deg, #1a1a1a 0%, rgba(237, 165, 74, 0.05) 100%);
    }
    
    &:nth-child(even) {
      background: linear-gradient(135deg, #2d2d2d 0%, rgba(199, 109, 82, 0.08) 100%);
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const FeatureContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  gap: 4rem;
  min-height: 600px;

  &.reverse {
    flex-direction: row-reverse;
  }

  @media (max-width: 1024px) {
    gap: 3rem;
    min-height: 500px;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    gap: 2rem;
    min-height: auto;
    padding: 0 1.5rem;
  }
`;

export const ContentSide = styled(motion.div)`
  flex: 1;
  max-width: 550px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: left;
    order: 1; /* Always show content first on mobile */
  }
`;

export const GraphicSide = styled(motion.div)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    max-width: 100%;
    order: 2; /* Always show graphic second on mobile */
  }
`;

export const FeatureIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #E89031, #C76D52);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  box-shadow: 0 12px 30px rgba(232, 144, 49, 0.3);

  svg {
    width: 36px;
    height: 36px;
    color: white;
    stroke-width: 2;
  }

  @media (max-width: 768px) {
    margin: 0 0 2rem 0;
  }
`;

export const FeatureTitle = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: bold;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  line-height: 1.2;
  background: linear-gradient(135deg, #E89031, #C76D52);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const FeatureDescription = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FeatureListItem = styled(motion.li)`
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  font-size: 1.1rem;
  color: var(--color-text);

  &::before {
    content: '${props => props.emoji || '✓'}';
    margin-right: 1rem;
    font-size: 1.2rem;
    min-width: 24px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

// Mock graphic components - you can replace these with actual graphics later
export const MockupContainer = styled(motion.div)`
  width: 400px;
  height: 500px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 30px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  border: 8px solid #333;

  body.dark-mode & {
    background: linear-gradient(135deg, #2d3748, #4a5568);
    border-color: #1a1a1a;
  }

  @media (max-width: 1024px) {
    width: 320px;
    height: 400px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 350px;
  }
`;

export const MockupScreen = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  body.dark-mode & {
    background: #1a202c;
    color: white;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--color-text);
  }

  p {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .mock-list {
    width: 100%;
    margin-top: 1rem;
  }

  .mock-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin: 0.3rem 0;
    background: rgba(232, 144, 49, 0.1);
    border-radius: 8px;
    border-left: 3px solid #E89031;
    font-size: 0.8rem;
  }
`;

// Animation variants
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}; 