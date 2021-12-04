const data = [
  {
    id: 1,
    left: '',
    center: [
      {
        img: 'fa-envelope-o',
        title: 'Join Us For Email Updates',
        text: 'This is center text 1',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
  {
    id: 2,
    left: '',
    center: [
      {
        img: 'https://res.cloudinary.com/rjsmedia/image/upload/v1638570348/navigation-promo-example_c0vgqu.png',
        title: 'Visit Us In Person',
        text: 'This is center text 2',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
  {
    id: 3,
    left: '',
    center: [
      {
        img: 'https://res.cloudinary.com/rjsmedia/image/upload/v1638570348/navigation-promo-example_c0vgqu.png',
        title: 'Support Local Performances',
        text: 'This is center text 3',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
  {
    id: 4,
    left: '',
    center: [
      {
        img: 'https://res.cloudinary.com/rjsmedia/image/upload/v1638570348/navigation-promo-example_c0vgqu.png',
        title: 'Coming Soon',
        text: 'This is center text 4',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
  {
    id: 5,
    left: '',
    center: [
      {
        img: 'https://res.cloudinary.com/rjsmedia/image/upload/v1638570348/navigation-promo-example_c0vgqu.png',
        title: 'Parties & Events',
        text: 'This is center text 5',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
  {
    id: 6,
    left: '',
    center: [
      {
        img: 'https://res.cloudinary.com/rjsmedia/image/upload/v1638570348/navigation-promo-example_c0vgqu.png',
        title: 'History',
        text: 'This is center text 6',
      },
    ],
    right: [
      { link: '/', text: 'OUR PROMISE' },
      { link: '/', text: 'CALENDAR OF EVENTS' },
      { link: '/', text: 'SUBSCRIPTIONS & SERIES' },
      { link: '/', text: 'GROUP SALES' },
      { link: '/', text: 'BOX OFFICE INFO' },
      { link: '/', text: 'SEATING CHARTS' },
    ],
  },
];

const contentContainer = document.querySelector('.content-container');
const navLink = document.querySelectorAll('.nav-link');
const searchBarWrapper = document.querySelector('.search-bar-wrapper');

const appState = {};

const removeClass = (elem, cl) => {
  elem.classList.remove(cl);
};

const html = (obj) => {
  return `<div class="grid-item left"></div>
      <div class="grid-item center">
      ${obj.center.map((items) => {
        return `<span class="fas fa-envelope"></span>
          <h2>${items.title}</h2>
          <p>${items.text}</p>
          `;
      })}
      </div>
      <div class="grid-item right">
      <ul class="dropdown-list">
        ${obj.right
          .map((item) => {
            console.log(item);
            return `
          <li class="dropdown-list-item"><a class="dropdown-list-link" href="${item.link}">${item.text}</a></li> `;
          })
          .join('')}
      </ul>
      </div>`;
};

const renderDropDown = (id) => {
  let menuDropDown = data.filter((item) => {
    return item.id === id;
  });

  contentContainer.innerHTML = html(menuDropDown[0]);
};

navLink.forEach((item, i) => {
  contentContainer.addEventListener('mouseleave', (e) => {
    navLink.forEach((singleLink) => {
      removeClass(singleLink, 'active');
    });
    contentContainer.classList.remove('show');
  });

  searchBarWrapper.addEventListener('mouseenter', (e) => {
    navLink.forEach((singleLink) => {
      removeClass(singleLink, 'active');
    });
    contentContainer.classList.remove('show');
  });

  item.addEventListener('mouseover', (e) => {
    navLink.forEach((singleLink) => {
      removeClass(singleLink, 'active');
    });
    contentContainer.classList.add('show');
    item.classList.add('active');
    renderDropDown(i + 1);
  });
});
