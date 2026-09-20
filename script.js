// Mobile navigation
const nav = document.querySelector('nav');
const menuButton = document.querySelector('.menu');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}


// PROJECT CASE STUDIES
const studies = {
  banking: {
    tag: 'DATA ANALYTICS · DATA ENGINEERING',
    title: 'Personal Banking Customer Analytics',

    copy:
      'A PostgreSQL and Python analytics project built around a reproducible synthetic banking dataset covering customers, accounts, products, and transactions.',

    problem:
      'Build a structured analytics pipeline for exploring customer activity, product usage, transaction patterns, spending behavior, and engagement.',

    build:
      'Designed a relational PostgreSQL schema, generated synthetic banking data with Python, loaded it into PostgreSQL, wrote analytical SQL queries, and used Pandas, SQLAlchemy, and Matplotlib to analyze and visualize the results.',

    outcome:
      'Produced customer and transaction analysis across product adoption, account balances, purchase categories, monthly activity, and customer engagement segments, with data-quality checks for the generated dataset.',

    stack:
      'Python · PostgreSQL · SQL · Pandas · SQLAlchemy · Matplotlib',

    github:
      'https://github.com/Digvijay251/personal-banking-analytics'
  },

  churn: {
    tag: 'MACHINE LEARNING · ANALYTICS',
    title: 'Customer Churn & Retention Analytics',

    copy:
      'A Python analytics project that explores customer churn using a reproducible synthetic dataset and a simple Logistic Regression model.',

    problem:
      'Explore how customer characteristics such as contract type, tenure, support calls, monthly charges, and payment behavior are associated with churn.',

    build:
      'Generated a synthetic dataset of 1,000 customers, analyzed churn patterns with Pandas, created visualizations with Matplotlib, and trained a Logistic Regression model using an 80/20 train-test split.',

    outcome:
      'Compared churn across customer groups and evaluated the model using accuracy, precision, recall, F1 score, a confusion matrix, and Logistic Regression coefficients.',

    stack:
      'Python · Pandas · Matplotlib · scikit-learn · Logistic Regression',

    github:
      'https://github.com/Digvijay251/customer-churn-analytics'
  },

  studenthub: {
    tag: 'SOFTWARE ENGINEERING · FULL STACK',
    title: 'StudentHUB — Real-Time Collaboration',

    copy:
      'A cleaned portfolio refactor of the group-chat and database functionality I developed as part of a five-person university Software Engineering team project.',

    problem:
      'Provide students with persistent, course-based real-time communication through a mobile application.',

    build:
      'Developed and refactored the group-chat system using React Native and TypeScript, Node.js/Express REST APIs, PostgreSQL persistence, Socket.IO real-time messaging, bcrypt password hashing, and JWT-protected API requests.',

    outcome:
      'Built a working authentication and course-chat flow with persistent message history, authenticated sender identity, course-based Socket.IO rooms, and a reproducible PostgreSQL schema.',

    stack:
      'React Native · TypeScript · Node.js · Express.js · PostgreSQL · Socket.IO · JWT · bcrypt · Git',

    github:
      'https://github.com/Digvijay251/studenthub-group-chat'
  }
};


// CASE STUDY DIALOG
const dialog = document.querySelector('#case-study');
const content = document.querySelector('#case-content');
const closeButton = document.querySelector('.close');

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const projectKey = button.dataset.project;
    const study = studies[projectKey];

    if (!study || !dialog || !content) return;

    const githubLink = study.github
      ? `
        <div class="case-actions">
          <a
            class="button"
            href="${study.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repository ↗
          </a>
        </div>
      `
      : '';

    content.innerHTML = `
      <div class="case-tag">${study.tag}</div>

      <h3 class="case-title">
        ${study.title}
      </h3>

      <p class="case-copy">
        ${study.copy}
      </p>

      <div class="case-grid">

        <div>
          <h4>Problem</h4>
          <p>${study.problem}</p>
        </div>

        <div>
          <h4>What I built</h4>
          <p>${study.build}</p>
        </div>

        <div>
          <h4>Outcome</h4>
          <p>${study.outcome}</p>
        </div>

        <div>
          <h4>Stack</h4>
          <p>${study.stack}</p>
        </div>

      </div>

      ${githubLink}
    `;

    dialog.showModal();
  });
});

if (closeButton && dialog) {
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
}

// PROJECT FILTERS
const filterButtons = document.querySelectorAll('[data-filter]');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    projectCards.forEach((card) => {
      const categories = card.dataset.cat
        ? card.dataset.cat.split(' ')
        : [];

      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});



// SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.08
  }
);

document.querySelectorAll('.reveal').forEach((element) => {
  observer.observe(element);
});