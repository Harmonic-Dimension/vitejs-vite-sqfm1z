<script>
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getAnalytics } from 'firebase/analytics';
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyB6QHSoISmIVzdJV2lo148lHNOTpjzqSeg',
    authDomain: 'gk-test1-5bf3c.firebaseapp.com',
    projectId: 'gk-test1-5bf3c',
    storageBucket: 'gk-test1-5bf3c.appspot.com',
    messagingSenderId: '880199901174',
    appId: '1:880199901174:web:0eaf2b9f9b9c85e575b1d7',
    measurementId: 'G-69CFQ0WN06',
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  import svelteLogo from './assets/svelte.svg'
  import egkLogo from './assets/Rec-Button.png'
  import Counter from './lib/Counter.svelte'
  import Login from './lib/Login.svelte'
  import GreenButton from './lib/GreenButton.svelte'
</script>

<main>
  <div>
    <img src={egkLogo} class="logo" alt="1GK Logo" />
    <h2>één groene knop</h2>
  </div>

  <div class="card">
    <Counter />
  </div>

  <div class="card">
    <Login />
  </div>

  <div class="card">
    <GreenButton />
  </div>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #48bf91);
  }
  .read-the-docs {
    color: #888;
  }
</style>
