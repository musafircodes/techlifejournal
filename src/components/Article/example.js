export const Article1 = `

<h1 class = "" > Article<h1>





\`\`\`jsx
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import ContentPage from './components/ContentPage'
import Article from './components/Article'
import { useState } from 'react'
function App() {
  const [dark, setDark] = useState(false)
  if (dark) {
    document.body.classList.add('dark')
    document.body.classList.add('bg-dark')
  }
  else {
    document.body.classList.remove('dark')
    document.body.classList.remove('bg-dark')
  }
  return (
    <div className={\`App\`}>
      <div className="  dark:text-white">
        <Navbar dark={dark} setDark={setDark} />
        <HomePage />
        <ContentPage />
        <Article />
      </div>
    </div >
  );
}

export default App;

\`\`\`


## Install

\`\`\`bash
npm i @uiw/react-markdown-editor
\`\`\`

## Document

Official document [demo preview](https://uiwjs.github.io/react-markdown-editor/) ([🇨🇳中国镜像网站](http://uiw.gitee.io/react-markdown-editor/))

## Basic Usage

\`\`\`jsx
import MarkdownEditor from '@uiw/react-markdown-editor';
import React from 'react';
import ReactDOM from 'react-dom';

const Dome = () => (
  <MarkdownEditor
    value={this.state.markdown}
    onChange={this.updateMarkdown}
  />
);

ReactDOM.render(<Dome />, document.getElementById('app'));
\`\`\`

## Controlled Usage

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-markdown-editor-ybpce?file=/src/App.js)

\`\`\`jsx
import MarkdownEditor from '@uiw/react-markdown-editor';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [markdown, setMarkdown] = useState("");
  return (
    <MarkdownEditor
      value="# This is a H1  \n## This is a H2  \n###### This is a H6"
      onChange={(editor, data, value) => setMarkdown(value)}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
\`\`\`

## Custom Toolbars

[![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?logo=codesandbox)](https://codesandbox.io/embed/react-markdown-editorcustom-toolbars-forked-r9ocu?fontsize=14&hidenavigation=1&theme=dark)

\`\`\`jsx
import React from "react";
import ReactDOM from "react-dom";
import MarkdownEditor from '@uiw/react-markdown-editor';

const title2 = {
  name: 'title2',
  keyCommand: 'title2',
  icon: (
    <svg width="12" height="12" viewBox="0 0 512 512">
      <path fill="currentColor" d="M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z" />
    </svg>
  ),
  execute: (editor, selection, position) => {
    const value = selection ? \`## \${selection}\` : '## ';
    editor.replaceSelection(value);
    position.ch = !!selection ? position.ch : position.ch + 3;
    editor.setCursor(position.line, position.ch);
    editor.focus();
  },
};

const Dome = () => (
  <MarkdownEditor
    value="Hello Markdown!"
    toolbars={[
      'bold', 'italic', 'header', title2
    ]}
  />
);

ReactDOM.render(<Dome />, document.getElementById('app'));
\`\`\`

## Props

- \`value (string)\` - the raw markdown that will be converted to html (**required**)
- \`visible?: boolean\` - Shows a preview that will be converted to html.
- \`toolbars?: ICommand[] | string[]\` - Tool display settings.
- \`toolbarsMode?: ICommand[] | string[]\` - Tool display settings.
- \`onChange?:function(editor: IInstance, data: CodeMirror.EditorChange, value: string)\` - called when a change is made
- \`onBlur?: function(editor: IInstance, event: Event)\` - event occurs when an object loses focus
- \`previewProps\` - [react-markdown options](https://github.com/uiwjs/react-markdown-preview/tree/v2.1.0#options-props)

> [Other Props Options](https://github.com/uiwjs/react-markdown-editor/blob/812937bf90abadd5f795d06d97ead9f59cd35954/src/index.tsx#L11-L21)


### Development

\`\`\`bash
npm run dev
npm run type-check:watch
npm run doc
\`\`\`

### Related

- [@uiw/react-codemirror](https://github.com/uiwjs/react-codemirror): CodeMirror component for React. @codemirror
- [@uiw/react-monacoeditor](https://github.com/jaywcjlove/react-monacoeditor): Monaco Editor component for React.
- [@uiw/react-md-editor](https://github.com/uiwjs/react-md-editor): A simple markdown editor with preview, implemented with React.js and TypeScript.
- [@uiw/react-markdown-preview](https://github.com/uiwjs/react-markdown-preview): React component preview markdown text in web browser. 



\`\`\`python
print("hello ")
a= []
def lol():
    for i in range(0,len(a)):
      print("f")
  

\`\`\`
## License

[MIT © Kenny Wong](./LICENSE)

`