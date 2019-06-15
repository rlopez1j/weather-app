import { ActionReducer, Action } from '@ngrx/store'
import { SUBMIT, ButtonSubmit } from '../actions/submit'

export function submitReducer(state: number = 1, action: ButtonSubmit){
    switch (action.type){
        case SUBMIT:
            return action.zip_code
        default:
            return state
    }
}

