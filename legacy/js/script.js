/* =====================================================
   BRAIN UP LABS — PRODUCTION v3.0
   Reel-style Split-Card Carousel (Video reference)
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ===================== ANNOUNCEMENT BAR CLOSE =====================
  const announcementBar = document.getElementById("announcementBar");
  const closeBtn = document.getElementById("closeAnnouncement");
  const navbar = document.getElementById("navbar");
  if (closeBtn && announcementBar) {
    closeBtn.addEventListener("click", () => {
      announcementBar.style.display = "none";
      navbar.style.top = "0";
      document.body.style.paddingTop = "68px";
    });
  }

  // ===================== HAMBURGER MENU =====================
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navMenu.classList.toggle("open");
      document.body.style.overflow = navMenu.classList.contains("open")
        ? "hidden"
        : "";
    });
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  // ===================== MEGA MENU — full-screen panel on mobile, hover on desktop =====================
  document.querySelectorAll(".mega-item").forEach((item) => {
    const link = item.querySelector(".nav-link");
    const menu = item.querySelector(".mega-menu");

    // Nav link tap on mobile → open panel
    if (link) {
      link.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          e.stopPropagation();
          document.querySelectorAll(".mega-item.active").forEach((i) => i.classList.remove("active"));
          item.classList.add("active");
        }
      });
    }

    // Back button (::before pseudo — catch click on mega-menu top area)
    if (menu) {
      menu.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          // click on top 56px = back button area
          const rect = menu.getBoundingClientRect();
          if (e.clientY - rect.top <= 56) {
            item.classList.remove("active");
          }
        }
      });
    }

    // Desktop: click toggle
    item.addEventListener("click", (e) => {
      if (window.innerWidth > 768) {
        const isOpen = item.classList.contains("active");
        document.querySelectorAll(".mega-item.active").forEach((i) => i.classList.remove("active"));
        if (!isOpen) item.classList.add("active");
      }
    });
  });

  // Click outside closes on desktop
  document.addEventListener("click", (e) => {
    if (window.innerWidth > 768 && !e.target.closest(".mega-item")) {
      document.querySelectorAll(".mega-item.active").forEach((i) => i.classList.remove("active"));
    }
  });

  // Close mega menu when hamburger closes nav
  document.getElementById("hamburger")?.addEventListener("click", () => {
    document.querySelectorAll(".mega-item.active").forEach((i) => i.classList.remove("active"));
  });

  // ===================== ACTIVE NAV LINK ON SCROLL =====================
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + section.offsetHeight
      ) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`)
        link.classList.add("active");
    });
  });

  // ===================== HERO WORD ROTATOR =====================
  const words = document.querySelectorAll(".word-list .word");
  let currentWord = 0;
  if (words.length > 0) {
    setInterval(() => {
      words[currentWord].classList.remove("active");
      words[currentWord].classList.add("exit");
      setTimeout(() => words[currentWord].classList.remove("exit"), 500);
      currentWord = (currentWord + 1) % words.length;
      words[currentWord].classList.add("active");
    }, 2200);
  }

  // ===================== TABS =====================
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      document
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      const el = document.getElementById("tab-" + target);
      if (el) el.classList.add("active");
    });
  });

  // ===================== SCROLL REVEAL =====================
  const revealEls = document.querySelectorAll(
    ".reveal-left, .reveal-right, .reveal-up, .reveal-timeline, .highlight-card, .kit-cat, .kit-card",
  );
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          revealObs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  revealEls.forEach((el) => revealObs.observe(el));

  // ===================== DEMO FORM =====================
  const demoForm = document.getElementById("demoForm");
  if (demoForm) {
    demoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = demoForm.querySelector(".btn-demo-submit");
      const fd = {
        school: document.getElementById("schoolName")?.value || "",
        name: document.getElementById("personName")?.value || "",
        designation: document.getElementById("designation")?.value || "",
        phone: document.getElementById("phone")?.value || "",
        email: document.getElementById("email")?.value || "",
        city: document.getElementById("city")?.value || "",
        state: document.getElementById("state")?.value || "",
        date: document.getElementById("preferredDate")?.value || "",
      };
      if (!fd.school || !fd.name || !fd.phone || !fd.email) {
        alert("Please fill all required fields");
        return;
      }
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
      btn.disabled = true;
      await fetch(
        "https://script.google.com/macros/s/AKfycbwzG1qyxGd2H0cQpoePeSxj77sO6Aw_BGYz0g5czn7O9EnOa7wvvoDUEhmIYd_mpgVr/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(fd),
        },
      );
      btn.innerHTML = "✅ Submitted";
      demoForm.reset();
      setTimeout(() => {
        btn.innerHTML =
          '<i class="fas fa-calendar-check"></i> Book Demo / Workshop';
        btn.disabled = false;
      }, 2000);
    });
  }

  // ===================== BACK TO TOP =====================
  const backToTopBtn = document.getElementById("backToTop");
  if (backToTopBtn) {
    window.addEventListener("scroll", () =>
      backToTopBtn.classList.toggle("visible", window.scrollY > 400),
    );
    backToTopBtn.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
  }

  // ===================== NOTIFY ME BUTTONS =====================
  document.querySelectorAll(".btn-notify").forEach((btn) => {
    btn.addEventListener("click", function () {
      const orig = this.textContent;
      this.textContent = "✓ Notified!";
      this.style.background = "rgba(16,185,129,0.2)";
      this.style.borderColor = "#10b981";
      this.style.color = "#10b981";
      setTimeout(() => {
        this.textContent = orig;
        this.style.background = this.style.borderColor = this.style.color = "";
      }, 2000);
    });
  });

  // ===================== COUNTER =====================
  const statNumbers = document.querySelectorAll(".stat-num");
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const hasSuffix = el.textContent.includes("+");
        const target = parseInt(el.textContent);
        let count = 0;
        const inc = target / 50;
        const tick = () => {
          count += inc;
          if (count < target) {
            el.textContent = Math.floor(count) + (hasSuffix ? "+" : "");
            requestAnimationFrame(tick);
          } else {
            el.textContent = target + (hasSuffix ? "+" : "");
          }
        };
        tick();
        counterObs.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );
  statNumbers.forEach((el) => counterObs.observe(el));

  // ===================== SMOOTH SCROLL (GSAP) =====================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const id = this.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        if (typeof gsap !== "undefined" && gsap.plugins && gsap.plugins.scrollTo) {
          gsap.to(window, { duration: 1, scrollTo: { y: target, offsetY: 106 }, ease: "power3.inOut" });
        } else {
          window.scrollTo({ top: target.offsetTop - 106, behavior: "smooth" });
        }
      }
    });
  });

  console.log("✅ Brain Up Labs v3.0 — Reel Carousel Loaded");

  // ===================== AUTH MODAL =====================
  const authModal = document.getElementById("authModal");
  const authModalClose = document.getElementById("authModalClose");
  const accountBtn = document.querySelector(".account");

  function openModal(tab) {
    authModal.classList.add("open");
    document.body.style.overflow = "hidden";
    if (tab) switchAuthTab(tab);
  }

  function closeModal() {
    authModal.classList.remove("open");
    document.body.style.overflow = "";
  }

  function switchAuthTab(tab) {
    document
      .querySelectorAll(".auth-tab")
      .forEach((t) => t.classList.toggle("active", t.dataset.auth === tab));
    document
      .querySelectorAll(".auth-form")
      .forEach((f) => f.classList.toggle("active", f.id === "auth-" + tab));
  }

  if (accountBtn)
    accountBtn.addEventListener("click", () => openModal("login"));
  if (authModalClose) authModalClose.addEventListener("click", closeModal);
  authModal.addEventListener("click", (e) => {
    if (e.target === authModal) closeModal();
  });

  document.querySelectorAll(".auth-tab").forEach((tab) => {
    tab.addEventListener("click", () => switchAuthTab(tab.dataset.auth));
  });

  document.querySelectorAll(".auth-switch span").forEach((span) => {
    span.addEventListener("click", () => switchAuthTab(span.dataset.auth));
  });
});

/* =====================================================================
   REEL CAROUSEL ENGINE
   ─────────────────────────────────────────────────────────────────────
   Builds a reel-style split-card carousel (image left / text right)
   directly inside any section wrapper, then handles:
     • Infinite looping via head/tail clones
     • Center-aligned active card
     • Auto-slide with hover pause
     • Touch / swipe with vertical-scroll guard
     • Keyboard navigation (in-viewport only)
     • ResizeObserver for smooth responsive reflow
===================================================================== */

