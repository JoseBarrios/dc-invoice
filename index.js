const Thing = require('@josebarrios/thing')
const Intangible = require('@josebarrios/intangible')
const Multiple = require('aggregation/es6');
const EMPTY = '';
const TYPE = 'Invoice'

class Invoice extends Multiple(Thing, Intangible) {

  static get type(){ return TYPE; }

  constructor(model){
    model = model || {};
    super(model);

    this.accountId = model.accountID || model.accountId;
    this.billingPeriod = model.billingPeriod;
    this.broker = model.broker; //Person or Organization
    this.category = model.category;
    this.confirmationNumber = model.confirmationNumber;
    this.customer = model.customer; //Person or Organization
    this.minimumPaymentDue = model.minimumPaymentDue;
    this.paymentDueDate = model.paymentDueDate;
    this.paymentMethod = model.paymentMethod;
    this.paymentMethodId = model.paymentMethodId;
    this.paymentStatus = model.paymentStatus;
    this.provider = model.provider; //Person or Organization
    this.referencesOrder = model.referencesOrder;
    this.scheduledPaymentDate = model.scheduledPaymentDate;
    this.totalPaymentDue = model.totalPaymentDue;
  }

  get type(){ return TYPE; }
  set type(value) {}


  get accountId(){ return this.computed.accountID;}
  set accountId(value){
    if(!value) return;
    this.computed.accountID = value;
  }

  get accountID(){ return this.computed.accountID;}
  set accountID(value){
    if(!value) return;
    this.computed.accountID = value;
  }
  get billingPeriod(){ return this.computed.billingPeriod;}
  set billingPeriod(value){
    if(!value) return;
    this.computed.billingPeriod = value;
  }
  get broker(){ return this.computed.broker;}
  set broker(value){
    if(!value) return;
    this.computed.broker = value;
  }
  get category(){ return this.computed.category;}
  set category(value){
    if(!value) return;
    this.computed.category = value;
  }
  get confirmationNumber(){ return this.computed.confirmationNumber;}
  set confirmationNumber(value){
    if(!value) return;
    this.computed.confirmationNumber = value;
  }
  get customer(){ return this.computed.customer;}
  set customer(value){
    if(!value) return;
    this.computed.customer = value;
  }
  get minimumPaymentDue(){ return this.computed.minimumPaymentDue;}
  set minimumPaymentDue(value){
    if(!value) return;
    this.computed.minimumPaymentDue = value;
  }
  get paymentDueDate(){ return this.computed.paymentDueDate;}
  set paymentDueDate(value){
    if(!value) return;
    this.computed.paymentDueDate = value;
  }
  get paymentMethod(){ return this.computed.paymentMethod;}
  set paymentMethod(value){
    if(!value) return;
    this.computed.paymentMethod = value;
  }
  get paymentMethodId(){ return this.computed.paymentMethodId;}
  set paymentMethodId(value){
    if(!value) return;
    this.computed.paymentMethodId = value;
  }
  get paymentStatus(){ return this.computed.paymentStatus;}
  set paymentStatus(value){
    if(!value) return;
    this.computed.paymentStatus = value;
  }
  get provider(){ return this.computed.provider;}
  set provider(value){
    if(!value) return;
    this.computed.provider = value;
  }
  get referencesOrder(){ return this.computed.referencesOrder;}
  set referencesOrder(value){
    if(!value) return;
    this.computed.referencesOrder = value;
  }
  get scheduledPaymentDate(){ return this.computed.scheduledPaymentDate;}
  set scheduledPaymentDate(value){
    if(!value) return;
    this.computed.scheduledPaymentDate = value;
  }
  get totalPaymentDue(){ return this.computed.totalPaymentDue;}
  set totalPaymentDue(value){
    if(!value) return;
    this.computed.totalPaymentDue = value;
  }

  //WHEN RETURNING, WATCH OUT FOR Id vs ID
}

module.exports = Invoice;
