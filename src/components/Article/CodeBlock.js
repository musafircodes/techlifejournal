// ./CodeBlock.js
import React from "react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialDark  } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = () => {
  return {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, '')}
          style={materialDark}
          language={match[1]}
          PreTag="div"
          showLineNumbers={true}
          wrapLongLines={true}
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }
}

export default CodeBlock