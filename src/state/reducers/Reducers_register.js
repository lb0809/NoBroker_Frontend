
const init_state = {
    user: {
        username: '',
        email: '',
        password: '',
        posted_property: [],
        message: []
    }
}
let r = []

const fetchdata = async () => {
    // let resp = await fetch(process.env.REACT_APP_BACKEND_URL+'/fetchall', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   });
    //   let data=await resp.json()
    const url = `${process.env.REACT_APP_BACKEND_URL}/fetchall`;

    let resp = await fetch(url);
    r = await resp.json()
    console.log(r)
    return r[0].c

}

const initial = fetchdata()
console.log(fetchdata())
const reducer = (state = r, action) => {
    switch (action.type) {
        case 'register':
            state = state.concat(action.payload)
            return state

        case 'postprop':
            console.log(action.payload.i)
            state[action.payload.i].posted_property = state[action.payload.i].posted_property.concat(action.payload.property)
            return state

        case 'sendmsg':
            state[action.payload.to].message = state[action.payload.to].message.concat(action.payload)
            return state
        case 'update':
            state[action.payload.i].email = action.payload.email
            state[action.payload.i].password = action.payload.password
            return state
        case 'delete':
            let s = []
            for (let i = 0; i < state.length; i++) {
                if (i !== action.payload) {
                    s = s.concat(state[i])
                }
            }
            return s
        default:
            return state;
    }
}
export default reducer