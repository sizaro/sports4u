import TeamData from './TeamData.mjs';
import { loadHeaderFooter } from './utils.mjs';

const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalTeamDetails = teamData.getLocalTeamDetails()
console.log('This is the local team details', getlocalTeamDetails);
teamData.renderTeamDetails(getlocalTeamDetails)

loadHeaderFooter();
