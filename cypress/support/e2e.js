// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './API1GetAllProductsList'
import './API2POSTToAllProductsList'
import './API3GetAllBrandsList'
import './API4PUTToAllBrandsList'
import './API5POSTToSearchProduct'
import './API6POSTToSearchProductWithoutSearch_productParameter'
import './API7POSTToVerifyLoginWithValidDetails'
import './API8POSTToVerifyLoginWIthoutEmailParameter'
import './API9DELETEToVerifyLogin'
import './API10POSTToVerifyLoginWithInvalidDetails'
import './API11POSTToCreateRegisterUserAccount'
import './API12DELETEMETHODToDeleteUserAccount'
import './API13PUTMETHODToUpdateUserAccount'
import './API14GETUserAccountDetailByEmail'