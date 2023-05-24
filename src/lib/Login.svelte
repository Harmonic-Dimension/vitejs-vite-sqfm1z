  <script>
    import { Button, Col, Row, Offcanvas } from 'sveltestrap';

    import {
      getAuth,
      signInWithEmailAndPassword,
      EmailAuthProvider,
      signOut,
      onAuthStateChanged,
    } from 'firebase/auth';
    import * as firebaseui from 'firebaseui';

    let auth = getAuth();
    let canvasopen = false;
    let userstate = { loggedIn: false};
    
    const ui = new firebaseui.auth.AuthUI(auth);

    // FirebaseUI config
    const uiConfig = {
      credentialHelper: firebaseui.auth.CredentialHelper.NONE,
      signInOptions: [
        // Email / Password Provider.
        EmailAuthProvider.PROVIDER_ID,
      ],
      callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
          // Handle sign-in.
          // Return false to avoid redirect.
          return false;
        },
      },
    };

    // Listen to the current Auth state
    onAuthStateChanged(auth, (user) => {
      if (user) {
        userstate.loggedIn = true;
      } else {
        userstate.loggedIn = false;
      }
    });


    function toggle() {
        canvasopen = !canvasopen;
        if (!userstate.loggedIn) {
          ui.start('#firebaseui-auth-container', uiConfig);
        } else {
          signOut(auth);
        }
    }
  </script>
  
  {#if userstate.loggedIn}
    <Button on:click={toggle} color="dark" outline>Log out</Button>
  {:else}
    <Button on:click={toggle} color="success" outline>Login</Button>
  {/if}

  <Offcanvas header="Log in" backdrop={false} isOpen={canvasopen} {toggle}>
    <div id="firebaseui-auth-container"></div>
     <p>User logged in: {userstate.loggedIn}</p>
  </Offcanvas>
 
 




  