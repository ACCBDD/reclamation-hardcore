EntityEvents.spawned(event => {
    let entity = event.entity;

    // Check if we are spawning a chicken with passengers
    if (entity.type == 'minecraft:chicken' && !entity.passengers.isEmpty()) {

        // detach all passengers
        entity.passengers.forEach(p => {
            p.stopRiding();
        });

        // cancel the spawning event for the chicken
        event.cancel();
    }
})

ServerEvents.loaded(event => {
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("doTraderSpawning", false)
    event.server.runCommandSilent('difficulty hard')
    event.server.runCommandSilent('gamerule waterSourceConversion false')

    event.server.persistentData.gameRules = true
})

BlockEvents.rightClicked(event => {
    const { block, item, player } = event;
    const panning = Component.of("Sifting for copper...").white();
    if (!item) return;

    if (block.id === "minecraft:gravel" && item.id === "minecraft:bowl") {
        player.displayClientMessage(panning, true);
        if (Math.random() < 0.25) {
            player.give("create:copper_nugget")
        }
    } else if (item.id === "minecraft:glass_bottle" || item.id === "thirst:terracotta_bowl") {
        const pos = player.rayTrace(5).block; // get the block the player is actually looking at
        const lookedAt = player.level.getBlock(pos.x, pos.y, pos.z);
        if (lookedAt.id === "minecraft:water" && lookedAt.properties.level === "0") {
            player.level.setBlock(pos.x, pos.y, pos.z, "minecraft:air");
        }
    }
})