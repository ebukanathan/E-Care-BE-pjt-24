const { BASE_URL } = require('../src/core/config');

exports.resetPassword = (token) => `
        <h2>Please use the token to reset your password</h2>  
        <p>${token}</p>                 
    `;

exports.adminAccountCreationMessage = (token) => `
        <h2>Please click the link below to reset your password.</h2>                
        <h2>You need to reset your password to access your newly created admin account.</h2>                
        <p>${BASE_URL}/resetPassword/${token}</p>
    `;

exports.activateAccount = (token, id) => `
        <h2>Please click the link below to activate your account.</h2>     
        <p>${BASE_URL}/api/v1/doctor/activate-account/${id}/${token}</p>   
        <p><a href='${BASE_URL}/api/v1/doctor/activate-account/${id}/${token}}'>Activate Account</a></p>                     
    `;

exports.activatePatient = (token, id) => `
    <h2>Please click the link below to activate your account.</h2>     
    <p>${BASE_URL}/api/v1/patient/activate-patient-account/${id}/${token}</p>   
    <p><a href='${BASE_URL}/api/v1/doctor/activate-account/${id}/${token}}'>Activate Account</a></p>                     
`;

exports.activateKitchen = (token, id) => `
        <h2>Please click the link below to activate your account.</h2>     
        <p>${BASE_URL}/kitchen/activate-kitchen/${id}/${token}</p>   
        <p><a href='${BASE_URL}/kitchen/activate-kitchen/${id}/${token}'>Activate Account</a></p> 
`;

exports.otpMessage = (otp) => `
        <h2>Kindly use the OTP below to complete your registration</h2>                
        <h2>${otp}</h2>`;
