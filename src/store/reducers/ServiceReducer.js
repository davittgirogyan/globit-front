
let initialState = {
    services:[
        {id:1,header:'WEB DEVELOPMENT',text:"Our team utilizes web development technologies that are both proven and practical. With the options available in the market today, we can help you determine what is best for your needs. Our mission is to make the web development process easier for you: we help our clients choose the right tools for their projects.",img:"https://i.ya-webdesign.com/images/code-vector-5.png"},
        {id:2,header:'WEB DESIGN',text:"Our web design services can help rediscover your business’s image in the Internet marketplace. The blending of style and technology we offer, in conjunction with our expertise enables your business to succeed on the Web. Our goal is to make you stand out with style and be remembered.",img:"https://i-am-black-business-prod.nyc3.digitaloceanspaces.com/business/default/business-services-graphic-design.png"},
        {id:3,header:'E-COMMERCE',text:"We will create and/or optimize your E-Commerce site to help you increase your online revenue and capture your target market’s attention. An eCommerce website instantly expands your customer base beyond the limits of your physical location. We work with the most appropriate technology.",img:"https://image.flaticon.com/icons/png/512/34/34627.png"},
        {id:4,header:'QA TESTING',text:"Our team of engineers is ready to prepare test documentation in line with the international standards, deliver detailed reports and functional testing processes on demand. Carefully considering customer requirements, we develop and propose a relevant testing strategy to ensure deliverables in line with expectations.",img:"https://miro.medium.com/max/4276/1*_hH7xOjymN-1iX1X0niOZQ.jpeg"},
        {id:5,header:'COURSES & TRAININGS',text:"Our mission is to introduce students with the latest IT technologies emphasises practic skills. We provide complete Web Development trainings after which you can catch an opportunity to work with our awesome team and get back your fee. This is the unique chance to get credit for your teaching. For more info check here.",img:"https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/training-512.png"},
        {id:6,header:'SEO SERVICES',text:"Through careful Keyword research and white-hat practices we can help you achieve high rankings in the major search engines. We are transparent about our organic Search Engine Optimization (SEO) methods, and have proven success at raising search engine rankings and increasing traffic (and business) to your site.",img:"https://cdn.pixabay.com/photo/2019/10/11/20/13/seo-4542674_1280.png"}
    ]
}

const SerivceReducer = (state=initialState,action)=>{
    switch(action.type){

        default: return state
    }

}


export default SerivceReducer;