export interface Season {
    copyright: string;
    seasons: [{
        seasonId: string;
        regularSeasonStartDate: string;
        regularSeasonEndDate: string;
        seasonEndDate: string;
        numberOfGames: number;
        olympicsParticipation: boolean;
        conferencesInUse: boolean;
        divisionsInUse: boolean;
        wildCardInUse: boolean;
    }];
}
