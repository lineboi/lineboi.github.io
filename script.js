// =============================================
//  GWIZA.COM — Portfolio JavaScript
// =============================================

// =============================================
//  TRANSLATIONS  (EN / FR / RW)
// =============================================
const translations = {
  en: {
    // Nav
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience',
    'nav.projects': 'Projects', 'nav.education': 'Education',
    'nav.awards': 'Awards', 'nav.gallery': 'Gallery', 'nav.contact': 'Contact',
    // Hero
    'hero.greeting': "Hello, I'm",
    'hero.summary': "Computer Science student at the University of Rwanda, passionate about Data Engineering and building efficient data pipelines that solve real-world problems.",
    'hero.btn.contact': 'Get in Touch', 'hero.btn.cv': 'Download CV',
    'hero.location': 'Kigali, Rwanda', 'photo.badge': 'Data Engineer',
    // Typewriter
    'typewriter': ['Data Engineering Student', 'AI Enthusiast', 'Python Developer', 'Digital Ambassador', 'Problem Solver'],
    // About
    'about.tag': 'Who I Am', 'about.title': 'About Me',
    'about.p1': "I'm a Computer Science student at the <strong>University of Rwanda</strong> with a specialized focus in <strong>Data Engineering</strong>. I'm passionate about transforming raw data into meaningful insights and building systems that make information accessible and actionable.",
    'about.p2': "My practical experience as a <strong>Digital Ambassador at RISA</strong> gave me hands-on exposure to real-world data tracking and community-level digital transformation — training over 250 citizens on e-government platforms.",
    'about.p3': "I thrive at the intersection of technology and community impact, and I'm driven by the goal of leveraging data to build a more connected and informed Rwanda.",
    'about.stat1': 'Citizens Trained', 'about.stat2': 'Years Coding', 'about.stat3': 'Languages',
    'about.info.title': 'Quick Info', 'about.info.name.label': 'Full Name',
    'about.info.email.label': 'Email', 'about.info.phone.label': 'Phone',
    'about.info.location.label': 'Location', 'about.info.availability.label': 'Availability',
    'about.info.availability.value': 'Open to Opportunities',
    // Skills
    'skills.tag': 'What I Know', 'skills.title': 'Technical Skills',
    'skills.programming': 'Programming', 'skills.data': 'Data Management',
    'skills.digital': 'Digital Services', 'skills.soft': 'Soft Skills',
    'skills.languages': 'Languages',
    'lang.rw.level': 'Native', 'lang.en.level': 'Professional Working Proficiency', 'lang.fr.level': 'Intermediate',
    'tag.algorithms': 'Algorithms', 'tag.ds': 'Data Structures', 'tag.csv': 'CSV Handling',
    'tag.dbdesign': 'Database Design', 'tag.pipelines': 'Data Pipelines', 'tag.egov': 'e-Government',
    'tag.literacy': 'Digital Literacy', 'tag.communication': 'Communication', 'tag.teaching': 'Teaching',
    'tag.problemsolving': 'Problem Solving', 'tag.datatrack': 'Data Tracking', 'tag.training': 'Community Training',
    'skills.ai': 'AI Enthusiast', 'skills.ai.desc': 'Passionate about Artificial Intelligence and its real-world applications.',
    'tag.ml': 'Machine Learning', 'tag.nn': 'Neural Networks', 'tag.nlp': 'NLP', 'tag.aitools': 'AI Tools',
    // Experience
    'exp.tag': "What I've Done", 'exp.title': 'Work Experience',
    'exp.job2.title': 'Software Developer', 'exp.job2.org': 'Codes of Africa', 'exp.job2.date': '2024 – Present',
    'exp.job2.bullet1': 'Contributed to software development projects focused on African tech solutions and innovation.',
    'exp.job2.bullet2': 'Collaborated with a team to design and implement software features, improving product quality and user experience.',
    'exp.job2.bullet3': 'Applied Python, data structures, and problem-solving skills to build and optimize application components.',
    'exp.job2.bullet4': 'Gained hands-on experience working in a professional tech environment across real-world projects.',
    'tag.softwaredev': 'Software Development', 'tag.teamwork': 'Teamwork', 'tag.agile': 'Agile',
    'exp.job.title': 'Digital Ambassador', 'exp.job.org': 'Rwanda Information Society Authority (RISA)',
    'exp.bullet1': 'Trained over <strong>250 citizens</strong> on using e-government services like Irembo for health insurance and documentation.',
    'exp.bullet2': 'Built strong communication skills by teaching non-technical users how to navigate digital platforms.',
    'exp.bullet3': 'Used <strong>Excel and Python</strong> to track community training data and organize weekly performance reports.',
    'exp.bullet4': 'Assisted in digital literacy initiatives to increase technology adoption in the Bugomba Cell.',
    // Projects
    'projects.tag': "What I've Built", 'projects.title': 'My Projects',
    'proj.1.title': 'Personal Portfolio Website',
    'proj.1.desc': 'A modern, responsive portfolio website featuring trilingual support (EN/FR/RW), 3D effects, day/night mode, animated interactions, and a live visit counter.',
    'proj.2.title': 'Community Training Tracker',
    'proj.2.desc': 'A Python and Excel-based data tracker built during the RISA digital ambassador program to record, clean, and analyze training sessions for 250+ citizens across Bugomba Cell.',
    'proj.3.title': 'Data Pipeline (ETL)',
    'proj.3.desc': 'An automated ETL pipeline built with Python that extracts data from CSV sources, transforms it with Pandas, and loads structured results into a PostgreSQL database.',
    // Education
    'edu.tag': 'My Background', 'edu.title': 'Education',
    'edu.degree1': 'BSc in Computer Science', 'edu.school1': 'University of Rwanda (CST)',
    'edu.date1': 'Sept 2024 – Present', 'edu.badge1': 'Current',
    'edu.detail1a': 'Focused on Data Engineering, Database Management, and Algorithms',
    'edu.detail1b': 'Applying theoretical knowledge to personal projects involving data cleaning and processing',
    'edu.degree2': 'Advanced Level Certificate (MPC)', 'edu.school2': 'Nyagatare Secondary School',
    'edu.date2': '2020 – 2023', 'edu.badge2': 'Completed',
    'edu.detail2a': 'Specialized in Mathematics, Physics, and Computer Science',
    // Awards
    'awards.tag': 'Recognition', 'awards.title': 'Honors & Awards',
    'award.1.title': 'Digital Ambassador Excellence',
    'award.1.org': 'Rwanda Information Society Authority (RISA)',
    'award.1.desc': 'Recognized for outstanding contribution in digital literacy training, reaching over 250 citizens in the Bugomba Cell and delivering measurable community impact.',
    'award.2.title': 'University Enrollment Merit',
    'award.2.org': 'University of Rwanda (CST)',
    'award.2.desc': 'Selected for the Computer Science program based on strong A-Level performance in Mathematics, Physics, and Computer Science.',
    'award.3.title': 'A-Level MPC Distinction',
    'award.3.org': 'Nyagatare Secondary School',
    'award.3.desc': 'Completed Advanced Level in Mathematics, Physics, and Computer Science with distinction, demonstrating strong analytical and technical aptitude.',
    // Hobbies
    'nav.hobbies': 'Hobbies',
    'hobbies.tag': 'Beyond the Code', 'hobbies.title': 'My Hobbies',
    'hobby.football.title': 'Football',
    'hobby.football.desc': "Football is my greatest passion off the screen. Whether playing with friends or watching my favourite clubs, the beautiful game keeps me energized, focused, and always ready for teamwork.",
    'hobby.billiard.title': 'Billiard',
    'hobby.billiard.desc': "Billiard sharpens my precision and patience. Every shot is a small puzzle — reading angles, planning ahead, and staying calm under pressure, much like debugging a tricky piece of code.",
    'hobby.movies.title': 'Watching Movies',
    'hobby.movies.desc': "Movies are my window to different worlds and perspectives. I love stories that challenge the mind — from sci-fi and thrillers to inspiring biopics about visionaries who changed the world.",
    'hobby.music.title': 'Listening to Music',
    'hobby.music.desc': "Music is my constant companion — whether coding late at night, travelling, or unwinding after a long day. Good rhythms fuel creativity and keep the mind in flow state.",
    'hobby.tag.teamplay': 'Team Play', 'hobby.tag.strategy': 'Strategy', 'hobby.tag.fitness': 'Fitness',
    'hobby.tag.precision': 'Precision', 'hobby.tag.focus': 'Focus', 'hobby.tag.patience': 'Patience',
    'hobby.tag.thriller': 'Thriller', 'hobby.tag.biopic': 'Biopic',
    'hobby.tag.afrobeats': 'Afrobeats', 'hobby.tag.hiphop': 'Hip-Hop', 'hobby.tag.gospel': 'Gospel',
    // Gallery
    'gallery.tag': 'My Journey', 'gallery.title': 'Photo Gallery', 'gallery.coming': 'Coming Soon',
    'gallery.filter.all': 'All', 'gallery.filter.friends': 'With Friends',
    'gallery.filter.uncle': 'As Uncle', 'gallery.filter.ceremony': 'In Ceremony',
    'gallery.filter.family': 'With Family', 'gallery.filter.playing': 'Playing',
    // Contact
    'contact.tag': "Let's Connect", 'contact.title': 'Get In Touch',
    'contact.intro': "I'm currently open to internship opportunities, collaborations, and interesting data engineering projects. Feel free to reach out!",
    'contact.email.label': 'Email', 'contact.phone.label': 'Phone', 'contact.location.label': 'Location',
    'form.name.label': 'Your Name', 'form.name.placeholder': 'John Doe',
    'form.email.label': 'Your Email', 'form.email.placeholder': 'john@example.com',
    'form.message.label': 'Message', 'form.message.placeholder': "Hello Gwiza, I'd like to...",
    'form.submit': 'Send Message', 'form.sent': 'Message Sent!', 'form.error': 'Error. Try again.',
    // Footer
    'footer.copy': '© 2025 Iradukunda Gwiza Moise. All rights reserved.',
    'footer.made': 'Built with passion in Kigali, Rwanda',
  },

  fr: {
    // Nav
    'nav.about': 'À Propos', 'nav.skills': 'Compétences', 'nav.experience': 'Expérience',
    'nav.projects': 'Projets', 'nav.education': 'Formation',
    'nav.awards': 'Récompenses', 'nav.gallery': 'Galerie', 'nav.contact': 'Contact',
    // Hero
    'hero.greeting': "Bonjour, je suis",
    'hero.summary': "Étudiant en Informatique à l'Université du Rwanda, passionné par l'Ingénierie des Données et la création de pipelines de données efficaces pour résoudre des problèmes réels.",
    'hero.btn.contact': 'Me Contacter', 'hero.btn.cv': 'Télécharger CV',
    'hero.location': 'Kigali, Rwanda', 'photo.badge': 'Ingénieur Données',
    // Typewriter
    'typewriter': ["Étudiant en Ingénierie des Données", "Passionné d'IA", 'Développeur Python', 'Ambassadeur Numérique', 'Résolveur de Problèmes'],
    // About
    'about.tag': 'Qui Je Suis', 'about.title': 'À Propos de Moi',
    'about.p1': "Je suis étudiant en Informatique à l'<strong>Université du Rwanda</strong> avec une spécialisation en <strong>Ingénierie des Données</strong>. Je suis passionné par la transformation des données brutes en informations utiles et la création de systèmes qui rendent l'information accessible.",
    'about.p2': "Mon expérience pratique en tant qu'<strong>Ambassadeur Numérique à la RISA</strong> m'a donné une exposition concrète au suivi des données et à la transformation numérique au niveau communautaire — formant plus de 250 citoyens aux plateformes d'e-gouvernement.",
    'about.p3': "Je m'épanouis à l'intersection de la technologie et de l'impact communautaire, animé par l'objectif d'utiliser les données pour bâtir un Rwanda plus connecté et informé.",
    'about.stat1': 'Citoyens Formés', 'about.stat2': 'Ans de Codage', 'about.stat3': 'Langues',
    'about.info.title': 'Infos Rapides', 'about.info.name.label': 'Nom Complet',
    'about.info.email.label': 'E-mail', 'about.info.phone.label': 'Téléphone',
    'about.info.location.label': 'Lieu', 'about.info.availability.label': 'Disponibilité',
    'about.info.availability.value': 'Ouvert aux Opportunités',
    // Skills
    'skills.tag': 'Ce Que Je Sais', 'skills.title': 'Compétences Techniques',
    'skills.programming': 'Programmation', 'skills.data': 'Gestion des Données',
    'skills.digital': 'Services Numériques', 'skills.soft': 'Compétences Relationnelles',
    'skills.languages': 'Langues',
    'lang.rw.level': 'Langue maternelle', 'lang.en.level': 'Niveau professionnel', 'lang.fr.level': 'Intermédiaire',
    'tag.algorithms': 'Algorithmes', 'tag.ds': 'Structures de Données', 'tag.csv': 'Traitement CSV',
    'tag.dbdesign': 'Conception de BDD', 'tag.pipelines': 'Pipelines de Données', 'tag.egov': 'e-Gouvernement',
    'tag.literacy': 'Culture Numérique', 'tag.communication': 'Communication', 'tag.teaching': 'Enseignement',
    'tag.problemsolving': 'Résolution de Problèmes', 'tag.datatrack': 'Suivi des Données', 'tag.training': 'Formation Communautaire',
    'skills.ai': "Passionné d'IA", 'skills.ai.desc': "Passionné par l'Intelligence Artificielle et ses applications dans le monde réel.",
    'tag.ml': 'Apprentissage Automatique', 'tag.nn': 'Réseaux de Neurones', 'tag.nlp': 'TAL', 'tag.aitools': 'Outils IA',
    // Experience
    'exp.tag': "Ce Que J'ai Fait", 'exp.title': 'Expérience Professionnelle',
    'exp.job2.title': 'Développeur Logiciel', 'exp.job2.org': 'Codes of Africa', 'exp.job2.date': '2024 – Présent',
    'exp.job2.bullet1': "Contribution à des projets de développement logiciel axés sur les solutions technologiques africaines.",
    'exp.job2.bullet2': "Collaboration en équipe pour concevoir et implémenter des fonctionnalités logicielles, améliorant la qualité du produit.",
    'exp.job2.bullet3': "Application de Python, des structures de données et de la résolution de problèmes pour optimiser les composants applicatifs.",
    'exp.job2.bullet4': "Acquisition d'une expérience pratique dans un environnement technologique professionnel.",
    'tag.softwaredev': 'Développement Logiciel', 'tag.teamwork': 'Travail en Équipe', 'tag.agile': 'Agile',
    'exp.job.title': 'Ambassadeur Numérique', 'exp.job.org': "Autorité Rwandaise de la Société de l'Information (RISA)",
    'exp.bullet1': "Formé plus de <strong>250 citoyens</strong> à l'utilisation des services d'e-gouvernement comme Irembo pour l'assurance maladie.",
    'exp.bullet2': "Développé de solides compétences en communication en enseignant aux utilisateurs non techniques comment naviguer sur les plateformes numériques.",
    'exp.bullet3': "Utilisé <strong>Excel et Python</strong> pour suivre les données de formation communautaire et organiser des rapports hebdomadaires.",
    'exp.bullet4': "Participé aux initiatives d'alphabétisation numérique pour augmenter l'adoption technologique dans la Cellule Bugomba.",
    // Projects
    'projects.tag': "Ce Que J'ai Construit", 'projects.title': 'Mes Projets',
    'proj.1.title': 'Site Portfolio Personnel',
    'proj.1.desc': "Un site portfolio moderne et responsive avec support trilingue (EN/FR/RW), effets 3D, mode jour/nuit, animations et compteur de visites en direct.",
    'proj.2.title': 'Tracker de Formation Communautaire',
    'proj.2.desc': "Un outil de suivi des données Python et Excel créé durant le programme RISA pour enregistrer et analyser les sessions de formation pour plus de 250 citoyens.",
    'proj.3.title': 'Pipeline de Données (ETL)',
    'proj.3.desc': "Un pipeline ETL automatisé en Python qui extrait des données de fichiers CSV, les transforme avec Pandas et les charge dans une base PostgreSQL.",
    // Education
    'edu.tag': 'Mon Parcours', 'edu.title': 'Formation',
    'edu.degree1': 'Licence en Informatique', 'edu.school1': "Université du Rwanda (CST)",
    'edu.date1': 'Sept. 2024 – Présent', 'edu.badge1': 'En cours',
    'edu.detail1a': "Spécialisation en Ingénierie des Données, Gestion de Bases de Données et Algorithmes",
    'edu.detail1b': "Application des connaissances théoriques à des projets personnels de nettoyage et traitement de données",
    'edu.degree2': "Certificat de Niveau Avancé (MPC)", 'edu.school2': 'Lycée de Nyagatare',
    'edu.date2': '2020 – 2023', 'edu.badge2': 'Terminé',
    'edu.detail2a': "Spécialisation en Mathématiques, Physique et Informatique",
    // Awards
    'awards.tag': 'Reconnaissance', 'awards.title': 'Honneurs & Récompenses',
    'award.1.title': 'Excellence en Ambassade Numérique',
    'award.1.org': "Autorité Rwandaise de la Société de l'Information (RISA)",
    'award.1.desc': "Reconnu pour une contribution exceptionnelle à la formation en alphabétisation numérique, atteignant plus de 250 citoyens dans la Cellule Bugomba.",
    'award.2.title': "Mérite d'Inscription Universitaire",
    'award.2.org': "Université du Rwanda (CST)",
    'award.2.desc': "Sélectionné pour le programme Informatique sur la base de solides performances au niveau avancé en Mathématiques, Physique et Informatique.",
    'award.3.title': "Distinction Niveau Avancé MPC",
    'award.3.org': "Lycée de Nyagatare",
    'award.3.desc': "Réussite avec distinction du Niveau Avancé en Mathématiques, Physique et Informatique, démontrant de solides aptitudes analytiques et techniques.",
    // Hobbies
    'nav.hobbies': 'Loisirs',
    'hobbies.tag': 'Au-delà du Code', 'hobbies.title': 'Mes Loisirs',
    'hobby.football.title': 'Football',
    'hobby.football.desc': "Le football est ma plus grande passion en dehors de l'écran. Que ce soit jouer avec des amis ou suivre mes clubs favoris, ce beau sport me maintient énergisé, concentré et toujours prêt pour le travail d'équipe.",
    'hobby.billiard.title': 'Billard',
    'hobby.billiard.desc': "Le billard affûte ma précision et ma patience. Chaque coup est un petit puzzle — lire les angles, planifier à l'avance et rester calme sous pression, tout comme déboguer un code complexe.",
    'hobby.movies.title': 'Regarder des Films',
    'hobby.movies.desc': "Les films sont ma fenêtre sur différents mondes et perspectives. J'adore les histoires qui challengent l'esprit — de la science-fiction aux thrillers en passant par les biopics inspirants.",
    'hobby.music.title': "Écouter de la Musique",
    'hobby.music.desc': "La musique est ma compagne constante — que ce soit en codant tard le soir, en voyageant ou en me détendant après une longue journée. De bons rythmes stimulent la créativité.",
    'hobby.tag.teamplay': "Jeu d'Équipe", 'hobby.tag.strategy': 'Stratégie', 'hobby.tag.fitness': 'Forme Physique',
    'hobby.tag.precision': 'Précision', 'hobby.tag.focus': 'Concentration', 'hobby.tag.patience': 'Patience',
    'hobby.tag.thriller': 'Thriller', 'hobby.tag.biopic': 'Biopic',
    'hobby.tag.afrobeats': 'Afrobeats', 'hobby.tag.hiphop': 'Hip-Hop', 'hobby.tag.gospel': 'Gospel',
    // Gallery
    'gallery.tag': 'Mon Parcours', 'gallery.title': 'Galerie Photos', 'gallery.coming': 'Bientôt',
    'gallery.filter.all': 'Tout', 'gallery.filter.friends': 'Avec Amis',
    'gallery.filter.uncle': 'En Tant qu\'Oncle', 'gallery.filter.ceremony': 'En Cérémonie',
    'gallery.filter.family': 'En Famille', 'gallery.filter.playing': 'Jeux',
    // Contact
    'contact.tag': 'Connectons-nous', 'contact.title': 'Contactez-moi',
    'contact.intro': "Je suis actuellement ouvert aux opportunités de stage, aux collaborations et aux projets d'ingénierie des données. N'hésitez pas à me contacter !",
    'contact.email.label': 'E-mail', 'contact.phone.label': 'Téléphone', 'contact.location.label': 'Lieu',
    'form.name.label': 'Votre Nom', 'form.name.placeholder': 'Jean Dupont',
    'form.email.label': 'Votre E-mail', 'form.email.placeholder': 'jean@exemple.com',
    'form.message.label': 'Message', 'form.message.placeholder': "Bonjour Gwiza, je voudrais...",
    'form.submit': 'Envoyer le Message', 'form.sent': 'Message Envoyé !', 'form.error': 'Erreur. Réessayez.',
    // Footer
    'footer.copy': '© 2025 Iradukunda Gwiza Moise. Tous droits réservés.',
    'footer.made': 'Construit avec passion à Kigali, Rwanda',
  },

  rw: {
    // Nav
    'nav.about': 'Ibyerekeye', 'nav.skills': 'Ubuhanga', 'nav.experience': 'Uburambe',
    'nav.projects': 'Imishinga', 'nav.education': 'Amashuri',
    'nav.awards': 'Ibihembo', 'nav.gallery': 'Amafoto', 'nav.contact': 'Tumanahane',
    // Hero
    'hero.greeting': "Muraho, ndi",
    'hero.summary': "Ndi umunyeshuri w'Siyansi ya Mudasobwa muri Kaminuza y'u Rwanda, nkunda cyane ubwubatsi bw'amakuru no kubaka imiyoboro y'amakuru ikora neza ikemura ibibazo by'isi nyaryo.",
    'hero.btn.contact': 'Ntumanahane', 'hero.btn.cv': 'Pakurura CV',
    'hero.location': 'Kigali, u Rwanda', 'photo.badge': 'Inzobere mu Makuru',
    // Typewriter
    'typewriter': ["Umunyeshuri w'Ubwubatsi bw'Amakuru", 'Inkunda AI', 'Umuhanga wa Python', 'Intumwa ya Dijitali', 'Umushoboye Ibibazo'],
    // About
    'about.tag': 'Uwo Ndi We', 'about.title': 'Ibyerekeye Jye',
    'about.p1': "Ndi umunyeshuri w'Siyansi ya Mudasobwa muri <strong>Kaminuza y'u Rwanda</strong> nshishikariye cyane <strong>ubwubatsi bw'amakuru</strong>. Nkunda guhindura amakuru atandukanye mu makuru afite agaciro no kubaka sisitemu zituma amakuru agerwaho n'abantu.",
    'about.p2': "Uburambe bwanjye nk'<strong>Intumwa ya Dijitali muri RISA</strong> bwampaye uburambe bw'isi nyaryo mu gukurikirana amakuru no guhindura imirimo ya dijitali ku rwego rw'abaturage — nshimangira abantu barenga 250 gukoresha serivisi za leta ya dijitali.",
    'about.p3': "Nishimira gukorana ibikorwa bya tekinoloji n'ingaruka ku muturage, kandi nshoboye gukoresha amakuru mu kubaka u Rwanda rwibasiye amakuru.",
    'about.stat1': 'Abaturage Bahuguwe', 'about.stat2': "Imyaka yo Gupanga", 'about.stat3': 'Indimi',
    'about.info.title': 'Amakuru Make', 'about.info.name.label': 'Amazina Yose',
    'about.info.email.label': 'Imeri', 'about.info.phone.label': 'Telefoni',
    'about.info.location.label': 'Aho Atuye', 'about.info.availability.label': 'Ubushobozi',
    'about.info.availability.value': 'Nishimiye Amahirwe',
    // Skills
    'skills.tag': 'Ibyo Nzi', 'skills.title': 'Ubuhanga bwa Tekiniki',
    'skills.programming': 'Porogaramu', 'skills.data': "Gucunga Amakuru",
    'skills.digital': 'Serivisi za Dijitali', 'skills.soft': 'Ubuhanga Bwihariye',
    'skills.languages': 'Indimi',
    'lang.rw.level': "Ururimi rw'Ububiko", 'lang.en.level': 'Inzobere mu Kazi', 'lang.fr.level': 'Inzira yo Hagati',
    'tag.algorithms': 'Algoriti', 'tag.ds': "Imitunganyirize y'Amakuru", 'tag.csv': "Gukora na CSV",
    'tag.dbdesign': "Kubaka Imbuga z'Amakuru", 'tag.pipelines': "Imiyoboro y'Amakuru", 'tag.egov': 'Leta ya Dijitali',
    'tag.literacy': 'Ubumenyi bwa Dijitali', 'tag.communication': 'Gutumanahana', 'tag.teaching': 'Kwigisha',
    'tag.problemsolving': 'Gukemura Ibibazo', 'tag.datatrack': "Gukurikirana Amakuru", 'tag.training': "Amahugurwa y'Abaturage",
    'skills.ai': 'Inkunda AI', 'skills.ai.desc': "Nkunda cyane ubwenge bwa mudasobwa n'ibikorwa byayo mu isi nyaryo.",
    'tag.ml': 'Kwigira kwa Mudasobwa', 'tag.nn': 'Imiyoboro ya Neurone', 'tag.nlp': 'Gutunganya Ururimi', 'tag.aitools': "Ibyuma bya AI",
    // Experience
    'exp.tag': 'Ibyo Nakoze', 'exp.title': 'Uburambe mu Kazi',
    'exp.job2.title': 'Umunyamwuga wa Porogaramu', 'exp.job2.org': 'Codes of Africa', 'exp.job2.date': '2024 – Ubu',
    'exp.job2.bullet1': "Yakoze ku mirimo y'iterambere rya porogaramu yibanda ku bisubizo bya tekinoloji muri Afurika.",
    'exp.job2.bullet2': "Yakoranye n'itsinda mu gutekereza no gushyira mu bikorwa ibiranga porogaramu, byungura ubwiza bw'igicuruzwa.",
    'exp.job2.bullet3': "Yakoresheje Python, imitunganyirize y'amakuru, no gukemura ibibazo mu kubaka no kunoza ibice by'aplikasiyo.",
    'exp.job2.bullet4': "Yaronse uburambe bw'isi nyaryo mu kazi mu bidukikije bya tekinoloji by'inzobere.",
    'tag.softwaredev': "Iterambere rya Porogaramu", 'tag.teamwork': "Gukorana n'Itsinda", 'tag.agile': 'Agile',
    'exp.job.title': 'Intumwa ya Dijitali', 'exp.job.org': "Urwego rw'Igihugu rw'Iterambere ry'Ikoranabuhanga (RISA)",
    'exp.bullet1': "Nahuguriye abantu barenga <strong>250</strong> gukoresha serivisi za leta za dijitali nka Irembo ku bwiteguro bw'ubuzima.",
    'exp.bullet2': "Nabitse ubuhanga bwo gutumanahana nk'aba nyamwigendaho bwaboshyeje abakoresha batari inzobere gukoresha imbuga za dijitali.",
    'exp.bullet3': "Nakoresheje <strong>Excel na Python</strong> gukurikirana amakuru y'amahugurwa y'abaturage no gutunganya raporo z'ibyuma buri cyumweru.",
    'exp.bullet4': "Narafashije ibikorwa byo guteza imbere ubumenyi bwa dijitali kugira ngo habe iyongera ry'ikoranabuhanga mu kagari ka Bugomba.",
    // Projects
    'projects.tag': "Ibyo Nabashije Kubaka", 'projects.title': 'Imishinga Yanjye',
    'proj.1.title': "Urubuga rw'Amagambo Bwite",
    'proj.1.desc': "Urubuga rwa portofoli rwa none n'inzira eshatu z'indimi (EN/FR/RW), ingaruka za 3D, uburyo bw'umurango/ijoro, ibikorwa bihuha, n'ingendo z'abasuye.",
    'proj.2.title': "Umuyoboro wo Gukurikirana Amahugurwa y'Abaturage",
    'proj.2.desc': "Igikoresho cy'amakuru cya Python na Excel cyakozwe mu gihe cy'Intumwa ya Dijitali ya RISA kugira ngo cyandike no gusesengura amahugurwa y'abantu barenga 250.",
    'proj.3.title': "Umuyoboro w'Amakuru (ETL)",
    'proj.3.desc': "Umuyoboro w'amakuru wa ETL ukoreshwa na Python ugenda ugendura amakuru ava mu mavuriro ya CSV, agahindura na Pandas, akashyira mu PostgreSQL.",
    // Education
    'edu.tag': 'Inkomoko Yange', 'edu.title': 'Amashuri',
    'edu.degree1': 'Lisansi mu Siyansi ya Mudasobwa', 'edu.school1': "Kaminuza y'u Rwanda (CST)",
    'edu.date1': 'Nzeri 2024 – Ubu', 'edu.badge1': 'Ubu',
    'edu.detail1a': "Akeye ubwubatsi bw'amakuru, gucunga imbuga z'amakuru, n'algoriti",
    'edu.detail1b': "Gushyira mu bikorwa ubumenyi bw'inyigisho mu bikorwa bya perso bijyanye no gusukura no gutunganya amakuru",
    'edu.degree2': "Impamyabumenyi y'Amashuri Makuru (MPC)", 'edu.school2': 'Ecole Secondaire ya Nyagatare',
    'edu.date2': '2020 – 2023', 'edu.badge2': 'Byarangiye',
    'edu.detail2a': "Byibandiye ku Matematiki, Fiziki, n'Ubumenyi bwa Mudasobwa",
    // Awards
    'awards.tag': 'Icyizere', 'awards.title': 'Ibihembo & Impamba',
    'award.1.title': "Ibikorwa by'Intumwa ya Dijitali Birabagirana",
    'award.1.org': "Urwego rw'Igihugu rw'Iterambere ry'Ikoranabuhanga (RISA)",
    'award.1.desc': "Yabonye ikizere cy'ubuziranenge bw'amahugurwa mu bumenyi bwa dijitali, agera ku bantu barenga 250 mu kagari ka Bugomba.",
    'award.2.title': "Ingingo Zakabaye ku Kaminuza",
    'award.2.org': "Kaminuza y'u Rwanda (CST)",
    'award.2.desc': "Yahiswemo mu gahunda ya Siyansi ya Mudasobwa bitewe n'ibikorwa by'inyigisho by'Amashuri Makuru mu Matematiki, Fiziki na Siyansi ya Mudasobwa.",
    'award.3.title': "Impamyabumenyi ya MPC yuzuye",
    'award.3.org': "Ecole Secondaire ya Nyagatare",
    'award.3.desc': "Yarangije Amashuri Makuru mu Matematiki, Fiziki na Siyansi ya Mudasobwa atsinze, agaragaza ubuhanga bw'isesengura rikomeye.",
    // Hobbies
    'nav.hobbies': "Ibikunze",
    'hobbies.tag': "Hanze y'Amakode", 'hobbies.title': "Ibikunze Byanjye",
    'hobby.football.title': 'Umupira w\'amaguru',
    'hobby.football.desc': "Umupira w'amaguru ni akunda kanjye gakomeye. Nta nkino nziza nk'iyo gukinira inshuti kandi ikagufasha mu mikoranire, gukomeza imbaraga no kuguma witeguye.",
    'hobby.billiard.title': 'Biliyari',
    'hobby.billiard.desc': "Biliyari yunguruza indangagaciro yanjye yo kuba nzima no kwihangana. Ugutwi kugira ngo nkore neza ni nka debug yo mu mudasobwa — ukeneye gutekereza imbere no gushyira imbaraga zose.",
    'hobby.movies.title': 'Kureba Filime',
    'hobby.movies.desc': "Filime ni idirishya ryanjye ku isi nziza. Nkunda inkuru zitera ubwenge — uhereye sci-fi na thriller kugeza ku bihe bya inspiration by'abantu bahinduye isi.",
    'hobby.music.title': 'Kumva Indirimbo',
    'hobby.music.desc': "Indirimbo ni inshuti yanjye ihoraho — mu gihe ndi gukorana amakode nijoro, ngendagendo, cyangwa mpumuka. Amajwi meza atera ubufatanye bw'ubwenge.",
    'hobby.tag.teamplay': "Gukinira mu Itsinda", 'hobby.tag.strategy': 'Ingamba', 'hobby.tag.fitness': 'Imyaka Nziza',
    'hobby.tag.precision': 'Kuba Nzima', 'hobby.tag.focus': 'Kwibanda', 'hobby.tag.patience': 'Kwihangana',
    'hobby.tag.thriller': 'Thriller', 'hobby.tag.biopic': 'Biopic',
    'hobby.tag.afrobeats': 'Afrobeats', 'hobby.tag.hiphop': 'Hip-Hop', 'hobby.tag.gospel': 'Indirimbo z\'Imana',
    // Gallery
    'gallery.tag': "Inzira Yanjye", 'gallery.title': 'Amafoto', 'gallery.coming': 'Bizaza Vuba',
    'gallery.filter.all': 'Byose', 'gallery.filter.friends': "N'Inshuti",
    'gallery.filter.uncle': "Nk'Inkorera", 'gallery.filter.ceremony': "Mu Ibirori",
    'gallery.filter.family': "N'Umuryango", 'gallery.filter.playing': "Gukina",
    // Contact
    'contact.tag': 'Tumanahane', 'contact.title': 'Twandikire',
    'contact.intro': "Ubu nishimiye amahirwe y'amahugurwa, gukorana, n'imishinga irebana n'ubwubatsi bw'amakuru. Ntuze untumanahane!",
    'contact.email.label': 'Imeri', 'contact.phone.label': 'Telefoni', 'contact.location.label': 'Aho Atuye',
    'form.name.label': 'Izina Ryawe', 'form.name.placeholder': 'Kamanzi Jean',
    'form.email.label': 'Imeri Yawe', 'form.email.placeholder': 'kamanzi@urugero.com',
    'form.message.label': 'Ubutumwa', 'form.message.placeholder': "Muraho Gwiza, nshaka...",
    'form.submit': 'Ohereza Ubutumwa', 'form.sent': 'Ubutumwa Bwoherejwe!', 'form.error': 'Ikosa. Gerageza.',
    // Footer
    'footer.copy': '© 2025 Iradukunda Gwiza Moise. Uburenganzira bwose bwabitswe.',
    'footer.made': "Yakozwe n'umwete i Kigali, u Rwanda",
  }
};

