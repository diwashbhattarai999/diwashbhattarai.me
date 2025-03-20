# Diwash Bhattarai's Portfolio

Welcome to my personal portfolio website! This project showcases my skills,
projects, and experiences as a web developer. Built with modern technologies,
this portfolio is designed to be fast, responsive, and visually appealing.

👉 **Live Demo:**
[https://diwashbhattarai.vercel.app](https://diwashbhattarai.vercel.app)

![image](https://github.com/user-attachments/assets/16456664-79df-4bd3-919e-8c41172cf3c4)


---

## 🚀 Features

- **Responsive Design**: Works seamlessly on all devices (desktop, tablet,
  mobile).
- **Modern Tech Stack**: Built with **Next.js**, **Tailwind CSS**, and
  **TypeScript**.
- **Dark Mode**: Supports light and dark themes for better user experience.
- **Project Showcase**: Highlights my best projects with descriptions,
  technologies used, and live demos.
- **Blog Section**: A place where I share my thoughts, tutorials, and insights
  on web development.
- **Schedule Booking**: Integrated with **Cal.com** for easy scheduling of
  meetings and appointments.

---

## 🛠️ Technologies Used

- **Frontend**:

  - [Next.js](https://nextjs.org/) - React framework for server-side rendering
    and static site generation.
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for
    rapid UI development.
  - [TypeScript](https://www.typescriptlang.org/) - Adds static typing to
    JavaScript for better code quality.
  - [Framer Motion](https://www.framer.com/motion/) - For smooth animations and
    transitions.

- **Other Tools**:
  - [ESLint](https://eslint.org/) - For code linting and maintaining code
    quality.
  - [Prettier](https://prettier.io/) - For code formatting consistency.
  - [GitHub Actions](https://github.com/features/actions) - For CI/CD
    automation.

---

## 📂 Project Structure

Here’s an overview of the project structure:

```
portfolio/
├── public/              # Static assets (images, fonts, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── app/             # Next.js app (routes)
│   ├── styles/          # Global and module-specific styles
│   ├── lib/             # Utility functions and helpers
│   └── types/           # TypeScript type definitions
├── .eslintrc.js         # ESLint configuration
├── .prettierrc.js       # Prettier configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # You're here!
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/diwashbhattarai999/diwashbhattarai.me
   ```

2. Navigate to the project directory:

   ```bash
   cd diwashbhattarai.me
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## 🛠️ Customization

### Adding a New Project

1. Navigate to `src/data/projects.ts`.
2. Add a new project object to the `projects` array:
   ```typescript
   {
     title: "Project Name",
     description: "A brief description of the project.",
     technologies: ["React", "Tailwind CSS", "TypeScript"],
     image: "/images/project-image.png",
     githubUrl: "https://github.com/your-username/project-repo",
     liveUrl: "https://project-demo.com",
     ...
   }
   ```

### Adding a New Blog Post

1. Navigate to the `contents` folder in the root directory.
2. Create a new `.mdx` file for your blog post:

   ```plaintext
   contents/my-new-blog.mdx
   ```

3. Add your blog content in MDX format. For example:

   ```mdx
   ---
   title: 'My New Blog Post'
   date: '2025-04-01'
   description: 'A brief description of the blog post.'
   tags: ['React', 'CSS', 'Web Development']
   coverImage: '/images/blog-image.png'
   readTime: '5 min read'
   ---

   # My New Blog Post

   This is the content of my new blog post written in MDX.
   ```

---

## 🤝 Contributing

Contributions are welcome! If you find any issues or have suggestions for
improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file
for details.

---

## 📬 Contact Me

Have a question or want to collaborate? Feel free to reach out:

- **Email**: [diwashb999@gmail.com](mailto:diwashb999@gmail.com)
- **LinkedIn**: [Diwash Bhattarai](https://linkedin.com/in/diwashb)
- **GitHub**: [@diwashbhattarai999](https://github.com/diwashbhattarai999)

---

⭐️ If you find this project helpful, don't forget to give it a star on GitHub!