class TrioCarousel {
  /**
   * @param {object} opts
   *   insertAfter  {string}   CSS selector — stage is inserted after this element
   *   cards        {Array}    card data objects
   *   isTestimonial{boolean}  adds --testi modifier class for star/author layout
   *   autoDelay    {number}   ms between auto-advances (default 4200)
   */
  constructor(opts) {
    this.data = opts.cards;
    this.total = this.data.length;
    this.isTesti = opts.isTestimonial || false;
    this.autoDelay = opts.autoDelay || 4200;
    this.current = 0; // index into this.data
    this.isAnimating = false;

    this._buildDOM(opts.insertAfter);
    if (!this.stage) return;

    this._renderAll();
    this._bindEvents();
    this._startAuto();
  }

  /* ── DOM bootstrap ──────────────────────────────────────────── */
  _buildDOM(insertAfterSel) {
    const anchor = document.querySelector(insertAfterSel);
    if (!anchor) {
      this.stage = null;
      return;
    }

    this.stage = document.createElement("div");
    this.stage.className =
      "trio-stage" + (this.isTesti ? " trio-stage--testi" : "");
    this.stage.innerHTML = `
      <button class="trio-btn trio-btn-prev" aria-label="Previous">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="trio-track"></div>
      <button class="trio-btn trio-btn-next" aria-label="Next">
        <i class="fas fa-chevron-right"></i>
      </button>
    `;

    this.dotsWrap = document.createElement("div");
    this.dotsWrap.className = "trio-dots";

    anchor.after(this.stage);
    this.stage.after(this.dotsWrap);

    this.track = this.stage.querySelector(".trio-track");
    this.prevBtn = this.stage.querySelector(".trio-btn-prev");
    this.nextBtn = this.stage.querySelector(".trio-btn-next");

    // Build dot buttons
    this.dots = [];
    for (let i = 0; i < this.total; i++) {
      const d = document.createElement("button");
      d.className = "trio-dot" + (i === 0 ? " active" : "");
      d.setAttribute("aria-label", `Slide ${i + 1}`);
      d.addEventListener("click", () => {
        if (this.isAnimating) return;
        const steps = this._shortestPath(i);
        if (steps === 0) return;
        steps > 0 ? this._advance(steps) : this._advance(steps);
      });
      this.dotsWrap.appendChild(d);
      this.dots.push(d);
    }
  }

