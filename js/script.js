const handleOnScroll = () => {
    let ele1 = document.getElementById("header");
    let ele2 = document.getElementById("top-btn");
    ele1.classList.toggle("sticky", scrollY > 100);
    ele2.classList.toggle("d-block", scrollY > 300);
  };