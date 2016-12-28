export const ERROR_RESPONSE = 'error_response';

function errorHandler(error) {
    return {
        type: ERROR_RESPONSE,
        payload: error
    };
}

export default errorHandler;