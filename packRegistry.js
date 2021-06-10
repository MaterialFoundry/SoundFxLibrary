
const moduleName = 'soundfxlibrary',
    soundPacksSounboard = ['Combat', 'Creatures', 'Misc', 'Nature', 'Tavern', 'Town'],
    soundPacksMoulinette = ['Combat/Loops', 'Combat/Single', 'Creatures/Animals', 'Creatures/Monsters', 'Misc/Loops', 'Misc/Single', 'Nature/Loops', 'Nature/Single', 'Tavern/Loops', 'Tavern/Single', 'Town/Loops', 'Town/Single'],
    moduleLink = 'https://github.com/CDeenen/SoundFxLibrary';

/* Soundboard by Blitz */
Hooks.once('SBPackageManagerReady', () => {
    soundPacksSounboard.forEach((pack) => {
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
        const moulinetteSources = soundPacksMoulinette.map((pack) => ({
            type: 'sounds',
            publisher: 'CDeenen',
            pack,
            source: 'data',
            path: `modules/${moduleName}/${pack}`,
        }));

        game.moulinette.sources.push(...moulinetteSources);
    };
});
