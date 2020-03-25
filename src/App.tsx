import React, {useEffect, useState} from 'react';
import './App.css';
import MonacoEditor from "react-monaco-editor";
import {editor} from "monaco-editor";


function App() {

  let editor:editor.IStandaloneCodeEditor;
  let monaco:any;

  let decorator : string[] = [];

  let [executionState, setExecutionState] = useState({line: 1, variables: []});

  let editorDidMount = (ed:editor.IStandaloneCodeEditor, mon:any) => {
    ed.focus();

    editor = ed;
    monaco = mon;
  };

  useEffect(()=>{
    decorator = editor.deltaDecorations(decorator, [
      {
        range: new monaco.Range(executionState.line, 1, executionState.line, 1),
        options: {
          isWholeLine: true,
          className: 'lineDecorator',
        }
      }
    ]);
  }, [executionState]);


  return (
        <MonacoEditor
            language="javascript"
            height={500}
            width={"40%"}
            value={"var x = 3; \nfunction(){}\nif(x == 4) {\n\tx += 4;\n}"}
            editorDidMount={editorDidMount}

        />
    );
}

export default App;
