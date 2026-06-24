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
        'jei:/reclamation/sal_from_water_empty',
        'jei:/reclamation/sal_from_water_null',
        'jei:/reclamation/sal_from_water_crystal_1',
        'jei:/reclamation/sal_from_water_crystal_2',
        'jei:/reclamation/sal_from_water_crystal_3',
        'jei:/reclamation/sal_from_water_1',
        'jei:/reclamation/sal_from_water_2',
        'jei:/reclamation/sal_from_water_3'
    ])
})