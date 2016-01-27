Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
});

//TODO-check if is better to define routes by functions -- Pol G.
Router.route('/', {
  name: 'landingPage'
});
Router.route('/sign-in', {
  name: 'signin'
});
