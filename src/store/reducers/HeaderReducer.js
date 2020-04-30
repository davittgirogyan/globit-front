import { HEADER_EDIT_HEADER_MODE_MOBILE_MODE, 
    HEADER_EDIT_HEADER_ACTIVE_MODE, 
    HEADER_EDIT_HEADER_MOBILE_MENU_OPENED,
    HEADER_EDITHEADER_BACKGROUND_VIDEO_MODE,
    HEADER_EDIT_HEADER_ANIMATION_SECONDS,
    HEADER_EDIT_HEADER_ANIMATION_DELAY 
} from "../actions/Actions";



const initialState = {
    
    headerMenus:[
        {nameEng:'About',nameArm:"Մեր մասին",href:"/about"},
        {nameEng:'Services',nameArm:"Ծառայություններ",href:"/services"},
        {nameEng:'Clients',nameArm:"Հաճախորդներ",href:"/clients"},
        {nameEng:'Works',nameArm:"Աշխատանքներ",href:"/works"},
        {nameEng:'Contact',nameArm:"Կապ մեզ հետ",href:"/contact"},
        {nameEng:'Training center',nameArm:"Ուսումնական կենտրոն",href:"/training"},
        

    ],
    headerActive:true,
    headerMobile:false,
    headerMobileMenuOpened:false,
    backgroundVideoMode:true,
    headerAnimationSeconds:2,
    headerAnimationDelay:6

}

const HeaderReducer =(state = initialState, action)=> {
switch (action.type) {
    case HEADER_EDIT_HEADER_MODE_MOBILE_MODE:
        return {
            ...state,
            headerMobile:action.mode
        }
    case HEADER_EDIT_HEADER_ACTIVE_MODE:
        return{
            ...state,
            headerActive:action.mode
        }
    case HEADER_EDIT_HEADER_MOBILE_MENU_OPENED:
        return{
            ...state,
            headerMobileMenuOpened:!state.headerMobileMenuOpened
        }
    case HEADER_EDITHEADER_BACKGROUND_VIDEO_MODE:
        return{
            ...state,
            backgroundVideoMode:action.mode
        }
    case HEADER_EDIT_HEADER_ANIMATION_SECONDS:
        return{
            ...state,
            headerAnimationSeconds:2
        }
    case HEADER_EDIT_HEADER_ANIMATION_DELAY:
        return{
            ...state,
            headerAnimationDelay:0
        }
    default:
        return state
}
}

export const editHeaderModeMobileMode = (mode)=>({type:HEADER_EDIT_HEADER_MODE_MOBILE_MODE,mode});
export const editHeaderActiveMode = (mode)=>({type:HEADER_EDIT_HEADER_ACTIVE_MODE,mode});
export const editHeaderMobileMenuOpened = ()=>({type:HEADER_EDIT_HEADER_MOBILE_MENU_OPENED});
export const editHeaderBackgroundVideoMode = (mode)=>({type:HEADER_EDITHEADER_BACKGROUND_VIDEO_MODE,mode});
export const editHeaderAnimationSeconds = ()=>({type:HEADER_EDIT_HEADER_ANIMATION_SECONDS});
export const editHeaderAnimationDelay = ()=>({type:HEADER_EDIT_HEADER_ANIMATION_DELAY})

export default HeaderReducer;