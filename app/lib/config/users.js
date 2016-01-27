var UserProfile = new SimpleSchema({
  experience: {
    type: String,
    label: 'How long have you been writing code?',
    optional: false,
    autoform: {
      type: "select-radio",
      template: "buttonGroup",
      options: [{
        label: "Less than 2 years",
        value: "Less than 2 years"
      }, {
        label: "Between 3 and 5 years",
        value: "Between 3 and 5 years"
      }, {
        label: "Between 5 and 10 years",
        value: "Between 5 and 10 years"
      }, {
        label: "More than 10 years",
        value: "More than 10 years"
      }, ]
    }
  },
  professionalExperience: {
    type: String,
    label: 'How long have you been working as a professional software developer?',
    optional: false,
    autoform: {
      type: "select-radio",
      template: "buttonGroup",
      options: [{
        label: "Less than 2 years",
        value: "Less than 2 years"
      }, {
        label: "Between 3 and 5 years",
        value: "Between 3 and 5 years"
      }, {
        label: "Between 5 and 10 years",
        value: "Between 5 and 10 years"
      }, {
        label: "More than 10 years",
        value: "More than 10 years"
      }, ]
    }
  },
  meteorExperience: {
    type: String,
    label: 'How long have you been using Meteor?',
    optional: false,
    autoform: {
      type: "select-radio",
      template: "buttonGroup",
      options: [{
        label: "More than 3 years",
        value: "More than 3 years"
      }, {
        label: "Less than 3 years",
        value: "Less than 3 years"
      }, {
        label: "Less than 2 years",
        value: "Less than 2 years"
      }, {
        label: "Less than 1 year",
        value: "Less than 1 year"
      }, ]
    }
  },
  meteorProfesional: {
    type: String,
    label: 'Are you using Meteor professionally?',
    optional: false,
    autoform: {
      type: "select-radio",
      template: "buttonGroup",
      options: [{
        label: "Yes",
        value: "Yes"
      }, {
        label: "No",
        value: "No"
      }, ]
    }
  },
});

//AWARE:may need to add other fields depending login options e.g. Facebook, Twitter, etc.
var User = new SimpleSchema({
  emails: {
    type: [Object],
    // this must be optional if you also use other login services like facebook,
    // but if you use only accounts-password, then it can be required
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  profile: {
    type: UserProfile,
    optional: true
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  }
});

Meteor.users.attachSchema(User);
