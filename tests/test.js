'use strict'

var assert = require('assert');
var Invoice = require('../index.js');

var model = {};
//model.accountId = 'ACCOUNT_ID';
model.billingPeriod = {start:'2017-07-01', end:'2017-07-01'};
//model.broker = 'PERSON_ORG_ID'; //Person or Organization
//model.category = 'CATEGORY';
//model.confirmationNumber = 'CONFIRMATION_NUM';
//model.customer = 'PERSON_ORG_ID'; //Person or Organization
model.minimumPaymentDue = 0;
model.paymentDueDate = '2017-07-01';
model.dateSent = '2017-07-01';
//model.paymentMethod = 'VISA';
//model.paymentMethodId = '**** **** **** 4444';
//model.paymentStatus = 'Paid';
//model.provider = 'PERSON_ORG_ID'; //Person or Organization
//model.referencesOrder = ['ORD001', 'ORD002'];
//model.scheduledPaymentDate = 1234;

let Order = require('@josebarrios/order');
let orderedItem = [{description:'x', price:20, orderQuantity:2}, {description:'y', price:10, orderQuantity:6}]
let submodel = {};
submodel.orderedItem = orderedItem;
model.referencesOrder = new Order(submodel)

//model.totalPaymentDue = 1000000;
let invoice = new Invoice(model);

const key = {};
key.totalPaymentDue = 1000;


describe('Instance Methods', function() {
  it('#total', function() {
    assert.equal(invoice.totalFormatted, '$10,000.00');
  });
  it('Invoice.isNumber', function() {
    assert.equal(Invoice.isNumber(1), true);
  });
  it('invoice.totalPaymentDue', function() {
    assert.equal(invoice.totalPaymentDue, 100);
  });
});
