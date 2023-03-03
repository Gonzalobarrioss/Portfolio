import React from "react";
import {
  SkillsSection,
  SkillsContainer,
  SkillsCard,
  SkillsBox,
  SkillsPercent,
  SkillsNumber,
  SkillsText,
  SkillsH2,
  SkillsTitle,
} from "./SkillsElements";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <SkillsSection id="skills">
      <SkillsTitle> Tecnologías</SkillsTitle>
      {/*  <SkillsContainer> */}
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        centerMode={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 300ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        className="carousel"
      >
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    90<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>HTML</SkillsText>
        </SkillsCard>
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    85<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>CSS</SkillsText>
        </SkillsCard>
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    95<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>Javascript</SkillsText>
        </SkillsCard>
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    80<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>MySQL</SkillsText>
        </SkillsCard>
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    80<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>React</SkillsText>
        </SkillsCard>
        <SkillsCard>
          <SkillsBox>
            <div>
              <SkillsPercent>
                <svg>
                  <circle cx="70" cy="70" r="70"></circle>
                  <circle cx="70" cy="70" r="70"></circle>
                </svg>
                <SkillsNumber>
                  <SkillsH2>
                    80<span>%</span>
                  </SkillsH2>
                </SkillsNumber>
              </SkillsPercent>
            </div>
          </SkillsBox>
          <SkillsText>React Native</SkillsText>
        </SkillsCard>
      </Carousel>
      {/* </SkillsContainer> */}
    </SkillsSection>
  );
}

export default Skills;
