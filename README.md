# FitLife - Fitness Club Website

A modern, responsive website for a fitness club built with HTML, CSS/SCSS, JavaScript, and Bootstrap 5.

## 📋 Project Overview

FitLife is a professional fitness club website designed to showcase gym facilities, fitness classes, and membership information. The site features a clean, modern design with a focus on user engagement and mobile responsiveness.

### Key Statistics
- **500+** Active Members
- **20+** Expert Trainers
- **60+** Classes Weekly
- **24/7** Gym Access

## 🏗️ Project Structure

```
RSR_Project/
├── index.html              # Home page with hero section and stats
├── feature.html            # Features and why choose us section
├── classes.html            # Available fitness classes
├── contact.html            # Contact form and information
├── navbar.html             # Navigation component (included dynamically)
├── footer.html             # Footer component (included dynamically)
├── css/
│   ├── _default.scss       # Default/global styles
│   ├── _default.css        # Compiled default styles
│   ├── _navbar.scss        # Navigation styles
│   ├── _navbar.css         # Compiled navbar styles
│   ├── _footer.scss        # Footer styles
│   ├── _footer.css         # Compiled footer styles
│   ├── index.scss          # Home page styles
│   ├── index.css           # Compiled home page styles
│   ├── feature.scss        # Features page styles
│   ├── feature.css         # Compiled features styles
│   ├── classes.scss        # Classes page styles
│   ├── classes.css         # Compiled classes styles
│   ├── contact.scss        # Contact page styles
│   └── contact.css         # Compiled contact styles
├── js/
│   └── script.js           # JavaScript utilities (dynamic HTML includes)
└── images/
    └── classes/            # Fitness class images
```

## 🎯 Pages & Features

### Home Page (`index.html`)
- Hero section with motivational messaging
- Statistics cards showcasing gym highlights
- Call-to-action "Join Now" button
- Responsive grid layout

### Features Page (`feature.html`)
- "Why Choose Us" section with benefits cards
- Highlights of modern equipment
- Expert trainers
- Membership programs
- Icon-based feature display

### Classes Page (`classes.html`)
- Available fitness classes with descriptions
- Class cards with instructor information
- Responsive grid layout for class display
- Images for each class type
- Uses Bootstrap Icons for instructor details

### Contact Page (`contact.html`)
- Contact form for inquiries
- Friendly message from gym management
- Contact information and submission functionality
- Responsive form layout

### Navigation & Footer
- Sticky navigation bar with links to all pages
- "Join Now" CTA button in navbar
- Footer with quick links and gym information
- Responsive design across all pages

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3/SCSS** - Styling with Sass preprocessing
- **JavaScript (ES6+)** - Dynamic content loading
- **Bootstrap 5.3.0** - Responsive framework and components
- **Bootstrap Icons** - Icon library for visual elements

## 💻 Key Features

### Dynamic HTML Includes
The project uses a custom JavaScript function to dynamically include HTML components (navbar and footer):
```javascript
fetch(file) // Loads navbar.html and footer.html into pages
```

This approach allows:
- Single-source-of-truth for navigation and footer
- Easy maintenance of shared components
- Consistent user experience across pages

### Responsive Design
- Mobile-first approach
- Bootstrap 5 grid system
- Responsive typography and spacing
- Optimized for desktop, tablet, and mobile devices

### Modular SCSS
- Separated concerns with partial files (_default, _navbar, _footer, etc.)
- Consistent styling across pages
- Easy to maintain and extend

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local development server (recommended for proper HTML include functionality)

### Installation & Running

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd RSR_Project
   ```

2. **Start a local development server**
   
   Using Python (3.x):
   ```bash
   python -m http.server 8000
   ```
   
   Or using Node.js (with http-server):
   ```bash
   npx http-server
   ```
   
   Or using Live Server in VS Code:
   - Install the Live Server extension
   - Right-click on index.html → "Open with Live Server"

3. **Access the website**
   - Navigate to `http://localhost:8000` (or the port shown by your server)
   - Explore all pages through the navigation menu

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🎨 Design Highlights

- **Color Scheme**: Dark background with danger/red accents (#dc3545)
- **Typography**: Large, bold headlines with readable body text
- **Components**: Card-based layouts for features and classes
- **Spacing**: Consistent padding and margins using Bootstrap utilities
- **Icons**: Bootstrap Icons for visual enhancement

## 📝 Content

### Fitness Classes Offered
- Power Yoga
- HIIT Training
- Spin Classes
- Strength Training
- And more...

Each class includes:
- Class image
- Description
- Instructor name
- Duration and schedule information

## 🔧 Development Notes

### Compiling SCSS
If you modify the `.scss` files, compile them to CSS using your preferred SCSS compiler:
```bash
sass css/ --watch
```

Or use Visual Studio Code extensions like "Live Sass Compiler".

### File Dependencies
- All pages include `navbar.html` and `footer.html` dynamically
- All pages link to page-specific CSS files
- `script.js` is loaded deferred on all pages
- Bootstrap CDN is used for CSS and JavaScript

## 📄 Contributing

To contribute to this project:
1. Create a feature branch
2. Make your changes
3. Test across different devices and browsers
4. Submit a pull request with clear descriptions

## 📞 Contact & Support

For inquiries about the gym, use the Contact page to reach out directly through the contact form.

## 📄 License

This project is part of the Module01-FitnessClub training module.

---

**Last Updated:** May 2026

