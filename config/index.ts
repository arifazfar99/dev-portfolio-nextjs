type Project = {
    title: string
    description: string
    href: string
    github?: string
    tags: string[]
    featured?: boolean
}

export const NAVIGATION = [
    {
        title: 'Home',
        href: '/'
    },
    {
        title: 'Projects',
        href: '/projects'
    },
    {
        title: 'About',
        href: '/about'
    },
]

export const FOOTER_PAGES = [
    {
        title: "Home",
        href: "/"
    },
    {
        title: "Projects",
        href: "/projects"
    },
    {
        title: "About",
        href: "/about"
    }, 
]

export const SOCIALS = [
    {
        title: "Github",
        href: "https://github.com/arifazfar99"
    },
    {
        title: "Linkedin",
        href: "https://www.linkedin.com/in/arif-azfar-azri/"
    },

]

export const PROJECTS: Project[] = [
    {
        title: "Dev Portfolio",
        description: "My own personal portfolio website.",
        href: "https://www.arifazfar.com/",
        tags: ["Next.js", "Tailwind CSS", "Typescript", "shadcn/ui", "Vercel"],
        github: 'https://github.com/arifazfar99/dev-portfolio-nextjs',
        featured: true
    },
    {
        title: "Track My Gaji",
        description: "Calculate your net pay after all standard Malaysian deductions. You can also track your monthly commitments and see how much balance you have left.",
        href: "https://track-my-gaji.arifazfar.com/",
        tags: ["Vite.js", "Tailwind CSS", "Typescript", "Ant Design", "Vercel"],
        github: 'https://github.com/arifazfar99/track-my-gaji',
        featured: true
    },
]

export const TECH_STACK = [
    {
        title: "Next.js",
        href: "https://nextjs.org"
    },
    {
        title: "React",
        href: "https://reactjs.org"
    },
    {
        title: "Vite",
        href: "https://vite.dev"
    },
    {
        title: "Git",
        href: "https://git-scm.com"
    },
    {
        title: "MySQL",
        href: "https://www.mysql.com"
    },
    {
        title: "TypeScript",
        href: "https://www.typescriptlang.org"
    },
    {
        title: "Tailwind CSS",
        href: "https://tailwindcss.com"
    },
    {
        title: "Vercel",
        href: "https://vercel.com"
    },
    {
        title: "Framer Motion",
        href: "https://www.framer.com/motion"
    },
    {
        title: "MongoDB",
        href: "https://www.mongodb.com"
    },
    {
        title: "shadcn/ui",
        href: "https://ui.shadcn.com"
    },
    {
        title: 'Material UI',
        href: 'https://mui.com/material-ui'
    }
]