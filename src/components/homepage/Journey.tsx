import JourneyDestination from "./JourneyDestination";
import JourneyPoint from "./JourneyPoint";

export default function Journey() {
  return (
    <div
      id="journey"
      className="pt-[100px] flex flex-col items-center justify-center mb-20 text-center"
    >
      <h1 className="xs:text-2xl font-black text-4xl tracking-tighter">
        My programming journey
      </h1>

      <h1 className="xs:text-sm xs:w-[75%] text-lg">
        Here's my documented past and present timeline.
      </h1>

      <span className="mt-6" />

      <JourneyPoint text="Started coding" year={2015} lineHeight={150} />
      <JourneyPoint text="Developed Python bots" lineHeight={350} skipPoint />

      <JourneyPoint text="Started creating bots as a passion" year={2016} />

      <JourneyPoint
        year={2017}
        creationText={"Grew"}
        creationPrefix={"a"}
        creation={"Youtube"}
        creationSuffix={"channel to 3.500 subscribers with over 500k views"}
        creationUrl={"https://youtube.com/@shadofer"}
        lineHeight={100}
      />
      <JourneyPoint text="Basic scripting in Lua" lineHeight={400} skipPoint />

      <JourneyPoint text="Android Development" year={2018} lineHeight={150} />
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
        text="Focused on programming knowledge"
        year={2019}
        lineHeight={100}
      />
      <JourneyPoint text="Basics of C & C++" lineHeight={150} skipPoint />
      <JourneyPoint
        text="Basics of web development"
        lineHeight={125}
        skipPoint
      />
      <JourneyPoint text="Basics of Kotlin" lineHeight={125} skipPoint />

      <JourneyPoint
        text="Deep understanding of coding"
        year={2020}
        lineHeight={100}
      />
      <JourneyPoint text="Proficiency in Python" lineHeight={250} skipPoint />
      <JourneyPoint
        text="Introduction to web concepts"
        lineHeight={150}
        skipPoint
      />

      <JourneyPoint text="Joined Github" year={2021} lineHeight={50} />
      <JourneyPoint
        creationText={"Created"}
        creation={"Dogey"}
        creationUrl={"https://github.com/StamTsag/dogey"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Contributed to"}
        creation={"linuxmint"}
        creationUrl={"https://github.com/linuxmint/mintwelcome"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Contributed to"}
        creation={"dogehouse.py"}
        creationUrl={"https://github.com/dogegarden/dogehouse.py"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Created"}
        creation={"TowerVerse"}
        creationUrl={"https://github.com/TowerVerse"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Contributed to"}
        creation={"Pincer"}
        creationUrl={"https://github.com/Pincer-org/Pincer"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Created"}
        creation={"Fronvo"}
        creationUrl={"https://github.com/Fronvo"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Created"}
        creation={"XMAS Counter"}
        creationUrl={"https://github.com/StamTsag/xmas-counter"}
        lineHeight={50}
        skipPoint
      />

      <JourneyPoint text="Dedication to Fronvo" year={2022} lineHeight={100} />
      <JourneyPoint
        creationText={"Created"}
        creation={"Ezier"}
        creationUrl={"https://github.com/Ezier-Project"}
        lineHeight={400}
        skipPoint
      />

      <JourneyPoint text="Finalisation" year={2023} lineHeight={250} />
      <JourneyPoint
        creationText={"Finished the"}
        creation={"Fronvo"}
        creationSuffix={"social media"}
        creationUrl={"https://fronvo.com"}
        lineHeight={150}
        skipPoint
      />
      <JourneyPoint
        creationText={"Created this"}
        creation={"homepage"}
        creationUrl={"https://github.com/StamTsag/homepage"}
        lineHeight={50}
        skipPoint
      />
      <JourneyPoint
        creationText={"Started development of"}
        creation={"Fronvo V2"}
        creationUrl={"https://github.com/Fronvo/site"}
        lineHeight={50}
        skipPoint
      />

      <JourneyPoint text="New horizons" year={2024} lineHeight={50} />

      <JourneyPoint
        creationText={"Finished"}
        creation={"Fronvo V2"}
        creationUrl={"https://fronvo.com"}
        lineHeight={50}
        skipPoint
      />

      <JourneyPoint
        creationText={"Created"}
        creation={"Litestore"}
        creationUrl={"https://litestore.stamtsag.com/"}
        lineHeight={50}
        skipPoint
      />

      <JourneyPoint
        creationText={"Upgraded this homepage with"}
        creation={"shadcn"}
        creationUrl={"https://ui.shadcn.com/"}
        lineHeight={25}
        skipPoint
      />

      <JourneyPoint
        creationText={"Upgraded Litestore with"}
        creation={"shadcn"}
        creationUrl={"https://ui.shadcn.com/"}
        lineHeight={25}
        skipPoint
      />

      <JourneyPoint
        creationText={"Joined"}
        creation={"Stoy Solutions"}
        creationUrl={"https://stoysolutions.com/"}
        creationSuffix={"as a Fullstack Developer"}
        lineHeight={50}
        skipPoint
      />

      <JourneyPoint
        creationText={"Worked on"}
        creation={"TynkerAI"}
        creationUrl={"https://tynkerai.com/"}
        lineHeight={15}
        skipPoint
      />

      <JourneyPoint
        creationText={"Joined"}
        creation={"E-Restaurants.gr"}
        creationUrl={"https://e-restaurants.gr/"}
        creationSuffix={"as a Senior Frontend Developer"}
        lineHeight={25}
        skipPoint
      />

      <JourneyDestination />
    </div>
  );
}
