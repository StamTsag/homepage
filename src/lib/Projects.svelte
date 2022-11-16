<script lang="ts">
    import Saos from 'saos';
    import githubStars from 'src/github-stars';
    import type { Project } from 'src/interfaces/projects';
    import { onMount } from 'svelte';

    const projects: Project[] = [
        {
            title: 'Fronvo',
            description: 'The secure, next-generation social media app',
            github: 'Fronvo',
            customGradient: '146, 73, 255',
        },

        {
            title: 'Ezier',
            description: 'Lightweight solutions to popular packages for NodeJS',
            github: 'Ezier-Project',
            customGradient: '48, 255, 97',
        },

        {
            title: 'TowerVerse',
            description: 'An online, cross-platform, medieval-themed game',
            github: 'TowerVerse',
            customGradient: '0, 144, 215',
        },

        {
            title: 'Basicpyapi',
            description: 'A barebones websocket server & client made in python',
            github: 'Shadofer/basicpyapi',
        },

        {
            title: 'Dogey',
            description:
                'A pythonic, asynchronous API for the deprecated platform of dogehouse',
            github: 'Shadofer/dogey',
            customGradient: '243, 109, 14',
        },

        {
            title: 'Homepage',
            description: 'My homepage, made with Svelte',
            github: 'Shadofer/shadofer.github.io',
        },

        {
            title: 'XMAS Counter',
            description: 'A reactive christmas counter',
            github: 'Shadofer/xmas-counter',
            customGradient: '255, 0, 0',
        },

        {
            title: 'Spicetify Welcomer',
            description:
                'A very simple spicetify extension which greets you on startup',
            github: 'Shadofer/spicetify-welcomer',
        },

        {
            title: 'Linux Setup',
            description:
                'Quick and easy linux setup utility to facilitate distro hopping',
            github: 'Shadofer/linux-setup',
        },
        {
            title: 'Youtube Homepage',
            description: 'The homepage of my Youtube page',
            github: 'Shadofer/youtube-homepage',
        },
    ];

    let sortedProjects: Project[] = [];

    async function getRepoStars(url: string): Promise<number> {
        const urlArray = url.split('/');
        const owner = urlArray[0];

        // May be undefined
        const repo = urlArray[1];

        return new Promise((resolve) => {
            githubStars(
                `${owner}${repo ? `/${repo}` : ''}`,
                (stars: number) => {
                    resolve(stars);
                }
            );
        });
    }

    async function countProjectStars(): Promise<void> {
        return new Promise((resolve) => {
            let totalCounted = 0;

            // Add the stars attribute to each project automatically
            for (const projectIndex in projects) {
                const project = projects[projectIndex];

                // No await, no blocking
                getRepoStars(project.github).then((stars) => {
                    project.stars = stars;

                    projects[projectIndex] = project;

                    totalCounted += 1;

                    if (totalCounted == projects.length) {
                        resolve();
                    }
                });
            }
        });
    }

    onMount(async () => {
        await countProjectStars();

        sortedProjects = projects.sort((a, b) => {
            return b.stars - a.stars;
        });
    });
</script>

<div class="projects-container">
    <div class="projects">
        {#each sortedProjects as { title, description, github, stars, customGradient }}
            <Saos
                once
                animation={`slide-in 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both`}
            >
                <div
                    class="project-box"
                    style={customGradient
                        ? `
                        background-size: 200% auto;
                        background-image: linear-gradient(
                            to right,
                            rgba(${customGradient}, 5%) 0%,
                            rgba(${customGradient}, 30%) 51%,
                            rgba(${customGradient}, 5%) 100%
                        );
                        box-shadow: -10px 0px 0px rgb(${customGradient});
                `
                        : ''}
                >
                    <div id="project-top">
                        <h1 id="title">
                            <a
                                href={`https://github.com/${github}`}
                                target="_blank">{title}</a
                            >
                        </h1>
                    </div>

                    <h1 id="description">{description}</h1>

                    <div id="project-bottom">
                        <h1 id="stars">{stars || 0}</h1>
                        <svg
                            version="1.2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="48"
                            height="48"
                            ><style>
                                .a {
                                    fill: #ffba00;
                                }
                            </style><path
                                class="a"
                                d="m45.5 17.2q1.5 0.3 1.5 1.3 0 0.6-0.7 1.4l-10.1 10.1 2.4 14.2q0.1 0.2 0.1 0.6 0 0.6-0.3 1-0.3 0.4-0.9 0.4-0.5 0-1.1-0.4l-12.4-6.7-12.4 6.7q-0.6 0.4-1.1 0.4-0.6 0-0.9-0.4-0.3-0.4-0.3-1 0-0.2 0.1-0.6l2.4-14.2-10.1-10.1q-0.7-0.8-0.7-1.4 0-1 1.5-1.3l13.9-2.1 6.2-12.9q0.6-1.2 1.4-1.2 0.8 0 1.4 1.2l6.2 12.9 13.9 2.1z"
                            /></svg
                        >
                    </div>
                </div>
            </Saos>
        {/each}
    </div>
</div>

<style>
    .projects-container {
        text-align: center;
        margin-top: 100px;
    }

    .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .project-box {
        display: flex;
        flex-direction: column;
        transition: 250ms all;
        background: var(--theme-project_box_bg);
        border-radius: 15px;
        padding: 30px;
        margin: 30px;
        width: 600px;
        height: 175px;
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .project-box:hover {
        transform: translateY(-5px);
        background-position: right center;
    }

    .project-box #project-top #title {
        margin: 0;
        font-size: 2.6rem;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        text-align: center;
    }

    .project-box #description {
        margin: 0;
        cursor: default;
        font-size: 1.7rem;
        text-align: center;
    }

    .project-box #stars {
        margin: 0;
        margin-top: 10px;
    }

    .project-box #project-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-box #project-bottom #stars {
        font-size: 2.3rem;
        margin-right: 10px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .project-box #project-bottom svg {
        width: 48px;
        height: 48px;
    }

    @media screen and (max-width: 800px) {
        .projects-container {
            margin-top: 50px;
        }

        .project-box {
            padding: 15px;
            margin: 15px;
            height: 125px;
            width: 400px;
        }

        .project-box #project-top #title {
            font-size: 1.8rem;
        }

        .project-box #description {
            font-size: 1.2rem;
        }

        .project-box #project-bottom #stars {
            font-size: 1.5rem;
            margin-right: 10px;
        }

        .project-box #project-bottom svg {
            width: 30px;
            height: 30px;
        }
    }

    @keyframes -global-slide-in {
        0% {
            transform: translateY(50px);
        }

        100% {
            transform: translateY(0px);
        }
    }
</style>
