class Invoice {

  constructor(model){
    model = model || {};
    this.model = model;
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

  get accountId(){ return this.model.accountID;}
  set accountId(value){
    if(!value) return;
    this.model.accountID = value;
  }

  get accountID(){ return this.model.accountID;}
  set accountID(value){
    if(!value) return;
    this.model.accountID = value;
  }
  get billingPeriod(){ return this.model.billingPeriod;}
  set billingPeriod(value){
    if(!value) return;
    this.model.billingPeriod = value;
  }
  get booker(){ return this.model.booker;}
  set broker(value){
    if(!value) return;
    this.model.broker = value;
  }
  get category(){ return this.model.category;}
  set category(value){
    if(!value) return;
    this.model.category = value;
  }
  get confirmationNumber(){ return this.model.confirmationNumber;}
  set confirmationNumber(value){
    if(!value) return;
    this.model.confirmationNumber = value;
  }
  get customer(){ return this.model.customer;}
  set customer(value){
    if(!value) return;
    this.model.customer = value;
  }
  get minimumPaymentDue(){ return this.model.minimumPaymentDue;}
  set minimumPaymentDue(value){
    if(!value) return;
    this.model.minimumPaymentDue = value;
  }
  get paymentDueDate(){ return this.model.paymentDueDate;}
  set paymentDueDate(value){
    if(!value) return;
    this.model.paymentDueDate = value;
  }
  get paymentMethod(){ return this.model.paymentMethod;}
  set paymentMethod(value){
    if(!value) return;
    this.model.paymentMethod = value;
  }
  get paymentMethodId(){ return this.model.paymentMethodId;}
  set paymentMethodId(value){
    if(!value) return;
    this.model.paymentMethodId = value;
  }
  get paymentStatus(){ return this.model.paymentStatus;}
  set paymentStatus(value){
    if(!value) return;
    this.model.paymentStatus = value;
  }
  get provider(){ return this.model.provider;}
  set provider(value){
    if(!value) return;
    this.model.provider = value;
  }
  get referencesOrder(){ return this.model.referencesOrder;}
  set referencesOrder(value){
    if(!value) return;
    this.model.referencesOrder = value;
  }
  get scheduledPaymentDate(){ return this.model.scheduledPaymentDate;}
  set scheduledPaymentDate(value){
    if(!value) return;
    this.model.scheduledPaymentDate = value;
  }
  get totalPaymentDue(){ return this.model.totalPaymentDue;}
  set totalPaymentDue(value){
    if(!value) return;
    this.model.totalPaymentDue = value;
  }


  //WHEN RETURNING, WATCH OUT FOR Id vs ID
}

module.exports = Invoice;