  /* ── Card HTML factory ──────────────────────────────────────── */
  _cardHTML(d) {
    const imgInner = d.img
      ? `<img src="${d.img}" alt="${d.title}" loading="lazy">`
      : `<div class="trio-img-emoji">${d.emoji || "🚀"}</div>`;

    const linkHTML =
      d.link !== false
        ? `<a class="trio-link" href="#">Explore More <i class="fas fa-arrow-right"></i></a>`
        : "";

    if (this.isTesti) {
      // Testimonial layout: stars + quote + author block
      const initials = d.title
        .split(" ")
        .map((w) => w[0])
        .join("")
        .slice(0, 3)
        .toUpperCase();
      return `
        <div class="trio-img ${d.imgClass || ""}">${imgInner}</div>
        <div class="trio-body">
          <div class="trio-body-overlay"></div>
          <div class="trio-stars">★★★★★</div>
          ${d.tag ? `<span class="trio-tag">${d.tag}</span>` : ""}
          <p>${d.desc}</p>
          <div class="trio-author">
            <div class="trio-avatar">${d.emoji || initials}</div>
            <div>
              <strong>${d.title}</strong>
              <span>${d.sub || ""}</span>
            </div>
          </div>
        </div>`;
    }

    return `
      <div class="trio-img ${d.imgClass || ""}">${imgInner}</div>
      <div class="trio-body">
        <div class="trio-body-overlay"></div>
        ${d.tag ? `<span class="trio-tag">${d.tag}</span>` : ""}
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
        ${linkHTML}
      </div>`;
  }

