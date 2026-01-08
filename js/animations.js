document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-up").forEach(el => {
  gsap.fromTo(
    el,
    { y: 90, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    }
  );
});

gsap.from(".hero-line span", {
  y: 110,
  opacity: 0,
  duration: 1.35,
  ease: "power4.out",
  stagger: 0.16,
  delay: 0.35
});


gsap.from(".hero-sub", {
  y: 20,
  opacity: 0,
  duration: 1,
  delay: 1.1,
  ease: "power3.out"
});

document.querySelector(".toggle").addEventListener("click", () => {
  document.querySelector(".veille").classList.toggle("open");
});


document.querySelectorAll(".carousel").forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  let index = 0;

  carousel.querySelector(".next").onclick = () => {
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  };

  carousel.querySelector(".prev").onclick = () => {
    images[index].classList.remove("active");
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
  };
});

gsap.utils.toArray(".panel .hidden").forEach(el => {
  gsap.fromTo(
    el,
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    }
  );
});

