// @author Dmitry Patsura <talk@dmtry.me> https://github.com/ovr
// @flow

import {
    PROFILE_REPOSITORIES_REQUEST,
    PROFILE_REPOSITORIES_REQUEST_SUCCESS,
    PROFILE_REPOSITORIES_REQUEST_FAIL,
    //
    PROFILE_REPOSITORIES_MORE_REQUEST,
    PROFILE_REPOSITORIES_MORE_REQUEST_SUCCESS,
    PROFILE_REPOSITORIES_MORE_REQUEST_FAIL
} from 'constants';

// import flow types
import type { RepositoryEntity } from 'github-flow-js';

export type ProfileRepositoriesState = {
    repositories: Array<RepositoryEntity>,
    // sort by field
    sort: "created" | "updated" | "pushed" | "full_name",
    // first list fetch
    loading: boolean,
    // more repositories fetching
    moreLoading: boolean,
    // current page,
    page: 1,
    hasMore: boolean,
    error: Object|string|null,
}

const initialState: ProfileRepositoriesState = {
    repositories: [],
    sort: 'updated',
    loading: false,
    moreLoading: false,
    page: 1,
    hasMore: false,
    error: null,
};

export default (state: ProfileRepositoriesState = initialState, action: Object): ProfileRepositoriesState => {
    switch (action.type) {
        case PROFILE_REPOSITORIES_REQUEST:
            return {
                ...state,
                repositories: [],
                loading: true,
                error: null
            };
        case PROFILE_REPOSITORIES_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                hasMore: action.payload.length === 50,
                repositories: action.payload
            };
        case PROFILE_REPOSITORIES_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: 'Unknown error @todo'
            };
        //
        case PROFILE_REPOSITORIES_MORE_REQUEST:
            return {
                ...state,
                moreLoading: true
            };
        case PROFILE_REPOSITORIES_MORE_REQUEST_SUCCESS:
            return {
                ...state,
                moreLoading: false,
                page: action.payload.page,
                hasMore: action.payload.repositories.length === 50,
                repositories: state.repositories.concat(action.payload.repositories)
            };
        case PROFILE_REPOSITORIES_MORE_REQUEST_FAIL:
            return {
                ...state,
                moreLoading: false
            };
        //
        default:
            return state;
    }
};
