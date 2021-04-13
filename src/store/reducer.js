const defaultState = {
    // pages: [],
    activeKey: null,
    action: null,
    pageEnum: {}
};

export default (state = defaultState, data) => {
    switch(data.type){
        case "PAGES_ADD":
            let newState = { ...state };
            // newState.pages = data.pages;
            // console.log(data);
            newState.activeKey = data.activeKey;
            newState.action = data;
            return newState;
            break;
        // case "SELECT_PAGES":
        //     let newState = { ...state };
        //     newState.pages = action.pages;
        //     newState.activeKey = action.activeKey;
        //     newState.action = action;
        //     return newState;
        //     break;
        case "INIT_PAGE":
            let state2 = { ...state };
            state2.pageEnum = data.pageEnum;
            return state2;
            break;
        }
    return state;
};