  /* ── Render / position all visible slots ────────────────────── */
  _renderAll() {
    this.track.innerHTML = "";
    this.cardEls = [];

    // We keep 5 DOM nodes: hidden-left, left, center, right, hidden-right
    const positions = [
      "hidden-left",
      "left",
      "center",
      "right",
      "hidden-right",
    ];
    const offsets = [-2, -1, 0, 1, 2]; // relative to this.current

    positions.forEach((pos, i) => {
      const idx = this._mod(this.current + offsets[i]);
      const el = document.createElement("div");
      el.className = "trio-card";
      el.setAttribute("data-pos", pos);
      el.setAttribute("data-idx", idx);
      el.innerHTML = this._cardHTML(this.data[idx]);
      this.track.appendChild(el);
      this.cardEls.push(el);

      // Clicking side cards advances/retreats
      if (pos === "left") el.addEventListener("click", () => this._prev());
      if (pos === "right") el.addEventListener("click", () => this._next());
    });

    this._updateDots();
  }

  /* ── Smooth transition to next/prev ─────────────────────────── */
  _next() {
    if (this.isAnimating) return;
    this._advance(1);
  }
  _prev() {
    if (this.isAnimating) return;
    this._advance(-1);
  }

  _advance(delta) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const dir = delta > 0 ? 1 : -1;
    const steps = Math.abs(delta);

