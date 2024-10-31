/*const baseURL = import.meta.env.VITE_RAPIDAPI_SERVER_URL;
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;          
const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

const url = 'https://sports-information.p.rapidapi.com/nfl/team-list';
const teamplayersUrl = `https://sports-information.p.rapidapi.com/nfl/team-players`;
const urlNews = 'https://sports-information.p.rapidapi.com/nfl/news'
const teamdetailssUrl = 'https://sports-information.p.rapidapi.com/nfl/team-info'
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '439cdf6a46msh6d87b09f1e4acf7p1f4332jsn357a8e4f9de2',
    'x-rapidapi-host': 'sports-information.p.rapidapi.com'
  }
};*/

const url = import.meta.env.VITE_RAPIDAPI_SERVER_URL;
const teamplayersUrl = import.meta.env.VITE_RAPIDAPI_TEAM_PLAYERS_URL;
const urlNews = import.meta.env.VITE_RAPIDAPI_NEWS_URL;
const teamdetailssUrl = import.meta.env.VITE_RAPIDAPI_TEAM_DETAILS_URL;
const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': apiHost
  }
};


export default class TeamData {
  constructor(){}

  
  renderTeamInfo(teams) {
    const teamsContainer = document.querySelector(".teams-container");
  
    const teamsHtml = teams.map(team => `<div class="team-details">
    <h3>${team.team.displayName}</h3>
    <h4>Abbreviation: ${team.team.abbreviation}</h4>
    <img 
    src="${team.team.logos[0].href}" 
    alt="${team.team.displayName} Logo" 
    class="team-logo" 
    width="100" height="100">
    <a href="/teamplayers/index.html?teamId=${team.team.id}" class="players-card">View Players</a>
    <a href="/team/index.html?teamId=${team.team.id}" class="team-card">Team Info</a></div>
    `).join(''); 
  
    teamsContainer.innerHTML = teamsHtml;
  }
  async renderTeamDetails(teamDetails) {
    const teamsContainer = document.querySelector(".teamDetails-container");
  
    const teamsHtml = `
      <div class="team-details-card">
        <h2 class="team-name">${teamDetails.team.displayName}</h2>
        <h4 class="team-location">Location: ${teamDetails.team.location}</h4>
        <h4 class="team-name">Team Name: ${teamDetails.team.name} (Nickname: ${teamDetails.team.nickname})</h4>
        <h4 class="team-abbreviation">Abbreviation: ${teamDetails.team.abbreviation}</h4>
        <h4 class="team-standing">Standing: ${teamDetails.team.standingSummary}</h4>
  
        <div class="team-logo-container">
          <img 
            src="${teamDetails.team.logos[0].href}" 
            alt="${teamDetails.team.displayName} Logo" 
            class="team-logo" 
            width="150" height="150"
          >
        </div>
  
        <p class="team-colors"><strong>Team Colors:</strong> 
          <span class="color-box" style="background-color: #${teamDetails.team.color};"></span> Primary
          <span class="color-box" style="background-color: #${teamDetails.team.alternateColor};"></span> Alternate
        </p>
        
        <div class="team-actions">
          <a href="/teamplayers/index.html?teamId=${teamDetails.team.id}" class="players-card">View Players</a>
          <a href="/team/index.html?teamId=${teamDetails.team.id}" class="team-card">Team Info</a>
        </div>
  
        <div class="team-summary">
          <h5>Franchise Overview</h5>
          <p>Standing Summary: ${teamDetails.team.standingSummary}</p>
          <p>Team ID: ${teamDetails.team.id}</p>
          <p>Franchise UID: ${teamDetails.team.uid}</p>
          <p>Active Status: ${teamDetails.team.isActive ? 'Active' : 'Inactive'}</p>
        </div>
      </div>`;
  
    teamsContainer.innerHTML = teamsHtml;
  }
  

  async renderPlayerDetails(players) {
    const playerContainer = document.querySelector(".players-container");
    console.log("This is what is arriving in the template", players);
    
    const playersHtml = players.map(player => `
      <div class="player-card">
        <h2>${player.fullName || 'Unknown'} (${player.displayName || ''})</h2>
        ${player.links && player.links[0]?.href ? `<a href="${player.links[0].href}" target="_blank"></a>` : '<span>No player card available</span>'}
        ${player.headshot?.href ? `<img src="${player.headshot.href}" alt="${player.fullName} Headshot" class="player-headshot" width="150" height="150" />` : '<span>No headshot available</span>'}
        <h4>Position: ${player.position?.displayName || 'N/A'}</h4>
        <h4>Team: ${player.displayName || 'Unknown'} (${player.shortName || ''})</h4>
        <h4>Jersey Number: ${player.jersey || 'N/A'}</h4>
        <h4>Height: ${player.displayHeight || 'N/A'}</h4>
        <h4>Weight: ${player.displayWeight || 'N/A'}</h4>
        <h4>Age: ${player.age || 'N/A'}</h4>
        <h4>Date of Birth: ${player.dateOfBirth ? new Date(player.dateOfBirth).toLocaleDateString() : 'N/A'}</h4>
        <h4>Birthplace: ${player.birthPlace?.city || 'N/A'}, ${player.birthPlace?.state || ''}, ${player.birthPlace?.country || ''}</h4>
      </div>
    `).join('');
    
    playerContainer.innerHTML = playersHtml;
  }
  

