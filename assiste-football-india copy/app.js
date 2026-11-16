/**
 * ASSISTE FOOTBALL INDIA - CORE APPLICATION ENGINE
 * Features:
 * - Authentication (Sign Up, Log In, Demo Quick-Login, Session State)
 * - Profile Creator & FIFA-style Digital Player Card Generator
 * - Team Creation & Squad Roster Management
 * - Indian Grassroots Tournaments & Registration
 * - Live India Fixtures & Scoreboards
 * - Real-time Search & City Filters
 * - Dark/Light Theme Switching
 */

// ==========================================
// 1. DEFAULT DATA & STORAGE INITIALIZATION
// ==========================================

const INITIAL_TEAMS = [
  {
    id: "team-1",
    name: "Bengaluru Strikers FC",
    shortCode: "BSFC",
    city: "Bengaluru",
    state: "Karnataka",
    ground: "Bangalore Football Stadium",
    color: "#10b981",
    formation: "4-3-3",
    motto: "Pace, Precision, and Passion in the Garden City.",
    played: 14,
    won: 11,
    drawn: 2,
    lost: 1,
    points: 35,
    captain: "Sunil Kumar",
    squadCount: 16,
    squad: [
      { id: "p1", name: "Sunil Kumar", number: 10, position: "ST", foot: "Right", role: "Captain" },
      { id: "p2", name: "Aditya Rao", number: 7, position: "RW", foot: "Right", role: "Player" },
      { id: "p3", name: "Kiran Gowda", number: 11, position: "LW", foot: "Left", role: "Player" },
      { id: "p4", name: "Farhan Syed", number: 8, position: "CM", foot: "Right", role: "Player" },
      { id: "p5", name: "Manish Reddy", number: 4, position: "CB", foot: "Right", role: "Vice-Captain" },
      { id: "p6", name: "David Fernandez", number: 1, position: "GK", foot: "Both", role: "Player" }
    ]
  },
  {
    id: "team-2",
    name: "Mumbai City Rovers",
    shortCode: "MCFC",
    city: "Mumbai",
    state: "Maharashtra",
    ground: "Cooperage Football Ground, Colaba",
    color: "#3b82f6",
    formation: "4-2-3-1",
    motto: "Maximum City, Maximum Grit.",
    played: 14,
    won: 9,
    drawn: 3,
    lost: 2,
    points: 30,
    captain: "Rohan Deshmukh",
    squadCount: 18,
    squad: [
      { id: "p7", name: "Rohan Deshmukh", number: 9, position: "ST", foot: "Right", role: "Captain" },
      { id: "p8", name: "Siddharth Shetty", number: 10, position: "CAM", foot: "Left", role: "Vice-Captain" },
      { id: "p9", name: "Armaan Malik", number: 6, position: "CDM", foot: "Right", role: "Player" },
      { id: "p10", name: "Zack D'Souza", number: 5, position: "CB", foot: "Right", role: "Player" }
    ]
  },
  {
    id: "team-3",
    name: "Kolkata Mariners Grassroots",
    shortCode: "KMGR",
    city: "Kolkata",
    state: "West Bengal",
    ground: "Rabindra Sarobar Turf, Kolkata",
    color: "#ef4444",
    formation: "4-3-3",
    motto: "Legacy in Every Pass, Heart in Every Tackle.",
    played: 13,
    won: 9,
    drawn: 2,
    lost: 2,
    points: 29,
    captain: "Subrata Banerjee",
    squadCount: 15,
    squad: [
      { id: "p11", name: "Subrata Banerjee", number: 10, position: "CAM", foot: "Right", role: "Captain" },
      { id: "p12", name: "Debashish Roy", number: 9, position: "ST", foot: "Right", role: "Player" },
      { id: "p13", name: "Anupam Ghosh", number: 3, position: "LB", foot: "Left", role: "Player" }
    ]
  },
  {
    id: "team-4",
    name: "Kerala Sevens Warriors",
    shortCode: "KSW",
    city: "Kerala",
    state: "Malappuram, Kerala",
    ground: "Kottappadi Football Stadium",
    color: "#eab308",
    formation: "7v7",
    motto: "Speed, Sevens Culture, and Unstoppable Thunder.",
    played: 15,
    won: 11,
    drawn: 1,
    lost: 3,
    points: 34,
    captain: "Mohammed Niyas",
    squadCount: 14,
    squad: [
      { id: "p14", name: "Mohammed Niyas", number: 11, position: "LW", foot: "Left", role: "Captain" },
      { id: "p15", name: "Ashique Kurian", number: 7, position: "RW", foot: "Right", role: "Player" },
      { id: "p16", name: "Jithin Varghese", number: 8, position: "CM", foot: "Both", role: "Player" }
    ]
  },
  {
    id: "team-5",
    name: "Delhi Kickers FC",
    shortCode: "DKFC",
    city: "Delhi",
    state: "Delhi NCR",
    ground: "Ambedkar Stadium Pitch 2",
    color: "#f97316",
    formation: "3-5-2",
    motto: "Capital Power, Relentless Ambition.",
    played: 12,
    won: 7,
    drawn: 3,
    lost: 2,
    points: 24,
    captain: "Vikram Chauhan",
    squadCount: 15,
    squad: [
      { id: "p17", name: "Vikram Chauhan", number: 10, position: "CAM", foot: "Right", role: "Captain" },
      { id: "p18", name: "Harsh Sharma", number: 9, position: "ST", foot: "Right", role: "Player" }
    ]
  },
  {
    id: "team-6",
    name: "Goa Coastal Tigers",
    shortCode: "GCT",
    city: "Goa",
    state: "Panaji, Goa",
    ground: "Duler Football Stadium",
    color: "#a855f7",
    formation: "4-3-3",
    motto: "Susegad Outside, Unstoppable on the Pitch.",
    played: 13,
    won: 8,
    drawn: 2,
    lost: 3,
    points: 26,
    captain: "Savio Fernandes",
    squadCount: 16,
    squad: [
      { id: "p19", name: "Savio Fernandes", number: 8, position: "CM", foot: "Both", role: "Captain" },
      { id: "p20", name: "Clarence Dias", number: 7, position: "RW", foot: "Right", role: "Player" }
    ]
  }
];

