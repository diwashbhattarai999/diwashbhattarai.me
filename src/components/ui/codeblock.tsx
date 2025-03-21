'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { Check, Copy } from 'lucide-react';

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  // Add custom CSS to ensure the code block is responsive
  React.useEffect(() => {
    // Add a style tag to handle the SyntaxHighlighter's generated elements
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .syntax-highlighter-container pre {
        white-space: pre-wrap !important;
        word-break: break-word !important;
        overflow-wrap: break-word !important;
      }
      
      @media (max-width: 640px) {
        .syntax-highlighter-container code {
          font-size: 0.75rem !important;
        }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className='relative w-full rounded-lg bg-neutral-900/90 p-4 font-mono text-sm backdrop-blur-md dark:bg-neutral-900/50'>
      <div className='flex flex-col gap-2'>
        {tabsExist && (
          <div className='flex flex-wrap overflow-x-auto'>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-3 !py-2 font-sans text-xs transition-colors ${
                  activeTab === index
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className='flex items-center justify-between py-2'>
            <div className='text-muted-foreground max-w-[80%] truncate text-xs'>
              {filename}
            </div>
            <button
              className='text-muted-foreground hover:text-secondary-foreground flex items-center gap-1 font-sans text-xs transition-colors'
              onClick={() => {
                void copyToClipboard();
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        wrapLongLines
        PreTag='div'
        language={activeLanguage}
        style={atomDark}
        codeTagProps={{
          style: {
            display: 'block',
            width: '100%',
            maxWidth: '100%',
            overflowX: 'auto',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          },
        }}
        customStyle={{
          margin: 0,
          padding: 0,
          background: 'transparent',
          fontSize: '0.875rem',
          maxWidth: '100%',
          overflowX: 'auto',
        }}
        lineProps={lineNumber => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? 'rgba(255,255,255,0.1)'
              : 'transparent',
            display: 'block',
            width: '100%',
            maxWidth: '100%',
          },
        })}
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
