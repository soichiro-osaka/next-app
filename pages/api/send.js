

export default function handler(req, res) {
    if(req.method == 'POST') {
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
        const msg = {
            to: req.body.email,
            from: 'tb_soichiro@yahoo.co.jp',
            subject: 'お問い合わせありがとうございました',
            text: 'お問い合わせを受け付けました。回答をお待ちください\n' + '>' + req.body.message,
            html: 'お問い合わせを受け付けました。回答をお待ちください\n' + '>' + req.body.message,
        };
        (async() => {
            try {
                await sgMail.send(msg);
            } catch (error) {
                console.error(error);
                if(error.response) {
                    console.error(error.response.body);
                }
            }
        })();
    }
    res.status(200);
}