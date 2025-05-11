# Overview Dash Hide

A GNOME Shell extension to hide the dash from the Activities Overview.

## ✨ Features

- Automatically hides the dash in the overview screen  
- Clean and minimal tweak for a distraction-free workspace

## 📦 Installation

### Option 1: Install via Git (recommended for development or latest updates)

1. **Clone this repository directly into your GNOME extensions directory:**

   ```bash
   git clone https://github.com/PrAmOdKjAn/overview-dash-hide.git ~/.local/share/gnome-shell/extensions/overview-dash-hide@pramodkjan
   ```

   > Make sure the folder name matches the UUID defined in `metadata.json`: `overview-dash-hide@pramodkjan`.

2. **Restart GNOME Shell:**
   - On **X11**: Press `Alt + F2`, type `r`, then hit Enter.
   - On **Wayland**: Log out and log back in.

3. **Enable the extension:**
   - Use the **Extensions** app, or
   - Run this in the terminal:

     ```bash
     gnome-extensions enable overview-dash-hide@pramodkjan
     ```

### Option 2: Manual installation from ZIP

1. Download and extract the ZIP file.
2. Move it to the GNOME extensions directory:

   ```bash
   mv overview-dash-hide ~/.local/share/gnome-shell/extensions/overview-dash-hide@pramodkjan
   ```

3. Restart GNOME Shell and enable the extension as described above.

## 🛠️ Development

To make changes, just edit the files in your cloned directory and restart GNOME Shell to see the changes. You can also reload the extension with:

```bash
gnome-extensions reload overview-dash-hide@pramodkjan
```

## 📄 License

MIT License

---

**Maintainer:** [@pramodkjan](https://github.com/PrAmOdKjAn/overview-dash-hide.git)
