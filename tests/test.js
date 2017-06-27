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
model.taxPercentage = '10';
//model.paymentMethod = 'VISA';
//model.paymentMethodId = '**** **** **** 4444';
//model.paymentStatus = 'Paid';
//model.provider = 'PERSON_ORG_ID'; //Person or Organization
//model.referencesOrder = ['ORD001', 'ORD002'];
//model.scheduledPaymentDate = 1234;

let Order = require('@josebarrios/order');
let orderedItem = [{description:'x', price:2000, orderQuantity:200}, {description:'y', price:1000, orderQuantity:600}]
let submodel = {};
submodel.orderedItem = orderedItem;
model.referencesOrder = new Order(submodel)
let invoice = new Invoice(model);

const key = {};


describe('Instance Methods', function() {
  it('instance.taxPercentage', function() {
    invoice.taxPercentage = 10;
    assert.equal(invoice.taxPercentage, 10);

    invoice.taxPercentage = '10';
    assert.equal(invoice.taxPercentage, 10);

    invoice.taxPercentage = '10%';
    assert.equal(invoice.taxPercentage, 10);
  });
  it('invoice.totalPaymentDue', function() {
    assert.equal(invoice.totalPaymentDue, 1100000);
  });
  it('#subTotal', function() {
    assert.equal(invoice.subTotal(), '1000000');
  });
  it('#subTotalFormatted', function() {
    assert.equal(invoice.subTotalFormatted('$'), '$10,000.00');
  });
  it('#totalFormatted', function() {
    assert.equal(invoice.totalFormatted('$'), '$11,000.00');
  });

  it('Invoice.isNumber', function() {
    assert.equal(Invoice.isNumber(1), true);
  });
});