// =============================================
//  LANGUAGE SWITCHER  (cycles EN → FR → RW → EN)
// =============================================
let currentLang = localStorage.getItem('lang') || 'en';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  const t = translations[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  document.getElementById('lang-en').classList.toggle('active', lang === 'en');
  document.getElementById('lang-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('lang-rw').classList.toggle('active', lang === 'rw');

  document.documentElement.lang = lang;
  resetTypewriter(lang);
}

document.getElementById('lang-toggle').addEventListener('click', () => {
  if (currentLang === 'en') applyLanguage('fr');
  else if (currentLang === 'fr') applyLanguage('rw');
  else applyLanguage('en');
});

// =============================================
//  DAY / NIGHT MODE
// =============================================
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

applyTheme(currentTheme);

// =============================================
//  3D MODE — tilt effects + full 3D scene
// =============================================
let is3dMode = localStorage.getItem('mode3d') === 'true';
const toggle3dBtn  = document.getElementById('toggle-3d');
const scene3dEl    = document.getElementById('scene-3d');
const sceneCardsEl = document.getElementById('scene-cards');
const sceneExitBtn = document.getElementById('scene-exit-btn');

// ---- Card tilt (active in 2D view when 3D mode is on) ----
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top)  / rect.height;
  const rotateY = (x - 0.5) * 18;
  const rotateX = (0.5 - y) * 18;
  card.style.transform  = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  card.style.boxShadow  = `${rotateY * -1}px ${rotateX}px 30px rgba(0,212,170,0.15)`;
  card.style.transition = 'none';
}

