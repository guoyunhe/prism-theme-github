import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import { useState } from 'react';
import darkTheme from '../github-dark.css?raw';
import lightTheme from '../github-light.css?raw';
import './App.css';
import codeTest from './code-test.md?raw';

function findCode(language: string) {
  const start = codeTest.indexOf('```' + language + '\n') + language.length + 3;
  const end = codeTest.indexOf('```', start);
  return codeTest.substring(start, end).trim();
}

const codeMap: Partial<Record<Language, string>> = {
  json: findCode('json'),
  yaml: findCode('yaml'),
  markup: findCode('html'),
  css: findCode('css'),
  scss: findCode('scss'),
  javascript: findCode('js'),
  jsx: findCode('jsx'),
  typescript: findCode('ts'),
  tsx: findCode('tsx'),
};

export default function App() {
  const [nightMode, setNightMode] = useState(false);
  return (
    <div className={'app ' + (nightMode ? 'dark' : 'light')}>
      <style>{nightMode ? darkTheme : lightTheme}</style>
      <label>
        Dark Mode:
        <input
          type="checkbox"
          checked={nightMode}
          onChange={(e) => {
            setNightMode(e.target.checked);
          }}
        />
      </label>

      <h1>Code Test</h1>
      {Object.entries(codeMap).map(([language, code]) => (
        <div key={language}>
          <h2>{language}</h2>
          <Highlight
            {...defaultProps}
            code={code.trim()}
            language={language as Language}
            theme={undefined} // disable default theme
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      ))}
    </div>
  );
}
