<script>
    import JourneyDestination from './journey/JourneyDestination.svelte';
    import JourneyPoint from './journey/JourneyPoint.svelte';
</script>

<div class="journey" id="journey">
    <h1 id="first">The journey of</h1>

    <div class="one">
        <img src="/favicon.png" draggable={false} alt="Avatar" />
        <h1>Shadofer</h1>
    </div>

    <JourneyPoint text="2015 -- Started coding" lineHeight={150} />
    <JourneyPoint text="Developed Python bots" lineHeight={350} skipPoint />

    <JourneyPoint text="2016 -- Started creating bots as a passion" />

    <JourneyPoint
        text="2017 --"
        creationText={'Grew'}
        creationPrefix={'a'}
        creation={'Youtube'}
        creationSuffix={'channel to 3.500 subscribers with over 500k views'}
        creationUrl={'https://youtube.com/@shadofer'}
        lineHeight={100}
    />
    <JourneyPoint text="Basic scripting in Lua" lineHeight={400} skipPoint />

    <JourneyPoint text="2018 -- Android Development" lineHeight={150} />
    <JourneyPoint
        text="Created an Android App for my Youtube"
        lineHeight={100}
        skipPoint
    />
    <JourneyPoint
        text="Developed mobile apps for remote startups"
        lineHeight={250}
        skipPoint
    />

    <JourneyPoint
        text="2019 -- Focused on programming knowledge"
        lineHeight={100}
    />
    <JourneyPoint text="Basics of C & C++" lineHeight={150} skipPoint />
    <JourneyPoint text="Basics of web development" lineHeight={125} skipPoint />
    <JourneyPoint text="Basics of Kotlin" lineHeight={125} skipPoint />

    <JourneyPoint
        text="2020 -- Deep understanding of coding"
        lineHeight={100}
    />
    <JourneyPoint text="Proficiency in Python" lineHeight={250} skipPoint />
    <JourneyPoint
        text="Introduction to web concepts"
        lineHeight={150}
        skipPoint
    />

    <JourneyPoint text="2021 -- Open source beginnings" lineHeight={50} />
    <JourneyPoint text="Joined Github" lineHeight={75} skipPoint />
    <JourneyPoint
        creationText={'Created'}
        creation={'Dogey'}
        creationUrl={'https://github.com/Shadofer/dogey'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Contributed to'}
        creation={'mintwelcome'}
        creationUrl={'https://github.com/linuxmint/mintwelcome'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Contributed to'}
        creation={'dogehouse.py'}
        creationUrl={'https://github.com/dogegarden/dogehouse.py'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Created'}
        creation={'TowerVerse'}
        creationUrl={'https://github.com/TowerVerse'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Contributed to'}
        creation={'Pincer'}
        creationUrl={'https://github.com/Pincer-org/Pincer'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Created'}
        creation={'Fronvo'}
        creationUrl={'https://github.com/Fronvo'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Created'}
        creation={'XMAS Counter'}
        creationUrl={'https://github.com/Shadofer/xmas-counter'}
        lineHeight={50}
        skipPoint
    />

    <JourneyPoint text="2022 -- Dedication to Fronvo" lineHeight={100} />
    <JourneyPoint
        creationText={'Created'}
        creation={'Ezier'}
        creationUrl={'https://github.com/Ezier-Project'}
        lineHeight={400}
        skipPoint
    />

    <JourneyPoint text="2023 -- Finalisation" lineHeight={250} />
    <JourneyPoint
        creationText={'Finished the'}
        creation={'Fronvo'}
        creationSuffix={'social media'}
        creationUrl={'https://fronvo.com/app'}
        lineHeight={150}
        skipPoint
    />
    <JourneyPoint
        creationText={'Created this'}
        creation={'homepage'}
        creationUrl={'https://github.com/Shadofer/homepage'}
        lineHeight={50}
        skipPoint
    />
    <JourneyPoint
        creationText={'Started development of'}
        creation={'Fronvo V2'}
        creationUrl={'https://github.com/Fronvo/site-discord'}
        lineHeight={50}
        skipPoint
    />

    <JourneyDestination text="Now" />
</div>

<style>
    .journey {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px;
        z-index: -1;
        padding-top: 100px;
        margin-top: 100px;
        margin-bottom: 250px;
        min-height: 100vh;
    }

    #first {
        margin-bottom: 10px;
        font-size: 1.6rem;
    }

    h1 {
        color: black;
        font-weight: 600;
        font-size: 1.5rem;
        white-space: pre-wrap;
        text-align: center;
    }

    .one {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 75px;
        user-select: none;
    }

    .one h1 {
        font-size: 2.2rem;
        font-weight: 500;
    }

    .one img {
        width: 56px;
        height: 56px;
        border-radius: 20px;
        margin-right: 10px;
    }

    @media screen and (max-width: 800px) {
        #first {
            font-size: 1.2rem;
        }

        h1 {
            font-size: 1.2rem;
        }

        .one h1 {
            font-size: 1.6rem;
        }

        .one img {
            width: 48px;
            height: 48px;
            margin-right: 8px;
        }
    }
</style>
