🦷 Digital Challenge App
Flutter Application for Health, AI Radiograph Analysis & Clinic Scheduling

Built for the Digital Challenge 2025 competition.

📱 Overview

Digital Challenge App is a Flutter-based Android application that applies digital technologies in health, focusing on:

🪥 Dental prevention and education

🤖 AI-based radiograph analysis (demo stage)

📅 Digital appointment scheduling

The project aims to show how modern technology — from AI image recognition to mobile health apps — can improve daily health awareness and simplify access to medical services.

🚀 Features
🦷 Dental Prevention

Interactive list of dental care tips.

Daily hygiene reminder (“Did you brush today?” quiz).

Friendly UI using icons and cards.

🤖 AI Radiograph Scanner (Demo)

Upload or capture an X-ray image.

Simple demo logic detects “cavity” or “normal” based on filename.

Includes comments showing where to integrate a real TFLite model (tflite_flutter) for image analysis.

📅 Clinic Appointments

Add, view, and delete appointments.

Stores data locally with sqflite.

Optionally sends a demo POST request to https://httpbin.org/post (simulating clinic API).

🧠 Tech Stack

Flutter 3.x

Dart

SQLite (sqflite) for local data

HTTP package for API calls

Image Picker for radiograph uploads

(Optional) TensorFlow Lite (tflite_flutter) for AI integration

🏗️ How to Build
flutter pub get
flutter build apk --release


The generated file will be at:
build/app/outputs/flutter-apk/app-release.apk

🏆 Competition Context

This project was developed for the Digital Challenge programming competition, under the theme:

“Digital technologies applied in health, environment, and agriculture.”

The app focuses on Health, combining education, AI, and smart connectivity.

👨‍💻 Authors

Ciprian – Developer & Designer
🧠 Passionate about robotics, programming, and digital innovation.

📂 Repository structure
/lib
 ├── main.dart          # App entry point
/pubspec.yaml           # Dependencies
/assets/                # Optional images and AI model

💬 Future Improvements

Integrate real AI model for X-ray classification.

Add Firebase backend for online clinic scheduling.

Improve UI/UX with animations and dark mode.