    // For multi-step (dot click), we chain
    const doStep = (remaining) => {
      if (remaining === 0) {
        this.isAnimating = false;
        return;
      }
      this._stepOnce(dir, () => doStep(remaining - 1));
    };
    doStep(steps);
  }

  _stepOnce(dir, done) {
    // 1. Set exit positions via data-pos swap
    // 2. Wait for transition, then re-render at new current
    const positions = [
      "hidden-left",
      "left",
      "center",
      "right",
      "hidden-right",
    ];

    if (dir === 1) {
      // Going forward: shift everything left
      const newPositions = [
        "hidden-right",
        "hidden-left",
        "left",
        "center",
        "right",
      ];
      // Temporarily reassign positions to trigger CSS transition
      this.cardEls.forEach((el, i) => {
        el.setAttribute("data-pos", newPositions[i]);
      });
    } else {
      // Going backward: shift everything right
      const newPositions = [
        "left",
        "center",
        "right",
        "hidden-right",
        "hidden-left",
      ];
      this.cardEls.forEach((el, i) => {
        el.setAttribute("data-pos", newPositions[i]);
      });
    }

    // After transition completes, update index and re-render
    setTimeout(() => {
      this.current = this._mod(this.current + dir);
      this._renderAll();
      done();
    }, 680); // slightly longer than CSS transition (650ms)
  }

  /* ── Dot update ─────────────────────────────────────────────── */
  _updateDots() {
    this.dots.forEach((d, i) =>
      d.classList.toggle("active", i === this.current),
    );
  }

  /* ── Utility ────────────────────────────────────────────────── */
  _mod(n) {
    return ((n % this.total) + this.total) % this.total;
  }

  _shortestPath(target) {
    const fwd = this._mod(target - this.current);
    const bwd = this._mod(this.current - target);
    return fwd <= bwd ? fwd : -bwd;
  }

  /* ── Auto-slide ─────────────────────────────────────────────── */
  _startAuto() {
    this._stopAuto();
    this._timer = setInterval(() => this._next(), this.autoDelay);
  }
  _stopAuto() {
    clearInterval(this._timer);
  }
  _resetAuto() {
    this._stopAuto();
    this._startAuto();
  }

  /* ── Event binding ──────────────────────────────────────────── */
  _bindEvents() {
    // Buttons
    this.prevBtn.addEventListener("click", () => {
      this._prev();
      this._resetAuto();
    });
    this.nextBtn.addEventListener("click", () => {
      this._next();
      this._resetAuto();
    });

    // Hover pause
    this.stage.addEventListener("mouseenter", () => this._stopAuto());
    this.stage.addEventListener("mouseleave", () => this._startAuto());

    // Tab visibility
    document.addEventListener("visibilitychange", () => {
      document.hidden ? this._stopAuto() : this._startAuto();
    });

    // Keyboard (only when stage is in viewport)
    document.addEventListener("keydown", (e) => {
      const r = this.stage.getBoundingClientRect();
      if (r.top > window.innerHeight || r.bottom < 0) return;
      if (e.key === "ArrowRight") {
        this._next();
        this._resetAuto();
      }
      if (e.key === "ArrowLeft") {
        this._prev();
        this._resetAuto();
      }
    });

    // Touch / swipe
    let tx = 0,
      ty = 0,
      tt = 0,
      swiping = false;
    this.stage.addEventListener(
      "touchstart",
      (e) => {
        tx = e.touches[0].clientX;
        ty = e.touches[0].clientY;
        tt = Date.now();
        swiping = true;
      },
      { passive: true },
    );
    this.stage.addEventListener(
      "touchmove",
      (e) => {
        if (!swiping) return;
        if (
          Math.abs(e.touches[0].clientY - ty) >
          Math.abs(e.touches[0].clientX - tx)
        ) {
          swiping = false; // vertical scroll wins
        }
      },
      { passive: true },
    );
    this.stage.addEventListener(
      "touchend",
      (e) => {
        if (!swiping) return;
        swiping = false;
        const dx = e.changedTouches[0].clientX - tx;
        const vel = Math.abs(dx) / (Date.now() - tt);
        if (Math.abs(dx) > 40 || vel > 0.3) {
          dx < 0 ? this._next() : this._prev();
          this._resetAuto();
        }
      },
      { passive: true },
    );
  }
}

