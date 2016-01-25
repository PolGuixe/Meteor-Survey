// Set up login services
Meteor.startup(function() {
  // Add Meteor configuration entry
  ServiceConfiguration.configurations.upsert(
  { service: "meteor-developer" },
  {
    $set: {
      clientId: Meteor.settings.loginServices.meteorDeveloper.clientId,
      loginStyle: "popup",
      secret: Meteor.settings.loginServices.meteorDeveloper.secret
    }
  }
);
});