  renderNews(news) {
    const teamsContainer = document.querySelector(".news-container");
  
    const teamsHtml = news.map(newsItem => ` <section class="newsItem-container">
        <h2 id="news-headline">${newsItem.headline}</h2>
        <p id="news-description">${newsItem.description}</p>
        <p class="published-date" id="news-date">Published on ${newsItem.headline}</p>
        <a id="news-link" href="${newsItem.link}" target="_blank">Read full Article</a>
    </section>
    `).join(''); 
  
    teamsContainer.innerHTML = teamsHtml;
  }
  
  

  
  async getAllTeamsList(){

try {
	const response = await fetch(url, options);
	const teamList = await response.json();
	console.log(teamList);
  return teamList.sports[0].leagues[0].teams
} catch (error) {
	console.log(error);
}
    
  }

  async getAllTeamsPlayers() {
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);
  
    const teamId = urlParams.get("teamId"); 
    
    const playersUrl = `${teamplayersUrl}/${teamId}`; 
  
    try {
      const response = await fetch(playersUrl, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const playerList = await response.json();
      console.log("This is the fetched list of the players", playerList);
      return playerList;
    } catch (error) {
      console.log("Error fetching player list:", error); 
    }
  }

  async getAllNews(){

    try {
      const response = await fetch(urlNews, options);
      const newsList = await response.json();
      console.log(newsList);
      return newsList
    } catch (error) {
      console.log(error);
    }}

    
  async getAllTeamsDetails() {
    const queryString = window.location.search;
    
    const urlParams = new URLSearchParams(queryString);
  
    const teamId = urlParams.get("teamId"); 
    
    const playersUrl = `${teamdetailssUrl}/${teamId}`; 
  
    try {
      const response = await fetch(playersUrl, options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const playerList = await response.json();
      console.log(playerList);
      return playerList;
    } catch (error) {
      console.log("Error fetching player list:", error); 
    }
  }


  async getLocalTeamsList() {
  // Check if the data exists in localStorage
  const localTeams = JSON.parse(localStorage.getItem("teamsList"));
  //if(!Array.isArray(localTeams)){
  //  localTeams = []
 // }

    console.log("This is the data of teams from the local storage", localTeams)
  if (localTeams) {
    // Parse and use the cached data
    console.log("Using local storage data", localTeams);
    return localTeams.teams;
  } else {
    // If no cached data, fetch from API
    const teamsList = await this.getAllTeamsList();
    console.log(teamsList)
    const teamListObj ={teams:teamsList}
    console.log(teamListObj)

    // Cache the data in localStorage
    localStorage.setItem("teamsList", JSON.stringify(teamListObj));

    console.log("Fetched and stored to the local storage data");
  }}

  async getLocalplayersList() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const teamId = urlParams.get("teamId"); 
  
    // Check if the data exists in localStorage
    const storedPlayers = JSON.parse(localStorage.getItem("playersList")) || {};
  
    // If players for the teamId exist, return them
    if (storedPlayers[teamId]) {
      console.log("Using local storage data for team ID:", teamId);
      return storedPlayers[teamId].team.athletes;
    } else {
      // If no cached data, fetch from API
      const playerList = await this.getAllTeamsPlayers();
      
      // If playerList is not null, store it in localStorage under teamId
      if (playerList) {
        storedPlayers[teamId] = playerList; // Store players by team ID
        localStorage.setItem("playersList", JSON.stringify(storedPlayers)); // Save the updated object to localStorage
        console.log("Fetched and stored to the local storage data for team ID:", teamId);
        return storedPlayers[teamId].team.athletes;
      } else {
        console.log("No players found for team ID:", teamId);
      }
    }
  }

  
  async getLocalNewsItems() {
    // Check if the data exists in localStorage
    const localNews = JSON.parse(localStorage.getItem("newsList"));
    //if(!Array.isArray(localTeams)){
    //  localTeams = []
   // }
  
      console.log(localNews)
    if (localNews) {
      // Parse and use the cached data
      console.log("Using local storage data", localNews);
      return localNews;
    } else {
      // If no cached data, fetch from API
      const newsList = await this.getAllNews();
  
      // Cache the data in localStorage
      localStorage.setItem("newsList", JSON.stringify(newsList));
  
      console.log("Fetched and stored to the local storage data");
    }}

    
  async getLocalTeamDetails() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const teamId = urlParams.get("teamId"); 
  
    // Check if the data exists in localStorage
    const storedTeamDetails = JSON.parse(localStorage.getItem("teamDetails")) || {};
  
    // If players for the teamId exist, return them
    if (storedTeamDetails[teamId]) {
      console.log("Using local storage data for team ID:", teamId);
      return storedTeamDetails[teamId]
    } else {
      // If no cached data, fetch from API
      const teamDetails = await this.getAllTeamsDetails();
      
      // If playerList is not null, store it in localStorage under teamId
      if (teamDetails) {
        storedTeamDetails[teamId] = teamDetails; // Store players by team ID
        localStorage.setItem("playersList", JSON.stringify(storedTeamDetails)); // Save the updated object to localStorage
        console.log("Fetched and stored to the local storage data for team ID:", teamId);
        return storedTeamDetails[teamId];
      } else {
        console.log("No players found for team ID:", teamId);
      }
    }
  }

}  


  