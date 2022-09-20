import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from "@syncfusion/ej2-react-schedule";

export default function Calendar() {
/* Calendar built with syncfusion */
    return (
        <>
            <ScheduleComponent currentView="Month" className="calendar">
                <ViewsDirective>
                    <ViewDirective option='Day' startHour='10:00' endHour='18:00' />
                    <ViewDirective option='Week' startHour='10:00' endHour='20:00' />
                    <ViewDirective option='Month' showWeekend={true} />
                </ViewsDirective>
                <Inject services={[Day, Week, Month]} />
            </ScheduleComponent>
        </>
    )
}