const site_data_default = {
  name: 'Versão 1.0',
  main_color: '#E11D48',
  hero: {
    id: 1,
    title: 'Kickstart your Next.JS 14 website in minutes',
    highlight_term: 'Next.JS 14',
    img: 'https://storage.googleapis.com/sandrofilhodevadmin/photo-1543269664-76bc3997d9ea.jpg',
    text: 'Inators UI is a collection of UI components and templates based on Tailwind and Shadcn/ui, just copy and use',
    node_command: 'npx shadcn-ui@latest init',
  },
  stats: [
    {
      id: 1,
      title: '150+',
      subtitle: 'Components',
      icon: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path><path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path></svg>',
    },
    {
      id: 2,
      title: '30+',
      subtitle: 'Categories',
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zm40-89.3l0 0 0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0zm160 0l0 0-.2-.2c-.2-.2-.4-.5-.7-.9c-.6-.8-1.6-2-2.8-3.4c-2.5-2.8-6-6.6-10.2-10.3c-8.8-7.8-18.8-14-27.7-14s-18.9 6.2-27.7 14c-4.2 3.7-7.7 7.5-10.2 10.3c-1.2 1.4-2.2 2.6-2.8 3.4c-.3 .4-.6 .7-.7 .9l-.2 .2 0 0 0 0 0 0c-2.1 2.8-5.7 3.9-8.9 2.8s-5.5-4.1-5.5-7.6c0-17.9 6.7-35.6 16.6-48.8c9.8-13 23.9-23.2 39.4-23.2s29.6 10.2 39.4 23.2c9.9 13.2 16.6 30.9 16.6 48.8c0 3.4-2.2 6.5-5.5 7.6s-6.9 0-8.9-2.8l0 0 0 0 0 0z"></path></svg>',
    },
    {
      id: 3,
      title: '100%',
      subtitle: 'Next.js 14 Compatible',
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM15.9999 8H14.6499V12H15.9999V8ZM9.34609 9.70937L15.405 17.5379L16.4591 16.7293L9.68281 8H8V15.9969H9.34609V9.70937Z"></path></svg>',
    },
    {
      id: 4,
      title: '100%',
      subtitle: 'Copy Paste work',
      icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"></path></svg>',
    },
  ],
  features: [
    {
      id: 1,
      title: 'Make Next.js 14 your new playground',
      subtitle: 'Easy to use UI elements based on Tailwind CSS and Shadcn/ui',
      text: 'Inators UI is a toolkit for developers and designers to make creating nextjs client side as well as server side interfaces easier. Using Shadcn-ui components as base and added missing necessary components, Inators UI have multiple components to help you get started. Everything is modular and customizable to fit your project. From cards to buttons to blogs, you can quickly create a variety of layouts that is responsible for next.js 14 and look great on any screen.',
      img: 'https://storage.googleapis.com/sandrofilhodevadmin/feature_3.jpg',
    },
    {
      id: 4,
      title: 'just a couple of copy pasting code',
      subtitle: 'Stop wasting time with ChatGPT for components',
      text: 'What used to take hours, can now be done in a few clicks. Just copy-paste the code from Inators UI into your project, add your own content and hit publish. You just need a little brain and a little developer skills to create something beautiful even without chatGPT.',
      img: 'https://storage.googleapis.com/sandrofilhodevadmin/feature_5.jpg',
    },
  ],
  banner: {
    id: 1,
    title: 'Follow on github for more project updates',
    subtitle: 'When I add something new, you will be the first to know',
    cta_text: 'Github',
    cta_link: 'https://github.com/siddhartha-up80',
  },
  faq: {
    id: 1,
    faq_items: [
      {
        id: 1,
        question: 'What is Inators UI?',
        answer:
          "Inators UI is a free, open-source collection of UI elements based on Tailwind CSS, shadcn/ui and inspired from MambaUI that make it easy for anyone to build a next.js 14 web-app in minutes. Whether you're looking to create an e-commerce website or a perso",
        faq_section: 1,
      },
      {
        id: 2,
        question: 'Will it support server side components in next.js 14?',
        answer:
          'Yes, it is 100% compatible with next.js 14 without making any component client side.',
        faq_section: 1,
      },
      {
        id: 3,
        question:
          "Some of the components don't seem to work. Is something broken?",
        answer:
          'Just install necessary dependencies and try again, if it is not working than contact us via email or contact form.',
        faq_section: 1,
      },
    ],
    title: 'Frequently Asked Questions',
    subtitle: 'Frequently Asked Questions',
  },
};

export default site_data_default;
