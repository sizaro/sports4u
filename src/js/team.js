import TeamData from "./TeamData.mjs";

const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalPlayers = await teamData.getLocalplayersList()
console.log("This is the local players list", getlocalPlayers);
teamData.renderPlayerDetails(getlocalPlayers)