const INITIAL_TOURNAMENTS = [
  {
    id: "t-1",
    name: "All-India Grassroots Champions Cup 2026",
    city: "Bengaluru",
    dates: "Oct 24 - Oct 26, 2026",
    format: "7-a-side Turf",
    teamsCount: "32 Teams",
    prize: "₹1,50,000",
    status: "Registration Open",
    isOpen: true,
    banner: "https://images.unsplash.com/photo-1529900244934-985fed5bb0df?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "t-2",
    name: "Mumbai Super League Grassroots Trophy",
    city: "Mumbai",
    dates: "Nov 02 - Nov 08, 2026",
    format: "11-a-side Knockout",
    teamsCount: "16 Teams",
    prize: "₹2,00,000",
    status: "Filling Fast (4 Slots Left)",
    isOpen: true,
    banner: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "t-3",
    name: "Delhi NCR Corporate & Club Cup",
    city: "Delhi",
    dates: "Nov 14 - Nov 16, 2026",
    format: "5v5 Futsal Turf",
    teamsCount: "24 Teams",
    prize: "₹90,000",
    status: "Registration Open",
    isOpen: true,
    banner: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "t-4",
    name: "Malappuram Sevens Premier Carnival",
    city: "Kerala",
    dates: "Nov 20 - Nov 28, 2026",
    format: "7v7 Floodlight",
    teamsCount: "48 Teams",
    prize: "₹3,50,000",
    status: "Elite Division Open",
    isOpen: true,
    banner: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&auto=format&fit=crop&q=80"
  }
];

const INITIAL_FIXTURES = [
  {
    id: "fix-1",
    league: "Bangalore Grassroots Championship",
    time: "LIVE • 74' (2nd Half)",
    teamA: "Bengaluru Strikers FC",
    scoreA: 3,
    teamB: "Mumbai City Rovers",
    scoreB: 2,
    status: "Live Streaming on Assiste TV",
    isLive: true
  },
  {
    id: "fix-2",
    league: "All-India Turf League",
    time: "Today • 7:30 PM IST",
    teamA: "Kerala Sevens Warriors",
    scoreA: 0,
    teamB: "Goa Coastal Tigers",
    scoreB: 0,
    status: "Upcoming Match",
    isLive: false
  },
  {
    id: "fix-3",
    league: "Kolkata Elite Weekend Cup",
    time: "FT (Full Time)",
    teamA: "Kolkata Mariners",
    scoreA: 4,
    teamB: "Delhi Kickers FC",
    scoreB: 1,
    status: "Completed",
    isLive: false
  }
];

const INITIAL_LEADERBOARD_PLAYERS = [
  { rank: 1, name: "Sunil Kumar", team: "Bengaluru Strikers", goals: 19, assists: 14, city: "Bengaluru" },
  { rank: 2, name: "Mohammed Niyas", team: "Kerala Sevens", goals: 17, assists: 9, city: "Kerala" },
  { rank: 3, name: "Rohan Deshmukh", team: "Mumbai City Rovers", goals: 14, assists: 11, city: "Mumbai" },
  { rank: 4, name: "Debashish Roy", team: "Kolkata Mariners", goals: 13, assists: 6, city: "Kolkata" },
  { rank: 5, name: "Vikram Chauhan", team: "Delhi Kickers", goals: 11, assists: 12, city: "Delhi" }
];

// App State
let appData = {
  currentUser: null,
  teams: [],
  tournaments: [],
  fixtures: [],
  players: [],
  activeCityFilter: "all"
};

// ==========================================
// 2. LIFECYCLE & INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initTheme();
  setupEventListeners();
  renderAllSections();
  checkAuthSession();
});

