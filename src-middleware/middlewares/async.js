export default function({ dispatch }) {
    return next => action => {
        if(!action.payload || !action.payload.then) {
            return next(action);
        }

        // Make sure action's primise resolves
        action.payload
            .then(function(response) {
                const newAction = { ...action, payload: response }
                dispatch(newAction);
            });
    }
}