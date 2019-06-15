import { Action } from '@ngrx/store'

export const SUBMIT = 'BUTTON_SUBMIT'

export class ButtonSubmit implements Action {
    type = SUBMIT

    constructor(public zip_code: String){}
}