import React from "react";

const topLevelClick = (e) => {
  let disable = true
  for(let UUID in window.files) {
    if(window.files[UUID].Status === "done") {
      disable = false
    }
  }
  window.popupMenu(e.currentTarget.textContent, e.currentTarget.getBoundingClientRect().left, e.currentTarget.getBoundingClientRect().bottom, disable);
}

export const Titlebar = (props) => {
    return (
      <div className="window-titlebar">
      <div className="titlebar-drag-region"></div>
        <div className="titlebar-menu">
          <div className="logo-icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1146 1148" width="16px" height="16px"><path d="M1046,328v720H326V328h720m10-100H316a90,90,0,0,0-90,90v740a90,90,0,0,0,90,90h740a90,90,0,0,0,90-90V318a90,90,0,0,0-90-90Z" fill="#eb358a"/><path d="M138.5,318c0-97.87,79.63-177.5,177.5-177.5H920V90A90,90,0,0,0,830,0H90A90,90,0,0,0,0,90V830a90,90,0,0,0,90,90h48.5Z" fill="#484848"/><path d="M413.5,415.5V920H830a90,90,0,0,0,90-90V415.5Zm401.92,402a44.36,44.36,0,0,1-31.47,13H739.16v-.06l-116.38-.17a44.5,44.5,0,0,1,.06-89h.07l53.46.08-152-152.05a44.5,44.5,0,0,1,62.93-62.93L739.38,678.49l.07-53.66A44.5,44.5,0,0,1,784,580.39H784A44.5,44.5,0,0,1,828.45,625l-.22,156.64A44.42,44.42,0,0,1,815.42,817.47Z" fill="#484848"/></svg>
            </div>
          <div className="menu">
            <div className="topLevel" onClick={ topLevelClick }>File</div>
            <div className="topLevel" onClick={ topLevelClick }>Edit</div>
            <div className="topLevel" onClick={ topLevelClick }>Help</div>
          </div>
          <div className="update" onClick={window.openWebsite} style={ { display: (window.appInfo.newVersion && window.GlobalSettings.App.updates ? "flex" : "none") } }>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
          <div className="text">Download { window.appInfo.newVersion }</div>
          </div>
        </div>
        <div className="window-title">{props.title || ""}</div>
        <div className="window-controls-container">
          <div className="window-icon-bg" onClick={() => { window.setWindowState('minimize') }}>
            <div className="window-icon window-minimize"></div>
          </div>
          <div className="window-icon-bg" onClick={async () => { if(await window.isMaximized()) { window.setWindowState('unmaximize') } else { window.setWindowState('maximize') } }}>
            <div className="window-icon window-max-restore window-maximize"></div>
          </div>
          <div className="window-icon-bg window-close-bg" onClick={() => { window.setWindowState('close') }}>
            <div className="window-icon window-close"></div>
          </div>
        </div>
      </div>
    );
}

