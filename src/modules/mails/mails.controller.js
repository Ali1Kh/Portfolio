import { sendEmail } from "../../utils/sendMail.js";

export const sendMail = (req, res, next) => {
    let { name, email, subject, text } = req.body;
    let mailSent = sendEmail({ name, email, subject, text });
    if (!mailSent) {
        next(new Error("Failed To Send Mail"))
    }
    return res.json({ success: true , message:"Email Sent Successfully"})
}