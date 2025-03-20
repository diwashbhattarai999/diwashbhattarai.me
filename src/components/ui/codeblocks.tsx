'use client';

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { IconCheck, IconCopy } from '@tabler/icons-react';

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

  return (
    <div className='relative w-full rounded-lg bg-neutral-900/90 p-4 font-mono text-sm backdrop-blur-2xl dark:bg-neutral-900/50'>
      <div className='flex flex-col gap-2'>
        {tabsExist && (
          <div className='flex  overflow-x-auto'>
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
            <div className='text-muted-foreground text-xs'>{filename}</div>
            <button
              className='text-muted-foreground hover:text-secondary-foreground flex items-center gap-1 font-sans text-xs transition-colors'
              onClick={() => {
                void copyToClipboard();
              }}
            >
              {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
            </button>
          </div>
        )}
      </div>
      <SyntaxHighlighter
        showLineNumbers
        wrapLines
        PreTag='div'
        language={activeLanguage}
        style={atomDark}
        customStyle={{
          margin: 0,
          padding: 0,
          background: 'transparent',
          fontSize: '0.875rem', // text-sm equivalent
        }}
        lineProps={lineNumber => ({
          style: {
            backgroundColor: activeHighlightLines.includes(lineNumber)
              ? 'rgba(255,255,255)'
              : 'transparent',
            display: 'block',
            width: '100%',
          },
        })}
      >
        {String(activeCode)}
      </SyntaxHighlighter>
    </div>
  );
};
