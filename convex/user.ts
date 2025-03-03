import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const  createUser = mutation({
    args : {
        name : v?.string(),
        email :  v?.string(),
        picture : v?.string()
    },handler : async (ctx , args ) => {
        const exitsinguser = await ctx?.db?.query("users").filter((q)=>q.eq(q.field('email') , args?.email)).first()

        if(!exitsinguser) {
            const result  = await ctx.db.insert("users",{
                credits :3 ,
                 email: args?.email,
                 picture: args?.picture,
                 name: args?.name
            })
            return result
        }
        return exitsinguser
    }
})