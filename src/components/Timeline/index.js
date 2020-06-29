import React, {useState}  from 'react';
import { PropTypes } from 'prop-types';
import ProgressBar from '../ProgressBar';
import {
    TimelineSection,
    TimelineContent,
    Label,
    Text,
    TextSmall,
    Dates,
    Icon
} from './TimelineStyle';

const Timeline = (props) => {

    const [timelineStyle] = useState(props.timelineStyle);
    const [TimelineItems] = useState(props.TimelineItems);
    const [labelWidth] = useState(props.labelWidth);
    const [ContentWidth] = useState(props.ContentWidth);

    const textContent = (ContentItem, timelineStyle) =>{
          if(timelineStyle === "progress"){
            return  <Text  ContentWidth={ContentWidth}>
                        <ProgressBar 
                            barWidth={ContentItem.progressPourcent} 
                            barColor={ContentItem.progressColor}
                            barHoverColor={ContentItem.progressHoverColor}
                            width={ContentItem.barWidth}
                        />
                    </Text>;
        } else if (timelineStyle === "icon"){
            return <Text>
                        <Icon><img src={ContentItem.imageIcon} alt={ContentItem.description}/></Icon>
                        <span>{ContentItem.description}</span>
                    </Text>;

        }else if (timelineStyle === "timeline") 
            return <TextSmall>{ContentItem.text}</TextSmall>;
        else 
            return <Text ContentWidth={ContentWidth}>{ContentItem.text}</Text>;
    };

    return(
        <TimelineSection timelineStyle={timelineStyle}>
            {TimelineItems && TimelineItems.map((item, i) => (
                <TimelineContent  timelineStyle={timelineStyle} key={i.toString()} >
                    <Label labelWidth ={labelWidth}>{item.label}</Label>
                    {textContent(item.content, timelineStyle)}
                    {item.dates && <Dates>{item.dates}</Dates>}
                 </TimelineContent>
            ))}
        </TimelineSection>
    );
}
Timeline.propTypes ={
    timelineStyle: PropTypes.string,
    labelWidth: PropTypes.string,
    ContentWidth: PropTypes.string,
    TimelineItems: PropTypes.array
}

export default Timeline;