'use strict'

var assert = require('assert');
var Invoice = require('../index.js');

var model = {};
model.accountId = 'ACCOUNT_ID';
model.billingPeriod = [1234, 1234];
model.broker = 'PERSON_ORG_ID'; //Person or Organization
model.category = 'CATEGORY';
model.confirmationNumber = 'CONFIRMATION_NUM';
model.customer = 'PERSON_ORG_ID'; //Person or Organization
model.minimumPaymentDue = 0;
model.paymentDueDate = 1234;
model.paymentMethod = 'VISA';
model.paymentMethodId = '**** **** **** 4444';
model.paymentStatus = 'Paid';
model.provider = 'PERSON_ORG_ID'; //Person or Organization
model.referencesOrder = ['ORD001', 'ORD002'];
model.scheduledPaymentDate = 1234;
model.totalPaymentDue = 1000;
let invoice = new Invoice(model);

const key = {};
key.totalPaymentDue = 1000;


describe('#constructor', function() {
  it('should ...', function() {
    let invoice = new Invoice(model);
    assert.equal(invoice.totalPaymentDue, key.totalPaymentDue);
  });
});
