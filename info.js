let info = {
  name: "Tanuj Ahuja",
  logo_name: "tanuj",
  flat_picture: require("./src/assets/tanuj.jpg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I am a graduate student at Northeastern University in Computer Science. Prior to starting my masters, I worked as a Software Engineer at Postman (a product used by more than 17 million developers). During my time at Postman, I worked on building highly scalable data pipelines to deliver near-realtime data to data scientists. I also gained experience in designing software products using agile methodology and deploying them on the cloud using CI/CD tools. <br><br>I did my bachelor’s from Guru Gobind Singh Indraprastha University, India in Computer Science and Engineering. During the span of 4 years, I developed various software products with the common guiding principle of easing out the manual processes involved in various industries. As a result, I led the development of various web applications, mobile applications in ReactJS, Java, Python(Flask), Ruby from designing to production-grade deployment on Cloud(AWS, Heroku, Docker).<br><br>My current interests span software, data, and infrastructure engineering. I am actively looking for summer 2022 SWE internship/co-op opportunities where I can apply my skills, as well as grow and learn from my colleagues.",
  links: {
    linkedin: "https://www.linkedin.com/in/tanujahuja/", 
    github: "https://github.com/tanuj-ahuja",
    resume:
      "https://github.com/hrishikeshpaul/portfolio-template/blob/master/src/assets/pdfs/Resume.pdf"
  },
  education: [
    {
      name: "Northeastern University, Boston",
      place: "USA",
      date: "Sept, 2021 - May, 2023",
      degree: "Masters in Computer Science",
      gpa: "4.0/4.0",
      description:
        "Khoury College of Computer Sciences",
      skills: [
        "Programming Design Paradigms",
        "Algorithms",
        "Database Management Systems",
        "Foundation of Artificial Intelligence"
      ]
    },
    {
      name: "Guru Gobind Singh Indraprastha University",
      place: "India",
      date: "Aug, 2016 - Aug, 2020",
      degree: "Bachelors in Technology in Computer Science and Engineering",
      gpa: "9.2/10.0",
      description:
        "",
      skills: [
        "Data Structures",
        "Object Oriented Programming",
        "Problem Solving",
        "Web Technology",
        "Software Engineering"
      ]
    }
  ],
  experience: [
    {
      name: "Postman Inc.",
      place: "Bangalore, India",
      date: "Jun, 2020 - Aug 2021",
      position: "Software Engineer",
      description:
        "Delivered near real time data to Data Analysts/Scientists by developing highly scalable ETL/EL Pipelines in Python, Nodejs on serverless compute (Lambda), while increasing efficiency by 30%. Infrastructure deployment on AWS (PaaS) EBS, ECS, EC2 in VPC for micro-services, thus reducing latency by 50%.",
      skills: ["Python", "Node.js", "AWS", "Docker", "Distributed Systems", "Airflow", "DBT"]
    },
    {
      name: "Leiden University Medical Center",
      place: "Leiden, Netherlands",
      date: "Jun, 2019 - Aug, 2019",
      position: "Undergraduate Researcher",
      description:
        "Developed a deep learning model(similar to 3D U-net) in Tensorflow and Keras to automatically segment bladder, rectum, seminal vesicle, & prostate from CT images. Accepted at IEEE 17th International Symposium on Biomedical Imaging.",
      skills: ["Python", "PyCharm", "Cuda", "GPU", "MeVisLab", "NiftyNet", "SimpleITK", "Tensorflow", "Keras"]
    },
    {
      name: "Ideal Village CCBUL",
      place: "Bangalore, India",
      date: "Aug, 2017 - Nov, 2017",
      position: "Software Engineer Intern",
      description:
        "Responsible for implementing, documenting, testing an employee management system in Java(mobile development), Ruby on Rails(web application), improving overall efficiency of company by 35%. Build interactive visualization using Google Maps API, leading to 50% growth in users.",
      skills: ["Python", "Web App", "Java", "Ruby", "HTML/CSS", "JavaScript", "Google Maps API", "Restful APIs"]
    }
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Python",
        "Javascript",
        "Java",
        "C",
        "C++",
        "Bash",
        "SQL",
        "NoSQL",
        "Ruby"
      ],
      icon: "fa fa-code"
    },
    {
      title: "Cloud Technologies",
      info: [
        "AWS",
        "Docker",
        "Lambda",
        "Kinesis",
        "Kafka",
        "RDS",
        "S3",
        "SQS/SNS"
      ],
      icon: "fa fa-cloud"
    },
    {
      title: "web technologies",
      info: ["Ruby on Rails", "REST", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["PostgreSQL", "Redshift", "MySQL", "NoSQL", "Neo4j", "Firebase", "Redis"],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Ubuntu",
        "Windows",
        "Agile",
        "Heroku",
        "Firebase",
        "Git",
        "JIRA",
        "Confluence"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [
    {
      name: "Redash: Open Source Contributions",
      pictures: [
        {
          img: require("./src/assets/portfolio/redash/one.png")
        }
      ],
      technologies: ["React Native", "Flask", "Cypress", "JavaScript", "Python", "PostgreSQL"],
      category: "Software",
      date: "Jan, 2020 - Mar, 2020",
      github:
        "https://github.com/tanuj-ahuja/redash",
      visit: "https://github.com/tanuj-ahuja/redash",
      description:
        "Introduced various improvements in Redash - data exports, limited download of records, support for DML queries, increasing security of data by 100%, and eliminating dependency on external tools."
    },
    {
      name: "Patient-Man",
      pictures: [
        {
          img: require("./src/assets/portfolio/patientman/three.png")
        }
      ],
      technologies: ["Ruby on Rails", "JavaScript", "HTML", "CSS", "AJAX", "S3", "IMB Cloud", "Sidekiq", "PostgreSQL", "Heroku"],
      category: "Software",
      date: "Jan, 2020 - April  , 2020",
      github: "https://bitbucket.org/anuj1121999/clinic/src/master/",
      visit: "https://bitbucket.org/anuj1121999/clinic/src/master/",
      description:
        "Led development of a SaaS product(web) for managing patients in clinics, in use at few sites across North Delhi, India. Implemented features - vaccination reporting, custom notification for due vaccines, patient management, etc. reducing manual effort by 80%."
    },
    {
      name: "SaveUp",
      pictures: [
        {
          img: require("./src/assets/portfolio/ebay/one.png")
        }
      ],
      technologies: [
        "Android Studio",
        "Java",
        "XML",
        "Firebase",
        "SQL",
        "Android SDK",
        "Git",
        "Postgres"
      ],
      category: "Software",
      github: "https://github.com/tanuj-ahuja/saveup",
      date: "Sept, 2017 - Dec, 2017",
      visit: "https://github.com/tanuj-ahuja/saveup",
      description:
        "Developed an app to send automatic notifications when the price of user’s favorite product drops, using eBay API. 1st in a batch of 120 to develop an Android app 100+ active users. Top 10 teams at the DTU Hackathon 2017."
    },
    {
      name: "Movie Share",
      pictures: [
        {
          img: require("./src/assets/portfolio/moviego/one.png")
        },
        {
          img: require("./src/assets/portfolio/moviego/two.png")
        },
        {
          img: require("./src/assets/portfolio/moviego/three.png")
        }
      ],
      technologies: ["Ruby on Rails", "The Movie Database API", "Heroku", "SQLite", "jQuery", "HTML", "CSS"],
      category: "Software",
      date: "Feb, 2019 - June, 2019",
      github: "https://github.com/tanuj-ahuja/movieshare",
      visit: "https://quiet-thicket-97231.herokuapp.com/",
      description:
        "Build a social networking website with focus on enabling users to share movies they have watched with their friends. Implemented login/sign up for users and modelled relationships between them."
    },
    {
      name: "Book Go",
      pictures: [
        {
          img: require("./src/assets/portfolio/bookgo/one.png")
        },
        {
          img: require("./src/assets/portfolio/bookgo/two.png")
        },
        {
          img: require("./src/assets/portfolio/bookgo/three.png")
        }
      ],
      technologies: ["Ruby on Rails", "Heroku", "SQLite", "jQuery", "HTML", "CSS"],
      category: "Software",
      date: "Aug, 2018 - Oct  , 2018",
      github: "https://github.com/tanuj-ahuja/BOGO",
      visit: "https://agile-tundra-11803.herokuapp.com/",
      description:
        "Wrote codes & configured solutions in Agile methodology to build a software that enables users to exchange books. Merged the above with a recommendation model to provide suggestions based upon previous purchases."
    }
  ],
  recommendations: [
    {
      title:
        "Tanuj already had experience with the U-net architecture and deep learning libraries like Tensorflow and Keras, which enabled him to start working from day one. I was impressed with the results Tanuj was able to achieve within a short period of three months that demonstrates his abilities as a skilled programmer and a researcher. We were able to extend his original work to a conference paper, which got accepted at the IEEE International Symposium on Biomedical Imaging (ISBI) 2020 as a full paper, where Tanuj is a shared first author with Mohamed Elmahdy.",
      author: "Prof. Marius Staring",
      position: "Associate professor & Visiting Scientist",
      company: "Leiden University Medical Center & TU Delft",
      location: "Netherlands"
    },
    {
      title:
        "As a student of my Computer Graphics and Multimedia class, I found Tanuj to be an intelligent and a self-motivated individual who is capable of holding insightful discussions. Moreover, I distinctly remember that he often assisted his bewildered classmates by explaining concepts and helping them write code. Tanuj scored extraordinarily well in Theory of Computation, a subject that demands high logical and thinking ability.",
      author: "Dr. Bhawna Suri",
      position: "Associate Professor",
      company: "Guru Gobind Singh Indraprastha University",
      location: "Delhi, India"
    },
    {
      title:
        "Apart from scoring highly throughout his bachelor's, he brought immense honour and glory to our institute when he scored 95.6% in the seventh semester crediting him with rank 1 at the university level among 1600+ students. It was a great experience to mentor him directly for his major project focusing on facial expression recognition using convolutional neural networks(CNNs) optimized with landmark detection. As a programmer, he is always conscientious and concentrates on writing code that survives the harshness of time and is readable.",
      author: "Ms. Palak Girdhar",
      position: "Assitant Professor",
      company: "Guru Gobind Singh Indraprastha University",
      location: "Delhi, India"
    },
    {
      title:
        "Tanuj worked on extracting research information from the BASE repository to integrate with knowledge management system developed. The clarity of his concepts and thoughts were visible during the in-depth presentations he gave in our biweekly meetings. I was pleasantly surprised and impressed by his understanding of the system that I entrusted him to handle one more project partially built by another student. Nevertheless, Tanuj got comfortable with the pre-written code in no time and deployed the module on our local server.",
      author: "Veena Makhija",
      position: "Scientist G",
      company: "Defence Research and Development Organisation",
      location: "Delhi, India"
    }
  ]
};

export default info;
