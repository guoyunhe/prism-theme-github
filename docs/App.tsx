import { BaseStyles } from '@primer/react';
import Highlight, { defaultProps, Language } from 'prism-react-renderer';
import '../github-light.css';
import codeTest from './code-test.md?raw';

function findCode(language: string) {
  const start = codeTest.indexOf('```' + language + '\n') + language.length + 3;
  const end = codeTest.indexOf('```', start);
  return codeTest.substring(start, end).trim();
}

const codeMap: Partial<Record<Language, string>> = {
  json: findCode('json'),
  markup: findCode('html'),
  css: findCode('css'),
  javascript: findCode('js'),
  jsx: findCode('jsx'),
  typescript: findCode('ts'),
  tsx: findCode('tsx'),
};

export default function App() {
  return (
    <BaseStyles>
      <div style={{ background: '#fff', padding: 20 }}>
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
      </div>{' '}
    </BaseStyles>
  );
}
