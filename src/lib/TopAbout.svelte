<div class="about">
    <h1 id="intro">The story of</h1>
    <h1 id="intro">
        a <span>Fullstack dev.</span>
    </h1>

    <span id="spacer" />

    <h1 id="descriptor">Experienced in production-ready apps</h1>
    <h1 id="descriptor">and cutting-edge tech stacks</h1>

    <a href="https://github.com/Shadofer" target="_blank">
        <button>Visit Github</button>
    </a>
</div>

<style>
    .about {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    #intro {
        font-size: 4rem;
        letter-spacing: 1px;
        font-weight: 800;
        color: white;
    }

    span {
        background: -webkit-linear-gradient(
            140deg,
            #ffffff,
            #ff2600,
            #ffffff,
            #00db92,
            #ffffff
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #spacer {
        margin-top: 15px;
    }

    #descriptor {
        font-size: 1.5rem;
        letter-spacing: 0.25px;
        font-weight: 600;
        text-align: center;
        color: white;
    }

    a {
        margin-top: 30px;
    }

    button {
        font-size: 1.5rem;
        width: 200px;
    }

    @media screen and (max-width: 800px) {
        #intro {
            font-size: 2.5rem;
        }

        #descriptor {
            font-size: 1.2rem;
        }

        button {
            font-size: 1.1rem;
            width: 140px;
            cursor: default;
        }
    }
</style>
