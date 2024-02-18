<script>
    import JourneyDestination from './journey/JourneyDestination.svelte';
    import JourneyPoint from './journey/JourneyPoint.svelte';
</script>

<div
    class="flex flex-col items-center p-50 -z-10 mt-100 mb-250 min-h-screen"
    id="journey"
>
    <h1
        class="mobile:text-12 text-white mb-10 mt-10 text-2xl select-none font-normal"
    >
        The journey of
    </h1>

    <div class="flex items-center justify-center mb-75 select-none">
        <img
            class="mobile:w-48 mobile:h-48 w-56 h-56 mr-10"
            src="/favicon.png"
            draggable={false}
            alt="Avatar"
        />
        <h1 class="mobile:text-16 text-25 font-normal text-white">Shadofer</h1>
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
        creationUrl={'https://fronvo.com'}
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
        creationUrl={'https://github.com/Fronvo/site'}
        lineHeight={50}
        skipPoint
    />

    <JourneyPoint text="2024 -- Refined visions" lineHeight={50} />

    <JourneyPoint
        creationText={'Finished'}
        creation={'Fronvo V2'}
        creationUrl={'https://fronvo.com'}
        lineHeight={50}
        skipPoint
    />
    <JourneyDestination text="Now" />
</div>