function initStorage() {
  // Load or seed Teams
  const storedTeams = localStorage.getItem("assiste_teams");
  if (!storedTeams) {
    localStorage.setItem("assiste_teams", JSON.stringify(INITIAL_TEAMS));
    appData.teams = INITIAL_TEAMS;
  } else {
    appData.teams = JSON.parse(storedTeams);
  }

  // Load Tournaments & Fixtures
  appData.tournaments = INITIAL_TOURNAMENTS;
  appData.fixtures = INITIAL_FIXTURES;
  appData.players = INITIAL_LEADERBOARD_PLAYERS;

  // Load current user if remembered
  const savedUser = localStorage.getItem("assiste_current_user");
  if (savedUser) {
    try {
      appData.currentUser = JSON.parse(savedUser);
    } catch (e) {
      appData.currentUser = null;
    }
  }
}

function setupEventListeners() {
  // Search button
  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => openModal("search-modal"));
  }

  // Theme toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // Mobile menu button
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const closeMobileMenuBtn = document.getElementById("close-mobile-menu");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");

  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener("click", () => mobileDrawer.classList.add("open"));
  }
  if (closeMobileMenuBtn && mobileDrawer) {
    closeMobileMenuBtn.addEventListener("click", () => mobileDrawer.classList.remove("open"));
  }

  // User dropdown toggle
  const userDropdownBtn = document.getElementById("user-dropdown-btn");
  const dropdownContent = document.getElementById("user-dropdown-content");
  if (userDropdownBtn && dropdownContent) {
    userDropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdownContent.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      dropdownContent.classList.remove("show");
    });
  }

  // City filter tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      e.target.classList.add("active");
      const city = e.target.getAttribute("data-city");
      filterByCity(city);
    });
  });

  // Modal Backdrop Click to close
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modal.id);
      }
    });
  });
}