function handleTiltLeave(e) {
  const card = e.currentTarget;
  card.classList.add('tilt-reset');
  card.style.transform = '';
  card.style.boxShadow = '';
  setTimeout(() => card.classList.remove('tilt-reset'), 600);
}

function setTiltEffects(enabled) {
  document.querySelectorAll('.tilt-card').forEach(card => {
    if (enabled) {
      card.addEventListener('mousemove', handleTilt);
      card.addEventListener('mouseleave', handleTiltLeave);
    } else {
      card.removeEventListener('mousemove', handleTilt);
      card.removeEventListener('mouseleave', handleTiltLeave);
      card.style.transform = '';
      card.style.boxShadow = '';
    }
  });
}

// ---- 3D Scene data ----
const SCENE_DATA = [
  { id: 'about',      titleKey: 'about.title',    tagKey: 'about.tag',
    icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
  { id: 'skills',     titleKey: 'skills.title',   tagKey: 'skills.tag',
    icon: '<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>' },
  { id: 'experience', titleKey: 'exp.title',      tagKey: 'exp.tag',
    icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>' },
  { id: 'projects',   titleKey: 'projects.title', tagKey: 'projects.tag',
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
  { id: 'education',  titleKey: 'edu.title',      tagKey: 'edu.tag',
    icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>' },
  { id: 'awards',     titleKey: 'awards.title',   tagKey: 'awards.tag',
    icon: '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>' },
  { id: 'gallery',    titleKey: 'gallery.title',  tagKey: 'gallery.tag',
    icon: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>' },
  { id: 'hobbies',    titleKey: 'hobbies.title',  tagKey: 'hobbies.tag',
    icon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>' },
  { id: 'contact',    titleKey: 'contact.title',  tagKey: 'contact.tag',
    icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
];

// ---- Build star particles in scene background ----
function buildStars() {
  const starsEl = document.getElementById('scene-stars');
  if (!starsEl || starsEl.children.length) return;
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'scene-star';
    s.style.cssText = `
      left:${Math.random()*100}%;
      top:${Math.random()*70}%;
      opacity:${Math.random()*0.5+0.1};
      transform:scale(${Math.random()*1.5+0.5});
      --dur:${(Math.random()*3+2).toFixed(1)}s;
      --del:${(Math.random()*4).toFixed(1)}s;
    `;
    starsEl.appendChild(s);
  }
}

// ---- Build section cards ----
function buildSceneCards() {
  sceneCardsEl.innerHTML = '';
  const t = translations[currentLang];
  SCENE_DATA.forEach((s, i) => {
    const card = document.createElement('div');
    card.className = 'scene-card';
    card.style.animationDelay = `${i * 0.055}s`;
    card.innerHTML = `
      <span class="scene-card-num">${String(i + 1).padStart(2, '0')}</span>
      <div class="scene-card-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${s.icon}</svg>
      </div>
      <h3 class="scene-card-title">${t[s.titleKey] || s.titleKey}</h3>
      <span class="scene-card-tag">${t[s.tagKey] || s.tagKey}</span>
      <svg class="scene-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
        <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
      </svg>`;
    card.addEventListener('click', () => navigateFromScene(s.id));
    sceneCardsEl.appendChild(card);
  });
}

// ---- Section detail view ----
let sectionViewActive = false;
let currentSectionIdx = 0;

const sceneSectionView  = document.getElementById('scene-section-view');
const sceneSectionBody  = document.getElementById('scene-section-body');
const sceneSectionPanel = document.getElementById('scene-section-panel');
const scenePanelWrapper = document.getElementById('scene-panel-wrapper');
const sceneTopbar       = document.getElementById('scene-section-topbar');
const sceneBackBtn      = document.getElementById('scene-back-btn');
const scenePrevBtn      = document.getElementById('scene-prev-btn');
const sceneNextBtn      = document.getElementById('scene-next-btn');
const sceneNavCounter   = document.getElementById('scene-nav-counter');
const sceneHintEl       = document.getElementById('scene-hint');
const sceneStageEl      = document.getElementById('scene-stage');

// ---- Panel 3D rotation state ----
let panelRotX = 0, panelRotY = 0;
let panelTargetRotX = 0, panelTargetRotY = 0;
let isPanelDragging = false;
let panelDragLastX = 0, panelDragLastY = 0;
let isFlipping = false;

function openSectionView(id, idx) {
  currentSectionIdx = idx;

  // Clone section content into the panel
  const sectionEl = document.getElementById(id);
  if (sectionEl) {
    const container = sectionEl.querySelector('.container');
    sceneSectionBody.innerHTML = container ? container.innerHTML : '';
    // Make all fade-in elements visible immediately
    sceneSectionBody.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
    // Trigger language bar animations
    sceneSectionBody.querySelectorAll('.lang-fill').forEach(el => {
      const w = el.style.width;
      el.style.setProperty('--w', w);
      requestAnimationFrame(() => el.classList.add('animate'));
    });
    // Re-bind gallery lightbox for cloned items
    sceneSectionBody.querySelectorAll('.gallery-clickable').forEach(item => {
      item.addEventListener('click', () => {
        const src     = item.getAttribute('data-src') || item.querySelector('img')?.src;
        const caption = item.getAttribute('data-caption') || '';
        if (src) openLightbox(src, caption);
      });
    });
    // Re-bind gallery filters scoped to panel
    const panelFilters = sceneSectionBody.querySelectorAll('.gallery-filter');
    const panelItems   = sceneSectionBody.querySelectorAll('.gallery-item');
    panelFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        panelFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        panelItems.forEach(item => {
          item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-category') !== filter);
        });
      });
    });
  }

  sceneNavCounter.textContent = `${idx + 1} / ${SCENE_DATA.length}`;
  sceneStageEl.style.display  = 'none';
  sceneHintEl.textContent     = 'Drag topbar to rotate  ·  Hover to tilt  ·  ‹ › navigate  ·  Dbl-click to reset';
  sceneSectionView.classList.add('active');
  sectionViewActive = true;
  sceneTargetRotY = 0;
  sceneCurrRotY   = 0;
  // Reset panel rotation only if not in a flip animation
  if (!isFlipping) {
    panelTargetRotX = panelRotX = 0;
    panelTargetRotY = panelRotY = 0;
  }
}

function closeSectionView() {
  sectionViewActive = false;
  sceneSectionView.classList.remove('active');
  sceneStageEl.style.display = '';
  sceneHintEl.textContent    = 'Move mouse to rotate \u00a0·\u00a0 Click a card to open';
  sceneTargetRotY = 0;
  sceneTargetRotX = 28;
  sceneCurrRotY   = 0;
  sceneCurrRotX   = 28;
  panelTargetRotX = panelRotX = 0;
  panelTargetRotY = panelRotY = 0;
  isFlipping = false;
}

function navigateFromScene(id) {
  const idx = SCENE_DATA.findIndex(s => s.id === id);
  openSectionView(id, idx >= 0 ? idx : 0);
}

sceneBackBtn.addEventListener('click', closeSectionView);

// ---- Page-flip navigation ----
function flipToSection(idx, dir) {
  if (isFlipping) return;
  isFlipping = true;
  // Flip panel away
  panelTargetRotY = dir === 'next' ? -110 : 110;
  setTimeout(() => {
    openSectionView(SCENE_DATA[idx].id, idx);
    // Snap panel to the incoming side, then animate to center
    panelRotY        = dir === 'next' ? 110 : -110;
    panelTargetRotY  = 0;
    panelRotX        = 0;
    panelTargetRotX  = 0;
    isFlipping = false;
  }, 280);
}

scenePrevBtn.addEventListener('click', () => {
  const i = (currentSectionIdx - 1 + SCENE_DATA.length) % SCENE_DATA.length;
  flipToSection(i, 'prev');
});
sceneNextBtn.addEventListener('click', () => {
  const i = (currentSectionIdx + 1) % SCENE_DATA.length;
  flipToSection(i, 'next');
});

// ---- Topbar drag-to-rotate ----
sceneTopbar.addEventListener('mousedown', e => {
  if (!sectionViewActive) return;
  isPanelDragging = true;
  panelDragLastX = e.clientX;
  panelDragLastY = e.clientY;
  e.preventDefault();
});

// Touch support for drag-to-rotate
sceneTopbar.addEventListener('touchstart', e => {
  if (!sectionViewActive) return;
  isPanelDragging = true;
  panelDragLastX = e.touches[0].clientX;
  panelDragLastY = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (!isPanelDragging || !sectionViewActive) return;
  const dx = e.touches[0].clientX - panelDragLastX;
  const dy = e.touches[0].clientY - panelDragLastY;
  panelTargetRotY += dx * 0.55;
  panelTargetRotX -= dy * 0.55;
  panelTargetRotY  = Math.max(-75, Math.min(75, panelTargetRotY));
  panelTargetRotX  = Math.max(-50, Math.min(50, panelTargetRotX));
  panelDragLastX   = e.touches[0].clientX;
  panelDragLastY   = e.touches[0].clientY;
}, { passive: true });

document.addEventListener('touchend', () => { isPanelDragging = false; });

// Double-click to reset rotation
scenePanelWrapper.addEventListener('dblclick', () => {
  panelTargetRotX = 0;
  panelTargetRotY = 0;
});

// ---- Panel hover tilt (mouse position relative to panel) ----
scenePanelWrapper.addEventListener('mousemove', e => {
  if (!sectionViewActive || isPanelDragging || isFlipping) return;
  const rect = scenePanelWrapper.getBoundingClientRect();
  const normX = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
  const normY = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
  panelTargetRotY = normX * 22;   // ±22 degrees Y
  panelTargetRotX = -normY * 14;  // ±14 degrees X
});

scenePanelWrapper.addEventListener('mouseleave', () => {
  if (!isPanelDragging) {
    panelTargetRotX = 0;
    panelTargetRotY = 0;
  }
});

// ---- Smooth mouse-driven rotation + float ----
let sceneTargetRotY = 0, sceneTargetRotX = 28;
let sceneCurrRotY  = 0, sceneCurrRotX  = 28;
let sceneRAF = null;

function onSceneMouseMove(e) {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  sceneTargetRotY = (e.clientX - cx) / cx * 10;
  sceneTargetRotX = 28 - (e.clientY - cy) / cy * 4;
  // Handle drag-to-rotate for the panel (global mouse move)
  if (isPanelDragging && sectionViewActive) {
    const dx = e.clientX - panelDragLastX;
    const dy = e.clientY - panelDragLastY;
    panelTargetRotY += dx * 0.55;
    panelTargetRotX -= dy * 0.55;
    panelTargetRotY  = Math.max(-75, Math.min(75, panelTargetRotY));
    panelTargetRotX  = Math.max(-50, Math.min(50, panelTargetRotX));
    panelDragLastX   = e.clientX;
    panelDragLastY   = e.clientY;
  }
}

document.addEventListener('mouseup', () => { isPanelDragging = false; });

function sceneRenderLoop() {
  sceneCurrRotY += (sceneTargetRotY - sceneCurrRotY) * 0.07;
  sceneCurrRotX += (sceneTargetRotX - sceneCurrRotX) * 0.07;

  if (sectionViewActive) {
    // Smooth 3D panel rotation
    panelRotX += (panelTargetRotX - panelRotX) * 0.1;
    panelRotY += (panelTargetRotY - panelRotY) * 0.1;
    scenePanelWrapper.style.transform =
      `rotateX(${panelRotX}deg) rotateY(${panelRotY}deg)`;

    // Dynamic shadow depth based on rotation
    const depth = Math.abs(panelRotY) * 0.4 + Math.abs(panelRotX) * 0.2;
    sceneSectionPanel.style.boxShadow =
      `${-panelRotY * 0.8}px ${panelRotX * 0.4}px ${40 + depth}px rgba(0,0,0,0.9),`+
      `0 0 ${30 + depth}px rgba(0,212,170,${0.04 + Math.abs(panelRotY) / 300})`;
  } else {
    const floatY = Math.sin(Date.now() / 2400) * 10;
    sceneCardsEl.style.transform =
      `rotateX(${sceneCurrRotX}deg) rotateY(${sceneCurrRotY}deg) translateY(${floatY}px)`;
  }
  sceneRAF = requestAnimationFrame(sceneRenderLoop);
}

// ---- Open / Close ----
function openScene() {
  // Reset any leftover section-view state
  sectionViewActive = false;
  sceneSectionView.classList.remove('active');
  sceneStageEl.style.display = '';
  sceneHintEl.textContent    = 'Move mouse to rotate \u00a0·\u00a0 Click a card to open';

  buildStars();
  buildSceneCards();
  syncSceneTheme();
  syncSceneLangLabel();
  sceneTargetRotY = sceneCurrRotY = 0;
  sceneTargetRotX = sceneCurrRotX = 28;
  scene3dEl.classList.add('active');
  scene3dEl.removeAttribute('aria-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('mousemove', onSceneMouseMove);
  sceneRenderLoop();
  is3dMode = true;
  localStorage.setItem('mode3d', 'true');
  toggle3dBtn.classList.add('active');
  setTiltEffects(true);
}

function closeScene() {
  sectionViewActive = false;
  sceneSectionView.classList.remove('active');
  scene3dEl.classList.remove('active');
  scene3dEl.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.removeEventListener('mousemove', onSceneMouseMove);
  cancelAnimationFrame(sceneRAF);
  sceneRAF = null;
}

// ---- Toggle button (cube icon in nav) ----
toggle3dBtn.addEventListener('click', () => {
  if (scene3dEl.classList.contains('active')) {
    closeScene();
    is3dMode = false;
    localStorage.setItem('mode3d', 'false');
    toggle3dBtn.classList.remove('active');
  } else {
    openScene();
  }
});

// ---- Exit button inside scene ----
sceneExitBtn.addEventListener('click', () => {
  closeScene();
  is3dMode = false;
  localStorage.setItem('mode3d', 'false');
  toggle3dBtn.classList.remove('active');
});

// ---- Scene language toggle ----
const sceneLangBtn   = document.getElementById('scene-lang-btn');
const sceneLangLabel = document.getElementById('scene-lang-label');

function syncSceneLangLabel() {
  if (sceneLangLabel) sceneLangLabel.textContent = currentLang.toUpperCase();
}

if (sceneLangBtn) {
  sceneLangBtn.addEventListener('click', () => {
    const next = currentLang === 'en' ? 'fr' : currentLang === 'fr' ? 'rw' : 'en';
    applyLanguage(next);
    if (scene3dEl.classList.contains('active')) buildSceneCards();
    syncSceneLangLabel();
  });
}

// ---- Scene theme toggle ----
const sceneThemeBtn = document.getElementById('scene-theme-btn');

function syncSceneTheme() {
  if (!sceneThemeBtn) return;
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  scene3dEl.classList.toggle('scene-light', isLight);
  sceneThemeBtn.classList.toggle('active', isLight);
}

if (sceneThemeBtn) {
  sceneThemeBtn.addEventListener('click', () => {
    applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    syncSceneTheme();
  });
}

// ESC closes scene (lightbox ESC handler is separate and handles its own check)
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && scene3dEl.classList.contains('active')) {
    closeScene();
    is3dMode = false;
    localStorage.setItem('mode3d', 'false');
    toggle3dBtn.classList.remove('active');
  }
});

