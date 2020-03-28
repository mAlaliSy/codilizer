import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonacoEditor from "react-monaco-editor";
import {editor} from "monaco-editor";
import {Button, ButtonGroup, Col, Container, ListGroup, Row, Table} from "react-bootstrap";
import JavaScriptExecutor from "./executors/languages_executors/es/EcmaScriptExecutor";
import ErrorHandler from "./executors/errorhandler/ErrorHandler";
import Error from "./executors/errorhandler/Error";
import Action from "./executors/actions/Action";
import AssignmentAction from "./executors/actions/AssignmentAction";
import VarDecAction from "./executors/actions/VarDecAction";
import PrintAction from "./executors/actions/PrintAction";
import EvaluateExpressionAction from "./executors/actions/EvaluateExpressionAction";
import JumpAction from "./executors/actions/JumpAction";


interface ExecutionState {
    line: number;
    variables: any;
}

function App() {

    let editor: editor.IStandaloneCodeEditor;
    let monaco: any;
    let lineHeight = 24;

    let decorator: string[] = [];

    let [executionState, setExecutionState] = useState<ExecutionState>({line: -1, variables: {}});
    let [codeExecuted, setCodeExecuted] = useState(false);
    let [fatalError, setFatalError] = useState(false);
    let [nextActionIndex, setNextActionIndex] = useState(0);
    let [errors, setErrors] = useState([]);
    let [actions, setActions] = useState(new Array<Action>());
    let [consoleContent, setConsoleContent] = useState("");

    let [code, setCode] = useState("var x = 'GREAT!';\nfor(var i = 1; i <= 2; i = i + 1){\n\tvar y = x + i;\n\tconsole.log('Test ' + x);\n}");

    let editorDidMount = (ed: editor.IStandaloneCodeEditor, mon: any) => {
        ed.focus();

        editor = ed;
        // lineHeight = editor.getRawOptions().lineHeight!!;
        monaco = mon;

    };

    // useEffect(() => {
    //     if (!codeExecuted) return;
    //     console.log("Update Decorator");
    //     decorator = editor?.deltaDecorations(decorator, [
    //         {
    //             range: new monaco.Range(executionState.line, 1, executionState.line, 1),
    //             options: {
    //                 isWholeLine: true,
    //                 className: 'lineDecorator',
    //                 glyphMarginClassName: 'lineDecorator'
    //             }
    //         }, {
    //             range: new monaco.Range(executionState.line, 1, executionState.line, 1),
    //             options: {
    //                 isWholeLine: true,
    //                 className: 'lineDecorator',
    //                 glyphMarginClassName: 'lineDecorator'
    //             }
    //         },
    //     ]);
    // }, [executionState.line]);

    let errorHandler = new class ErrorHandler {
        handleError(error: Error): void {
            if (error.fatal) setFatalError(true);
        }
    };
    let executeNextAction = () => {
        if(nextActionIndex >= actions.length) return;
        let action = actions[nextActionIndex];
        if (action instanceof AssignmentAction) {
            let assignmentAction = action as AssignmentAction;
            let variables: any = executionState.variables;
            variables[assignmentAction.varName] = assignmentAction.value;
            setExecutionState({...executionState, variables});
        } else if (action instanceof VarDecAction) {
            let varDecAction = action as VarDecAction;
            let variables: any = executionState.variables;
            variables[varDecAction.varName] = "undefined";
            if (varDecAction.initialValue !== undefined)
                variables[varDecAction.varName] = varDecAction.initialValue;
            setExecutionState({...executionState, variables});
        } else if (action instanceof PrintAction) {
            let printAction = action as PrintAction;
            setConsoleContent(consoleContent + "\n" + printAction.data);
        } else if (action instanceof EvaluateExpressionAction) {
            // DO NOTHING
        } else if (action instanceof JumpAction) {
            setExecutionState({...executionState, line: action.lineNumber});
        }
    };
    let onExecuteClicked = () => {
        if (editor.getModel()?.getValue() == null) return;
        setErrors([]);
        setNextActionIndex(0);
        setCodeExecuted(true);
        setFatalError(false);
        var sourceCode = editor.getModel()?.getValue()!!;
        let executor = new JavaScriptExecutor(sourceCode, errorHandler);
        let resultActions = executor.executeAll();
        console.log(resultActions);
        setActions(resultActions);
        setExecutionState({variables: {}, line: 1});
        setCode(sourceCode);
    };

    let onNextClicked = () => {
        if(nextActionIndex > actions.length) return;
        executeNextAction();
        let updatedNextAction = nextActionIndex + 1;
        setNextActionIndex(updatedNextAction);
        if (nextActionIndex < actions.length)
            setExecutionState({...executionState, line: actions[updatedNextAction].lineNumber})
    };

    let getNextCommandText = () => {
        if (!codeExecuted) return "-";
        if (nextActionIndex>=actions.length) return "-";
        let action = actions[nextActionIndex];
        if (action instanceof AssignmentAction) {
            let assingmentAction = action as AssignmentAction;
            return "Assign " + assingmentAction.value + " to variable " + assingmentAction.varName;
        } else if (action instanceof VarDecAction) {
            let varDecAction = action as VarDecAction;
            let commandText = "Declare variable " + varDecAction.varName;
            if (varDecAction.initialValue !== undefined)
                commandText += " with initial value = " + varDecAction.initialValue;
            return commandText;
        } else if (action instanceof PrintAction) {
            return "Log the message to console: " + (action as PrintAction).data;
        } else if (action instanceof EvaluateExpressionAction) {
            let expressionAction = action as EvaluateExpressionAction;
            return "Evaluating expression: " + expressionAction.expression + " = " + expressionAction.result;
        } else if (action instanceof JumpAction) {
            return "Jump to line: " + action.lineNumber;
        }

        return action.message;
    };

    let varTable = Object.keys(executionState.variables).map((variable: any) => {
        let val = executionState.variables[variable];
        console.log("VAR:" + variable);
        return (<tr>
            <td>{variable}</td>
            <td>{val}</td>
        </tr>);
    });

    return (

        <Container>
            <Row className={"justify-content-center app-container"}>
                <Col sm={12} md={6}>
                    <div className={"code-container"}>
                        {codeExecuted ?
                            <div
                                style={{
                                    minWidth: lineHeight / 2,
                                    minHeight: lineHeight / 2,
                                    height: lineHeight / 2,
                                    borderRadius: 50,
                                    background: "#782aff",
                                    marginTop: lineHeight * (executionState.line-0.75)
                                }}></div>
                            : null}
                        <div style={{flex: 1}}>
                            <MonacoEditor
                                language="javascript"
                                height={500}
                                options={{minimap: {enabled: false}, lineHeight, lineDecorationsWidth: 0}}
                                width={'100%'}
                                value={code}
                                editorDidMount={editorDidMount}
                            />
                        </div>
                    </div>
                    <Row className={"justify-content-center"}>
                        {codeExecuted ? null :
                            <Button onClick={onExecuteClicked}
                                    className={"m-3"}>Execute</Button>
                        }
                    </Row>

                </Col>
                <Col sm={12} md={6}>
                    <div className={"rounded-white state-container"}>
                        <h5 className={"text-center mt-2"}>Execution State</h5>
                        <div style={{width: '100%', height: 1, background: "#ddd"}}></div>
                        <Row style={{flex: 1, width: '100%', margin: 0}}>
                            <Col sm={6} style={{
                                borderRightWidth: 1,
                                borderRightColor: '#ddd',
                                borderRightStyle: 'solid',
                                boxSizing: 'border-box',
                                padding: 0
                            }}>
                                <h6 className={"text-center mt-2"}>Variables</h6>
                                <Table striped hover size="sm" style={{width: '100%'}}>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {varTable}
                                    </tbody>
                                </Table>
                            </Col>

                            <Col style={{background: "#222", color: "#fff"}} sm={6}>
                                <h6 className={"text-center mt-2"}>Console</h6>
                                <Row style={{
                                    borderTopWidth: 1,
                                    borderTopColor: '#fff',
                                    borderTopStyle: 'solid',
                                    boxSizing: 'border-box',
                                }}>
                                    <Col>
                                        {consoleContent.split('\n').map(i => {
                                            return <p>{i}</p>
                                        })}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <div style={{
                            backgroundColor: "#eee",
                            padding: 10,
                            borderTopWidth: 1,
                            borderTopStyle: 'solid',
                            borderTopColor: '#ddd'
                        }}>
                            <span style={{color: "#282b38", fontWeight: 'bold'}}>Next command:</span>
                            <div>
                                {getNextCommandText()}
                            </div>
                        </div>
                    </div>
                    <Row className={"justify-content-center"}>
                        {
                            codeExecuted ?
                                <ButtonGroup className={"m-3"}>
                                    <Button>Reset All</Button>
                                    {nextActionIndex >= actions.length ? null :
                                        <Button onClick={onNextClicked}>Next</Button>
                                    }
                                </ButtonGroup>
                                : null
                        }
                    </Row>
                </Col>
            </Row>
        </Container>

    );
}

export default App;
