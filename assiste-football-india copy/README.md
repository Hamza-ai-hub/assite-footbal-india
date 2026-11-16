# 🇮🇳 Assiste — India’s Grassroots Football Web Platform

A modern, responsive, high-performance web platform built for Indian grassroots football. Inspired by the grassroots tournament design, rebranded from Jazba/Pakistan to **Assiste / India**, with full web authentication, profile creation, and team management.

---

## ✨ Features Included

1. **Brand New Branding for India:**
   - **Name:** **Assiste** (replaced Jazba).
   - **Headline:** **"Let’s Grow India Football."** with emerald neon stadium lighting.
   - **Hero Badge:** *Assiste, India's grassroots football platform*.
   - **Statistics:** Active Indian clubs across Bengaluru, Mumbai, Kolkata, Delhi NCR, Kerala, Goa, etc.

2. **🔐 User Authentication System:**
   - **Sign Up:** Create account with Name, Email, Password, City in India, and Football Role (Player, Team Manager, Tournament Host).
   - **Log In:** Log in with persistent session storage (`localStorage`).
   - **One-Click Demo Accounts:** Test instantly as a Player (*Sunil Kumar*) or Manager (*Rohan Deshmukh*).
   - **Dynamic Navbar:** Shows user profile avatar, name, role badge, and user dropdown menu.

3. **🪪 Player Profile & FIFA-Style Digital Card Builder:**
   - Interactive digital football player card (EA FC / FIFA style) with live stats.
   - Edit Position (ST, LW, RW, CAM, CM, CDM, CB, LB, RB, GK), Jersey #, Dominant Foot, City, Club, and Playing Style.
   - Track career stats: Matches, Goals, Assists, and MVP awards.
   - "Share Player Card" feature.

4. **🛡️ Team Creation & Squad Management:**
   - **Create Team:** Register club name, short acronym (e.g. `BSFC`), Indian city/state, home turf ground, primary badge color, and tactical formation (`4-3-3`, `4-2-3-1`, `7v7 turf`, etc.).
   - **Manage Squad:** Add teammates to your roster, assign squad numbers, assign captain armband, and remove members.
   - Filter clubs by Indian cities (*Bengaluru, Mumbai, Delhi, Kolkata, Kerala, Goa, All India*).

5. **🏆 India Tournaments & Leagues:**
   - Browse tournaments across India (e.g. *All-India Grassroots Champions Cup*, *Mumbai Super League*, *Malappuram Sevens Super League*).
   - One-click team tournament registration form.
   - "Host a Tournament" portal for organizers.

6. **⚡ India Match Fixtures & Live Scoreboard:**
   - Real-time match status (Live broadcast score overlay, Upcoming matches, Completed results).

7. **🔍 Instant Search & Extras:**
   - Real-time global search across Indian teams, players, tournaments, and cities.
   - Dark mode (default aesthetic) and Light mode toggle.
   - Floating WhatsApp community button and Contact Support drawer.

---

## 🚀 How to Run in Visual Studio Code (VS Code)

### Option 1: Using VS Code "Live Server" Extension (Recommended & Easiest)
1. Open **Visual Studio Code**.
2. Click **File > Open Folder...** and select this directory:
   ```
   /Users/macbook/.gemini/antigravity/scratch/assiste-football-india
   ```
3. Install the **Live Server** extension (by *Ritwick Dey*) from the VS Code Extensions tab (`Ctrl+Shift+X` or `Cmd+Shift+X`).
4. Right-click `index.html` and select **"Open with Live Server"**.
5. Your browser will automatically open at `http://127.0.0.1:5500`.

---

### Option 2: Using Built-in Python Server (No Extensions Needed)
1. Open the VS Code Terminal (`Ctrl+\`` or `Cmd+\``).
2. Run:
   ```bash
   python3 -m http.server 3000
   ```
3. Open your browser at:
   ```
   http://localhost:3000
   ```

---

### Option 3: Using Node.js / npx
1. In the VS Code Terminal, run:
   ```bash
   npx serve -l 3000 .
   ```
   *or*
   ```bash
   npm start
   ```
2. Open `http://localhost:3000`.

---

### Option 4: Direct Browser Open
You can simply double-click `index.html` or drag it into Chrome/Safari/Edge. All styles, icons, and features run locally with zero build dependencies!

---

## 📁 File Structure

```
assiste-football-india/
├── index.html        # Main HTML5 semantic structure & interactive modals
├── styles.css        # Responsive dark turf theme, FIFA player card & glassmorphism
├── app.js            # Authentication, Profile builder, Team manager & Search engine
├── package.json      # NPM dev server scripts
└── README.md         # Documentation & VS Code guide
```
