import { planner, spotify, taskify } from '../assets'

export const navLinks = [
	{
		id: 'hero',
		title: 'Hero'
	},
	{
		id: 'portfolio',
		title: 'Portfolio'
	},
	{
		id: 'experience',
		title: 'Experience'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
]

const experiences = [
	{
		title: 'Schooling 21',
		company_name: 'School 21',
		date: '2023 - 2025',
		details: [
			'After I entered school 21, I began doing projects for about a year in the programming languages ​​c, c++ and sql. I didn’t really like the C language and, in addition to studying at school, I began to study front-end development myself'
		]
	},
	{
		title: 'Learning front-end development',
		company_name: 'front-end development',
		date: '2023 - 2024',
		details: [
			"I've been studying JavaScript for about a year now and I want to develop in this direction.",
			"During this year I learned technologies such as: <span style='color: white;'>Typescript</span>, <span style='color: white;'>React js </span>,<span style='color: white;'>Nest js </span>, <span style='color: white;'>Express js </span>, <span style='color: white;'>Next js</span>, <span style='color: white;'>React Native</span>, <span style='color: white;'>React-Query</span>, <span style='color: white;'>Redux-toolkit</span>, <span style='color: white;'>Tailwind css</span>, <span style='color: white;'>Sass</span>, <span style='color: white;'>Graphql</span>, <span style='color: white;'>Storybook</span>, <span style='color: white;'>Webpack</span>, <span style='color: white;'>Vite</span>, <span style='color: white;'>Postgresql</span>, <span style='color: white;'>Docker</span>."
		]
	}
]

const portfolio = [
	{
		name: 'taskify',
		description:
			'Task manager with functionality: copying, deleting, editing and drag and drop. The neural network generates a background tailored to your workspace with tasks.',
		image: taskify,
		href: 'https://github.com/GerlakhA/taskify'
	},
	{
		name: 'Spotify clone',
		description:
			'A site for listening to music with the ability to log in, you can listen to songs and add your own. It is possible to search songs by title. Added the ability to create playlists',
		image: spotify,
		href: 'https://github.com/GerlakhA/spotify-clone'
	},
	{
		name: 'Fullstack planner',
		description:
			'A planning application with functionality: statistics, a timer, creating tasks in two types (kanban or sheet), as well as a time block where you can plan your day and find out how much time is left for sleep.  The server is written in Nest js.',
		image: planner,
		href: 'https://github.com/GerlakhA/Full-stack-planner'
	}
]

export { experiences, portfolio }
