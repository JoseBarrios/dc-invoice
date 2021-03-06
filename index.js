const Intangible = require('dc-intangible')
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
    this.minimumPaymentDue = model.minimumPaymentDue;
    this.paymentDueDate = model.paymentDueDate;
    this.paymentMethod = model.paymentMethod;
    this.paymentMethodId = model.paymentMethodId;
    this.paymentStatus = model.paymentStatus;
    this.provider = model.provider; //Person or Organization
    this.referencesOrder = model.referencesOrder;
    this.scheduledPaymentDate = model.scheduledPaymentDate;
    this.totalPaymentDue = model.totalPaymentDue;

    //INHERETED
    this.identifier = model.identifier || `${Math.floor(Date.now()/1000)}`;

    //NOT STANDARD (dateSent)
    this.dateSent = model.dateSent; //Person or Organization
    this.taxPercentage = model.taxPercentage;
  }

  get type(){ return TYPE; }
  set type(value) {}


  get accountId(){ return this.model.accountID;}
  set accountId(value){
    if(Intangible.isEmpty(value)){ this.model.accountID = EMPTY}
    this.model.accountID = value;
  }

  get accountID(){ return this.model.accountID;}
  set accountID(value){
    if(Intangible.isEmpty(value)){ this.model.accountID = EMPTY}
    this.model.accountID = value;
  }
  get billingPeriod(){
    let period = {};
    period.start = this.model.billingPeriod.start;
    period.end = this.model.billingPeriod.end;
    return period;
  }
  set billingPeriod(period){
    if(Intangible.isPlainObject(period)){
      this.model.billingPeriod =  this.model.billingPeriod || {};

      if(Intangible.isEmpty(period.start)){
        this.model.billingPeriod.start = EMPTY;
      } else if(Intangible.isString(period.start)){
        this.model.billingPeriod.start = period.start;
      } else{ Intangible.logError(this.type+' billingPeriod (start) must be a number'); }

      if(Intangible.isEmpty(period.end)){
        this.model.billingPeriod.end = EMPTY;
      } else if(Intangible.isString(period.end)){
        this.model.billingPeriod.end = period.end;
      } else{ Intangible.logError(this.type+' billingPeriod (end) must be a number'); }
    }
    else {
        this.model.billingPeriod =  this.model.billingPeriod || {};
        this.model.billingPeriod.start = EMPTY;
        this.model.billingPeriod.end = EMPTY;
    }
  }
  get broker(){ return this.model.broker;}
  set broker(value){
    if(Intangible.isEmpty(value)){ this.model.broker = EMPTY}
    else if(Intangible.isString(value)){ this.model.broker = value }
    else if(Intangible.isObject(value)){ this.model.broker = value }
    else{ Intangible.logError(this.type+' broker must be string or object'); }
  }
  get category(){ return this.model.category;}
  set category(value){
    if(Intangible.isEmpty(value)){ this.model.category = EMPTY}
    this.model.category = value;
  }
  get confirmationNumber(){ return this.model.confirmationNumber;}
  set confirmationNumber(value){
    if(Intangible.isEmpty(value)){ this.model.confirmationNumber = EMPTY}
    this.model.confirmationNumber = value;
  }
  get customer(){ return this.model.customer;}
  set customer(value){
    if(Intangible.isEmpty(value)){ this.model.customer = EMPTY}
    else if(Intangible.isString(value)){ this.model.customer = value }
    else if(Intangible.isObject(value)){ this.model.customer = value }
    else{ Intangible.logError(this.type+' customer must be string or object'); }
  }
  get minimumPaymentDue(){ return this.model.minimumPaymentDue;}
  set minimumPaymentDue(value){
    if(Intangible.isEmpty(value)){ this.model.minimumPaymentDue = EMPTY}
    this.model.minimumPaymentDue = value;
  }
  get paymentDueDate(){ return this.model.paymentDueDate;}
  set paymentDueDate(value){
    if(Intangible.isEmpty(value)){ this.model.paymentDueDate = EMPTY}
    else if(Intangible.isString(value)){ this.model.paymentDueDate = value }
    else{ Intangible.logError(this.type+' paymentDueDate must be a string'); }
  }
  get paymentMethod(){ return this.model.paymentMethod;}
  set paymentMethod(value){
    if(Intangible.isEmpty(value)){ this.model.paymentMethod = EMPTY}
    this.model.paymentMethod = value;
  }
  get paymentMethodId(){ return this.model.paymentMethodId;}
  set paymentMethodId(value){
    if(Intangible.isEmpty(value)){ this.model.paymentMethodId = EMPTY}
    this.model.paymentMethodId = value;
  }
  get paymentStatus(){ return this.model.paymentStatus;}
  set paymentStatus(value){
    if(Intangible.isEmpty(value)){ this.model.paymentStatus = EMPTY}
    this.model.paymentStatus = value;
  }
  get provider(){ return this.model.provider;}
  set provider(value){
    if(Intangible.isEmpty(value)){ this.model.provider = EMPTY}
    else if(Intangible.isString(value)){ this.model.provider = value }
    else if(Intangible.isObject(value)){ this.model.provider = value }
    else{ Intangible.logError(this.type+' provider must be string or object'); }
  }
  get referencesOrder(){ return this.model.referencesOrder;}
  set referencesOrder(value){
    if(Intangible.isEmpty(value)){ this.model.referencesOrder = EMPTY}
    this.model.referencesOrder = value;
  }
  get scheduledPaymentDate(){ return this.model.scheduledPaymentDate;}
  set scheduledPaymentDate(value){
    if(Intangible.isEmpty(value)){ this.model.scheduledPaymentDate = EMPTY}
    else if(Intangible.isString(value)){ this.model.scheduledPaymentDate = value }
    else{ Intangible.logError(this.type+' scheduledPaymentDate must be a string'); }
  }
  set totalPaymentDue(value){}
  get totalPaymentDue(){
    let total =0;
    this.referencesOrder.orderedItem.forEach((item, index) => {
      total += (item.price * item.orderQuantity);
    })
    let tax = (total/100) * this.taxPercentage;
    total += tax;
    return total;
  }


  ////////////////////
  //
  // NOT STANDARD
  //
  /////////////////////

  get dateSent(){ return this.model.dateSent;}
  set dateSent(value){
    if(Intangible.isEmpty(value)){ this.model.dateSent = EMPTY}
    else if(Intangible.isNumber(value)){ this.model.dateSent = value }
    else if(Intangible.isString(value)){ this.model.dateSent = value }
    else{ Intangible.logError(this.type+' dateSent must be a number, or string'); }
  }

  get taxPercentage(){ return this.model.taxPercentage;}
  set taxPercentage(value){
    this.model.taxPercentage = parseInt(value);
  }

  ////////////////////////////
  //
  // INSTANCE METHODS
  //
  /////////////////////////////

  taxAmount(){
    let total =0;
    this.referencesOrder.orderedItem.forEach((item, index) => {
      total += (item.price * item.orderQuantity);
    })
    return (total/100) * this.taxPercentage;
  }


  subTotal(){
    let subTotal =0;
    this.referencesOrder.orderedItem.forEach((item, index) => {
      subTotal += (item.price * item.orderQuantity);
    })
    return subTotal;
  }

  taxAmountFormatted(symbol, currency){
    let amount = `${symbol?symbol:''}${(this.taxAmount()/100).toFixed(2)}${currency? currency : ''}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); ;
  }


  subTotalFormatted(symbol, currency){
    let amount = `${symbol?symbol:''}${(this.subTotal()/100).toFixed(2)}${currency? currency : ''}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); ;
  }


  totalFormatted(symbol, currency){
    let amount = `${symbol?symbol:''}${(this.totalPaymentDue/100).toFixed(2)}${currency? currency : ''}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"); ;
  }

  //WHEN RETURNING, WATCH OUT FOR Id vs ID
}

module.exports = Invoice;
