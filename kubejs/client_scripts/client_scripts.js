ItemEvents.tooltip(event => {
    event.addAdvanced('create:mechanical_press', (item, advanced, text) => {
        text.add(Text.of('Cannot make plates!').red())
    })
})

JEIEvents.information(event => {
    event.addItem('minecraft:twisting_vines', ['Can be obtained by bonemealing Warped Nylium.'])
})

JEIEvents.removeRecipes(event => {
    event.remove('theurgy:accumulation', [
        'reclamation:sal_from_water_empty',
        'reclamation:sal_from_water_null',
        'reclamation:sal_from_water_crystal_1',
        'reclamation:sal_from_water_crystal_2',
        'reclamation:sal_from_water_crystal_3',
        'reclamation:sal_from_water_1',
        'reclamation:sal_from_water_2',
        'reclamation:sal_from_water_3'
    ])
})