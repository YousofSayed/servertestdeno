import { App, Router ,staticServe} from "https://deno.land/x/attain@1.1.2/mod.ts";

const app = new App();
app.get("/",async (req,res)=>{
await res.sendFile('./index.html')
})

app.listen(3000)
