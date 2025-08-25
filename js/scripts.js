/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// ----- Overlay detail view -----
(function () {
  function qs(id) { return document.getElementById(id); }
  const overlay = qs("detailOverlay");
  const banner = qs("ov-banner");
  const title  = qs("ov-title");
  const sub    = qs("ov-sub");
  const body   = qs("ov-body");
  const links  = qs("ov-links");
  const closeBtn = qs("ov-close");

  function linkBtn(label, href) {
    const a = document.createElement("a");
    a.className = "btn-outline";
    a.href = href; a.target = "_blank"; a.rel = "noopener";
    a.textContent = label;
    return a;
  }

  function findItem(type, slug) {
    const list = (window.SITE_DATA || {})[type] || [];
    return list.find(x => x.slug === slug);
  }

  function openOverlay(type, slug, push=true) {
    const item = findItem(type, slug);
    if (!item) return;

    overlay.classList.remove("d-none");
    overlay.setAttribute("aria-hidden", "false");

    // title/subtitle
    title.textContent = item.title || item.org || "";
    sub.textContent   = item.subtitle || item.role || item.dates || "";

    // banner
    banner.style.backgroundImage = item.banner
      ? `linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.4)), url('${item.banner}')`
      : `linear-gradient(180deg, rgba(0,0,0,.2), rgba(0,0,0,.4))`;

    // body + links
    body.innerHTML = (item.dates ? `<p class="text-muted">${item.dates}</p>` : "") + (item.long || "");
    links.innerHTML = "";
    if (item.github) links.appendChild(linkBtn("GitHub", item.github));
    if (item.demo)   links.appendChild(linkBtn("Live Demo", item.demo));

    if (push) history.pushState({type, slug}, "", `#/${type}/${slug}`);
  }

  function closeOverlay(pop=false) {
    overlay.classList.add("d-none");
    overlay.setAttribute("aria-hidden", "true");
    if (!pop) history.pushState({}, "", location.pathname + location.search);
  }

  // wire up triggers
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.detail-link");
    if (!a) return;
    e.preventDefault();
    openOverlay(a.dataset.type, a.dataset.slug, true);
  });

  // close actions
  closeBtn.addEventListener("click", () => closeOverlay());
  overlay.querySelector(".overlay-backdrop").addEventListener("click", () => closeOverlay());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !overlay.classList.contains("d-none")) closeOverlay();
  });

  // support deep links (#/project/netflix)
  function fromHash() {
    const m = (location.hash || "").match(/^#\/([^/]+)\/([^/]+)$/);
    if (m) openOverlay(m[1], m[2], false);
    else closeOverlay(true);
  }
  window.addEventListener("popstate", fromHash);
  window.addEventListener("hashchange", fromHash);
  fromHash();
})();

