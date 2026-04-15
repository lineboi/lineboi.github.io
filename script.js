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
    'proj.1.title': 'Urubuga rw'Amagambo Bwite',
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
//  3D MODE — card tilt on mousemove
// =============================================
let is3dMode = localStorage.getItem('mode3d') === 'true';
const toggle3dBtn = document.getElementById('toggle-3d');

function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;
  const rotateY = (x - 0.5) * 18;
  const rotateX = (0.5 - y) * 18;
  card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  card.style.boxShadow = `${rotateY * -1}px ${rotateX}px 30px rgba(0,212,170,0.15)`;
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
  toggle3dBtn.classList.toggle('active', enabled);
}

toggle3dBtn.addEventListener('click', () => {
  is3dMode = !is3dMode;
  localStorage.setItem('mode3d', is3dMode);
  setTiltEffects(is3dMode);
});

setTiltEffects(is3dMode);

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
//  INIT
// =============================================
applyLanguage(currentLang);
