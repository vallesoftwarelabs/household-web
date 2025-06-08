import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Gift, RotateCcw, Shield } from 'lucide-react';
import DownloadBadges from './DownloadBadges';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

const OurPromiseWrapper = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, 
    var(--color-background) 0%,
    rgba(232, 144, 49, 0.02) 50%,
    var(--color-background) 100%
  );
  text-align: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(232, 144, 49, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(237, 165, 74, 0.04) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const OurPromiseInner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionTitle = styled(motion.h2)`
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

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PromisesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const PromiseCard = styled(motion.div)`
  position: relative;
  padding: 2.5rem 2rem;
  background: linear-gradient(135deg, 
    rgba(255, 255, 255, 0.9) 0%,
    rgba(248, 250, 252, 0.8) 100%
  );
  border-radius: 24px;
  border: 1px solid rgba(232, 144, 49, 0.1);
  backdrop-filter: blur(10px);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      rgba(232, 144, 49, 0.8) 0%,
      rgba(237, 165, 74, 0.8) 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      transparent 0%,
      rgba(232, 144, 49, 0.1) 50%,
      transparent 100%
    );
    transition: left 0.6s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 
      0 20px 40px rgba(232, 144, 49, 0.15),
      0 10px 20px rgba(0, 0, 0, 0.1);
    border-color: rgba(232, 144, 49, 0.2);

    &::after {
      left: 100%;
    }

    .icon-container {
      animation: ${float} 2s ease-in-out infinite;
    }
  }

  body.dark-mode & {
    background: linear-gradient(135deg, 
      rgba(26, 26, 26, 0.9) 0%,
      rgba(20, 20, 20, 0.8) 100%
    );
    border-color: rgba(237, 165, 74, 0.15);

    &:hover {
      box-shadow: 
        0 20px 40px rgba(237, 165, 74, 0.2),
        0 10px 20px rgba(0, 0, 0, 0.3);
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: linear-gradient(135deg, #E89031, #C76D52);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 12px 30px rgba(232, 144, 49, 0.3);

  svg {
    width: 36px;
    height: 36px;
    color: white;
    stroke-width: 2;
  }

  body.dark-mode & {
    background: linear-gradient(135deg, #EDA54A, #D97706);
    box-shadow: 0 12px 30px rgba(237, 165, 74, 0.4);
  }
`;

const PromiseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const PromiseDescription = styled.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  font-weight: 500;
`;

const TrialBanner = styled(motion.div)`
  position: relative;
  padding: 3rem 2.5rem;
  background: linear-gradient(135deg, 
    rgba(232, 144, 49, 0.95) 0%,
    rgba(237, 165, 74, 0.9) 100%
  );
  border-radius: 24px;
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
  color: white;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, 
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: ${shimmer} 3s ease-in-out infinite;
    pointer-events: none;
  }

  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 1rem;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 0;
    position: relative;
    z-index: 1;
    opacity: 0.95;
    font-weight: 500;
  }

  .highlight {
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    
    h3 {
      font-size: 1.6rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;

// Enhanced Icons
const FreeTrialIcon = () => <Gift />;
const FlexibleIcon = () => <RotateCcw />;
const SupportIcon = () => <Shield />;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const OurPromise = () => {
  return (
    <OurPromiseWrapper>
      <OurPromiseInner>
        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Our Promise to You
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Try risk-free and experience smarter grocery shopping with complete confidence.
        </Subtitle>

        <PromisesContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <PromiseCard variants={itemVariants}>
            <IconContainer className="icon-container">
              <FreeTrialIcon />
            </IconContainer>
            <PromiseTitle>2-Week Free Trial</PromiseTitle>
            <PromiseDescription>
              Try all features completely free for 14 days. No commitments, no hidden fees.
            </PromiseDescription>
          </PromiseCard>

          <PromiseCard variants={itemVariants}>
            <IconContainer className="icon-container">
              <FlexibleIcon />
            </IconContainer>
            <PromiseTitle>Cancel Anytime</PromiseTitle>
            <PromiseDescription>
              Unsubscribe during your trial period and you won't be charged. No questions asked.
            </PromiseDescription>
          </PromiseCard>

          <PromiseCard variants={itemVariants}>
            <IconContainer className="icon-container">
              <SupportIcon />
            </IconContainer>
            <PromiseTitle>Transparent Pricing</PromiseTitle>
            <PromiseDescription>
              Multiple plans to choose from. What you see is what you pay—no surprise charges.
            </PromiseDescription>
          </PromiseCard>
        </PromisesContainer>

        <TrialBanner
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3>Ready to Transform Your Shopping?</h3>
          <p>
            Download the app and choose from our <span className="highlight">flexible subscription plans</span>. 
            Start your <span className="highlight">14-day free trial</span> instantly—no payment required upfront. 
            If you're not completely satisfied, simply cancel before the trial ends.
          </p>
        </TrialBanner>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          style={{ 
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <DownloadBadges />
        </motion.div>
      </OurPromiseInner>
    </OurPromiseWrapper>
  );
};

export default OurPromise; 