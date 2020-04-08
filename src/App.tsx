import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MonacoEditor from "react-monaco-editor";
import {editor} from "monaco-editor";
import {Button, ButtonGroup, Col, Container, Jumbotron, Row, Spinner, Table, Toast} from "react-bootstrap";
import JavaScriptExecutor from "./executors/languages_executors/es/EcmaScriptExecutor";
import Error from "./executors/errorhandler/Error";
import Action from "./executors/actions/Action";
import AssignmentAction from "./executors/actions/AssignmentAction";
import VarDecAction from "./executors/actions/VarDecAction";
import PrintAction from "./executors/actions/PrintAction";
import EvaluateExpressionAction from "./executors/actions/EvaluateExpressionAction";
import JumpAction from "./executors/actions/JumpAction";
import VarInitAction from "./executors/actions/VarInitAction";
import UnaryIncDecAction from "./executors/actions/UnaryIncDecAction";
import ExecutionError from "./executors/errorhandler/Error";


interface ExecutionState {
    line: number;
    variables: any;
}

let monacoEditor: editor.IStandaloneCodeEditor;
let monaco: any;
let lineHeight = 24;
const PLAYING_SPEED = 2000;

function App() {

    let [executionState, setExecutionState] = useState<ExecutionState>({line: -1, variables: {}});
    let [codeExecuted, setCodeExecuted] = useState(false);
    let [nextActionIndex, setNextActionIndex] = useState(0);
    let [errors, setErrors] = useState<ExecutionError[]>([]);
    let [actions, setActions] = useState(new Array<Action>());
    let [consoleContent, setConsoleContent] = useState("");
    let [executing, setExecuting] = useState(false);
    let [playing, setPlaying] = useState(false);
    let [showError, setShowError] = useState(false);

    let indexRef = useRef(nextActionIndex);
    indexRef.current = nextActionIndex;
    useEffect(() => {
        if (!codeExecuted) return;
        onNextUpdated();

        if (playing) {
            let timeoutId = setTimeout(() => {
                setNextActionIndex(nextActionIndex + 1);
            }, PLAYING_SPEED);
            return () => clearTimeout(timeoutId);
        }
    }, [nextActionIndex, playing]);

    useEffect(() => {
        document.title = "Codilizer | Code execution visualizer"
    }, []);

    let [code, setCode] = useState("for(var i = 1; i <= 5; ++i){\n" +
        "\tif(i%2 == 0)\n" +
        "\t\tconsole.log('Hello ' + i);\n" +
        "}");

    let editorDidMount = (ed: editor.IStandaloneCodeEditor, mon: any) => {
        ed.focus();

        monacoEditor = ed;
        monaco = mon;

    };


    let errorHandler = new class ErrorHandler {
        handleError(error: Error): void {
            if (error.fatal) resetAll();
            setShowError(true);
            setErrors([...errors, error]);
        }
    }();
    let updateVar = (varName: string, val: any) => {
        let variables: any = executionState.variables;
        variables[varName] = val;
        setExecutionState({...executionState, variables});
    };

    let executeNextAction = () => {
        if (nextActionIndex >= actions.length) return;
        let action = actions[nextActionIndex - 1];
        if(!action) return;
        setExecutionState({...executionState, line: action.lineNumber});
        if (action instanceof AssignmentAction) {
            let assignmentAction = action as AssignmentAction;
            updateVar(assignmentAction.varName, assignmentAction.value);
        } else if (action instanceof VarDecAction) {
            let varDecAction = action as VarDecAction;
            let variables: any = executionState.variables;
            variables[varDecAction.varName] = "undefined";
            setExecutionState({...executionState, variables});
        } else if (action instanceof VarInitAction) {
            let varInitAction = action as VarInitAction;
            let variables: any = executionState.variables;
            variables[varInitAction.varName] = varInitAction.initialValue;
            setExecutionState({...executionState, variables});
        } else if (action instanceof PrintAction) {
            let printAction = action as PrintAction;
            setConsoleContent(consoleContent + "\n" + printAction.data);
        } else if (action instanceof EvaluateExpressionAction) {
            // DO NOTHING
        } else if (action instanceof JumpAction) {
            setExecutionState({...executionState, line: action.lineNumber});
        } else if (action instanceof UnaryIncDecAction) {
            let oldVal = executionState.variables[action.varName];
            updateVar(action.varName, oldVal + (action.isInc ? 1 : -1));
        }
    };
    let onExecuteClicked = () => {
        if (monacoEditor.getModel()?.getValue() == null) return;
        setNextActionIndex(0);
        var sourceCode = monacoEditor.getModel()?.getValue()!!;
        setExecuting(true);
        new Promise<Action[]>((resolve, reject) => {
            let executor = new JavaScriptExecutor(sourceCode, errorHandler);
            resolve(executor.executeAll())
        }).then((result: Action[]) => {
            setActions(result);
            setCodeExecuted(true);
            setExecuting(false);
            console.log(result);
        })
        setExecutionState({variables: {}, line: 1});
        setCode(sourceCode);
    };

    let onPlayClicked = () => {
        setPlaying(!playing);
    };

    let onNextUpdated = () => {
        if (nextActionIndex > actions.length) return;
        executeNextAction();
        if (nextActionIndex < actions.length)
            setExecutionState({...executionState, line: actions[nextActionIndex].lineNumber})
    };

    let onNextClicked = () => {
        setNextActionIndex(nextActionIndex + 1);
    };

    let resetAll = () => {
        setCodeExecuted(false);
        setExecutionState({line: 0, variables: {}});
        setActions([]);
        setNextActionIndex(0);
        setPlaying(false);
        setConsoleContent("");
        setErrors([]);
        setShowError(false);
    };

    let getNextCommandText = () => {
        if (!codeExecuted) return "-";
        if (nextActionIndex >= actions.length) return "-";
        let action = actions[nextActionIndex];
        if (action instanceof AssignmentAction) {
            let assingmentAction = action as AssignmentAction;
            return "Assign " + assingmentAction.value + " to variable " + assingmentAction.varName;
        } else if (action instanceof VarDecAction) {
            let varDecAction = action as VarDecAction;
            return "Declare variable " + varDecAction.varName;
        } else if (action instanceof VarInitAction) {
            let initAction = action as VarInitAction;
            return "Initialize variable " + initAction.varName + " with " + initAction.initialValue;
        } else if (action instanceof PrintAction) {
            return "Log the message to console: " + (action as PrintAction).data;
        } else if (action instanceof EvaluateExpressionAction) {
            let expressionAction = action as EvaluateExpressionAction;
            return "Evaluating expression: " + expressionAction.expression + " = " + expressionAction.result;
        } else if (action instanceof JumpAction) {
            return "Jump to line: " + action.lineNumber;
        } else if (action instanceof UnaryIncDecAction) {
            let message = "";
            if (action.isPre)
                message += "Pre-";
            else message += "Post-";
            if (action.isInc) message += "increase";
            else message += "decrease";
            message += " variable " + action.varName;
            return message;
        }

        return action.message;
    };

    let varTable = Object.keys(executionState.variables).map((variable: any) => {
        let val = executionState.variables[variable];
        return (<tr>
            <td>{variable}</td>
            <td>{val}</td>
        </tr>);
    });

    let onCodeChanged = (value: string) => {
        setCode(value);
    };

    return (

        <Container>
            <Jumbotron style={{marginTop: 30}}>
                <h1>Codilizer!</h1>
                <p>
                    <b>Codilizer</b> is a simple code visualizer for JavaScript. It visualizes the execution of simple
                    statements. See the list at the bottom for supported statements/expressions and for more details.
                </p>
                <Button onClick={() => window.open("https://github.com/mAlaliSy/codilizer", "_blank")}
                        variant="primary">Checkout Github repo</Button>
            </Jumbotron>
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
                                    marginTop: lineHeight * (executionState.line - 0.75)
                                }}></div>
                            : null}
                        <div style={{flex: 1}}>
                            <MonacoEditor
                                language="javascript"
                                height={500}
                                options={{minimap: {enabled: false}, lineHeight, lineDecorationsWidth: 0}}
                                width={'100%'}
                                value={code}
                                onChange={onCodeChanged}
                                editorDidMount={editorDidMount}
                            />
                        </div>
                    </div>
                    <Row className={"justify-content-center"}>
                        {codeExecuted ? null :
                            <Button onClick={onExecuteClicked}
                                    className={"m-3"}>Execute</Button>
                        }
                        {executing ? <Spinner animation="grow"/> : null}
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
                                    <Button style={{width: 120}} onClick={resetAll}>Reset All</Button>
                                    {nextActionIndex >= actions.length ? null :
                                        <>
                                            <Button style={{width: 120}} disabled={playing}
                                                    onClick={onNextClicked}>Next</Button>
                                            <Button style={{width: 120}}
                                                    onClick={onPlayClicked}>{playing ? "Pause" : "Play"}</Button>
                                        </>
                                    }
                                </ButtonGroup>
                                : null
                        }
                    </Row>
                </Col>
            </Row>
            {showError ?
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    style={{
                        position: 'absolute',
                        top: 20,
                        right: 20
                    }}
                >
                    <Toast show={showError} onClose={() => setShowError(false)}>
                        <Toast.Header>
                            <strong className="mr-auto">Errors!</strong>
                        </Toast.Header>
                        <Toast.Body>
                            {
                                errors.map(err => {
                                    return <p>{err.message}</p>
                                })
                            }
                        </Toast.Body>
                    </Toast>
                </div> : null}

            <Jumbotron>
                The supported statements for now are only:
                <ul>
                    <li>Variable declaration with var keyword - only var</li>
                    <li>if statements</li>
                    <li>while loop statement</li>
                    <li>for loop statement</li>
                    <li>Nearly all expressions are supported, except for assigment operators only simple one is
                        supported ("+=","-=", "*=", ...etc is not supported)
                    </li>
                </ul>
                <hr/>
                <p>
                    Used tools:
                    <br />
                    <ul>
                        <li><a href={"https://www.antlr.org/"} target={"_blank"}>ANTLR</a> for generating the JavaScript parser</li>
                        <li><a href={"https://microsoft.github.io/monaco-editor/"} target={"_blank"}>Monaco editor</a> the
                            text editor that powers VS Code</li>
                    </ul>
                </p>

            </Jumbotron>


        </Container>

    );
}

export default App;
