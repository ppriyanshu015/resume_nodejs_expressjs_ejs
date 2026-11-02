const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve CSS and other static assets.
app.use(express.static(path.join(__dirname, "public")));

// Resume information passed to the EJS template.
const resume = {
  name: "Pankaj Priyanshu",
  email: "ppriyanshu015@gmail.com",
  phone: "+91 7905775991",
  location: "Varanasi",
  summary:
    "Motivated software application development student with a strong foundation in C, C++, Python, HTML, CSS, and R. Currently pursuing an M.Voc in Software Application Development at Cochin University of Science and Technology. Passionate about mobile application development using Flutter and eager to contribute to innovative software projects while continuously improving technical skills.",
  education: [
    {
      degree: "Master of Vocation (Software Application Development)",
      institution: "Cochin University of Science and Technology",
      period: "Expected 2028",
      result: "Currently pursuing"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Amity University",
      period: "2020 – 2023",
      result: "CGPA: 7.54"
    }
  ],
  technicalSkills: ["C", "C++", "Python", "R", "HTML", "CSS"],
  softSkills: [
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Time Management",
    "Analytical Thinking"
  ],
  hobbies: [
    "Reading",
    "Writing",
    "Learning New Programming Languages",
    "Solving Coding Problems",
    "Reading Technology Blogs"
  ],
  languages: ["English", "Hindi"]
};

app.get("/", (req, res) => {
  res.render("resume", { resume });
});

app.listen(PORT, () => {
  console.log(`Resume website is running at http://localhost:${PORT}`);
});
