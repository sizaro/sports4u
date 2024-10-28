import TeamData from './TeamData.mjs';

import { loadHeaderFooter } from './utils.mjs';

const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalPlayers =  teamData.getLocalplayersList()
console.log('This is the local team players list', getlocalPlayers);
teamData.renderPlayerDetails(getlocalPlayers)

loadHeaderFooter();
