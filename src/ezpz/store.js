import React from "react"
import email from "../ezpz/email"
import { createStore } from "easy-peasy"

const model = {
    email
}

const store = createStore(model)

export default store