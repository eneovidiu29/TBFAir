# TBFair - Travelling Becomes Fair

**TBFair** is a web-based travel agency platform designed to make vacation planning simple and affordable. The project features a responsive design, dynamic price comparisons using Plotly.js, and an interactive offer selector.

## 🚀 Features
* **Interactive Offers:** Dynamic selection between Italy, Turkey, and Spain using custom JavaScript logic to update pricing and imagery in real-time.
* **Data Visualization:** A custom price comparison chart powered by **Plotly.js** to show value against competitors.
* **Animated Earth:** A CSS-only 3D rotating globe animation featured on the About page.
* **Responsive Navigation:** A sticky navbar that hides on scroll-down and reveals on scroll-up for better UX.
* **Contact System:** A functional PHP backend that captures user inquiries and stores them in a MySQL database.

## 🛠️ Tech Stack
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Libraries:**
    * [Plotly.js](https://plotly.com/javascript/) (Data Visualization)
    * [Ionicons](https://ionic.io/ionicons) (Iconography)
* **Backend:** PHP
* **Database:** MySQL

## 📂 Project Structure
* `index.html`: The landing page featuring a full-screen video background and primary destination links.
* `about.html`: Contains the mission statement, Plotly chart, and the animated CSS Earth.
* `offers.html`: The interactive booking section where users can toggle between different country packages.
* `contact.html`: The user inquiry form.
* `trimitere.php`: Handles the server-side logic for processing contact form data.
* `TBF.css`: The central stylesheet containing custom animations and layout grids.
* `buttons.js`: Manages the state and DOM updates for the offer selector.

## ⚙️ Local Setup
To run this project locally, you will need a local server environment like **XAMPP** or **WAMP**.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eneovidiu29/TBFair.git
2. **Move to Web Root:** Place the folder inside your `htdocs` (XAMPP) or `www` (WAMP) directory.
3. **Database Setup:**
   * Open `phpMyAdmin`.
   * Create a database named `eovidiu`.
   * Create a table named `tabel1` with the following columns: `Nume`, `Prenume`, `Telefon`, `Email`, `Mesaj`.
4. **Configuration:**
   The project is currently configured for a local MySQL user `eovidiu` with the password `1234`. You can modify these credentials in `trimitere.php`.
5. **View in Browser:** Navigate to `http://localhost/TBFair/index.html`.
