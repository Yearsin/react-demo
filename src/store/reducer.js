const defaultState = {
    pages: [],
    activeKey: null,
    action: null
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
    }
    return state;
};