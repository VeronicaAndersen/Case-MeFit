

const GoalDropdown = () => {
  var checkVis = false;
  const showDropContent = () => {
    if (checkVis === false) {
      checkVis = true;
      document.getElementById("drop").style.display = "block";
    }
    else if (checkVis === true) {
      checkVis = false;
      document.getElementById("drop").style.display = "none";
    };
  }
  return (
    <>
      {<div className="dropdown" onClick={showDropContent}>
        <div className="dropdown-bar">
          <span>Progress Goals</span>
          <span className="dropdown-arrow" id="arrow-progress"></span>
          <div id="drop" className="dropdown-content">
            <div>Content</div>
          </div>
        </div>
      </div>}
    </>
  )
}
export default GoalDropdown;