var firebaseConfig = {
  apiKey: "AIzaSyDNN8f1F1QYRMlACqxYEEvkgxb56_yZWJ0",
  authDomain: "portfoliocontact-641a0.firebaseapp.com",
  databaseURL: "https://portfoliocontact-641a0.firebaseio.com",
  projectId: "portfoliocontact-641a0",
  storageBucket: "portfoliocontact-641a0.appspot.com",
  messagingSenderId: "1000681592913",
  appId: "1:1000681592913:web:183d1d2c53d5da15ac8070",
  measurementId: "G-WV5SF810XJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


$('#submitForm').on('click', function () {

  contact = {
    name: $('#name').val().trim(),
    email: $('#email').val().trim(),
    message: $('#message').val().trim()
  }

  database.ref().push(contact);

  $('#name').val('')
  $('#email').val('')
  $('#message').val('')
})
