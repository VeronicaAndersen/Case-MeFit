import keycloak from "../../Keycloak/keycloak";
import TodaysLists from "./TodayLists/TodaysLists";
import GoalDropdown from "./GoalDropdown/GoalDropdown";
import WeeklyLists from "./Weekly/List/WeeklyLists";
import Calendar from "./Calendar";

const Goal = () => {
    return (
        <>
            {keycloak.authenticated && (
                <div>
                    <h1>Active goals</h1>
                    <Calendar/>
                    {/* <button className="setgoalbtn" id="setToday" onClick={checkActive}>Today</button>
                    <button className="setgoalbtn" id="setWeekly" onClick={checkActive}>Weekly</button> */}

                    {/* <div id='today-list'>
                        <TodaysLists />
                        <GoalDropdown />
                    </div> */}

                    <div className="weekly-schedule" id='week-list'>
                        <WeeklyLists />
                    </div>
                </div>
            )}
        </>
    )
}
export default Goal;

var checkProg = true;
var checkWork = false;

const checkActive = () => {
    if (checkWork === false && checkProg === true) {
        checkProg = false;
        document.getElementById("setToday").style.background = "var(--primary)";
        document.getElementById("setToday").style.border = "var(--primary) solid 2px";
        document.getElementById("today-list").style.display = "block";

        checkWork = true;
        document.getElementById("setWeekly").style.border = "none"
        document.getElementById("setWeekly").style.background = "#f1f1f1";
        document.getElementById("week-list").style.display = "none";

    } else if (checkWork === true && checkProg === false) {
        checkProg = true;
        document.getElementById("setToday").style.border = "none"
        document.getElementById("setToday").style.background = "#f1f1f1";
        document.getElementById("today-list").style.display = "none";

        checkWork = false;
        document.getElementById("setWeekly").style.background = "var(--primary)";
        document.getElementById("setWeekly").style.border = "var(--primary) solid 2px";
        document.getElementById("week-list").style.display = "block";
    }
}