/* =====================================================================
   CAROUSEL DATA — BrainUp Labs Content
===================================================================== */
(() => {
  // ── 1. PROJECTS carousel ─────────────────────────────────────
  new TrioCarousel({
    insertAfter: ".projects-slider-wrapper",
    autoDelay: 4200,
    cards: [
      {
        tag: "Grade 4–8",
        title: "Robotics",
        desc: "Students build and program autonomous robots using sensors, motors, and microcontrollers — learning real engineering principles.",
        img: "./images/cards/robotics.jpg",
      },
      {
        tag: "Grade 6–10",
        title: "Neurotech",
        desc: "Explore how the human brain works and interface it with technology using EEG sensors and brain-computer interface projects.",
        img: "./images/cards/neuro-tech.webp",
      },
      {
        tag: "Grade 5–9",
        title: "IoT & Electronics",
        desc: "Design smart home systems, weather stations, and automation projects that connect the physical world to the internet.",
        img: "./images/cards/iot.jpg",
      },
      {
        tag: "Grade 7–10",
        title: "Aerospace",
        desc: "Build model rockets, drones, and satellite systems to understand aerodynamics, physics, and space technology.",
        img: "./images/cards/aerospace.jpg",
      },
      {
        tag: "Grade 6–10",
        title: "Artificial Intelligence",
        desc: "Train machine learning models, build chatbots, and create AI applications that solve real-world problems.",
        img: "./images/cards/artifical.jpg",
      },
    ],
  });

  // ── 2. KITS carousel
  new TrioCarousel({
    insertAfter: ".kits-slider-wrapper",
    autoDelay: 4500,
    cards: [
      {
        tag: "Beginner · Age 9+",
        title: "Class 4 Kit",
        desc: "Introduction to circuits, basic electronics, and simple machines for young learners.",
        imgClass: "grad-kit",
        emoji: "📘",
        link: false,
      },
      {
        tag: "Beginner · Age 10+",
        title: "Class 5 Kit",
        desc: "Explore sensors, coding basics, and build your first automated projects.",
        imgClass: "grad-kit",
        emoji: "📗",
        link: false,
      },
      {
        tag: "Intermediate · Age 11+",
        title: "Class 6 Kit",
        desc: "Arduino programming, robotics fundamentals, and IoT project building.",
        imgClass: "grad-kit",
        emoji: "📙",
        link: false,
      },
      {
        tag: "Intermediate · Age 12+",
        title: "Class 7 Kit",
        desc: "Deeper dive into automation, sensors, and mechanical systems.",
        imgClass: "grad-kit",
        emoji: "📙",
        link: false,
      },
      {
        tag: "Intermediate · Age 13+",
        title: "Class 8 Kit",
        desc: "Advanced microcontroller projects and smart device building.",
        imgClass: "grad-kit",
        emoji: "📙",
        link: false,
      },
      {
        tag: "Advanced · Age 12+",
        title: "NeuroTech Kit",
        desc: "Brain-computer interface experiments and EEG signal processing.",
        imgClass: "grad-neuro",
        emoji: "🧠",
        link: false,
      },
      {
        tag: "Advanced · Age 13+",
        title: "Aerospace Kit",
        desc: "Rocket design, drone assembly, and aerodynamics experiments.",
        imgClass: "grad-aero",
        emoji: "🚀",
        link: false,
      },
    ],
  });

  // ── 3. TESTIMONIALS carousel ─────────────────────────────────
  new TrioCarousel({
    insertAfter: ".testi-slider-wrapper",
    isTestimonial: true,
    autoDelay: 5000,
    cards: [
      {
        tag: "Principal · New Delhi",
        title: "Delhi Public School",
        sub: "Principal, New Delhi",
        desc: '"Brain Up Labs has completely transformed our STEM program. The kids are more engaged than ever, and teachers love the simplicity of the kits."',
        imgClass: "grad-testi",
        emoji: "🏫",
        link: false,
      },
      {
        tag: "Parent · Jaipur",
        title: "Priya Sharma",
        sub: "Parent, Jaipur",
        desc: '"My daughter built her first robot using the Brain Up Labs kit. Her confidence in science has grown immensely — she now wants to be an engineer!"',
        imgClass: "grad-testi",
        emoji: "👩",
        link: false,
      },
      {
        tag: "STEM Coordinator",
        title: "Rajasthan Public School",
        sub: "STEM Coordinator",
        desc: '"The neurotech module is mind-blowing. Our grade 8 students are doing brain-computer interface experiments. Absolutely world-class content."',
        imgClass: "grad-testi",
        emoji: "🏆",
        link: false,
      },
      {
        tag: "Director · Pune",
        title: "Sunrise Public School",
        sub: "Director, Pune",
        desc: '"The table-top lab concept is brilliant. No lab needed, no renovation — just pure STEM learning. Brain Up Labs is the future of school education."',
        imgClass: "grad-testi",
        emoji: "⭐",
        link: false,
      },
    ],
  });
})();

