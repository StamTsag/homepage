<script lang="ts">
    import Saos from 'saos';
    import type { Project } from 'src/interfaces/projects';

    const projects: Project[] = [
        {
            title: 'Fronvo',
            description: 'The secure, next-generation social media app',
            url: 'https://github.com/fronvo',
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
            title: 'TowerVerse',
            description: 'An online, cross-platform, medieval-themed game',
            url: 'https://github.com/towerverse',
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
    ];
</script>

<div class="projects-container">
    <div class="projects">
        {#each projects as { title, description, url }, _}
            <Saos
                once={true}
                animation={`fade-in 3s cubic-bezier(0.230, 1.000, 0.320, 1.000) both`}
            >
                <div class="project-box">
                    <div id="project-top">
                        <h1 id="title">
                            <a href={url} target="_blank">{title}</a>
                        </h1>
                    </div>

                    <h1 id="description">{description}</h1>
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
    }

    @keyframes -global-fade-in {
        0% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }
</style>
