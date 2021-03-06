const initialState:any = {
    account: {
        account: {}
    },
    userInfo: {
        user_id: "",
        user_name: "",
        user_level: 1,
        user_role: 1,
        user_nickname: "",
        user_fullname: "",
        user_language: "",
        user_email: [],
        user_phonenumber: "",
        user_picture: "",
        user_pronouns: "",
        user_title: "",
        user_biography: "",
        user_links: [],
        user_timezone: "",
        user_lastlogin: "",
        user_receiveinformation: true,
    }
};

export default function (state = initialState, action: any) {
    switch (action.type) {
        case 'setAccount': {
            return {
                ...state,
                account: action.account
            };
        }
        case 'setUserInfo': {
            return {
                ...state,
                userInfo: action.userInfo
            };
        }
        default:
            return state;
    }
}