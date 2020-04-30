
const initialState = {
    slider:[
        {id:1,nameArm:'Ուսուցում', nameEng:"Training", bg:'grey',color:'green',img:'https://miro.medium.com/max/6706/1*xPN1TMIK_kHoVBcQLKErYA.jpeg'},
        {id:2,nameArm:'Պրակտիկա', nameEng:"Practic", bg:'green',color:'white',img:"https://blog.herzing.ca/hs-fs/hubfs/becoming%20a%20programmer%20analyst%20lead-1.jpg?width=2121&name=becoming%20a%20programmer%20analyst%20lead-1.jpg"},
        {id:3,nameArm:'Աշխատանք', nameEng:"Work", bg:'lightblue',color:"black",img:"https://miro.medium.com/max/6000/1*d-z4KqFcIUey4l6dqcXCaQ.jpeg"},
    ],
    orerJamer : [ 
        {id:1,show:'Ցանկացած',val:0}, 
        {id:2,show:'9:00-11:00',val:9}, 
        {id:3,show:'11:00-13:00',val:11}, 
        {id:4,show:'13:00-15:00',val:13}, 
        {id:5,show:'15:00-17:00',val:15}, 
        {id:6,show:'17:00-19:00',val:17}, 
        {id:7,show:'19:00-21:00',val:19}, 
    ],
    shabatOrer :[
        {id:1,show:'Ցանկացած',val:0}, 
        {id:2,show:'Երկուշաբթի, Չորեքշաբթի, Ուրբաթ',val:1}, 
        {id:3,show:'Երեքշաբթի, Հինգշաբթի, Շաբաթ',val:2}, 
    ],
    courses : [
        {id:1,show:'Ծրագրավորում 0-ից',price:50000,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Code.svg/1200px-Code.svg.png",monts:6,attributes:[
            {id:1,name:"HTML"},
            {id:2,name:"CSS"},
            {id:3,name:"JS"},
            {id:4,name:"Jquery"},
            {id:5,name:"Vue.js"},
            {id:6,name:"PHP"},
            {id:7,name:"OOP"},
            {id:8,name:"MySQL"},
            {id:9,name:"MVC"},
            {id:10,name:"VCS"},
            {id:11,name:"Laravel"},
        ],bg:"#a0a0a1",color:"black"}, 
        {id:2,show:'JS Մասնագիտացված' ,price:50000,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",monts:6,attributes:[
            {id:1,name:"JavaScript"},
            {id:2,name:"OOP"},
            {id:3,name:"Angular"},
            {id:4,name:"React.js"},
            {id:5,name:"Node.js"},
            {id:6,name:"MongoDB"},
        ],bg:"#d6c42c",color:"black"}, 
        {id:3,show:'C# Ծրագրավորում',price:50000,img:"https://static.wixstatic.com/media/391276_47f7ece14d724ddfae8cf5eae32f9f10~mv2.png/v1/fit/w_224,h_224,al_c,q_80/file.png",monts:6,attributes:[
            {id:1,name:"C#"},
            {id:2,name:"OOP"},
            {id:3,name:".NET Framework"},
            {id:4,name:".NET Core"},
            {id:5,name:"WPF/XAML"},
            {id:6,name:"SQL"},
            {id:7,name:"Server"},
            {id:8,name:"ADO.NET"},
            {id:9,name:"ASP.NET CORE"},
        ],bg:"#82457f",color:"white"}, 
        {id:4,show:'JAVA Ծրագրավորում',price:50000,img:"https://cdn.vox-cdn.com/thumbor/WZa7uFgVuwiizcAE3dn9IcIOCcQ=/0x0:640x427/1400x1400/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/1087137/java_logo_640.jpg",monts:6,attributes:[
            {id:1,name:"Java"},
            {id:2,name:"OOP"},
            {id:3,name:"JavaFX"},
            {id:4,name:"SQL"},
            {id:5,name:"JDBC"},
            {id:6,name:"JSP"},
            {id:7,name:"SPRING"},
            {id:8,name:"ANDROID"},
        ],bg:"#4f758d",color:"white"}, 
        {id:5,show:'Python Ծրագրավորում',price:50000,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",monts:6,attributes:[
            {id:1,name:"Python"},
            {id:2,name:"OOP"},
            {id:3,name:"SQL"},
            {id:4,name:"HTML"},
            {id:5,name:"CSS"},
            {id:6,name:"JavaScript"},
            {id:7,name:"Django"},
            {id:8,name:"APIs"},

        ],bg:"#345d7e",color:"#d2a231"}, 

    ],
    formData:[
        {id:1,label:'Անուն Ազգանուն',tagType:'input',name:'name',type:"text",valid:{ required: true, maxLength: 10,minLength:2 },errText:'Անուն Ազգանուն դաշտը պարտադիր է'},
        {id:2,label:'նախընտրելի կուրսը',tagType:'select',name:'course'},
        {id:3,label:'նախընտրելի ժամեր',tagType:'select',name:'hours'},
        {id:4,label:'նախընտրելի օրեր',tagType:'select',name:'days'},
        {id:5,label:'Հեռախոս օր:՝098123456',tagType:'input',name:'tel',type:"number",valid:{ required: true},errText:'Հեռախոս դաշտը պարտադիր է'},
    ]
}

const TrainingReducer =(state = initialState, action)=> {
switch (action.type) {

    default:
        return state
}
}

export default TrainingReducer;