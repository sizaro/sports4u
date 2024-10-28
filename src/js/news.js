import TeamData from './TeamData.mjs';
import { loadHeaderFooter } from './utils.mjs';


const teamData = new TeamData()

//const getTeams = await teamData.getLocalTeamsList()
const getlocalnews = teamData.getLocalNewsItems()
console.log('This is the local players list', getlocalnews);
teamData.renderNews(getlocalnews)
loadHeaderFooter();