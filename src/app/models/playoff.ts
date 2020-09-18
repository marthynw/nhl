export interface Playoff {
    copyright: string;
    id: number;
    name: string;
    season: string;
    defaultRound: number;
    rounds: [{
        number: number;
        code: number;
        names: {
            name: string;
            shortName: string;
        },
        format: {
            name: string;
            description: string;
            numberOfGames: number;
            numberOfWins: number;
        },
        series: [{
            seriesNumber: number;
            seriesCode: string;
            names: {
                matchupName: string;
                teamAbbreviationA: string;
                teamAbbreaviationB: string;
                seriesSlug: string;
            },
            currentGame: {
                seriesSummary: {
                    gamePk: number;
                    gameNumber: number;
                    gameLabel: string;
                    necessary: boolean;
                    gameCode: number;
                    gameTime: string;
                    seriesStatus: string;
                    seriesStatusShort: string;
                }
            },
            conference: {
                id: number;
                name: string;
                link: string;
            },
            round: {
                number: number;
            },
            matchupTeams: [{
                team: {
                    id: number;
                    name: string;
                    link: string;
                },
                seed: {
                    type: string;
                    rank: number;
                    isTop: boolean;
                },
                seriesRecord: {
                    wins: number;
                    losses: number;
                }
            }]
        }]
    }];
}
