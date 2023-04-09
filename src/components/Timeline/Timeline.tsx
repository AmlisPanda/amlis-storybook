import { TimelineActivity } from "./timelineTypes";

import styles from "./timeline.module.scss";

interface TimelineProps {
  activities: TimelineActivity[];
}

const Timeline = ({ activities }: TimelineProps) => {
  return (
    <div>
      <div className={styles.verticalLine}></div>
      {activities?.map((activity) => {
        return (
          <div className={styles.activity}>
            <h4>{activity.title}</h4>
            <span>{activity.subtitle}</span>
            <div>{activity.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
