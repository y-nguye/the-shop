import { useReducer, useRef } from 'react';

export default function UseReducer() {
    // 1. Init state
    const initialState = {
        job: '',
        jobs: [],
    };

    // 2. Actions
    const SET_JOB = 'setJob';
    const ADD_JOB = 'addJob';
    const REMOVE_JOB = 'removeJob';

    function setJob(payload) {
        return {
            type: SET_JOB,
            payload: payload,
        };
    }

    function addJob(payload) {
        return {
            type: ADD_JOB,
            payload,
        };
    }

    function removeJob(payload) {
        return {
            type: REMOVE_JOB,
            payload,
        };
    }

    // 3.Reducer
    function reducer(state, action) {
        console.log('Action: ', action);
        switch (action.type) {
            case SET_JOB:
                return {
                    ...state,
                    job: action.payload,
                };

            case ADD_JOB:
                return {
                    ...state,
                    jobs: [...state.jobs, action.payload],
                };

            case REMOVE_JOB:
                const newJob = [...state.jobs];
                newJob.splice(action.payload, 1);
                return {
                    ...state,
                    jobs: newJob,
                };
            default:
                throw new Error();
        }
    }

    // 4. Dispatch
    // ----------------------------------------------------------------
    const [state, dispatch] = useReducer(reducer, initialState);
    const { job, jobs } = state;
    const focusRef = useRef();

    function handleSubmit() {
        dispatch(addJob(job));
        dispatch(setJob(''));
        focusRef.current.focus();
    }

    return (
        <>
            <Count />
            <div>
                <h1>Todo Use Reducer</h1>
                <input
                    ref={focusRef}
                    value={job}
                    onChange={(e) => dispatch(setJob(e.target.value))}
                />
                <button onClick={handleSubmit}>Add</button>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            {job}{' '}
                            <button onClick={() => dispatch(removeJob(index))}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

function Count() {
    // 1. initialize
    const initialState = { count: 0 };

    // 2. Actions
    const UP = 'up';
    const DOWN = 'down';
    function setUp() {
        return {
            type: UP,
        };
    }
    function setDown() {
        return {
            type: DOWN,
        };
    }

    // 3. Reducer
    function reducer(state, action) {
        console.log(state);
        switch (action.type) {
            case UP:
                return { count: state.count + 1 };

            case DOWN:
                return { count: state.count - 1 };

            default:
                throw new Error();
        }
    }

    // 4. Dispatch
    const [count, dispatch] = useReducer(reducer, initialState);
    // dispatch mang ý nghĩa gửi actions đến reducer

    return (
        <>
            <h3>Count</h3>
            <h1>{count.count}</h1>
            <button onClick={() => dispatch(setUp())}>Up</button>
            <button onClick={() => dispatch(setDown())}>Down</button>
        </>
    );
}
