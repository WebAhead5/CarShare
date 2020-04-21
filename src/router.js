const { LoginHandler,
UserHandler,showCarHandler,addCarHandler,PublicHandler,errorHandler}=require('./handler.js')

const router=(request,response)=>{

    var Url=request.url;
    if(Url==='/')
    {
        LoginHandler(response);

    }
    else if(Url==='/User')
    {
        UserHandler(response)
    }
    else if(Url==='/showCar')
    {
        showCarHandler(response)
 
    }
    else if(Url==='/addCar')
    {
        addCarHandler(response);
    }
    else if(Url.includes('public'))
    {
      PublicHandler(Url,response);

    }
    else 
    {
        errorHandler(response);
    }


}


module.exports=router;

