import nodemailer from "nodemailer";

export const sendEmail = async ({ name,email, subject, text }) => {
    const mailTransporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        port: 465,
        auth: { user: process.env.EMAIL, pass: process.env.EMAIL_APP_KEY },
    });

    const sendMail = await mailTransporter.sendMail({
        from: `"Portfolio Contact Message" ${email}`,
        to:"alielsaadany94@gmail.com",
        subject,
        text:`
        Email From :  ${email}, 
        Message: ${text}`,
    });

    if (sendMail.accepted.length > 0) return true;
    return false;
};