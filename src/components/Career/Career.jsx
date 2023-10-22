import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

function Career() {
  return (
      <div className='pt-20 bg-slate-400'  >
        <VerticalTimeline lineColor='#086320'>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#098070', color: 'black', fontFamily: 'JetBrains Mono,Century Gothic bold' }}
            contentArrowStyle={{ borderRight: '7px solid  #098070' }}
            date="2022 - 2023"
            iconStyle={{ background: '#098070', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Junior web developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Sterlite technologies limited, Bangalore , India</h4>
            <p>
              Joined as a graduate engineer trainee. Learned about web development technologies
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#098070', color: 'black', fontFamily: 'JetBrains Mono,Century Gothic bold' }}
            contentArrowStyle={{ borderRight: '7px solid  #098070' }}
            date="2018 - 2022"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Batchelor of technology</h3>
            <h4 className="vertical-timeline-element-subtitle">National institute of technology , Calicut ,Kerala</h4>
            <p>
              Electronics and communication engineering
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#098070', color: 'black', fontFamily: 'JetBrains Mono,Century Gothic bold' }}
            contentArrowStyle={{ borderRight: '7px solid  #098070' }}
            date="2016 - 2018"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Higher Secondary</h3>
            <h4 className="vertical-timeline-element-subtitle">PMSA PTHSS Kakkove , Malappuram , Kerala</h4>
            <p>
              Science
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#098070', color: 'black', fontFamily: 'JetBrains Mono,Century Gothic bold' }}
            contentArrowStyle={{ borderRight: '7px solid  #098070' }}
            date="2013 - 2016"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Highschool</h3>
            <h4 className="vertical-timeline-element-subtitle">PMSA PTHSS Kakkove , Malappuram , Kerala</h4>
            <p>
              Science
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<StarIcon />}
          />
        
        </VerticalTimeline>
      </div>
  )
}

export default Career