Platform.mods.kubejs.name = 'Reclamation'


StartupEvents.registry('item', event => {
    event.create('scrap_wood')
        .displayName('Scrap Wood')
        .burnTime('100')

    event.create('feather_flesh_amalgam')
        .displayName('Feather-Flesh Amalgam')

    event.create('blooded_amalgam')
        .displayName("Blooded Amalgam")

    event.create('mana_amalgam')
        .displayName("Mana-Dosed Amalgam")

    event.create('infused_amalgam')
        .displayName("Infused Amalgam")
        .glow(true)
})

ItemEvents.modification(event => {
    event.modify('complicated_bees:cold_frame', item => {
        item.maxDamage = 30
    })
})