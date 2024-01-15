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
        font-size: 4.5rem;
        color: #2e2e2e;
        letter-spacing: 1px;
        font-weight: 800;
    }

    span {
        background: -webkit-linear-gradient(
            120deg,
            #000000,
            #ff2600,
            #000000,
            #00db92,
            #000000
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
        color: rgb(58, 72, 82);
        font-weight: 500;
        text-align: center;
    }

    button {
        font-size: 1.5rem;
        width: 200px;
        margin-top: 30px;
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
