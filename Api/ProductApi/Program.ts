import express, {Request,Response,NextFunction} from "express";
import bodyParser from "body-parser";

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3002,()=>console.log("Product Api is Working"));

app.get("/api/product/id/:id",(request:Request,response:Response,next:NextFunction)=>{

    const id:number=request.params;
    console.log(id);
    response.status(200).json(id);
});

app.post("/api/product/create",(request:Request,response:Response)=>{

    const { name}= request.body;

    let productName:string=`${name}`;

    response.status(200).json(productName);

});
