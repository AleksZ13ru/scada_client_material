import React from 'react';
import ReactGantt from 'react-gantt';
import {GanttRow} from 'react-gantt';
import {Component} from "react";
import moment from "moment";

export default function Demo() {

    return (
        <ReactGantt
            templates={{
                myTasks: {
                    title: 'My Tasks',
                    steps: [
                        {
                            name: 'Task Phase One',
                            color: '#0099FF'
                        },
                        {
                            name: 'Task Phase Two',
                            color: '#FF9900'
                        }
                    ]
                }
            }}
            leftBound={moment().set({minute: 0, hour: 0, date: 1, month: 1, year: 2016}).toDate()}
            rightBound={moment().set({minute:23,  hour: 29, date: 1, month: 1, year: 2016}).toDate()}
        >
            <GanttRow
                title="Task 1"
                templateName="myTasks"
                steps={[
                    moment().set({hour: 0, date: 1, month: 6, year: 2016}).toDate(),
                    moment().set({hour: 0, date: 4, month: 6, year: 2016}).toDate(),
                    moment().set({hour: 0, date: 17, month: 6, year: 2016}).toDate(),
                    moment().set({hour: 0, date: 27, month: 6, year: 2016}).toDate()
                ]}
            />
        </ReactGantt>
    );
}