
const moduleName = 'soundfxlibrary',
    soundPacks = ['Combat', 'Creatures', 'Misc', 'Nature', 'Tavern', 'Town'],
    moduleLink = 'https://github.com/CDeenen/SoundFxLibrary';

/* Soundboard by Blitz */
Hooks.once('SBPackageManagerReady', () => {
    soundPacks.forEach((pack) => {
        SoundBoard.packageManager.addSoundPack(game.i18n.localize(`SOUNDFXLIBRARY.${pack}.title`), `modules/${moduleName}/${pack}`, moduleName, {
            description: game.i18n.localize(`SOUNDFXLIBRARY.${pack}.description`),
            licenses: [{
                licenseUrl: 'https://raw.githubusercontent.com/CDeenen/SoundFxLibrary/master/Attribution.xlsx',
                licenseType: 'Multiple',
                licenseDescription: game.i18n.localize('SOUNDFXLIBRARY.licenseDescription')
            }],
            author: 'CDeenen',
            link: moduleLink
        });
    });
});


/* Moulinette */
Hooks.once('ready', () => {
    if (game.moulinette) {
        const moulinetteSources = soundPacks.map((pack) => ({
            type: 'sounds',
            publisher: 'CDeenen',
            pack,
            source: 'data',
            path: `modules/${moduleName}/${pack}`,
        }));

        game.moulinette.sources.push(...moulinetteSources);
    };
});
