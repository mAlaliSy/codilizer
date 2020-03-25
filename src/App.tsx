import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonacoEditor from "react-monaco-editor";
import {editor} from "monaco-editor";
import {Button, ButtonGroup, Col, Container, Row} from "react-bootstrap";
import JavaScriptExecutor from "./executors/languages_executors/es/EcmaScriptExecutor";
import ErrorHandler from "./executors/errorhandler/ErrorHandler";
import Error from "./executors/errorhandler/Error";
import Action from "./executors/actions/Action";


function App() {

    let editor: editor.IStandaloneCodeEditor;
    let monaco: any;

    let decorator: string[] = [];

    let [executionState, setExecutionState] = useState({line: -1, variables: []});
    let [codeExecuted, setCodeExecuted] = useState(false);
    let [fatalError, setFatalError] = useState(false);
    let [lastActionIndex, setLastActionIndex] = useState(0);
    let [errors, setErrors] = useState([]);
    let [actions, setActions] = useState(new Array<Action>());

    let editorDidMount = (ed: editor.IStandaloneCodeEditor, mon: any) => {
        ed.focus();

        editor = ed;
        monaco = mon;
    };

    useEffect(() => {
        if (!codeExecuted) return;
        decorator = editor?.deltaDecorations(decorator, [
            {
                range: new monaco.Range(executionState.line, 1, executionState.line, 1),
                options: {
                    isWholeLine: true,
                    className: 'lineDecorator',
                    glyphMarginClassName: 'lineDecorator'
                }
            }
        ]);
    }, [executionState]);

    let errorHandler = new class ErrorHandler {
        handleError(error: Error): void {
            if (error.fatal) setFatalError(true);
        }
    };

    let onExecuteClicked = () => {
        if (editor.getModel()?.getValue() == null) return;
        setErrors([]);
        setLastActionIndex(0);
        setCodeExecuted(true);
        setFatalError(false);
        let executor = new JavaScriptExecutor(editor.getModel()?.getValue()!!, errorHandler);
        setActions(executor.executeAll());
        setExecutionState({...executionState, line: 1});
    };

    return (

        <Container>
            <Row className={"justify-content-center"}>
                <Col sm={12} md={6}>
                    <div className={"code-container"}>
                        <MonacoEditor
                            language="javascript"
                            height={500}
                            width={'100%'}
                            value={"var x = 3; \nfunction(){}\nif(x == 4) {\n\tx += 4;\n}"}
                            editorDidMount={editorDidMount}
                        />
                    </div>
                    <Row className={"justify-content-center"}>
                        <Button onClick={onExecuteClicked}
                                className={"m-3"}>{codeExecuted ? "Reset" : "Execute"}</Button>
                    </Row>

                </Col>
                <Col sm={12} md={6}>

                </Col>
            </Row>
        </Container>

    );
}

export default App;
