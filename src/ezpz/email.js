import {action} from "easy-peasy"

export default {
    current: {

    },
    setcurrent: action((state, {Name, Title}) => {
        state.current = {name: Name, title: Title}
    }),
}