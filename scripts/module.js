import {
    creature_builder_button,
    handle_token_clipboard,
    check_sheet
} from "./lib/lib.js"

Hooks.on("init", async function () {

})

Hooks.on('ready', async function () {
    await game.settings.register("foundryvtt-token-maker", "tokenDirectory", {
        name: "Download Directory",
        hint: "Set a Directory for tokens",
        scope: "world",
        config: true,
        type: String,
        filePicker: "folder",
        default: "",
    });
    await game.settings.register("foundryvtt-pf2e-monster-maker", "roadmaps", {
        scope: 'world',
        config: false,
        type: Object,
        default: {}
    });
    await game.settings.register("foundryvtt-pf2e-monster-maker", "traits", {
        scope: 'client',
        config: false,
        type: Object,
        default: {}
    });


})

Hooks.on('renderActorSheet', creature_builder_button);
Hooks.on('renderActorSheet', async function (sheet, html) {
    document.onpaste = async function (event) {
        await handle_token_clipboard(event, sheet)
    }
})

document.onpaste = async function (event) {
    await handle_token_clipboard(event, null)
}




