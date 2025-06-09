import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const FAQWrapper = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, 
    var(--color-background) 0%,
    rgba(232, 144, 49, 0.02) 50%,
    var(--color-background) 100%
  );
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const FAQInner = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;

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
  text-align: center;

  @media (max-width: 1024px) {
    font-size: 2.4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionIcon = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #E89031, #C76D52);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
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

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 500;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    padding: 0 0.5rem;
  }
`;

const FAQList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: var(--color-card-bg);
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: rgba(232, 144, 49, 0.1);
  }

  body.dark-mode & {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.08);

    &:hover {
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
      border-color: rgba(237, 165, 74, 0.15);
    }
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text);
  transition: all 0.2s ease;

  &:hover {
    color: #E89031;
  }

  @media (max-width: 768px) {
    padding: 1.25rem 1.5rem;
    font-size: 1rem;
  }
`;

const ChevronIcon = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: color 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
  }

  ${QuestionButton}:hover & {
    color: #E89031;
  }
`;

const AnswerContainer = styled(motion.div)`
  overflow: hidden;
`;

const Answer = styled.div`
  padding: 0 2rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);

  strong {
    color: var(--color-text);
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 0 1.5rem 1.25rem;
    font-size: 0.95rem;
  }
`;

const FAQ = () => {
  const { t } = useTranslation();
  const faqData = t('faq.questions', { returnObjects: true }) || [];
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <FAQWrapper>
      <FAQInner>
        <SectionIcon
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <HelpCircle />
        </SectionIcon>

        <SectionTitle
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t('faq.title')}
        </SectionTitle>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {t('faq.subtitle')}
        </Subtitle>

        <FAQList
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                duration: 0.6,
                staggerChildren: 0.1
              }
            }
          }}
        >
          {Array.isArray(faqData) && faqData.map((faq) => (
            <FAQItem
              key={faq.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" }
                }
              }}
            >
              <QuestionButton
                onClick={() => toggleItem(faq.id)}
                aria-expanded={openItems.has(faq.id)}
              >
                {faq.question}
                <ChevronIcon
                  animate={{ 
                    rotate: openItems.has(faq.id) ? 180 : 0 
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ChevronDown />
                </ChevronIcon>
              </QuestionButton>
              
              <AnimatePresence>
                {openItems.has(faq.id) && (
                  <AnswerContainer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Answer dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AnswerContainer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </FAQInner>
    </FAQWrapper>
  );
};

export default FAQ; 