// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-art",
          title: "art",
          description: "A growing collection of my artwork.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/art/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-personal-milestone-i-ve-transitioned-from-maiden-to-mother-sparkles",
          title: 'Personal Milestone: I’ve transitioned from maiden to mother! :sparkles:',
          description: "",
          section: "News",},{id: "news-rotating-light-new-preprint-low-dimensional-representations-of-visuomotor-coordination-in-natural-behavior",
          title: ':rotating_light: New Preprint: Low Dimensional Representations of Visuomotor Coordination in Natural Behavior',
          description: "",
          section: "News",},{id: "news-rotating-light-new-paper-accepted-in-plos-comp-bio-just-in-time-gaze-guidance-in-natural-behavior",
          title: ':rotating_light: New paper accepted in PLOS Comp Bio Just-in-time: gaze guidance in natural...',
          description: "",
          section: "News",},{id: "news-eyes-submitted-my-phd-thesis-eyes",
          title: ':eyes: Submitted my PhD Thesis!! :eyes:',
          description: "",
          section: "News",},{id: "news-upcoming-symposium-talk-ecvp-2025-adaptive-actions-and-frugal-memory-how-gaze-supports-natural-behavior",
          title: 'Upcoming Symposium Talk @ ECVP 2025: Adaptive Actions and Frugal Memory: How Gaze...',
          description: "",
          section: "News",},{id: "news-phd-awarded-with-the-highest-praise",
          title: '✅ PhD – awarded with the highest praise',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ashimakeshava", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=YGO0ev0AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ashimakeshava", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.ravelry.com/projects/marmknits", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
