const Intangible = require('@josebarrios/intangible')
const Multiple = require('aggregation/es6');
const EMPTY = '';
const TYPE = 'Invoice'

class Invoice extends Intangible {

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
    //NOT STANDARD (dateSent)
    this.dateSent = model.dateSent; //Person or Organization
    this.minimumPaymentDue = model.minimumPaymentDue;
    this.paymentDueDate = model.paymentDueDate;
    this.paymentMethod = model.paymentMethod;
    this.paymentMethodId = model.paymentMethodId;
    this.paymentStatus = model.paymentStatus;
    this.provider = model.provider; //Person or Organization
    this.referencesOrder = model.referencesOrder;
    this.scheduledPaymentDate = model.scheduledPaymentDate;
    this.totalPaymentDue = model.totalPaymentDue;

    //OTHERS
    this.identifier = model.identifier || `${Math.floor(Date.now()/1000)}`;
  }

  get type(){ return TYPE; }
  set type(value) {}


  get accountId(){ return this.computed.accountID;}
  set accountId(value){
    if(Intangible.isEmpty(value)){ this.computed.accountID = EMPTY}
    this.computed.accountID = value;
  }

  get accountID(){ return this.computed.accountID;}
  set accountID(value){
    if(Intangible.isEmpty(value)){ this.computed.accountID = EMPTY}
    this.computed.accountID = value;
  }
  get billingPeriod(){
    let period = {};
    period.start = this.computed.billingPeriod.start;
    period.end = this.computed.billingPeriod.end;
    return period;
  }
  set billingPeriod(period){
    if(Intangible.isPlainObject(period)){
      this.computed.billingPeriod =  this.computed.billingPeriod || {};

      if(Intangible.isEmpty(period.start)){
        this.computed.billingPeriod.start = EMPTY;
      } else if(Intangible.isString(period.start)){
        this.computed.billingPeriod.start = period.start;
      } else{ Intangible.logError(this.type+' billingPeriod (start) must be a number'); }

      if(Intangible.isEmpty(period.end)){
        this.computed.billingPeriod.end = EMPTY;
      } else if(Intangible.isString(period.end)){
        this.computed.billingPeriod.end = period.end;
      } else{ Intangible.logError(this.type+' billingPeriod (end) must be a number'); }
    }
    else {
        this.computed.billingPeriod =  this.computed.billingPeriod || {};
        this.computed.billingPeriod.start = EMPTY;
        this.computed.billingPeriod.end = EMPTY;
    }
  }
  get broker(){ return this.computed.broker;}
  set broker(value){
    if(Intangible.isEmpty(value)){ this.computed.broker = EMPTY}
    else if(Intangible.isString(value)){ this.computed.broker = value }
    else if(Intangible.isObject(value)){ this.computed.broker = value }
    else{ Intangible.logError(this.type+' broker must be string or object'); }
  }
  get category(){ return this.computed.category;}
  set category(value){
    if(Intangible.isEmpty(value)){ this.computed.category = EMPTY}
    this.computed.category = value;
  }
  get confirmationNumber(){ return this.computed.confirmationNumber;}
  set confirmationNumber(value){
    if(Intangible.isEmpty(value)){ this.computed.confirmationNumber = EMPTY}
    this.computed.confirmationNumber = value;
  }
  get customer(){ return this.computed.customer;}
  set customer(value){
    if(Intangible.isEmpty(value)){ this.computed.customer = EMPTY}
    else if(Intangible.isString(value)){ this.computed.customer = value }
    else if(Intangible.isObject(value)){ this.computed.customer = value }
    else{ Intangible.logError(this.type+' customer must be string or object'); }
  }
  get dateSent(){ return this.computed.dateSent;}
  set dateSent(value){
    if(Intangible.isEmpty(value)){ this.computed.dateSent = EMPTY}
    else if(Intangible.isNumber(value)){ this.computed.dateSent = value }
    else if(Intangible.isString(value)){ this.computed.dateSent = value }
    else{ Intangible.logError(this.type+' dateSent must be a number, or string'); }
  }

  get minimumPaymentDue(){ return this.computed.minimumPaymentDue;}
  set minimumPaymentDue(value){
    if(Intangible.isEmpty(value)){ this.computed.minimumPaymentDue = EMPTY}
    this.computed.minimumPaymentDue = value;
  }
  get paymentDueDate(){ return this.computed.paymentDueDate;}
  set paymentDueDate(value){
    if(Intangible.isEmpty(value)){ this.computed.paymentDueDate = EMPTY}
    else if(Intangible.isString(value)){ this.computed.paymentDueDate = value }
    else{ Intangible.logError(this.type+' paymentDueDate must be a string'); }
  }
  get paymentMethod(){ return this.computed.paymentMethod;}
  set paymentMethod(value){
    if(Intangible.isEmpty(value)){ this.computed.paymentMethod = EMPTY}
    this.computed.paymentMethod = value;
  }
  get paymentMethodId(){ return this.computed.paymentMethodId;}
  set paymentMethodId(value){
    if(Intangible.isEmpty(value)){ this.computed.paymentMethodId = EMPTY}
    this.computed.paymentMethodId = value;
  }
  get paymentStatus(){ return this.computed.paymentStatus;}
  set paymentStatus(value){
    if(Intangible.isEmpty(value)){ this.computed.paymentStatus = EMPTY}
    this.computed.paymentStatus = value;
  }
  get provider(){ return this.computed.provider;}
  set provider(value){
    if(Intangible.isEmpty(value)){ this.computed.provider = EMPTY}
    else if(Intangible.isString(value)){ this.computed.provider = value }
    else if(Intangible.isObject(value)){ this.computed.provider = value }
    else{ Intangible.logError(this.type+' provider must be string or object'); }
  }
  get referencesOrder(){ return this.computed.referencesOrder;}
  set referencesOrder(value){
    if(Intangible.isEmpty(value)){ this.computed.referencesOrder = EMPTY}
    this.computed.referencesOrder = value;
  }
  get scheduledPaymentDate(){ return this.computed.scheduledPaymentDate;}
  set scheduledPaymentDate(value){
    if(Intangible.isEmpty(value)){ this.computed.scheduledPaymentDate = EMPTY}
    else if(Intangible.isString(value)){ this.computed.scheduledPaymentDate = value }
    else{ Intangible.logError(this.type+' scheduledPaymentDate must be a string'); }
  }
  set totalPaymentDue(value){}
  get totalPaymentDue(){
    let total =0;
    this.referencesOrder.orderedItem.forEach((item, index) => {
      total += (item.price * item.orderQuantity);
    })
    return total;
  }

  //WHEN RETURNING, WATCH OUT FOR Id vs ID
  set formattedTotal(value){};
  get formattedTotal(){
    let amount = `$${(this.computed.totalPaymentDue/100).toFixed(2)}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); ;
  }

}

module.exports = Invoice;
