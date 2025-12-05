import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name:String,
    email: {type:String,unique:true,required:true},
    password: String,
    role: {type:String, default:"user"},
    refreshToken: String,
});

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);
});
userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
export const User = mongoose.model("User", userSchema);