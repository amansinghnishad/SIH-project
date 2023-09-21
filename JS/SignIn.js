   // Get references to the modal and buttons
   const signInBtn = document.getElementById('SignInBtn');
   const createAccountBtn = document.getElementById('CreateAccountBtn');
   const closeSignInBtn = document.getElementById('closeSignInBtn');
   const closeCreateAccountBtn = document.getElementById('closeCreateAccountBtn');
   const signInModal = document.getElementById('signInModal');
   const createAccountModal = document.getElementById('createAccountModal');

   // Function to open the Sign In modal
   function openSignInModal() {
     signInModal.style.display = 'block';
   }

   // Function to close the Sign In modal
   function closeSignInModal() {
     signInModal.style.display = 'none';
   }

   // Function to open the Create Account modal
   function openCreateAccountModal() {
     createAccountModal.style.display = 'block';
   }

   // Function to close the Create Account modal
   function closeCreateAccountModal() {
     createAccountModal.style.display = 'none';
   }

   // Event listeners to trigger modal actions
   signInBtn.addEventListener('click', openSignInModal);
   createAccountBtn.addEventListener('click', openCreateAccountModal);
   closeSignInBtn.addEventListener('click', closeSignInModal);
   closeCreateAccountBtn.addEventListener('click', closeCreateAccountModal);

   // Close the modals if the user clicks outside of them
   window.addEventListener('click', (event) => {
     if (event.target === signInModal) {
       closeSignInModal();
     }
     if (event.target === createAccountModal) {
       closeCreateAccountModal();
     }
   });