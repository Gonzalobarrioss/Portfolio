import React from 'react'
import { 
    SkillsSection,
    SkillsContainer,
    SkillsCard,
    SkillsBox,
    SkillsPercent,
    SkillsNumber,
    SkillsText,
    SkillsH2
} from './SkillsElements'

function Skills() {
  return (
      <SkillsSection id='skills'>
        <SkillsContainer >
            <SkillsCard>
                <SkillsBox>
                    <div>
                        <SkillsPercent>
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <SkillsNumber>
                                <SkillsH2>90<span>%</span></SkillsH2>
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
                                <SkillsH2>85<span>%</span></SkillsH2>
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
                                <SkillsH2>95<span>%</span></SkillsH2>
                            </SkillsNumber>
                        </SkillsPercent>
                    </div>
                </SkillsBox>
                <SkillsText>Javascript</SkillsText>
            </SkillsCard>
        </SkillsContainer>
    </SkillsSection>
  )
}

export default Skills