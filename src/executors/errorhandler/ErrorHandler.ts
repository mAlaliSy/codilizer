import Error from './Error'

export default interface ErrorHandler {
    handleError(error: Error): void;
}