import { App, Router ,staticServe} from "https://deno.land/x/attain@1.1.2/mod.ts";

const app = new App();

app.get("/",(req,res)=>{
res.send("wlcome in deno deploy 'Yousef'")
})

app.listen(3000)
