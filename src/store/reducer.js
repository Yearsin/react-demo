const defaultState = {
    activeKey: null,
    action: null,
    pageEnum: {}
};

export default (state = defaultState, data) => {
    switch(data.type){
        case "PAGES_ADD":
            let newState = { ...state };
            newState.activeKey = data.activeKey;
            newState.action = data;
            return newState;
            break;
        case "INIT_PAGE":
            let state2 = { ...state };
            state2.pageEnum = data.pageEnum;
            return state2;
            break;
        }
    return state;
};