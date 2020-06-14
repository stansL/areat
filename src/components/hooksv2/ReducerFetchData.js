import React, { useReducer, useEffect } from 'react'
import axios from 'axios';

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_SUCCESS";
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SUCCESS: {
            return {
                loading: false,
                error: '',
                post: action.data
            }
        }

        case FETCH_FAILURE: {
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {}
            }
        }
        default: {
            return state;
        }
    }

}

function ReducerFetchData() {


    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/11`)
            .then(response => {
                dispatch({ type: FETCH_SUCCESS, data: response.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_FAILURE, data: err })

            })
        // return () => {
        //     cleanup
        // }
    }, [])
    const { loading, error, post } = state;
    return (

        <div>
            {loading ? 'Loading......!' : post.title}
            {error ? error : null}
        </div>
    )
}

export default ReducerFetchData
