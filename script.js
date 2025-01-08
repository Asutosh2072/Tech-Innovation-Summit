function toggleSession(element) {
    element.classList.toggle('active');
 }
 function openModal(speakerId) {
   const modal = document.getElementById('speakerModal');
   const modalContent = document.getElementById('modalContent');
 
     if (speakerId === 'speaker1') {
          modalContent.innerHTML = `
             <button class="close-btn" onclick="closeModal()">×</button>
            <h2>John Doe</h2>
             <p>John Doe is the CEO of a leading tech startup. He has over 15 years of experience...</p>
            <img src="https://sayeishaamepandarch.com/wp-content/uploads/2023/11/20002000.jpg" alt="Speaker 1">
         `
      } else if (speakerId === 'speaker2') {
             modalContent.innerHTML = `
             <button class="close-btn" onclick="closeModal()">×</button>
            <h2>Jane Smith</h2>
             <p>Jane Smith is an AI researcher with a focus on machine learning and neural networks.</p>
             <img src="https://sayeishaamepandarch.com/wp-content/uploads/2023/11/20002000.jpg" alt="Speaker 2">
         `
     } else if (speakerId === 'speaker3') {
          modalContent.innerHTML = `
            <button class="close-btn" onclick="closeModal()">×</button>
            <h2>Alex Brown</h2>
             <p>Alex Brown is an expert in cloud computing and digital transformation.</p>
             <img src="https://sayeishaamepandarch.com/wp-content/uploads/2023/11/20002000.jpg" alt="Speaker 3">
        `
     } else if (speakerId === 'speaker4') {
          modalContent.innerHTML = `
              <button class="close-btn" onclick="closeModal()">×</button>
            <h2>Emily Green</h2>
             <p>Emily Green is a passionate sustainability advocate, focusing on eco-friendly solutions.</p>
              <img src="speaker4.jpg" alt="Speaker 4">
         `
     }
     modal.classList.add('active');
 }
 
 function closeModal() {
   const modal = document.getElementById('speakerModal');
   modal.classList.remove('active');
 }
 
 function toggleFaq(element) {
     element.classList.toggle('active');
 }
 
 document.getElementById('registrationForm').addEventListener('submit', function(event) {
     event.preventDefault(); // Prevent form from submitting
     alert('Thank you for registering!'); // Replace with your logic
 });