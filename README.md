# New Year Wishes Generator 🎉

A beautiful, interactive web application that generates personalized New Year wishes. Features a modern design with animated background, responsive layout, and elegant animations.

![New Year Wishes Preview](preview.png)

## ✨ Features

- **Personalized Wishes**: Enter your name to receive a customized New Year greeting
- **Beautiful UI**: Modern card design with animated gradient background
- **Animated Elements**: Floating background "bulbs" with subtle animations
- **Responsive Design**: Optimized for all devices from mobile phones to large desktop screens
- **Interactive Elements**: Typing animation for wishes, hover effects, and smooth transitions
- **Accessibility**: ARIA attributes and keyboard-friendly interface

## 🛠️ Technologies Used

- HTML5
- CSS3 (with animations and responsive design)
- JavaScript (ES6+)
- Google Fonts
- Bootstrap (for utility classes)

## 🚀 Getting Started

### Running Locally

1. **Clone the repository**
   ```
   git clone https://github.com/username/New-Year-Wishes.git
   cd New-Year-Wishes
   ```

2. **Open in browser**
   - Simply open the `index.html` file in any modern web browser
   - No server setup or build process required!

### Online Demo

Visit [demo link](#) to see the application in action.

## 📁 Project Structure

```
New-Year-Wishes/
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── script.js        # Interactive functionality
└── README.md        # Project documentation
```

## 🎨 Customization Options

You can easily customize this project to fit your needs:

### Changing the Year or Theme

1. Open `index.html` and modify the title and heading:
   ```html
   <title>Happy New Year 2082 🎉</title>
   <h1 class="animate">🎉 Happy New Year 2082 🎉</h1>
   ```

### Updating Colors

1. Edit the gradient background in `style.css`:
   ```css
   body {
     background: linear-gradient(135deg, #6e8efb 0%, #a777e3 50%, #8fd3f4 100%);
   }
   ```

2. Change the button colors:
   ```css
   button {
     background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
   }
   ```

### Modifying Wish Messages

Edit the wish generation logic in `script.js`:
```javascript
if (window.innerWidth <= 600) {
    // Change mobile wish text here
    wish = `Dear ${name}, may your new year be filled with joy and success! ✨`;
} else {
    // Change desktop wish text here
    wish = `Dear ${name}, wishing you a year filled with new achievements, happiness, good health, and prosperity! ✨`;
}
```

## 📝 Future Enhancements

- Add share functionality to share wishes on social media
- Include option to download wishes as images
- Add more animation variants and themes
- Implement multilingual support

## 👏 Credits

- Fonts: [Google Fonts](https://fonts.google.com/)
- Icons: [Font Awesome](https://fontawesome.com/)
- Background Animation Inspiration: Age Calculator Project

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Sameer Tharu

---

Made with ❤️ for the New Year! 