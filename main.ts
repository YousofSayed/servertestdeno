import { App, Router ,staticServe} from "https://deno.land/x/attain@1.1.2/mod.ts";

const app = new App();
console.log(Deno.readTextFileSync('./index.html'))
app.get("/",(req,res)=>{
res.sendFile("index.html")
})

app.listen(3000)
