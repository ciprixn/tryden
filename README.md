<div align="center">

# 🦷 **TryDen**
### Flutter Application for Dental Prevention, AI Radiograph Analysis & Clinic Scheduling  
**Built by [Ciprian](https://github.com/ciprixn) for the Digital Challenge 2025** 🏆  

---

</div>

## 🌍 Overview  
**TryDen** is a Flutter-based Android app designed to demonstrate how **digital technologies** can enhance **healthcare accessibility** and **education**.  
It focuses on three key areas:  
1. 🪥 **Dental prevention & daily care**  
2. 🤖 **AI-powered (demo) radiograph analysis**  
3. 📅 **Clinic appointment management**

The goal is to make health technology more **interactive, intelligent, and easy to use** — directly from your phone.

---

## 🚀 Features  

### 🦷 Dental Prevention  
- Interactive list of dental hygiene tips (brushing, flossing, diet).  
- Daily reminder quiz: “Did you brush today?” 😁  
- Clean, user-friendly UI using Flutter widgets (`Cards`, `Icons`, `ListTiles`).  

---

### 🤖 AI Radiograph Scanner *(Demo)*  
- Upload or capture a radiograph using `image_picker`.  
- Demo AI logic:  
  - If the filename contains *"carie"* or *"cavity"* → **“Possible cavity detected”**  
  - If it contains *"ok"* or *"normal"* → **“Image appears normal”**  
- Ready for integration with a **real TFLite model** (`tflite_flutter`).  

---

### 📅 Clinic Appointments  
- Add, view, and delete appointments.  
- Stores data locally using **SQLite (`sqflite`)**.  
- Sends optional POST request to `https://httpbin.org/post` to simulate a real clinic API.  

---

## 🧠 Tech Stack
| Technology | Purpose |
|-------------|----------|
| 🐦 **Flutter / Dart** | Cross-platform mobile framework |
| 🗂️ **sqflite** | Local storage for appointments |
| 🖼️ **image_picker** | Select or capture X-rays |
| 🌐 **http** | API requests |
| 🧩 **tflite_flutter** *(optional)* | TensorFlow Lite AI model integration |

---

## 🏗️ Build & Run  

```bash
flutter pub get
flutter build apk --release
