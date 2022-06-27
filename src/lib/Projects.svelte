<script lang="ts">
    import Saos from 'saos';
    import githubStars from 'src/github-stars';
    import type { Project } from 'src/interfaces/projects';

    async function getRepoStars(url: string): Promise<number> {
        const urlArray = url.split('/');
        const owner = urlArray[3];

        // May be undefined
        const repo = urlArray[4];

        return new Promise((resolve) => {
            githubStars(
                `${owner}${repo ? `/${repo}` : ''}`,
                (stars: number) => {
                    resolve(stars);
                }
            );
        });
    }

    const projects: Project[] = [
        {
            title: 'Fronvo',
            description: 'The secure, next-generation social media app',
            url: 'https://github.com/fronvo',
        },

        {
            title: 'Ezier',
            description: 'Lightweight solutions to popular packages for NodeJS',
            url: 'https://github.com/ezier-project',
        },

        {
            title: 'TowerVerse',
            description: 'An online, cross-platform, medieval-themed game',
            url: 'https://github.com/towerverse',
        },

        {
            title: 'Basicpyapi',
            description: 'A barebones websocket server & client made in python',
            url: 'https://github.com/shadofer/basicpyapi',
        },

        {
            title: 'Dogey',
            description:
                'A pythonic, asynchronous API for the deprecated platform of dogehouse',
            url: 'https://github.com/shadofer/dogey',
        },

        {
            title: 'Homepage',
            description: 'My homepage, made with Svelte',
            url: 'https://github.com/shadofer/shadofer.github.io',
        },

        {
            title: 'XMAS Counter',
            description: 'A reactive christmas counter',
            url: 'https://github.com/Shadofer/xmas-counter',
        },

        {
            title: 'Spicetify Welcomer',
            description:
                'A very simple spicetify extension which greets you on startup',
            url: 'https://github.com/Shadofer/spicetify-welcomer',
        },

        {
            title: 'Linux Setup',
            description:
                'Quick and easy linux setup utility to facilitate distro hopping',
            url: 'https://github.com/Shadofer/linux-setup',
        },
    ];

    function countProjectStars(): void {
        // Add the stars attribute to each project automatically
        for (const projectIndex in projects) {
            const project = projects[projectIndex];

            // No await, no blocking
            getRepoStars(project.url).then((stars) => {
                project.stars = stars;

                projects[projectIndex] = project;
            });
        }
    }

    $: countProjectStars();
</script>

<div class="projects-container">
    <div class="projects">
        {#each projects as { title, description, url, stars }, _}
            <Saos
                animation={`slide-in 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both`}
            >
                <div class="project-box">
                    <div id="project-top">
                        <h1 id="title">
                            <a href={url} target="_blank">{title}</a>
                        </h1>
                    </div>

                    <h1 id="description">{description}</h1>

                    <div id="project-bottom">
                        <h1 id="stars">{stars}</h1>
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
    }

    .project-box {
        transition: 500ms all;
        background: var(--theme-project_box_bg);
        box-shadow: 0 0 5px var(--theme-project_box_shadow);
        border-radius: 10px;
        text-align: center;
        padding: 20px;
        margin: 20px;
    }

    .project-box:hover {
        box-shadow: 0 0 15px var(--theme-project_box_shadow);
        transform: scale(1.03, 1.03);
    }

    .project-box #project-top #title {
        margin: 0;
        font-size: 2.6rem;
    }

    .project-box #description {
        margin: 0;
        cursor: default;
        max-width: 550px;
        font-size: 1.7rem;
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
            padding: 10px;
            margin: 10px;
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
