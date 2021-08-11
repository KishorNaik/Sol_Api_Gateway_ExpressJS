import express, {Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3001,()=>console.log("Customer Api is Working"));

app.get("/api/customer/id/:id",(request:Request,response:Response,next:NextFunction)=>{

    const id:number=request.params;
    console.log(id);
    response.status(200).json(id);
});

app.post("/api/customer/create",(request:Request,response:Response)=>{

    const { firstName, lastName}= request.body;

    let fullName:string=`${firstName} ${lastName}`;

    response.status(200).json(fullName);

});
