import React, { ReactFragment } from "react";

export interface TimelineActivity {
    pointColor: string;
    title: string;
    subtitle: string;
    image: string;
    content: React.ReactNode;
    footer: React.ReactNode;
}