import Highlight, { defaultProps } from 'prism-react-renderer';
import Demo from './Demo';
import demoCode from './Demo.tsx?raw';

export default function App() {
  return (
    <div>
      <div style={{ fontSize: 14 }}>
        Please edit <code style={{ color: '#ff8800', fontSize: 14 }}>docs/App.tsx</code> file
      </div>

      <div style={{ padding: 12, background: '#f0f0f0' }}>
        <Demo />
      </div>
      <Highlight {...defaultProps} code={demoCode} language="tsx">
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
  );
}
