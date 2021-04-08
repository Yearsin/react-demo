const defaultState = {
    pages: [],
    activeKey: null,
    action: null,
    pageEnum: {}
};

export default (state = defaultState, action) => {
    switch(action.type){
        case "PAGES_ADD":
            let newState = { ...state };
            newState.pages = action.pages;
            newState.activeKey = action.activeKey;
            newState.action = action;
            return newState;
            break;
        case "INIT_PAGE":
            let state2 = { ...state };
            state2.pageEnum = action.pageEnum;
            return state2;
            break;
        }
    return state;
};