// ==========================================
// 3. AUTHENTICATION & SESSION MANAGEMENT
// ==========================================
function checkAuthSession() {
  const loginBtn = document.getElementById("nav-login-btn");
  const userMenu = document.getElementById("user-profile-menu");
  const mobileAuth = document.getElementById("mobile-auth-section");

  if (appData.currentUser) {
    if (loginBtn) loginBtn.classList.add("hidden");
    if (userMenu) userMenu.classList.remove("hidden");

    document.getElementById("nav-user-name").innerText = appData.currentUser.name;
    document.getElementById("dropdown-role-badge").innerText = appData.currentUser.role || "Player";
    document.getElementById("dropdown-user-email").innerText = appData.currentUser.email;

    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px; margin-bottom:14px;">
          <img src="${appData.currentUser.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}" class="avatar-sm">
          <div>
            <div style="font-weight:700;">${appData.currentUser.name}</div>
            <div style="font-size:0.8rem; color:var(--text-muted);">${appData.currentUser.role}</div>
          </div>
        </div>
        <button class="btn btn-outline btn-block btn-sm mb-2" onclick="openProfileModal(); closeMobileMenu();">My Profile</button>
        <button class="btn btn-primary btn-block btn-sm mb-2" onclick="openTeamModal(); closeMobileMenu();">My Team</button>
        <button class="btn btn-ghost btn-block btn-sm" onclick="logoutUser(); closeMobileMenu();">Sign Out</button>
      `;
    }
  } else {
    if (loginBtn) loginBtn.classList.remove("hidden");
    if (userMenu) userMenu.classList.add("hidden");

    if (mobileAuth) {
      mobileAuth.innerHTML = `
        <button class="btn btn-primary btn-block" onclick="openAuthModal('login'); closeMobileMenu();">
          <i class="fa-solid fa-user-plus"></i> Log In / Join
        </button>
      `;
    }
  }
}

function openAuthModal(tab = "login") {
  switchAuthTab(tab);
  openModal("auth-modal");
}

function switchAuthTab(tab) {
  const tabLogin = document.getElementById("auth-tab-login");
  const tabSignup = document.getElementById("auth-tab-signup");
  const formLogin = document.getElementById("login-form");
  const formSignup = document.getElementById("signup-form");

  if (tab === "login") {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    formLogin.classList.remove("hidden");
    formSignup.classList.add("hidden");
  } else {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    formSignup.classList.remove("hidden");
    formLogin.classList.add("hidden");
  }
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;

  if (!email || !password) {
    showToast("Please enter email and password", "error");
    return;
  }

  // Set logged-in user
  const user = {
    id: "user-" + Date.now(),
    name: email.split("@")[0].toUpperCase() || "Sunil Player",
    email: email,
    role: "Player",
    city: "Bengaluru",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  };

  setUserSession(user);
  closeModal("auth-modal");
  showToast(`Welcome back to Assiste India, ${user.name}! ⚽`);
}

function handleSignupSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const role = document.getElementById("signup-role").value;
  const city = document.getElementById("signup-city").value;

  const newUser = {
    id: "user-" + Date.now(),
    name: name,
    email: email,
    role: role,
    city: city,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
  };

  setUserSession(newUser);
  closeModal("auth-modal");
  showToast(`Welcome to Assiste India, ${name}! Your football account is ready.`);

  // Auto prompt profile creation
  setTimeout(() => {
    openProfileModal();
  }, 600);
}

function quickDemoLogin(type = "player") {
  let demoUser;
  if (type === "manager") {
    demoUser = {
      id: "demo-manager-1",
      name: "Rohan Deshmukh",
      email: "rohan.captain@assiste.in",
      role: "Team Manager",
      city: "Mumbai",
      team: "Mumbai City Rovers",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80"
    };
  } else {
    demoUser = {
      id: "demo-player-1",
      name: "Sunil Kumar",
      email: "sunil.striker@assiste.in",
      role: "Player",
      city: "Bengaluru",
      team: "Bengaluru Strikers FC",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
    };
  }

  setUserSession(demoUser);
  closeModal("auth-modal");
  showToast(`Logged in as ${demoUser.name} (${demoUser.role})`);
}

function setUserSession(user) {
  appData.currentUser = user;
  localStorage.setItem("assiste_current_user", JSON.stringify(user));
  checkAuthSession();

  // Populate profile form if user data matches
  if (document.getElementById("profile-name")) {
    document.getElementById("profile-name").value = user.name;
    document.getElementById("fifa-card-name").innerText = user.name.toUpperCase();
  }
}

function logoutUser() {
  appData.currentUser = null;
  localStorage.removeItem("assiste_current_user");
  checkAuthSession();
  showToast("You have been signed out of Assiste.");
}

// CTA Helpers
function handleHeroCtaClick() {
  if (!appData.currentUser) {
    openAuthModal("signup");
  } else {
    openProfileModal();
  }
}

function handleProfileCardClick() {
  if (!appData.currentUser) {
    openAuthModal("login");
  } else {
    openProfileModal();
  }
}

function handleTeamCardClick() {
  if (!appData.currentUser) {
    openAuthModal("login");
  } else {
    openTeamModal();
  }
}

// ==========================================
// 4. PROFILE & DIGITAL FIFA CARD BUILDER
// ==========================================
function openProfileModal() {
  if (!appData.currentUser) {
    openAuthModal("login");
    return;
  }
  updateFifaCardPreview();
  openModal("profile-modal");
}

function updateFifaCardPreview() {
  const nameInput = document.getElementById("profile-name");
  const posSelect = document.getElementById("profile-position");
  const jerseyInput = document.getElementById("profile-jersey");
  const cityInput = document.getElementById("profile-city");
  const teamInput = document.getElementById("profile-team");

  const nameVal = nameInput ? nameInput.value.trim() : "SUNIL K.";
  const posVal = posSelect ? posSelect.value : "ST";
  const jerseyVal = jerseyInput ? jerseyInput.value : "10";
  const cityVal = cityInput ? cityInput.value : "Bengaluru, IN";
  const teamVal = teamInput ? teamInput.value : "Bengaluru Strikers FC";

  // Calculate dynamic overall rating
  const matches = parseInt(document.getElementById("stat-matches")?.value || "20");
  const goals = parseInt(document.getElementById("stat-goals")?.value || "12");
  const assists = parseInt(document.getElementById("stat-assists")?.value || "8");

  let rating = 78 + Math.min(15, Math.floor((goals * 0.5) + (assists * 0.4)));
  if (rating > 96) rating = 96;

  document.getElementById("fifa-card-name").innerText = nameVal.toUpperCase();
  document.getElementById("fifa-pos-badge").innerText = posVal;
  document.getElementById("fifa-club-name").innerText = teamVal;
  document.getElementById("fifa-card-city").innerText = cityVal;
  document.getElementById("fifa-card-number").innerText = "#" + jerseyVal;
  document.getElementById("fifa-overall-rating").innerText = rating;
}

function handleProfileUpdate(e) {
  e.preventDefault();
  const name = document.getElementById("profile-name").value.trim();
  const jersey = document.getElementById("profile-jersey").value;
  const position = document.getElementById("profile-position").value;
  const foot = document.getElementById("profile-foot").value;
  const city = document.getElementById("profile-city").value.trim();
  const team = document.getElementById("profile-team").value.trim();
  const bio = document.getElementById("profile-bio").value.trim();

  const matches = document.getElementById("stat-matches").value;
  const goals = document.getElementById("stat-goals").value;
  const assists = document.getElementById("stat-assists").value;
  const mvp = document.getElementById("stat-mvp").value;

  const profileData = {
    name, jersey, position, foot, city, team, bio, matches, goals, assists, mvp
  };

  localStorage.setItem("assiste_player_profile", JSON.stringify(profileData));

  // Update current user name if logged in
  if (appData.currentUser) {
    appData.currentUser.name = name;
    localStorage.setItem("assiste_current_user", JSON.stringify(appData.currentUser));
    checkAuthSession();
  }

  updateFifaCardPreview();
  showToast("Profile and Assiste Digital Card updated successfully! 🏆");
  closeModal("profile-modal");
}

function sharePlayerCard() {
  const shareData = {
    title: "Assiste India Player Card",
    text: "Check out my official grassroots football player profile card on Assiste India!",
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    showToast("Player Card link copied to clipboard! Share with your teammates.");
  }
}

// ==========================================
// 5. TEAMS CREATION & SQUAD MANAGEMENT
// ==========================================
function openTeamModal(initialTab = "create") {
  if (!appData.currentUser) {
    openAuthModal("login");
    return;
  }
  switchTeamTab(initialTab);
  renderManagedSquad();
  openModal("team-modal");
}

function switchTeamTab(tab) {
  const createTabBtn = document.getElementById("team-tab-create");
  const manageTabBtn = document.getElementById("team-tab-manage");
  const createPanel = document.getElementById("create-team-panel");
  const managePanel = document.getElementById("manage-squad-panel");

  if (tab === "create") {
    createTabBtn.classList.add("active");
    manageTabBtn.classList.remove("active");
    createPanel.classList.remove("hidden");
    managePanel.classList.add("hidden");
  } else {
    manageTabBtn.classList.add("active");
    createTabBtn.classList.remove("active");
    managePanel.classList.remove("hidden");
    createPanel.classList.add("hidden");
    renderManagedSquad();
  }
}

function handleCreateTeamSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("team-name").value.trim();
  const shortCode = document.getElementById("team-code").value.trim().toUpperCase();
  const city = document.getElementById("team-city").value;
  const ground = document.getElementById("team-ground").value.trim() || "City Turf Arena";
  const color = document.querySelector('input[name="team-color"]:checked')?.value || "#10b981";
  const formation = document.getElementById("team-formation").value;
  const motto = document.getElementById("team-motto").value.trim() || "For the love of football in India.";

  const captainName = appData.currentUser ? appData.currentUser.name : "Captain";

  const newTeam = {
    id: "team-" + Date.now(),
    name: name,
    shortCode: shortCode,
    city: city,
    state: city + ", India",
    ground: ground,
    color: color,
    formation: formation,
    motto: motto,
    played: 0,
    won: 0,
    drawn: 0,
    lost: 0,
    points: 0,
    captain: captainName,
    squadCount: 1,
    squad: [
      { id: "p-capt", name: captainName, number: 10, position: "CM", foot: "Right", role: "Captain" }
    ]
  };

  // Add to appData & localStorage
  appData.teams.unshift(newTeam);
  localStorage.setItem("assiste_teams", JSON.stringify(appData.teams));

  showToast(`Team "${name}" registered successfully on Assiste India! 🇮🇳`);

  // Reset form & view squad
  document.getElementById("create-team-form").reset();
  renderTeamsGrid();
  switchTeamTab("manage");
}

function renderManagedSquad() {
  const userTeam = appData.teams[0] || INITIAL_TEAMS[0];
  const teamTitle = document.getElementById("current-managed-team-name");
  const teamCity = document.getElementById("current-managed-team-city");
  const tbody = document.getElementById("squad-roster-body");

  if (teamTitle) teamTitle.innerText = userTeam.name;
  if (teamCity) teamCity.innerText = `${userTeam.city} • Captain: ${userTeam.captain} • Ground: ${userTeam.ground}`;

  if (!tbody) return;
  tbody.innerHTML = "";

  userTeam.squad.forEach((player, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>#${player.number}</strong></td>
      <td><strong>${player.name}</strong></td>
      <td><span class="badge-role" style="font-size:0.75rem;">${player.position}</span></td>
      <td>${player.foot}</td>
      <td><span style="color:var(--accent-green); font-weight:600;">${player.role}</span></td>
      <td>
        ${player.role === "Captain" ? '<i class="fa-solid fa-crown text-green" title="Captain"></i>' : `
          <button class="icon-btn" style="width:28px;height:28px;font-size:0.85rem;" onclick="removePlayerFromSquad('${player.id}')" title="Remove Player">
            <i class="fa-solid fa-trash text-danger"></i>
          </button>
        `}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function showAddPlayerPrompt() {
  const name = prompt("Enter Player Full Name:");
  if (!name || !name.trim()) return;

  const position = prompt("Enter Position (ST, LW, RW, CAM, CM, CDM, CB, LB, RB, GK):", "CM") || "CM";
  const number = prompt("Enter Jersey Number (1-99):", "7") || "7";

  const userTeam = appData.teams[0];
  if (!userTeam) return;

  const newPlayer = {
    id: "p-" + Date.now(),
    name: name.trim(),
    number: parseInt(number),
    position: position.toUpperCase(),
    foot: "Right",
    role: "Player"
  };

  userTeam.squad.push(newPlayer);
  userTeam.squadCount = userTeam.squad.length;
  localStorage.setItem("assiste_teams", JSON.stringify(appData.teams));

  renderManagedSquad();
  renderTeamsGrid();
  showToast(`${name} added to ${userTeam.name}! ⚽`);
}

function removePlayerFromSquad(playerId) {
  const userTeam = appData.teams[0];
  if (!userTeam) return;

  userTeam.squad = userTeam.squad.filter(p => p.id !== playerId);
  userTeam.squadCount = userTeam.squad.length;
  localStorage.setItem("assiste_teams", JSON.stringify(appData.teams));

  renderManagedSquad();
  renderTeamsGrid();
  showToast("Player removed from squad.");
}

// ==========================================
// 6. RENDER DIRECTORIES & CARDS
// ==========================================
function renderAllSections() {
  renderTeamsGrid();
  renderTournamentsGrid();
  renderFixtures();
  renderLeaderboards();
}

function renderTeamsGrid() {
  const grid = document.getElementById("teams-grid");
  if (!grid) return;

  const filteredTeams = appData.activeCityFilter === "all"
    ? appData.teams
    : appData.teams.filter(t => t.city.toLowerCase() === appData.activeCityFilter.toLowerCase());

  grid.innerHTML = "";

  if (filteredTeams.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        No teams registered in this city yet. Be the first to <a href="javascript:void(0)" onclick="openTeamModal()" style="color:var(--accent-green); text-decoration:underline;">create a team here</a>!
      </div>
    `;
    return;
  }

  filteredTeams.forEach(team => {
    const card = document.createElement("div");
    card.className = "team-card";
    card.innerHTML = `
      <div class="team-card-top">
        <div class="team-badge-circle" style="background: ${team.color || '#10b981'};">
          ${team.shortCode ? team.shortCode.substring(0, 3) : 'FC'}
        </div>
        <div class="team-title-group">
          <h4>${team.name}</h4>
          <span class="team-city-tag"><i class="fa-solid fa-location-dot"></i> ${team.city}, India</span>
        </div>
      </div>
      <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px; min-height:40px;">
        ${team.motto}
      </p>
      <div class="team-stats-strip">
        <div>
          <span>Record</span>
          <span>${team.won}W - ${team.drawn}D - ${team.lost}L</span>
        </div>
        <div>
          <span>Points</span>
          <span>${team.points} Pts</span>
        </div>
        <div>
          <span>Squad</span>
          <span>${team.squadCount || team.squad.length} Players</span>
        </div>
      </div>
      <div class="team-card-footer">
        <button class="btn btn-sm btn-outline flex-1" onclick="viewTeamDetails('${team.id}')">
          <i class="fa-solid fa-eye"></i> View Squad
        </button>
        <button class="btn btn-sm btn-primary flex-1" onclick="joinTeamPrompt('${team.name}')">
          <i class="fa-solid fa-user-plus"></i> Join
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterByCity(cityName) {
  appData.activeCityFilter = cityName;
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    if (tab.getAttribute("data-city").toLowerCase() === cityName.toLowerCase()) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  renderTeamsGrid();
  // smooth scroll to teams section
  const teamsSec = document.getElementById("teams");
  if (teamsSec) {
    teamsSec.scrollIntoView({ behavior: "smooth" });
  }
}

function viewTeamDetails(teamId) {
  const team = appData.teams.find(t => t.id === teamId);
  if (!team) return;

  const content = document.getElementById("team-details-content");
  content.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:20px;">
      <div class="team-badge-circle" style="background:${team.color}; width:60px; height:60px; font-size:1.5rem;">
        ${team.shortCode}
      </div>
      <div>
        <h2 style="font-size:1.6rem; font-weight:800;">${team.name}</h2>
        <p style="color:var(--text-secondary); font-size:0.9rem;">
          <i class="fa-solid fa-location-dot"></i> ${team.city}, India • Home: ${team.ground}
        </p>
      </div>
    </div>
    <div class="demo-login-box" style="margin-bottom:20px;">
      <p><strong>Motto:</strong> "${team.motto}"</p>
      <p style="margin-top:6px;"><strong>Captain:</strong> ${team.captain} | <strong>Formation:</strong> ${team.formation}</p>
    </div>
    <h4 style="margin-bottom:12px; font-size:1.05rem;"><i class="fa-solid fa-users text-green"></i> Squad Roster (${team.squad.length} Players)</h4>
    <div class="squad-table-container">
      <table class="squad-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Position</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          ${team.squad.map(p => `
            <tr>
              <td>#${p.number}</td>
              <td><strong>${p.name}</strong></td>
              <td><span class="badge-role" style="font-size:0.75rem;">${p.position}</span></td>
              <td>${p.role}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
    <div style="margin-top:24px; display:flex; gap:12px;">
      <button class="btn btn-primary flex-1" onclick="joinTeamPrompt('${team.name}')">Request to Join Squad</button>
      <button class="btn btn-outline" onclick="closeModal('team-details-modal')">Close</button>
    </div>
  `;

  openModal("team-details-modal");
}

function joinTeamPrompt(teamName) {
  if (!appData.currentUser) {
    openAuthModal("login");
    return;
  }
  showToast(`Squad trial request sent to the manager of ${teamName}!`);
  closeModal("team-details-modal");
}

// ==========================================
// 7. TOURNAMENTS & REGISTRATION
// ==========================================
function renderTournamentsGrid() {
  const grid = document.getElementById("tournaments-grid");
  if (!grid) return;
  grid.innerHTML = "";

  appData.tournaments.forEach(t => {
    const card = document.createElement("div");
    card.className = "tournament-card";
    card.innerHTML = `
      <div class="tourney-card-banner" style="background-image: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url('${t.banner}');">
        <span class="tourney-badge-status open"><i class="fa-solid fa-bolt"></i> ${t.status}</span>
        <span style="background:rgba(0,0,0,0.7); color:#fbbf24; font-weight:800; font-size:0.85rem; padding:4px 10px; border-radius:9999px;">
          ${t.prize}
        </span>
      </div>
      <div class="tourney-card-body">
        <span class="tourney-city-badge"><i class="fa-solid fa-map-pin"></i> ${t.city}, INDIA</span>
        <h3 class="tourney-title">${t.name}</h3>
        <ul class="tourney-details-list">
          <li><i class="fa-regular fa-calendar"></i> ${t.dates}</li>
          <li><i class="fa-solid fa-futbol"></i> Format: ${t.format}</li>
          <li><i class="fa-solid fa-users"></i> ${t.teamsCount} Max Capacity</li>
        </ul>
        <button class="btn btn-primary btn-block mt-auto" onclick="openTournamentRegisterModal('${t.id}', '${t.name}')">
          <i class="fa-solid fa-trophy"></i> Register Your Team
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openTournamentRegisterModal(tourneyId = "t-1", tourneyName = "All-India Grassroots Champions Cup") {
  if (!appData.currentUser) {
    openAuthModal("login");
    return;
  }

  const select = document.getElementById("tourney-select-team");
  if (select) {
    select.innerHTML = "";
    appData.teams.forEach(team => {
      const opt = document.createElement("option");
      opt.value = team.id;
      opt.textContent = `${team.name} (${team.city})`;
      select.appendChild(opt);
    });
  }

  document.getElementById("tourney-register-title").innerText = `Register for: ${tourneyName}`;
  document.getElementById("tourney-reg-id").value = tourneyId;

  openModal("tournament-modal");
}

function handleTournamentRegistrationSubmit(e) {
  e.preventDefault();
  const select = document.getElementById("tourney-select-team");
  const selectedTeamName = select.options[select.selectedIndex]?.text || "Your Team";

  showToast(`Success! ${selectedTeamName} is registered for the tournament.`);
  closeModal("tournament-modal");
}

// ==========================================
// 8. FIXTURES & LEADERBOARD
// ==========================================
function renderFixtures() {
  const container = document.getElementById("fixtures-list");
  if (!container) return;
  container.innerHTML = "";

  appData.fixtures.forEach(fix => {
    const row = document.createElement("div");
    row.className = "fixture-row";
    row.innerHTML = `
      <div class="fixture-meta">
        <span class="fixture-league">${fix.league}</span>
        <span class="fixture-time">${fix.time}</span>
      </div>
      <div class="fixture-matchup">
        <span class="match-team">${fix.teamA}</span>
        <span class="match-score-pill">${fix.scoreA} - ${fix.scoreB}</span>
        <span class="match-team">${fix.teamB}</span>
      </div>
      <div class="fixture-status-tag">
        <span style="color: ${fix.isLive ? 'var(--accent-red)' : 'var(--text-muted)'}; font-weight:700;">
          ${fix.isLive ? '🔴 LIVE STREAM' : fix.status}
        </span>
      </div>
    `;
    container.appendChild(row);
  });
}

function renderLeaderboards() {
  // Top Clubs
  const teamsContainer = document.getElementById("leaderboard-teams");
  if (teamsContainer) {
    teamsContainer.innerHTML = "";
    const sortedTeams = [...appData.teams].sort((a, b) => b.points - a.points).slice(0, 5);

    sortedTeams.forEach((team, index) => {
      const row = document.createElement("div");
      row.className = "leaderboard-row";
      row.innerHTML = `
        <div class="rank-badge ${index === 0 ? 'top-1' : index === 1 ? 'top-2' : index === 2 ? 'top-3' : ''}">${index + 1}</div>
        <div class="leader-info">
          <div class="leader-title">${team.name}</div>
          <div class="leader-sub">${team.city} • ${team.won} Wins, ${team.played} Played</div>
        </div>
        <div class="leader-stat">${team.points} PTS</div>
      `;
      teamsContainer.appendChild(row);
    });
  }

  // Top Players
  const playersContainer = document.getElementById("leaderboard-players");
  if (playersContainer) {
    playersContainer.innerHTML = "";
    appData.players.forEach(p => {
      const row = document.createElement("div");
      row.className = "leaderboard-row";
      row.innerHTML = `
        <div class="rank-badge ${p.rank === 1 ? 'top-1' : p.rank === 2 ? 'top-2' : p.rank === 3 ? 'top-3' : ''}">${p.rank}</div>
        <div class="leader-info">
          <div class="leader-title">${p.name}</div>
          <div class="leader-sub">${p.team} (${p.city})</div>
        </div>
        <div class="leader-stat">${p.goals}G / ${p.assists}A</div>
      `;
      playersContainer.appendChild(row);
    });
  }
}

// ==========================================
// 9. ORGANIZER & CONTACT FORMS
// ==========================================
function openOrganizerModal() {
  openModal("organizer-modal");
}

function handleOrganizerSubmit(e) {
  e.preventDefault();
  const title = document.getElementById("org-tourney-name").value;
  const city = document.getElementById("org-city").value;

  showToast(`Tournament proposal for "${title}" in ${city} submitted! Assiste organizers team will connect with you via WhatsApp/Call.`);
  closeModal("organizer-modal");
}

function openContactModal() {
  openModal("contact-modal");
}

function handleContactSubmit(e) {
  e.preventDefault();
  showToast("Thank you for reaching out! Assiste India support has received your query.");
  closeModal("contact-modal");
}

function openWhatsAppChat() {
  const msg = encodeURIComponent("Hello Assiste Football India! I'd like more details about creating a team and hosting a tournament on your platform.");
  window.open(`https://api.whatsapp.com/send?phone=919876543210&text=${msg}`, "_blank");
}

// ==========================================
// 10. SEARCH SYSTEM
// ==========================================
function handleGlobalSearch(query) {
  const q = query.trim().toLowerCase();
  const box = document.getElementById("search-results-box");
  if (!box) return;

  if (q.length < 2) {
    box.innerHTML = `<div class="search-placeholder-text">Type at least 2 characters to search across Indian football...</div>`;
    return;
  }

  const matchedTeams = appData.teams.filter(t => t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q));
  const matchedTourneys = appData.tournaments.filter(t => t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q));
  const matchedPlayers = appData.players.filter(p => p.name.toLowerCase().includes(q) || p.city.toLowerCase().includes(q));

  if (matchedTeams.length === 0 && matchedTourneys.length === 0 && matchedPlayers.length === 0) {
    box.innerHTML = `<div class="search-placeholder-text">No matching clubs, players, or tournaments found for "${query}".</div>`;
    return;
  }

  let html = "";

  if (matchedTeams.length > 0) {
    html += `<div style="font-size:0.8rem; font-weight:700; color:var(--accent-green); margin:8px 0 4px;">CLUBS (${matchedTeams.length})</div>`;
    matchedTeams.forEach(t => {
      html += `
        <div class="search-result-item" onclick="closeModal('search-modal'); viewTeamDetails('${t.id}')">
          <div>
            <strong>${t.name}</strong>
            <div style="font-size:0.8rem; color:var(--text-muted);">${t.city}, India • ${t.ground}</div>
          </div>
          <span class="badge-role">${t.points} Pts</span>
        </div>
      `;
    });
  }

  if (matchedTourneys.length > 0) {
    html += `<div style="font-size:0.8rem; font-weight:700; color:var(--accent-green); margin:12px 0 4px;">TOURNAMENTS (${matchedTourneys.length})</div>`;
    matchedTourneys.forEach(t => {
      html += `
        <div class="search-result-item" onclick="closeModal('search-modal'); openTournamentRegisterModal('${t.id}', '${t.name}')">
          <div>
            <strong>${t.name}</strong>
            <div style="font-size:0.8rem; color:var(--text-muted);">${t.city} • ${t.format}</div>
          </div>
          <span class="badge-role" style="color:#fbbf24;">${t.prize}</span>
        </div>
      `;
    });
  }

  if (matchedPlayers.length > 0) {
    html += `<div style="font-size:0.8rem; font-weight:700; color:var(--accent-green); margin:12px 0 4px;">PLAYERS (${matchedPlayers.length})</div>`;
    matchedPlayers.forEach(p => {
      html += `
        <div class="search-result-item">
          <div>
            <strong>${p.name}</strong>
            <div style="font-size:0.8rem; color:var(--text-muted);">${p.team} • ${p.city}</div>
          </div>
          <span style="font-weight:700; color:var(--accent-green);">${p.goals} Goals</span>
        </div>
      `;
    });
  }

  box.innerHTML = html;
}

// ==========================================
// 11. MODAL HELPERS & TOAST SYSTEM
// ==========================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById("mobile-nav-drawer");
  if (drawer) drawer.classList.remove("open");
}

function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-green"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem("assiste_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const target = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", target);
  localStorage.setItem("assiste_theme", target);
  updateThemeIcon(target);
}

function updateThemeIcon(theme) {
  const icon = document.getElementById("theme-icon");
  if (!icon) return;
  if (theme === "light") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-regular fa-moon";
  }
}
