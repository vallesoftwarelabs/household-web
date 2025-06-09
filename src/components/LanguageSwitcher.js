import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ChevronDown } from 'lucide-react';
import { useI18next } from 'gatsby-plugin-react-i18next';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem 0.625rem;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--color-text);
  transition: all 0.2s ease;
  min-width: 65px;

  @media (max-width: 768px) {
    border: none;
    padding: 0.5rem 0.375rem;
    min-width: 50px;
    gap: 0.125rem;
  }

  &:hover {
    background: var(--color-background-hover, rgba(0, 0, 0, 0.05));
    border-color: var(--color-primary, #E89031);
    
    @media (max-width: 768px) {
      border-color: transparent;
    }
  }

  &:focus {
    outline: none;
    border-color: var(--color-primary, #E89031);
    box-shadow: 0 0 0 3px rgba(232, 144, 49, 0.1);
    
    @media (max-width: 768px) {
      border-color: transparent;
      box-shadow: 0 0 0 2px rgba(232, 144, 49, 0.2);
    }
  }

  body.dark-mode & {
    border-color: rgba(255, 255, 255, 0.2);
    
    @media (max-width: 768px) {
      border-color: transparent;
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--color-primary, #EDA54A);
      
      @media (max-width: 768px) {
        border-color: transparent;
      }
    }
    
    &:focus {
      border-color: var(--color-primary, #EDA54A);
      box-shadow: 0 0 0 3px rgba(237, 165, 74, 0.1);
      
      @media (max-width: 768px) {
        border-color: transparent;
        box-shadow: 0 0 0 2px rgba(237, 165, 74, 0.2);
      }
    }
  }
`;

const ChevronIcon = styled(ChevronDown)`
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease;
  transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0deg)'};
  opacity: 0.7;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.25rem;
  background: var(--color-background);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  z-index: 9999;
  min-width: 120px;
  
  opacity: ${props => props.show ? '1' : '0'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transform: ${props => props.show ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)'};
  transition: all 0.15s ease;

  body.dark-mode & {
    background: rgba(26, 26, 26, 0.95);
    border-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(12px);
    box-shadow: 
      0 10px 25px -5px rgba(0, 0, 0, 0.4),
      0 4px 6px -2px rgba(0, 0, 0, 0.3);
  }
`;

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--color-text);
  transition: background-color 0.15s ease;

  &:hover {
    background: var(--color-background-hover, rgba(0, 0, 0, 0.05));
  }

  &:focus {
    outline: none;
    background: var(--color-background-hover, rgba(0, 0, 0, 0.05));
  }

  body.dark-mode & {
    &:hover, &:focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

const LanguageLabel = styled.span`
  font-weight: ${props => props.active ? '600' : '500'};
`;

const LanguageCode = styled.span`
  font-size: 0.75rem;
  opacity: 0.6;
  font-weight: 500;
  text-transform: uppercase;
`;

const ActiveIndicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-primary, #E89031);
  opacity: ${props => props.show ? '1' : '0'};
  transition: opacity 0.15s ease;

  body.dark-mode & {
    background: var(--color-primary, #EDA54A);
  }
`;

const languages = {
  en: { label: 'English', code: 'EN' },
  nb: { label: 'Norsk', code: 'NO' }
};

const LanguageSwitcher = () => {
  const { language, originalPath, navigate } = useI18next();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLanguageChange = (lng) => {
    // Don't do anything if already on the selected language
    if (lng === language) {
      setIsOpen(false);
      return;
    }

    // Get current path and remove any existing language prefix
    const currentPath = window.location.pathname;
    let cleanPath = currentPath;
    
    // Remove language prefixes if they exist
    if (currentPath.startsWith('/nb/')) {
      cleanPath = currentPath.replace('/nb', '') || '/';
    } else if (currentPath.startsWith('/en/')) {
      cleanPath = currentPath.replace('/en', '') || '/';
    }
    
    // Store the user's explicit language choice
    localStorage.setItem('userLanguageChoice', lng);
    
    // Navigate to the correct language version
    if (lng === 'en') {
      // For English (default), use clean path
      window.location.href = cleanPath;
    } else {
      // For other languages, add language prefix
      window.location.href = `/${lng}${cleanPath}`;
    }
    
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const currentLanguage = languages[language] || languages.en;

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownButton
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Change language"
      >
        <LanguageCode>{currentLanguage.code}</LanguageCode>
        <ChevronIcon open={isOpen} />
      </DropdownButton>

      <DropdownMenu show={isOpen}>
        {Object.entries(languages).map(([lng, config]) => (
          <DropdownItem
            key={lng}
            onClick={() => handleLanguageChange(lng)}
            aria-label={`Switch to ${config.label}`}
          >
            <div>
              <LanguageLabel active={lng === language}>
                {config.label}
              </LanguageLabel>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <LanguageCode>{config.code}</LanguageCode>
              <ActiveIndicator show={lng === language} />
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </DropdownWrapper>
  );
};

export default LanguageSwitcher; 