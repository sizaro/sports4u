import TeamData from "./TeamData.mjs";

const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalTeams = await teamData.getLocalTeamsList()
teamData.renderTeamInfo(getlocalTeams);

console.log(getlocalTeams)