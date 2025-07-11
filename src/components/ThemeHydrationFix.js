import React from 'react';

function ThemeHydrationFix() {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem('theme');
    const hasPersistedPreference = typeof persistedColorPreference === 'string';
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    return 'light';
  }
  const colorMode = getInitialColorMode();
  if (colorMode === 'dark') {
    document.body.classList.add('dark-mode');
  }
})()
  `;

  // The minified version of the script
  const minifiedCode = codeToRunOnClient.replace(/\\s+/g, ' ').trim();

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: minifiedCode }} />;
}

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    <script
      key="cookieyes"
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/a8a3d85ec8a019b2389d035d/script.js"
      defer
    />,
    <script
      key="gtag-script"
      defer
      src="https://www.googletagmanager.com/gtag/js?id=G-42RC3CKGS3"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-42RC3CKGS3', { "anonymize_ip": true });
        `,
      }}
    />,
    <script
      key="clarity"
      type="text/javascript"
      defer
      dangerouslySetInnerHTML={{
        __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "s76c7wh5oh");
        `,
      }}
    />,
  ]);
  setPreBodyComponents(<ThemeHydrationFix key="theme-hydration-fix" />);
}; 