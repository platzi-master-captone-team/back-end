const EmailResource = module.exports;

const SibApiV3Sdk = require('sib-api-v3-sdk');
const assert = require('assert');

const { EMAILER_API_KEY } = process.env;

assert(EMAILER_API_KEY, 'EMAILER_API_KEY must be provided');

let defaultClient = SibApiV3Sdk.ApiClient.instance;

let apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = EMAILER_API_KEY;

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

EmailResource.sendEmail = async (emailLabel) => {
    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();


    sendSmtpEmail.subject = "";
    sendSmtpEmail.htmlContent = "";
    sendSmtpEmail.sender = "";
    sendSmtpEmail.to = ""
    sendSmtpEmail.params = {};

    try {
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail)
        console.log('API Called successfully. Returned data: ' + JSON.stringify(data))
    } catch (error) {
        console.log(`[send_email][error]: ${error}`);
    }
}
}
