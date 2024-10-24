import TeamData from "./TeamData.mjs";

const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalnews = await teamData.getLocalNewsItems()
console.log("This is the local players list", getlocalnews);
teamData.renderNews(getlocalnews)