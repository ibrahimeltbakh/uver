# 🎓 University Landing Page

This project is a fully responsive implementation of a modern university landing page UI based on the provided Dribbble design.

🔗 **Live Demo:** https://uver-teal.vercel.app/  
📦 **GitHub Repository:** https://github.com/ibrahimeltbakh/uver

---

## 🚀 Tech Stack

- **Next.js 16**
- **React 19**
- **Tailwind CSS 4**
- **GSAP (GreenSock Animation Platform)**
- **Lucide Icons**

---

## 🎨 Features

### 🔹 **Pixel-Perfect UI**

- Fully matches the original Dribbble concept
- Accurate spacing, typography, and color palette

### 🔹 **Fully Responsive**

- Mobile-first approach
- Optimized for tablet and desktop
- Touch-friendly interactions

### 🔹 **Reusable Components**

- Cards
- Buttons
- Phone Mockup
- Phone Navbar
- Section-based architecture

### 🔹 **Smooth GSAP Animations**

- Staggered reveal animations
- Slide-in from left & right
- Scale-in transitions
- Sticky animations
- Scroll-triggered effects
- Smooth transitions across all sections

---

## 🧩 Project Structure

## 🧩 Project Structure

```
src/
 └── app/
      ├── components/
      │
      │── AboutUs/
      │     └── AboutUsView.jsx
      │
      │── animations/
      │     ├── AnimatedText.jsx
      │     └── PhoneScrollAnimation.jsx
      │
      │── buttons/
      │     └── GetEarlyAccess.jsx
      │
      │── cards/
      │     ├── ApplicationCard.jsx
      │     ├── CollageSuccessCard.jsx
      │     ├── MessageBubble.jsx
      │     └── UniversityCard.jsx
      │
      │── Collage application/
      │     ├── CollageApplicationHeader.jsx
      │     └── CollageApplicationView.jsx
      │
      │── Collage Success/
      │     ├── CollageSuccessView.jsx
      │     ├── Features.jsx
      │     └── HowItWorkHeader.jsx
      │
      │── Hero/
      │     ├── Countdown.jsx
      │     ├── HeroData.jsx
      │     ├── HeroPhoneContent.jsx
      │     ├── HeroView.jsx
      │     ├── Navbar.jsx
      │     ├── Topics.jsx
      │     └── UveerWord.jsx
      │
      │── Main/
      │     ├── PhoneContent/
      │     │     ├── ApplicationContent.jsx
      │     │     ├── ChatContent.jsx
      │     │     ├── RecommendationContent.jsx
      │     │     ├── SearchContent.jsx
      │     │     └── TrackerContent.jsx
      │     │
      │     ├── DisplayDetails.jsx
      │     ├── MainSectionData.js
      │     ├── MainView.jsx
      │     ├── SideBar.jsx
      │     ├── PhoneMock.jsx
      │     └── PhoneNavbar.jsx
      │
      ├── globals.css
      └── page.jsx
```

---

## 🏗️ Sections Included

- **Navbar**
- **Hero Section**
- **Main Section**
- **About Us Section**
- **Cards Section (Reusable)**
- **Buttons (Reusable UI Elements)**
- **Collage Application Section**
- **Collage Success Section**
- **Phone Mock Component**
- **Phone Navbar Component**

---

## 🌀 Animations Used (GSAP)

- **Stagger Animations** (sequential element reveal)
- **Slide-in Animations** (from left/right)
- **Scale-in effects**
- **Sticky section animations**
- **ScrollTrigger animations**
- **Smooth transitions between sections**

These animations help simulate a dynamic landing page with a premium feel.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ibrahimeltbakh/uver.git
cd uver
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run development server

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
npm start
```

---

## 📱 Responsive Breakpoints

- **Mobile:** 320px →
- **Tablet:** 768px →
- **Desktop:** 1024px →

---

## 🧠 Development Approach

1. Started with a **mobile-first** layout.
2. Broke the UI into **reusable components**.
3. Implemented sections one by one following the design.
4. Used **Tailwind CSS utility classes** for speed and consistency.
5. Added **GSAP animations** for smooth and modern interactions.
6. Optimized performance & ensured clean component structure.

---

## 🧨 Challenges Faced

- Matching spacing & typography exactly like the Dribbble design
- Creating smooth animation timing using GSAP
- Building fully reusable components for scalability
- Ensuring perfect consistency across devices

---

## 📸 Demo Video (if applicable)

https://drive.google.com/drive/folders/17qwNq-j90tGHd-N6iKnH4PjR9T2xbVvQ?usp=drive_link

---

## 🧾 License

This project is for educational & assessment purposes.

---

## ✉️ Contact

If you have any questions, feel free to reach out:

**Ibrahim Samir Eltbakh**  
Frontend Developer  
GitHub: https://github.com/ibrahimeltbakh  
portfolio: https://ibrahim-eltbakh-portfolio.netlify.app/