// ===================== GSAP SCROLL ANIMATIONS =====================
if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance
  gsap.from(".hero-badge", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", delay: 0.2 });
  gsap.from(".hero-heading", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out", delay: 0.4 });
  gsap.from(".hero-rotating-words", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out", delay: 0.6 });
  gsap.from(".hero-sub", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out", delay: 0.7 });
  gsap.from(".hero-cta-group", { opacity: 0, y: 20, duration: 0.8, ease: "power3.out", delay: 0.85 });
  gsap.from(".diag-card", { opacity: 0, scale: 0.85, duration: 1, stagger: 0.15, ease: "back.out(1.4)", delay: 0.5 });

  // Floating stats
  gsap.from(".fstat-item", {
    scrollTrigger: { trigger: ".floating-stats-wrap", start: "top 85%" },
    opacity: 0, y: 30, stagger: 0.12, duration: 0.7, ease: "power3.out"
  });

  // Section headings
  gsap.utils.toArray(".section-title, .section-tag, .section-sub").forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 88%" },
      opacity: 0, y: 25, duration: 0.7, ease: "power2.out"
    });
  });

  // Tabletop left/right
  gsap.from(".reveal-left", {
    scrollTrigger: { trigger: ".reveal-left", start: "top 80%" },
    opacity: 0, x: -60, duration: 0.9, ease: "power3.out"
  });
  gsap.utils.toArray(".reveal-right").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      opacity: 0, x: 60, duration: 0.9, delay: i * 0.1, ease: "power3.out"
    });
  });

  // Why cards
  gsap.utils.toArray(".why-card").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 88%" },
      opacity: 0, y: 40, duration: 0.7, delay: i * 0.08, ease: "power3.out"
    });
  });

  // Kit categories & featured kits
  gsap.utils.toArray(".kit-cat, .kit-card").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 88%" },
      opacity: 0, y: 35, scale: 0.95, duration: 0.7, delay: i * 0.08, ease: "back.out(1.2)"
    });
  });

  // Future skills grid cards
  gsap.utils.toArray(".card").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 88%" },
      opacity: 0, y: 30, duration: 0.7, delay: i * 0.07, ease: "power2.out"
    });
  });

  // kfs items
  gsap.utils.toArray(".kfs-item").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 90%" },
      opacity: 0, scale: 0.8, duration: 0.6, delay: i * 0.06, ease: "back.out(1.5)"
    });
  });

  // Awards grid
  gsap.utils.toArray(".arb-box").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 90%" },
      opacity: 0, y: 25, duration: 0.6, delay: i * 0.05, ease: "power2.out"
    });
  });

  // Journey cards
  gsap.utils.toArray(".journey-card").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 85%" },
      opacity: 0, y: 30, duration: 0.7, delay: i * 0.15, ease: "power3.out"
    });
  });

  // Demo section
  gsap.from(".demo-left", {
    scrollTrigger: { trigger: ".demo", start: "top 75%" },
    opacity: 0, x: -50, duration: 0.9, ease: "power3.out"
  });
  gsap.from(".demo-right", {
    scrollTrigger: { trigger: ".demo", start: "top 75%" },
    opacity: 0, x: 50, duration: 0.9, ease: "power3.out"
  });

  // Support cards
  gsap.utils.toArray(".support-card").forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: "top 88%" },
      opacity: 0, y: 30, duration: 0.7, delay: i * 0.15, ease: "power3.out"
    });
  });
}

// ===================== PARTNERS INFINITE LOOP FIX =====================
const partnersTrack = document.getElementById("partnersTrack");

if (partnersTrack) {
  const logos = partnersTrack.children;

  // clone dynamically (no manual HTML duplication)
  const clone = partnersTrack.innerHTML;
  partnersTrack.innerHTML += clone;

  // smooth reset trick (true infinite feel)
  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount += 0.5; // speed control

    if (scrollAmount >= partnersTrack.scrollWidth / 2) {
      scrollAmount = 0;
    }

    partnersTrack.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
}

document.querySelectorAll(".learning-cards").forEach((slider) => {
  let index = 0;
  const cards = slider.querySelectorAll(".learning-card");

  function slide() {
    index++;

    if (index >= cards.length) {
      index = 0;
    }

    const cardWidth = cards[0].offsetWidth + 12;

    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  }

  // 🔥 auto slide
  let autoSlide = setInterval(slide, 2500);

  // 🔥 user touch kare toh stop (premium feel)
  slider.addEventListener("touchstart", () => {
    clearInterval(autoSlide);
  });
});
