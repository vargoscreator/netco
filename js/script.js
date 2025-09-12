document.addEventListener("DOMContentLoaded", () => {
  const popup = document.querySelector(".popup");
  const popupTitles = popup.querySelectorAll(".popup__title");
  const openBtns = document.querySelectorAll("[data-popup-open]");
  const closeBtn = popup.querySelector(".popup__close");
  const popupInner = popup.querySelector(".popup__inner");

  const openPopup = (type) => {
    popup.classList.add("show");

    popupTitles.forEach(title => {
      if (title.dataset.popupTitle === type) {
        title.classList.add("active");
      } else {
        title.classList.remove("active");
      }
    });
  };

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.popupOpen;
      openPopup(type);
    });
  });

  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show");
    popupTitles.forEach(title => title.classList.remove("active"));
  });

  popup.addEventListener("click", (e) => {
    if (!popupInner.contains(e.target)) {
      popup.classList.remove("show");
    }
  });
});


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const header = document.querySelector('.header');
      if (header) {
        header.classList.add('animated');
      }
    }, 100);
});
window.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.swiss__title', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.swiss__inner',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
    gsap.from('.swiss__name', {
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.swiss__inner',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
    gsap.from('.swiss__btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: '.swiss__inner',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
    gsap.from('.whoisit__title', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: '.whoisit__inner',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
    gsap.from('.whoisit__btn', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
            trigger: '.whoisit__inner',
            start: 'top 90%',
            toggleActions: 'play none none none',
        }
    });
    const heroLogos = document.querySelectorAll('.hero__logo img');
    const heroLeftText = document.querySelector('.hero__left-name');
    const heroButton = document.querySelector('.hero__left-btn');
    const heroTitle = document.querySelector('.hero__title');
    const heroName = document.querySelector('.hero__name');
    const heroNameSpan = heroName.querySelector('span');
    const heroDescr = document.querySelector('.hero__descr');
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(heroLogos, {
        x: -100,
        opacity: 0,
        stagger: 0.3,
        duration: 1
    }, 0);
    tl.from(heroLeftText, { x: -100, opacity: 0, duration: 1 }, 0.3);
    tl.from(heroButton, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.5)"
    }, 0.5);
    tl.from(heroTitle, { x: -100, opacity: 0, duration: 1 }, 0.3);
    tl.from(heroName, { x: -100, opacity: 0, duration: 1 }, 0.4);
    tl.from(heroNameSpan, { x: -50, opacity: 0, duration: 0.5 }, 0.6);
    tl.from(heroDescr, { x: 100, opacity: 0, duration: 1 }, 0.5);
    const heroIcons = document.querySelectorAll('.hero__icons .hero__icon img');
    gsap.from(heroIcons, {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.hero__icons',
            start: 'top 80%',
            toggleActions: 'play none none none',
        }
    });
    const servicesTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.services__inner',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    servicesTl.from('.services__start', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" });
    servicesTl.from('.services__end', { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    document.querySelectorAll('.services__item').forEach(item => {
        gsap.from(item.querySelector('.services__item-num'), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });

        gsap.from(item.querySelector('.services__item-title'), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });

        gsap.from(item.querySelector('.services__item-name'), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });

        gsap.from(item.querySelector('.services__item-descr'), {
            y: 30,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: item,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const whoisitItems = document.querySelectorAll('.whoisit__item-content');
    const whoisitGroup1 = [whoisitItems[0], whoisitItems[2]];
    const whoisitGroup2 = [whoisitItems[1], whoisitItems[3]];
    let showGroup1 = true;
    function toggleGroups() {
        if (showGroup1) {
            whoisitGroup1.forEach(el => el.classList.add('active'));
            whoisitGroup2.forEach(el => el.classList.remove('active'));
        } else {
            whoisitGroup2.forEach(el => el.classList.add('active'));
            whoisitGroup1.forEach(el => el.classList.remove('active'));
        }
        showGroup1 = !showGroup1;
    }
    toggleGroups();
    setInterval(toggleGroups, 1500);

    const heroIcons = document.querySelector('.hero__icons');
    if (heroIcons) {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
        });
    }, {
        threshold: 0.9
    });
    observer.observe(heroIcons);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const numberTwo = document.querySelector('.swiss__number-two');
    const numberOne = document.querySelector('.swiss__number-one');
    const numberBlock = document.querySelector('.swiss__number');

    if (!numberTwo || !numberOne || !numberBlock) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                numberTwo.classList.add('animated');
                setTimeout(() => {
                    numberTwo.classList.add('animated-end');
                }, 1000);
                setTimeout(() => {
                    numberOne.classList.add('animated');
                    setTimeout(() => {
                        numberOne.classList.add('animated-end');
                    }, 700);
                }, 500);

                observer.unobserve(numberBlock);
            }
        });
    }, {
        threshold: 0.9
    });

    observer.observe(numberBlock);
});
