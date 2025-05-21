# Media Partners Showcase

A simple and responsive web project built with HTML, CSS, and JavaScript that dynamically displays a collection of media partner logos. Each logo links to an external page, and the data is managed via a JSON file. The layout is designed to be responsive and mobile-friendly, with clean hover effects.

---

## 🚀 Features

- ✅ **Dynamic rendering** of partner logos using JSON and JavaScript.
- ✅ **Responsive layout** using modern CSS Flexbox.
- ✅ **Hover effects** for engaging interactivity.
- ✅ **Shuffled display order** for fair visibility.
- ✅ **Separation of data and presentation** for scalability and clarity.

---

## 📂 Project Structure

```bash /
├── style.css # Styles with responsive design
├── script.js # JavaScript to fetch/render JSON
├── data.json # Partner data
└── imgs/ # Partner logo images

```

---

## 📱 Responsive Design

The layout uses **Flexbox** and scales logos proportionally with:

```bash
#lista {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.partner {
  max-width: 220px;
  padding: 10px;
}

#lista img {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}
```

Hovering over a logo triggers a subtle animation:

```bash
#lista a:hover img {
  transform: scale(0.9);
  transition: transform 0.6s cubic-bezier(0.33, .02, 0, .94);
}
```

## 🛠️ Sample JSON Format

Partner data is stored in data.json:


```json
{
  "partners": [
    {
      "name": "Macrillo",
      "image": "imgs/macrillo-partner.png",
      "link": "https://www.link.com/"
    },
    {
      "name": "Molocinque",
      "image": "imgs/molocinque-partner.png",
      "link": "https://www.link.com/"
    }
  ]
}
```

## ✅ How to Works

1. `script.js` fetches and parses the JSON
2. The list is shuffled randomly for variety
3. DOM elements are created dynamically:
- `<div class="partner">` with a nested `<a>` and `<img>`
4. The layout is displayed inside #lista.

## 🔧 Getting Started

1. Clone the repository:
`git clone https://github.com/your-username/your-repo.git`
2. Add images to imgs/
3. Update or extend data.json
4. Open index.html in any browser


## 💡 Future Improvements
- Add filtering (e.g., by partner name or type)
- Implement lazy-loading for images
- Support multilingual content
- Add unit tests or data validation for the JSON input


## 📄 License
MIT – Feel free to use and adapt this project for your own needs.