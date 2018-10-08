/*jshint esversion: 6 */

const arrayData = [
  {
    firstName: 'Rasbin',
    lastName: '',
    title: 'Junior Developer',
    nationality: '',
    src: 'rasbin.jpg',
    alt: 'Rasbin',
    skills: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript',
      'JQuery',
      'React',
      'PHP',
      'MySQL'
    ],
    whySofterDeveloper: 'Limitless opportunities of creation',
    longTermVision: 'IT Service Manager',
    motivatesMe: 'Books',
    favoriteQuote: 'Everything is possible',
    joinedOn: '01-12-2017'
  },
  {
    firstName: 'Aditya',
    lastName: 'Gyawali',
    Title: 'Trainee',
    nationality: 'Nepalese',
    src: 'aditya.jpg',
    alt: 'Aditya',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'JQuery', 'React'],
    whySofterDeveloper:
      'Because you can work on any part of the world with the knowledge you have no language barrier n stuff',
    longTermVision: 'working on projects from home',
    motivatesMe: '',
    favoriteQuote: 'It will take time, but it will happen',
    joinedOn: '22-1-2017'
  },
  {
    firstName: 'Senad',
    lastName: 'Maljici',
    title: 'Junior Javascript Developer ',
    nationality: 'Serbian',
    src: 'senad.jpg',
    alt: 'Senad',
    skills: ['HTML5', 'CSS3', 'Javascript', 'PHP', 'SQL'],
    whySofterDeveloper: 'Making money while having fun',
    longTermVision:
      'Building a great company which will change the world for the better',
    motivatesMe: 'Hamburgers',
    favoriteQuote:
      'Every strike brings me closer to the next home run-Babe Ruth',
    joinedOn: '04.12.2017'
  },
  {
    firstName: 'Sanjog',
    lastName: 'Shrestha',
    title: 'Junior Developer',
    nationality: 'Nepali',
    src: 'sanjog.jpg',
    alt: 'Sanjog',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    whySofterDeveloper: 'Interest',
    longTermVision: 'Professional Software Developer',
    motivatesMe: '',
    favoriteQuote: '',
    joinedOn: '04.12.2017'
  },
  {
    firstName: 'Mohammed',
    lastName: 'Mansoor',
    title: 'Junior web developer',
    nationality: 'Iraq',
    src: 'mohammed1.jpg',
    alt: 'Mohammed Mansoor',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Angular',
      'Nodejs',
      'MongoDB',
      'Python'
    ],
    whySofterDeveloper: '',
    longTermVision: '',
    motivatesMe: '',
    favoriteQuote: '',
    joinedOn: '04-12-2017'
  },

  {
    firstName: 'Hoang Anh',
    lastName: 'Vo',
    title: 'Junior Web Developer',
    nationality: 'Vietnamese',
    src: 'anh.jpg',
    alt: 'Anh Vo',
    skills: [
      'Javascript',
      'Reactjs',
      'Reduxjs',
      'Nodejs',
      'HTML5',
      'CSS3',
      'React-router',
      'Bootstrap',
      'Jquery',
      'PHP',
      'SQL',
      'Photoshop'
    ],
    whySofterDeveloper:
      "Thanks to programming and engineering having the instant feedback, I could continuously move forward in this world. If you don't go forward you gonna fall back",
    longTermVision: 'Yoga+IT entrepreneur',
    motivatesMe:
      "music','books', 'sharing knowledge', 'achieve the goals with my team'",
    favoriteQuote: 'IF YOU WANT TO GET MORE, BECOME MORE',
    joinedOn: '04.12.2017'
  },
  {
    firstName: ' Tareq',
    lastName: 'Mahmud',
    title: 'Aspiring full stack developer',
    nationality: 'Bangladeshi',
    src: 'tareq.jpg',
    alt: 'Tareq',
    skills: [
      'Javascript',
      'Reactjs',
      'Reduxjs',
      'Node.js',
      'HTML5',
      'CSS3',
      'React-router',
      'Bootstrap',
      'Jquery'
    ],
    whySofterDeveloper: 'passion for tech and business',
    longTermVision: 'become a fullstack developer',
    motivatesMe: 'solving everyday problems by using technologies',
    favoriteQuote: 'Do not go gentle into the good night',
    joinedOn: '31.01.2018'
  },
  {
    firstName: 'Abdirahman',
    lastName: 'Ali',
    title: 'trainee',
    Nationality: 'Somali',
    src: 'abdirahman.jpg',
    alt: 'Abdirahman',
    skills: ['HTML', 'CSS', 'Javascript', 'Jqeury', 'react'],
    whySofterDeveloper: 'become an intelligent',
    longTermVision: 'to improve my skills further and become good enough ',
    motivatesMe: 'Always learning new stuff',
    favoriteQuote: '',
    joinedOn: '04/12/2017'
  },
  {
    firstName: 'Sandhya',
    lastName: 'Mahat',
    title: 'Junior Web Developer',
    nationality: 'Nepalese',
    src: 'sandhya.jpg',
    alt: 'Sandhya',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'React/Redux',
      'SQL',
      'PHP'
    ],
    whySofterDeveloper:
      'Because future depends on technology and a software developer manipulates technology.',
    longTermVision: 'CEO of a successful IT company providing jobs to millions',
    motivatesMe:
      'Learning new set of skills while accomplishing real-life projects',
    favoriteQuote:
      'The secret of your success is determined by your daily agenda.',
    joinedOn: '04/12/2017'
  },
  {
    firstName: 'Olujuwon Ayoseyi',
    lastName: 'Alabi',
    title: 'Developer',
    nationality: 'Nigeria',
    src: 'olujuwon.jpg',
    alt: 'Olujuwon Ayoseyi',
    skills: [
      'Javascript',
      'react.js',
      'redux',
      'Node.js',
      'HTML5',
      'CSS3',
      'NPM',
      'DOM',
      'Regex',
      'React-router',
      'Bootstrap',
      'Jquery'
    ],
    whySofterDeveloper: 'Good skill to have',
    motivatesMe: 'Good food',
    longTermVision: 'Entrepreneur',
    favoriteQuote: "..I can't please you...",
    joinedOn: '04-12-2017'
  },
  {
    firstName: 'Quoc Viet',
    lastName: 'Dang',
    title: 'Trainee',
    nationality: 'Vietnam',
    src: 'viet.jpg',
    alt: 'Quoc Viet Dang',
    skills: ['HTML', 'CSS', 'JavaScript'],
    whySofterDeveloper: 'I love web development ',
    longTermVision: 'AI skills',
    motivatesMe: 'A stable job and fun in programming',
    favoriteQuote: 'No pain no gain',
    joinedOn: '04-2018'
  },
  {
    firstName: 'Jaya Kumar',
    lastName: 'Bidari',
    title: 'Junior Developer',
    nationality: 'Nepalese',
    src: 'jaya.jpg',
    alt: 'I bet,Jaya is here',
    skills: [
      ,
      'HTML5',
      'CSS3',
      'JavaScript',
      'React/Redux',
      'MongoDB',
      'Node.js'
    ],
    whySofterDeveloper:
      'To work with technologies that I can use to create things I wish',
    longTermVision: 'To be a senior developer',
    motivatesMe: 'Stories of success even after huge failures',
    favoriteQuote:
      "If nothing changes,nothing changes.If you keep doing what youÔøΩre doing, yourÔøΩre going to keep getting what you're getting.You want change,make some (By Courtney C.Stevens,The Lies About Truth)",
    joinedOn: '16/04/2018'
  },
  {
    firstName: 'Sravanthi ',
    lastName: 'Bandaru',
    title: 'trainee',
    nationality: 'Indian',
    src: 'sravanthi.jpg',
    alt: 'Heloooo',
    skills: ['HTML', 'CSS', 'JAVASCRIPT', ' PYTHON'],
    whySofterDeveloper: 'TO grab more opportunities',
    longTermVision: 'Being a good role model to others',
    motivatesMe:
      'Learn from your mistakes,failure is not the opposite of success itÔøΩs part of success',
    favoriteQuote:
      'Be like yourself. ItÔøΩs you alone can love and motivate yourself',
    joinedOn: '16.02.2018'
  },

  {
    firstName: 'Packia Sheela ',
    lastName: 'Varadhan',
    title: 'Trainee at Integrify',
    nationality: 'Finnish',
    src: 'packia.jpg',
    alt: 'Packia',
    skills: ['HTML', 'CSS', 'Java Script'],
    whySofterDeveloper: 'to get a good job',
    longTermVision: 'to be a good Developer',
    motivatesMe: 'new technologies motivates me to learn more ',
    favoriteQuote: 'learn more ,work hard ',
    joinedOn: ''
  },
  {
    firstName: 'Trung',
    lastName: 'Hoang',
    title: 'dev-wannabe',
    nationality: 'Vietnam',
    src: 'trung.jpg',
    alt: 'Really, no photo here!',
    Skills: [''],
    whySofterDeveloper: 'Why not ?!',
    longTermVision: 'Retired before 50 then work remotely and travel world',
    motivatesMe:
      'Robot gonna take over soon, we should take one step forward. But in short, for not craving',
    favoriteQuote: 'To be or not to be',
    joinedOn: '04.2018'
  },

  {
    firstName: 'Christian',
    lastName: 'Hamamdjian',
    title: 'AD, Web Developer',
    nationality: 'Finnish',
    src: 'christian.jpg',
    alt: 'christian_hamamdjian',
    skills: ['Graphic design', 'HTML5', 'CSS3', 'JavaScript', 'Wordpress'],
    whySofterDeveloper:
      'Because it has the potential to make the world a better place for my children.',
    longTermVision:
      'Having an active role in changing things to the better for as many people as possible through participating in useful web and software development projects.',
    motivatesMe: 'Getting optimal results creating new unique interfaces.',
    favoriteQuote: "Don't give up",
    joinedOn: '16/04/2018'
  },
  {
    firstName: 'Katarina',
    lastName: 'Khan',
    title: 'Trainee Web Developer',
    nationality: 'Slovak',
    src: 'katarina.jpg',
    alt: 'Katarina',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    whySofterDeveloper: 'For brain activity',
    longTermVision: 'Full stack web developer',
    motivatesMe: 'When it works',
    favoriteQuote: 'When it works do not touch',
    joinedOn: '16-04-2018'
  },
  {
    firstName: 'Pok Tik Benjamin',
    lastName: 'Leung',
    title: 'Trainee Web Developer',
    nationality: 'Hong Kong',
    src: 'ben.jpg',
    alt: 'poktikbenjamin.jpg',
    skills: ['JavaScript', 'CSS', 'HTML', 'Java', 'Business Development'],
    whySofterDeveloper:
      'Software will be an important medium through which we interact with our thoughts, with each other, and with the world. To take part in the development of software is to take part in finding new perspectives of life, and perhaps, new meaning to live.',
    longTermVision:
      'To find meaningful work in the digital realm until the robots take over.',
    motivatesMe:
      'The remarkable dumbness of computers motivates me every morning to wake up and fix them.',
    favoriteQuote:
      'Compare yourself to who you were yesterday, not who someone else is today.',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Dita',
    lastName: 'Rahmane',
    title: 'Trainee',
    nationality: 'Latvian',
    src: 'dita.jpg',
    alt: 'Dita',
    skills: ['HTML', 'CSS', 'Javascript', 'jQuery'],
    whySofterDeveloper:
      'Because I enjoy learning it. More I learn more I want to learn.',
    longTermVision: 'Full stack developer',
    motivatesMe: 'Succeeding the goal.',
    favoriteQuote:
      'Everything that happens happens for good, even when it doesnÔøΩt look like',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Nghia(Niko)',
    lastName: 'Le',
    title: 'Student',
    nationality: 'Vietnam',
    src: 'niko.jpg',
    alt: 'Niko',
    skills: ['SASS', 'Javascript', 'React', 'Redux', 'Java', 'SQL'],
    whySofterDeveloper: 'Because I like coding',
    longTermVision: 'Become a Javascript full stack developer',
    motivatesMe: 'My mom',
    favoriteQuote: 'Just do it',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Hai',
    lastName: 'Truong',
    title: 'Trainee',
    nationality: 'Vietnam',
    src: 'hai.jpg',
    Alt: 'happy ximbong',
    skills: ['Javascript', 'Java', 'Linear Algebra', 'Discrete Maths'],
    whySofterDeveloper: 'SW developer title is cool to have',
    longTermVision: 'Machine learning/ Data science',
    motivatesMe: '$$$',
    favoriteQuote: "Whether you think you can or you can't, you're right",
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Phuoc',
    lastName: 'Nguyen',
    title: 'Integrify Trainee',
    nationality: 'Vietnam',
    src: 'phuoc.jpg',
    Alt: 'Phuoc',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Java'],
    whySofterDeveloper: 'Progressive work environment',
    longTermVision: 'Full-stack developer/Data scientist',
    motivatesMe: 'Modern technologies in web dev and data science',
    favoriteQuote:
      "The problem is that there's no standardized API for messages between humans. - mpjme",
    joinedOn: '30.04.2018'
  },
  {
    firstName: 'Andrew',
    lastName: 'Zheng',
    title: 'Backend-developer/DevOps',
    nationality: 'China',
    src: 'andrew.jpg',
    alt: 'Andrew Zheng',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Mongodb'],
    whySofterDeveloper: '',
    longTermVision: 'Full-stack developer',
    motivatesMe: 'FLOSS',
    favoriteQuote: 'He who never hopes, never despair!',
    joinedOn: '16.4.2018'
  },
  {
    firstName: 'Shora',
    lastName: 'Jafar',
    title: 'Integrify Trainee',
    nationality: 'Iran',
    src: 'shora.jpg',
    alt: 'shora',
    skills: ['HTML', 'CSS', 'JavaScript'],
    whySofterDeveloper: 'Enables me to build a decent and stable career',
    longTermVision: 'Becoming a full-stack developer',
    motivatesMe: 'Learning',
    favoriteQuote: '',
    joinedOn: '23/4/2018'
  },
  {
    firstName: 'Bojan ',
    lastName: 'Mitic',
    title: 'Junior Developer',
    nationality: 'Serbian',
    src: 'bojan.jpg',
    alt: 'bojan',
    skills: [
      'HTML',
      'CSS',
      'Bootstrap',
      'JQuery',
      'JavaScript',
      'Node.js',
      'React',
      'MongoDb'
    ],
    whySofterDeveloper: 'I enjoy programming',
    longTermVision: 'Team lead',
    motivatesMe: 'Good food, sunny days...',
    favoriteQuote: 'We become what we imagine ourselves to be',
    joinedOn: '16.4.2018.'
  },
  {
    firstName: 'Quynh',
    lastName: 'Le',
    title: 'trainee',
    nationality: 'Vietnamese',
    src: 'quynh.jpg',
    alt: 'quynh',
    skills: ['HTML', 'CSS', 'JavaScript'],
    whySofterDeveloper: '',
    longTermVision: 'front-end developer',
    motivatesMe: 'movies, a lot of movies',
    favoriteQuote: 'Nothing is impossible',
    joinedOn: '25.04.2018'
  },

  {
    firstName: 'Aditya',
    lastName: 'Rana',
    title: 'Front-end Web developer Trainee',
    nationality: 'Indian',
    src: 'aditya.jpg',
    alt: 'Aditya',
    skills: ['HTML5', 'CSS3', 'SASS', 'Bootstrap', 'javascript', 'jquery'],
    whySofterDeveloper: 'I am passionate about the user interfaces',
    longTermVision: 'I want to be a successful full stack developer.',
    motivatesMe: 'New challenges',
    favoriteQuote:
      'Life is your biggest enemy, to defeat it you have to live it.',
    joinedOn: '16.4.2018'
  },
  {
    firstName: 'Saidur ',
    lastName: 'Rahman',
    title: 'Trainee Web Developer',
    nationality: 'Bangladesh',
    src: 'saidur.jpg',
    alt: 'Saidur',
    skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'PHP', 'MySQL'],
    whySofterDeveloper:
      'ItÔøΩs challenging and itÔøΩs allows to explore oneÔøΩs creativity',
    longTermVision: 'To become a Lead Software Developer',
    motivatesMe: 'New challenges and the passion to become successful',
    favoriteQuote: 'Lost in a sea of nameless spaces',
    joinedOn: '16th April 2018'
  },

  {
    firstName: 'Long ',
    lastName: 'Nghiem',
    title: 'Integrify Trainee',
    nationality: 'Vietnam',
    src: 'long.jpg',
    Alt: 'long avatar',
    skills: ['JavaScript', 'Photoshop'],
    whySofterDeveloper: 'Technology motivates me',
    longTermVision: 'Full-stack web developer, then CIO',
    motivatesMe: 'Technology, Philosophy, Anime',
    favoriteQuote: 'The only thing I know is that I know nothing - Socrates',
    joinedOn: 'April 1, 2018'
  },
  {
    firstName: 'Rojak',
    lastName: 'Amtya',
    title: 'Trainee',
    nationality: 'Nepalese',
    src: 'rojak.jpg',
    alt: 'rojak',
    skills: ['HTML', 'CSS', 'JS'],
    whySofterDeveloper: 'Satisfaction probably',
    longTermVision: 'At least a Full-stack Developer',
    motivatesMe: 'technologies',
    favoriteQuote:
      'They told me : ÔøΩDo something you love everyday, so I do codingÔøΩ :P',
    joinedOn: '16.04.2018'
  },

  {
    firstName: 'Yasir',
    lastName: 'Akbar',
    title: 'Web Developer Trainee',
    nationality: 'Pakistani/Finnish',
    src: 'yasir.jpg',
    alt: 'Yasir',
    skills: ['Html', 'Css', 'Bootstrap', 'Wordpress', 'JavaScript', 'Jquery'],
    whySofterDeveloper:
      'There is always something new to learn in coding and building websites and applications from scratch',
    longTermVision: 'to be a Full Stack Developer/ CEO of Software house',
    motivatesMe: 'Passionate about new coding techniques',
    favoriteQuote: "what doesn't kill you makes you stronger",
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Arifa Begam',
    lastName: 'Mujawar',
    title: 'Junior Front-end Developer',
    nationality: 'Indian',
    src: 'arifa.jpg',
    alt: 'arifa',
    skills: [
      'HTML5',
      'CSS3',
      'Javascript-ES6',
      'jQuery',
      'Java',
      'React',
      'Bootstrap',
      'Object-Oriented Design',
      'Software Engineering',
      'Data Structures',
      'DataBase Management Systems',
      'Sass'
    ],
    whySofterDeveloper:
      'It is 21st Century!!, Will to be part of Automation, To be a producer and not only a consumer',
    longTermVision: 'Full stack Developer',
    motivatesMe: 'Technology, Inventions, working with great coders',
    favoriteQuote:
      'Everything can be achieved by having passion and working dedicatedly',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Mouhssine',
    lastName: 'Idrissi Akhelij',
    title: 'Trainee at Integrify',
    nationality: 'Moroccan',
    src: 'mouhssine.jpg',
    alt: 'mouhssine',
    skills: ['CSS', 'HTML5', 'JavaScript'],
    whySofterDeveloper: 'because it is my passion',
    longTermVision: 'To be senior web developer',
    motivatesMe: 'Learning to use new technologies',
    favoriteQuote:
      'Rien n est bon rien n est mauvais en soi tout depend de notre penseE',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Zsuzsanna',
    lastName: 'Bakos',
    title: 'Trainee',
    nationality: 'Hungarian',
		src: 'zsuzsanna.jpg',
    alt: 'Zsuzsanna Bakos',
    Skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'AutoCad 3D'],
    whySofterDeveloper:
      'I like to create creative design and to challenge myself with new things',
    longTermVision: 'To be a unique Web-Designer',
    motivatesMe:
      'The really challenging Integrify course and the help what I get',
    favoriteQuote: 'Free willing',
    joinedOn: '22-05-2018'
  },
  {
    firstName: 'Khanh',
    lastName: 'Dang',
    nationality: 'Vietnam',
    src: 'khanh.jpg',
    alt: 'Khanh Dang',
    skills: ['HTML', 'CSS', 'Javascript', 'React', 'Node', 'MongoDB', 'SQL'],
    whySofterDeveloper: 'Feel good when code works',
    longTermVision: 'Full Stack Developer/Consultant',
    motivatesMe: 'new knowledge when coding',
    favoriteQuote: 'I walk slowly, but I never walk backward - Abraham Lincoln',
    joinedOn: '20-04-2018'
  },
  {
    firstName: 'Abdi',
    lastName: 'Muleta',
    title: 'Developer and Partnerships Lead',
    nationality: 'Ethiopian',
    src: 'abdi.jpg',
    alt: 'Abdi Muleta',
    skills: ['HTML5', 'CSS3', 'Javascript', 'Python', 'R', 'Photoshop'],
    whySofterDeveloper:
      'To gain the best experiences and to get on top of my technical skills so I would be better equipped to run my own business.',
    longTermVision: 'Serial entrepreneur and investor',
    motivatesMe: 'Disrupting the status quo',
    favoriteQuote:
      'If you want to succeed you should strike out on new paths, rather than travel the worn paths of accepted success.',
    joinedOn: '16.04.2018'
  },
  {
    firstName: 'Kushal',
    lastName: 'Atreya',
    title: 'Software Developer',
    nationality: 'Nepalese',
    src: 'kushal.jpg',
    alt: 'Kushal Atreya Image',
    skills: [
      'HTML5',
      'CSS3',
      'Javascript',
      'React.js',
      'Redux',
      'Node.js',
      'Mongo DB'
    ],
    whySofterDeveloper:
      'Time and again suddenly my computer wouldnÔøΩt work, and then I had to use command prompt to fix it, and I started exploring more about it and loved how powerful that dark blinking rectangle was, wow now I am far from that but still exploring, now I come under the definition of software developer and yes I want to make my living out of it. ',
    longTermVision:
      'To be happy of what I do and to find things that makes me happy doing',
    motivatesMe: 'The release of dopamine when the program runs',
    favoriteQuote: 'One life, Live well',
    joinedOn: '01.08.2018'
  },
  {
    firstName: 'Noman',
    lastName: 'Ashraf',
    title: 'Mr.',
    nationality: 'Swedish/Pakistani',
    src: 'noman.jpg',
    alt: 'Noman',
    skills: [
      'HTML',
      'CSS',
      'Javascript',
      'React.js',
      'Redux',
      'MagoDB',
      'Java',
      'C++'
    ],
    whySofterDeveloper: 'I like programming',
    longTermVision: 'Wish to have own Software House',
    motivatesMe: 'Desire to Learn new Skill',
    favoriteQuote:
      'One of the best programming skills you can have is knowing when to walk away for awhile',
    joinedOn: '01 August 18'
  },
  {
    firstName: 'Steven',
    lastName: 'Nebo',
    title: 'Junior Full-stack Developer',
    nationality: 'Russian',
    src: 'steven.jpg',
    alt: 'steven yo',
    skills: [
      'JavaScript',
      'CSS',
      'Photoshop',
      'React.js',
      'Redux',
      'Node.js',
      'MangoDB',
      'Wordpress'
    ],
    whySofterDeveloper: 'Software is the future',
    longTermVision: 'Scrum Master at one of the largest Nordic corporations',
    motivatesMe:
      'The desire to constantly develop myself and grow my skill set',
    favoriteQuote: 'Be the change you want to see in the world',
    joinedOn: '01/08/2018'
  },
  {
    firstName: 'HyeSoo ',
    lastName: 'Park',
    title: 'trainee',
    nationality: 'Korean',
    src: 'hyeSoo.jpg',
    alt: 'hyeSoo photo',
    skills: ['JavaScript', 'CSS', 'HTML5'],
    whySofterDeveloper:
      'It is amazing that I can build something useful and helpful for people',
    longTermVision: '',
    motivatesMe:
      'Willing to keep learning something new, wonderful people next to me',
    favoriteQuote:
      'The most beautiful things in the world cannot be seen or touched, they are       felt with the heart. To me, you will be unique in all the world.',
    joinedOn: '01.08.2018'
  },
  {
    firstName: 'Anuj',
    lastName: 'Thapa',
    title: 'Mr',
    nationality: 'Nepali',
    src: 'anuj.jpg',
    alt: 'Anuj profile picture',
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'C#'],
    whySofterDeveloper: 'Interested in software development and a good job',
    longTermVision: 'billionaire(at least millionaire)',
    motivatesMe: 'Successful people',
    favoriteQuote: 'Only I can change my life,No one can do it for me',
    joinedOn: 'Aug.2018'
  },
  {
    firstName: 'Richard',
    lastName: 'Jones',
    title: 'Mr',
    nationality: 'English',
    src: 'richard.jpg',
    Alt: 'richard photo',
    skills: [
      'HTML5',
      'CCS',
      'JavaScript',
      'proofreading',
      'copy editing',
      'copywriting'
    ],
    whySofterDeveloper: 'ItÔøΩs as good a job as any',
    longTermVision: 'Acute myopia',
    motivatesMe: 'Fiat currency',
    favoriteQuote:
      'ÔøΩBeware of false knowledge; it is more dangerous than ignorance.ÔøΩ George Bernard Shaw',
    joinedOn: 'Aug. 2018'
  },
  {
    firstName: 'Jolene',
    lastName: 'Hoang',
    title: 'Junior Developer',
    nationality: 'Vietnam',
    src: 'jolene.jpg',
    Alt: 'jolene photo',
    skills: ['HTML', 'CSS', 'JS'],
    whySofterDeveloper: 'is there something else more interesting?',
    longTermVision: 'startup founder',
    motivatesMe: 'waking up for a new challenge everyday',
    favoriteQuote:
      'when you want something all the universe conspires in helping you to achieve it',
    joinedOn: 'August,2018'
  },
  {
    firstName: 'Biruk',
    lastName: 'Yemane',
    title: 'trainee',
    nationality: 'Ethiopian',
    src: 'biruk.jpg',
    Alt: 'birukÔøΩs picture',
    skills: ['HTML5', 'JavaScript', 'CSS', 'SQL databases', 'Java Basics'],
    whySofterDeveloper:
      'working on different projects and with different clients makes it enjoyable',
    longTermVision: 'Join a web development company',
    motivatesMe: 'satisfaction of applying my skills to solve problems',
    favoriteQuote: 'Just do it!',
    joinedOn: '1 Aug 2018'
  },
  {
    firstName: 'Antonija',
    lastName: 'Kasum',
    title: 'trainee',
    nationality: 'Croatian',
    src: 'antonija.jpg',
    alt: 'Antonija Kasum',
    skills: ['HTML', 'CSS', 'Javascript'],
    whySofterDeveloper: 'Ideas come alive by the touch of your fingers',
    longTermVision: '',
    motivatesMe: "Other people's success",
    favoriteQuote: 'If you can think it you can do it!',
    joinedOn: '01.08.2018.'
  },
  {
    firstName: 'Elyas ',
    lastName: 'Addawe',
    title: 'Trainee',
    nationality: 'finnish',
    src: 'elyas.jpg',
    Alt: 'Elyas',
    skills: ['HTML', 'CSS', 'Javascript'],
    whySofterDeveloper: 'I always wanted to create something  ',
    longTermVision: 'Mix business with web developer skills',
    motivatesMe: '',
    favoriteQuote: `But it ainÔøΩt how hard you hit,itÔøΩs about how hard you can get hit and still keep moving forward `,
    joinedOn: '1/august/2018'
  },
  {
    firstName: 'yazan',
    lastName: 'alhalabi',
    title: 'Trainee',
    nationality: 'Syria',
    src: 'yazan.jpg',
    alt: 'Yazan',
    skills: ['JavaScript', 'CSS', 'Photoshop', 'Logical Thinking'],
    whySofterDeveloper:
      'Coding became my creative outlet and I love it for many reasons but mainly because it is a team effort and if I can think it, I can make it reality!',
    longTermVision: 'Become a professional developer',
    motivatesMe: '',
    favoriteQuote: '',
    joinedOn: '1st of August'
  },
  {
    firstName: 'paul',
    lastName: 'kiczko',
    title: 'Trainee',
    nationality: 'polish',
    src: 'paul.jpg',
    alt: 'Paul',
    Skills: ['cooking', 'HTML', 'CSS', 'JavaScript', 'C/C++', 'Python', 'SQL'],
    whySofterDeveloper:
      'I like the results of a successful coding session. Coding is boring sometimes, but the results are thrilling!',
    longTermVision: 'The end of the world',
    motivatesMe: 'coffee',
    favoriteQuote: 'Need more coffee!',
    joinedOn: '1st of August 2018 AD'
  },
  {
    firstName: 'Kiet',
    lastName: 'Nguyen',
    title: 'Developer',
    nationality: ['Vietnamese', 'Finnish'],
    src: 'kiet.jpg',
    alt: 'Kiet',
    skills: ['HTML', 'CSS', 'JavaScript'],
    whySofterDeveloper: 'This is a creative job',
    longTermVision: 'Be able to develop well-known program',
    motivatesMe: 'Problem solving',
    favoriteQuote:
      'A good programmer looks both ways before crossing a one-way street.',
    joinedOn: 'August 1st, 2018'
  },
  {
    firstName: ' Rachita',
    lastName: 'Upreti',
    title: 'Trainee',
    nationality: 'Nepali',
    src: 'rachita.jpg',
    alt: 'Rachita',
    skills: ['HTML', 'CSS', 'JS'],
    whySofterDeveloper: 'Loving with problem , not with solution',
    longTermVision: 'Developer',
    motivatesMe: 'myself',
    favoriteQuote: 'Love with problem , not with solution',
    joinedOn: '01/08/2018'
  },
  {
    firstName: 'Bernard',
    lastName: 'Kakengi',
    title: 'Software developer trainee',
    nationality: 'Tanzania',
    src: 'bernard.jpg',
    Alt: 'bernard Image',
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'RUBY', 'RUBY ON RAILS', 'SQL'],
    whySofterDeveloper:
      'building and designing software for people in need and able to challenge myself',
    longTermVision:
      'Working as a software developer and help other achieving their goals as developers',
    motivatesMe: 'seeing my code running and working as required motivates me.',
    favoriteQuote: 'Another coding day',
    joinedOn: '01/08/2018'
  },
  {
    firstName: 'Tata',
    lastName: 'Boonamnuay',
    title: 'Trainee',
    Nationality: 'Thailand',
    src: 'tata.jpg',
    alt: 'Tata Boonamnuay',
    skills: ['HTML', 'CSS', 'Javascript'],
    whySofterDeveloper: '',
    longTermVision: '',
    motivatesMe: '',
    favoriteQuote: '',
    joinedOn: '08/08/2018'
  },
  {
    firstName: 'Yanze',
    lastName: 'Yu',
    title: 'Trainee',
    nationality: 'Finnish',
    src: 'yanze.jpg',
    alt: 'Yanze',
    skills: [0],
    whySofterDeveloper: "I don't know",
    longTermVision: "I don't know",
    motivatesMe: 'Tea',
    favoriteQuote: 'I donÔøΩt know',
    joinedOn: 'August 2018'
  }
];