// Re-enable tilt if previously saved (don't auto-open scene on load)
if (is3dMode) setTiltEffects(true);

// =============================================
//  3D PARTICLE CANVAS
// =============================================
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], mouse = { x: -999, y: -999 };
  const COUNT = 55;
  const CONNECT_DIST = 130;
  const ACCENT = '0,212,170';

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5
    };
  }

  function init() {
    resize();
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      // gentle mouse attraction
      const dx = mouse.x - p.x, dy = mouse.y - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 200) {
        p.vx += (dx / dist) * 0.015;
        p.vy += (dy / dist) * 0.015;
      }

      p.x += p.vx;
      p.y += p.vy;

      // dampen velocity
      p.vx *= 0.99;
      p.vy *= 0.99;

      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * p.z, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${ACCENT},${p.z * 0.5})`;
      ctx.fill();
    });

    // connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p = particles[i], q = particles[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(${ACCENT},${(1 - d / CONNECT_DIST) * 0.18})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  init();
  draw();
})();

// =============================================
//  TYPEWRITER
// =============================================
let typewriterPhrases = translations[currentLang].typewriter;
let phraseIndex = 0, charIndex = 0, isDeleting = false, typeTimeout = null;
const typeTarget = document.getElementById('typewriter');

function typeWriter() {
  const phrase = typewriterPhrases[phraseIndex];
  typeTarget.textContent = isDeleting
    ? phrase.substring(0, charIndex - 1)
    : phrase.substring(0, charIndex + 1);
  isDeleting ? charIndex-- : charIndex++;

  let speed = isDeleting ? 50 : 90;
  if (!isDeleting && charIndex === phrase.length) { speed = 1800; isDeleting = true; }
  else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % typewriterPhrases.length; speed = 400; }

  typeTimeout = setTimeout(typeWriter, speed);
}

function resetTypewriter(lang) {
  clearTimeout(typeTimeout);
  typewriterPhrases = translations[lang].typewriter;
  phraseIndex = charIndex = 0;
  isDeleting = false;
  typeTarget.textContent = '';
  typeWriter();
}

typeWriter();

// =============================================
//  NAVBAR SCROLL
// =============================================
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// =============================================
//  MOBILE MENU
// =============================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// =============================================
//  ACTIVE NAV LINK ON SCROLL
// =============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// =============================================
//  FADE-IN ON SCROLL
// =============================================
const fadeEls = document.querySelectorAll(
  '.skill-card, .timeline-card, .edu-card, .contact-item, .about-details, .stat, .lang-item, .project-card, .award-card, .gallery-item'
);

fadeEls.forEach(el => el.classList.add('fade-in'));

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 60 * i);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => fadeObserver.observe(el));

// =============================================
//  LANGUAGE BAR ANIMATION
// =============================================
const langFills = document.querySelectorAll('.lang-fill');
const langObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      langObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

langFills.forEach(fill => langObserver.observe(fill));

// =============================================
//  CONTACT FORM (FormSubmit.co AJAX)
// =============================================
const form = document.getElementById('contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const span = btn.querySelector('span');
  const t = translations[currentLang];
  const original = span.textContent;

  btn.disabled = true;
  span.textContent = '...';

  const data = new FormData(form);
  data.append('_subject', 'New message from portfolio');
  data.append('_captcha', 'false');

  try {
    await fetch('https://formsubmit.co/ajax/esiomwiz@gmail.com', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    span.textContent = t['form.sent'];
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#16a34a';
  } catch {
    // Show success anyway (first submission activates FormSubmit via email)
    span.textContent = t['form.sent'];
    btn.style.background = '#16a34a';
    btn.style.borderColor = '#16a34a';
  }

  setTimeout(() => {
    span.textContent = original;
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.disabled = false;
    form.reset();
  }, 3000);
});

// =============================================
//  PHOTO GALLERY — FILTERS + LIGHTBOX
// =============================================
const lightbox        = document.getElementById('lightbox');
const lightboxImg     = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn        = document.getElementById('lightbox-close');

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxCaption.textContent = caption || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-clickable').forEach(item => {
  item.addEventListener('click', () => {
    const src     = item.getAttribute('data-src') || item.querySelector('img')?.src;
    const caption = item.getAttribute('data-caption') || '';
    if (!src) return;
    openLightbox(src, caption);
  });

  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') item.click();
  });
});

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Gallery filter tabs
document.querySelectorAll('.gallery-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.gallery-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// =============================================
//  SMOOTH SCROLL (offset for fixed nav)
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  });
});

// =============================================
//  DNA HELIX HOBBIES
// =============================================
(function initDNA() {
  const HOBBIES = [
    {
      color: '#22c55e',
      titleKey: 'hobby.football.title',
      descKey:  'hobby.football.desc',
      tags: [
        { key: 'hobby.tag.teamplay', en: 'Team Play' },
        { key: 'hobby.tag.strategy', en: 'Strategy'  },
        { key: 'hobby.tag.fitness',  en: 'Fitness'   },
      ],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        <path d="M2 12h20"/>
      </svg>`,
    },
    {
      color: '#eab308',
      titleKey: 'hobby.billiard.title',
      descKey:  'hobby.billiard.desc',
      tags: [
        { key: 'hobby.tag.precision', en: 'Precision' },
        { key: 'hobby.tag.focus',     en: 'Focus'     },
        { key: 'hobby.tag.patience',  en: 'Patience'  },
      ],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="3"/>
        <line x1="4.22" y1="4.22" x2="7.76" y2="7.76"/>
        <line x1="19.78" y1="4.22" x2="16.24" y2="7.76"/>
        <line x1="4.22" y1="19.78" x2="7.76" y2="16.24"/>
        <line x1="19.78" y1="19.78" x2="16.24" y2="16.24"/>
      </svg>`,
    },
    {
      color: '#ef4444',
      titleKey: 'hobby.movies.title',
      descKey:  'hobby.movies.desc',
      tags: [
        { key: null,                  en: 'Sci-Fi'   },
        { key: 'hobby.tag.thriller',  en: 'Thriller' },
        { key: 'hobby.tag.biopic',    en: 'Biopic'   },
      ],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
        <line x1="7" y1="2" x2="7" y2="22"/>
        <line x1="17" y1="2" x2="17" y2="22"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <line x1="2" y1="7" x2="7" y2="7"/>
        <line x1="2" y1="17" x2="7" y2="17"/>
        <line x1="17" y1="17" x2="22" y2="17"/>
        <line x1="17" y1="7" x2="22" y2="7"/>
      </svg>`,
    },
    {
      color: '#00d4aa',
      titleKey: 'hobby.music.title',
      descKey:  'hobby.music.desc',
      tags: [
        { key: 'hobby.tag.afrobeats', en: 'Afrobeats' },
        { key: 'hobby.tag.hiphop',    en: 'Hip-Hop'   },
        { key: 'hobby.tag.gospel',    en: 'Gospel'     },
      ],
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>`,
    },
  ];

  const canvas    = document.getElementById('dna-canvas');
  const connector = document.getElementById('dna-connector');
  const cardEl    = document.getElementById('dna-hobby-card');
  const iconEl    = document.getElementById('dna-hobby-icon');
  const numEl     = document.getElementById('dna-hobby-num');
  const titleEl   = document.getElementById('dna-hobby-title');
  const descEl    = document.getElementById('dna-hobby-desc');
  const tagsEl    = document.getElementById('dna-hobby-tags');
  const dots      = document.querySelectorAll('.dna-dot');
  const nodes     = document.querySelectorAll('.dna-node');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H, activeIdx = 0, animFrame = null;

  function getNodePositions() {
    // On mobile the layout stacks and the helix is horizontal (wide, short)
    const isMobile = canvas.offsetHeight < canvas.offsetWidth;
    if (isMobile) {
      const margin = canvas.offsetWidth * 0.12;
      const span   = canvas.offsetWidth - margin * 2;
      return [0, 1, 2, 3].map(i => margin + (span / 3) * i);
    }
    const margin = canvas.offsetHeight * 0.08;
    const span   = canvas.offsetHeight - margin * 2;
    return [0, 1, 2, 3].map(i => margin + (span / 3) * i);
  }

  function syncCanvasSize() {
    canvas.width  = canvas.offsetWidth  || 200;
    canvas.height = canvas.offsetHeight || 480;
    W = canvas.width;
    H = canvas.height;
  }

  // ---- Render hobby detail card ----
  function showHobby(idx) {
    activeIdx = idx;
    const h = HOBBIES[idx];
    const t = translations[currentLang];

    iconEl.innerHTML = h.icon;
    iconEl.style.color      = h.color;
    iconEl.style.background = `color-mix(in srgb, ${h.color} 12%, transparent)`;
    numEl.textContent   = `${String(idx + 1).padStart(2, '0')} / 04`;
    titleEl.textContent = t[h.titleKey] || h.titleKey;
    descEl.textContent  = t[h.descKey]  || h.descKey;

    tagsEl.innerHTML = h.tags.map(tag => {
      const label = (tag.key && t[tag.key]) ? t[tag.key] : tag.en;
      return `<span class="tag" style="color:${h.color};border-color:${h.color}40;background:${h.color}12">${label}</span>`;
    }).join('');

    cardEl.style.setProperty('--nc', h.color);
    cardEl.classList.remove('dna-card-swap');
    void cardEl.offsetWidth;
    cardEl.classList.add('dna-card-swap');

    // Active node highlight
    nodes.forEach((n, i) => n.classList.toggle('active', i === idx));
    dots.forEach((d, i)  => d.classList.toggle('active', i === idx));

    // Connector is repositioned each frame in drawHelix for desktop
  }

  // ---- Helpers ----
  function hexRgba(hex, a) {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return `rgba(${r},${g},${b},${a})`;
  }
  function dot(x, y, r) { ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI*2); ctx.fill(); }

  // ---- Canvas: animated DNA double helix (rung-based, like real DNA) ----
  let tick = 0;
  function drawHelix() {
    syncCanvasSize();
    ctx.clearRect(0, 0, W, H);
    tick += 0.016;

    const isMobile = H < W;
    const LEN    = isMobile ? W : H;
    const CROSS  = isMobile ? H : W;
    const CX     = CROSS / 2;
    const AMP    = Math.min(CROSS * 0.30, 60);
    const PERIOD = LEN * 0.58;   // ~1.7 full turns — dense enough to look like DNA
    const nodePos = getNodePositions();

    // Build rung list — one rung every RUNG_GAP pixels along main axis
    const RUNG_GAP = 20;
    const rungs = [];
    for (let p = RUNG_GAP / 2; p < LEN; p += RUNG_GAP) rungs.push(p);

    // Pre-assign each rung to a hobby node (nearest within 1.5× gap)
    const rungToHobby = rungs.map(r => {
      let best = -1, bestD = Infinity;
      nodePos.forEach((np, i) => {
        const d = Math.abs(r - np);
        if (d < RUNG_GAP * 1.5 && d < bestD) { bestD = d; best = i; }
      });
      return best;
    });

    // ---- Draw rungs FIRST (behind the strands) ----
    rungs.forEach((r, ri) => {
      const phase = (r / PERIOD) * Math.PI * 2 - tick * Math.PI * 2;
      const c1 = CX + Math.sin(phase)           * AMP;
      const c2 = CX + Math.sin(phase + Math.PI) * AMP;
      const [x1, y1] = isMobile ? [r, c1] : [c1, r];
      const [x2, y2] = isMobile ? [r, c2] : [c2, r];

      const hi = rungToHobby[ri];
      if (hi >= 0) {
        // Hobby-colored rung — prominent, like in the DNA image
        ctx.strokeStyle = hexRgba(HOBBIES[hi].color, 0.9);
        ctx.lineWidth   = 3;
        // Larger glowing endpoint dots
        ctx.fillStyle   = hexRgba(HOBBIES[hi].color, 0.95);
        dot(x1, y1, 6);
        dot(x2, y2, 6);
        // Inner white dot for "base-pair" look
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        dot(x1, y1, 2.5);
        dot(x2, y2, 2.5);
        // Position the node button on strand-1 endpoint
        nodes[hi].style.left = x1 + 'px';
        nodes[hi].style.top  = y1 + 'px';
      } else {
        // Regular faint rung
        const d = 0.12 + 0.07 * Math.abs(Math.sin((r / PERIOD) * Math.PI));
        ctx.strokeStyle = `rgba(0,212,170,${d})`;
        ctx.lineWidth   = 1.2;
        ctx.fillStyle   = `rgba(0,212,170,0.28)`;
        dot(x1, y1, 2.8);
        dot(x2, y2, 2.8);
      }
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    });

    // ---- Draw strands ON TOP of rungs ----
    const drawStrand = (phaseOff, color, w) => {
      ctx.beginPath();
      for (let p = 0; p <= LEN; p += 3) {
        const ph = (p / PERIOD) * Math.PI * 2 - tick * Math.PI * 2 + phaseOff;
        const c  = CX + Math.sin(ph) * AMP;
        const [x, y] = isMobile ? [p, c] : [c, p];
        p === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = color; ctx.lineWidth = w; ctx.lineJoin = 'round'; ctx.stroke();
    };
    drawStrand(0,        'rgba(0,212,170,0.70)', 2.8);
    drawStrand(Math.PI,  'rgba(80,180,255,0.45)', 2.2);

    // Connector to active card (desktop only)
    if (connector && !isMobile) {
      const activeRungIdx = rungToHobby.findIndex((_, ri) => rungToHobby[ri] === activeIdx);
      if (activeRungIdx >= 0) connector.style.top = rungs[activeRungIdx] + 'px';
    }

    animFrame = requestAnimationFrame(drawHelix);
  }

  // ---- Node & dot click handlers ----
  nodes.forEach((node, i) => {
    node.addEventListener('click', () => showHobby(i));
  });
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showHobby(i));
  });

  // ---- Auto-cycle every 4s ----
  let cycleTimer = setInterval(() => {
    showHobby((activeIdx + 1) % HOBBIES.length);
  }, 4000);

  // Pause auto-cycle on interaction
  [...nodes, ...dots].forEach(el => {
    el.addEventListener('click', () => {
      clearInterval(cycleTimer);
      cycleTimer = setInterval(() => {
        showHobby((activeIdx + 1) % HOBBIES.length);
      }, 6000);
    });
  });

  // Re-render card when language changes (hook into applyLanguage)
  const _origApplyLanguage = window._dnaLangHook;
  document.getElementById('lang-toggle').addEventListener('click', () => {
    setTimeout(() => showHobby(activeIdx), 50);
  });

  // Init
  syncCanvasSize();
  showHobby(0);
  drawHelix();
  window.addEventListener('resize', syncCanvasSize);

  // Pause animation when section not visible (perf)
  const dnaSection = document.getElementById('hobbies');
  if (dnaSection) {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!animFrame) drawHelix();
      } else {
        cancelAnimationFrame(animFrame);
        animFrame = null;
      }
    });
    obs.observe(dnaSection);
  }
})();

// =============================================
//  INIT
// =============================================
applyLanguage(currentLang);
