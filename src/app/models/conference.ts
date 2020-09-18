export interface Conference {
    copyright: string;
    records: [{
        standingsType: string;
        league: {
            id: number;
            name: string;
            link: string;
        },
        conference: {
            id: number;
            name: string;
            link: string;
        },
        teamRecords: [{
            team: {
                id: number;
                name: string;
                link: string;
            },
             leagueRecord: {
                 wins: number;
                 losses: number;
                 ot: number;
                 type: string;
             },
             regulationWins: number;
             goalsAgainst: number;
             goalsScored: number;
             points: number;
             divisionRank: string;
             divisionL10Rank: string;
             divisionRoadRank: string;
             divisionHomeRank: string;
             conferenceRank: string;
             conferenceL10Rank: string;
             conferenceRoadRank: string;
             conferenceHomeRank: string;
             leagueRank: string;
             leagueL10Rank: string;
             leagueRoadRank: string;
             leagueHomeRank: string;
             wildCardRank: string;
             row: string;
             gamesPlayed: number;
             streak: {
                 streakType: string;
                 streakNumber: number;
                 streakCode: string;
             },
             pointsPercentage: number;
             ppDivisionRank: string;
             ppConferenceRank: string;
             ppLeagueRank: string;
             lastUpdated: string;
        }];
    }];
}
