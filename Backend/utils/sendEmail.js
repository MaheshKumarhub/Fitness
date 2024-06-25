import nodeMailer from "nodemailer"

export const sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    service: process.env.SMTP_SERVICE,
    auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        // Adjust TLS options as per server requirements
        ciphers: "SSLv3",
        minVersion: "TLSv1.2",
    },
    })

    const mailOption = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: `${options.message}\n\nEmail of User Who Sent The Message: ${options.userEmail}`,
    }
    await transporter.sendMail(mailOption)
}

export default sendEmail;