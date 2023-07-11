document.addEventListener('DOMContentLoaded', () => {
    const scrollButton = document.getElementById('scrollButton');
    const container = document.getElementById('back');
  
    // Function to toggle scroll button visibility
    const toggleScrollButton = () => {
      if (container.scrollTop > 20) {
        scrollButton.style.display = 'block';
      } else {
        scrollButton.style.display = 'none';
      }
    };
  
    // Event listener for scroll event on container
    container.addEventListener('scroll', toggleScrollButton);
  
    // Event listener for scroll button click
    scrollButton.addEventListener('click', () => {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  