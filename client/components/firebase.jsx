import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgWXlgEtp0IBXkqx6r71Ww1RydmndNZlU",
  authDomain: "mtbtrails-181db.firebaseapp.com",
  databaseURL: "https://mtbtrails-181db.firebaseio.com",
  projectId: "mtbtrails-181db",
  storageBucket: "mtbtrails-181db.appspot.com",
  messagingSenderId: "797895905502",
  appId: "1:797895905502:web:e3186888a4b20cf053b24f"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }

  doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

export default Firebase;