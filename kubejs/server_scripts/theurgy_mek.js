ServerEvents.recipes(event => {
    const sulfurs = [
        ['rotten_flesh', 'minecraft:rotten_flesh', 'minecraft:rotten_flesh'],
        ['spider_eye', 'minecraft:spider_eye', 'minecraft:spider_eye'],
        ['string', 'minecraft:string', 'minecraft:string'],
        ['ghast_tear', 'minecraft:ghast_tear', 'minecraft:ghast_tear'],
        ['wither_skeleton_skull', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull'],
        ['skeleton_skull', 'minecraft:skeleton_skull', 'minecraft:skeleton_skull'],
        ['magma_cream', 'minecraft:magma_cream', 'minecraft:magma_cream'],
        ['phantom_membrane', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane'],
        ['prismarine_shard', 'minecraft:prismarine_shard', 'minecraft:prismarine_shard'],
        ['blaze_rod', 'minecraft:blaze_rod', 'minecraft:blaze_rod'],
        ['ender_pearl', 'minecraft:ender_pearl', 'minecraft:ender_pearl'],
        ['slime_ball', 'minecraft:slime_ball', 'minecraft:slime_ball'],
        ['arrow', 'minecraft:arrow', 'minecraft:arrow'],
        ['bone', 'minecraft:bone', 'minecraft:bone'],
        ['gunpowder', 'minecraft:gunpowder', 'minecraft:gunpowder'],
        ['shulker_shell', 'minecraft:shulker_shell', 'minecraft:shulker_shell'],
        ['elytra', 'minecraft:elytra', 'minecraft:elytra'],
        ['nether_star', 'minecraft:nether_star', 'minecraft:nether_star'],
        ['dragon_egg', 'minecraft:dragon_egg', 'minecraft:dragon_egg'],
        ['heart_of_the_sea', 'minecraft:heart_of_the_sea', 'minecraft:heart_of_the_sea'],
        ['porkchop', 'minecraft:porkchop', 'minecraft:porkchop'],
        ['beef', 'minecraft:beef', 'minecraft:beef'],
        ['mutton', 'minecraft:mutton', 'minecraft:mutton'],
        ['chicken', 'minecraft:chicken', 'minecraft:chicken'],
        ['egg', 'minecraft:egg', 'minecraft:egg'],
        ['ink_sac', 'minecraft:ink_sac', 'minecraft:ink_sac'],
        ['glow_ink_sac', 'minecraft:glow_ink_sac', 'minecraft:glow_ink_sac'],
        ['beetroot', 'minecraft:beetroot', 'minecraft:beetroot'],
        ['turtle_scute', 'minecraft:scute', 'minecraft:scute'],
        ['pufferfish', 'minecraft:pufferfish', 'minecraft:pufferfish'],
        ['tropical_fish', 'minecraft:tropical_fish', 'minecraft:tropical_fish'],
        ['salmon', 'minecraft:salmon', 'minecraft:salmon'],
        ['cod', 'minecraft:cod', 'minecraft:cod'],
        ['white_wool', 'minecraft:white_wool', '#minecraft:wool'],
        ['feather', 'minecraft:feather', 'minecraft:feather'],
        ['leather', 'minecraft:leather', 'minecraft:leather'],
        ['rabbit_foot', 'minecraft:rabbit_foot', 'minecraft:rabbit_foot'],
        ['rabbit_hide', 'minecraft:rabbit_hide', 'minecraft:rabbit_hide'],
        ['rabbit', 'minecraft:rabbit', 'minecraft:rabbit'],
        ['carrot', 'minecraft:carrot', 'minecraft:carrot'],
        ['potato', 'minecraft:potato', 'minecraft:potato'],
        ['wheat', 'minecraft:wheat', 'minecraft:wheat'],
        ['apple', 'minecraft:apple', 'minecraft:apple'],
        ['cocoa_beans', 'minecraft:cocoa_beans', 'minecraft:cocoa_beans'],
        ['nether_wart', 'minecraft:nether_wart', 'minecraft:nether_wart'],
        ['artichoke', 'croptopia:artichoke', '#forge:crops/artichoke'],
        ['asparagus', 'croptopia:asparagus', '#forge:crops/asparagus'],
        ['barley', 'croptopia:barley', '#forge:crops/barley'],
        ['basil', 'croptopia:basil', '#forge:crops/basil'],
        ['bellpepper', 'croptopia:bellpepper', '#forge:crops/bellpepper'],
        ['blackbean', 'croptopia:blackbean', '#forge:crops/blackbean'],
        ['cucumber', 'croptopia:cucumber', '#forge:crops/cucumber'],
        ['cranberry', 'croptopia:cranberry', '#forge:crops/cranberry'],
        ['corn', 'croptopia:corn', '#forge:crops/corn'],
        ['coffee_beans', 'croptopia:coffee_beans', '#forge:crops/coffee_beans'],
        ['chile_pepper', 'croptopia:chile_pepper', '#forge:crops/chile_pepper'],
        ['celery', 'croptopia:celery', '#forge:crops/celery'],
        ['cauliflower', 'croptopia:cauliflower', '#forge:crops/cauliflower'],
        ['cantaloupe', 'croptopia:cantaloupe', '#forge:crops/cantaloupe'],
        ['cabbage', 'croptopia:cabbage', '#forge:crops/cabbage'],
        ['broccoli', 'croptopia:broccoli', '#forge:crops/broccoli'],
        ['blueberry', 'croptopia:blueberry', '#forge:crops/blueberry'],
        ['blackberry', 'croptopia:blackberry', '#forge:crops/blackberry'],
        ['currant', 'croptopia:currant', '#forge:crops/currant'],
        ['eggplant', 'croptopia:eggplant', '#forge:crops/eggplant'],
        ['elderberry', 'croptopia:elderberry', '#forge:crops/elderberry'],
        ['garlic', 'croptopia:garlic', '#forge:crops/garlic'],
        ['ginger', 'croptopia:ginger', '#forge:crops/ginger'],
        ['grape', 'croptopia:grape', '#forge:crops/grape'],
        ['greenbean', 'croptopia:greenbean', '#forge:crops/greenbean'],
        ['greenonion', 'croptopia:greenonion', '#forge:crops/greenonion'],
        ['honeydew', 'croptopia:honeydew', '#forge:crops/honeydew'],
        ['hops', 'croptopia:hops', '#forge:crops/hops'],
        ['kale', 'croptopia:kale', '#forge:crops/kale'],
        ['kiwi', 'croptopia:kiwi', '#forge:crops/kiwi'],
        ['rhubarb', 'croptopia:rhubarb', '#forge:crops/rhubarb'],
        ['raspberry', 'croptopia:raspberry', '#forge:crops/raspberry'],
        ['radish', 'croptopia:radish', '#forge:crops/radish'],
        ['pineapple', 'croptopia:pineapple', '#forge:crops/pineapple'],
        ['pepper', 'croptopia:pepper', '#forge:crops/pepper'],
        ['peanut', 'croptopia:peanut', '#forge:crops/peanut'],
        ['onion', 'croptopia:onion', '#forge:crops/onion'],
        ['olive', 'croptopia:olive', '#forge:crops/olive'],
        ['oat', 'croptopia:oat', '#forge:crops/oat'],
        ['mustard', 'croptopia:mustard', '#forge:crops/mustard'],
        ['lettuce', 'croptopia:lettuce', '#forge:crops/lettuce'],
        ['leek', 'croptopia:leek', '#forge:crops/leek'],
        ['rice', 'croptopia:rice', '#forge:crops/rice'],
        ['rutabaga', 'croptopia:rutabaga', '#forge:crops/rutabaga'],
        ['saguaro', 'croptopia:saguaro', '#forge:crops/saguaro'],
        ['soybean', 'croptopia:soybean', '#forge:crops/soybean'],
        ['spinach', 'croptopia:spinach', '#forge:crops/spinach'],
        ['squash', 'croptopia:squash', '#forge:crops/squash'],
        ['strawberry', 'croptopia:strawberry', '#forge:crops/strawberry'],
        ['sweetpotato', 'croptopia:sweetpotato', '#forge:crops/sweetpotato'],
        ['tea_leaves', 'croptopia:tea_leaves', '#forge:crops/tea_leaves'],
        ['tomatillo', 'croptopia:tomatillo', '#forge:crops/tomatillo'],
        ['tomato', 'croptopia:tomato', '#forge:crops/tomato'],
        ['turmeric', 'croptopia:turmeric', '#forge:crops/turmeric'],
        ['coconut', 'croptopia:coconut', '#forge:crops/coconut'],
        ['cherry', 'croptopia:cherry', '#forge:crops/cherry'],
        ['cashew', 'croptopia:cashew', '#forge:crops/cashew'],
        ['banana', 'croptopia:banana', '#forge:crops/banana'],
        ['avocado', 'croptopia:avocado', '#forge:crops/avocado'],
        ['apricot', 'croptopia:apricot', '#forge:crops/apricot'],
        ['almond', 'croptopia:almond', '#forge:crops/almond'],
        ['flax', 'supplementaries:flax', '#forge:crops/flax'],
        ['zucchini', 'croptopia:zucchini', '#forge:crops/zucchini'],
        ['yam', 'croptopia:yam', '#forge:crops/yam'],
        ['vanilla', 'croptopia:vanilla', '#forge:crops/vanilla'],
        ['turnip', 'croptopia:turnip', '#forge:crops/turnip'],
        ['date', 'croptopia:date', '#forge:crops/date'],
        ['dragonfruit', 'croptopia:dragonfruit', '#forge:crops/dragonfruit'],
        ['crops_fig', 'croptopia:fig', '#forge:crops/fig'],
        ['grapefruit', 'croptopia:grapefruit', '#forge:crops/grapefruit'],
        ['kumquat', 'croptopia:kumquat', '#forge:crops/kumquat'],
        ['lemon', 'croptopia:lemon', '#forge:crops/lemon'],
        ['lime', 'croptopia:lime', '#forge:crops/lime'],
        ['mango', 'croptopia:mango', '#forge:crops/mango'],
        ['nectarine', 'croptopia:nectarine', '#forge:crops/nectarine'],
        ['nutmeg', 'croptopia:nutmeg', '#forge:crops/nutmeg'],
        ['orange', 'croptopia:orange', '#forge:crops/orange'],
        ['peach', 'croptopia:peach', '#forge:crops/peach'],
        ['mangrove_log', 'minecraft:mangrove_log', 'minecraft:mangrove_log'],
        ['dark_oak_log', 'minecraft:dark_oak_log', 'minecraft:dark_oak_log'],
        ['cherry_log', 'minecraft:cherry_log', 'minecraft:cherry_log'],
        ['acacia_log', 'minecraft:acacia_log', 'minecraft:acacia_log'],
        ['jungle_log', 'minecraft:jungle_log', 'minecraft:jungle_log'],
        ['birch_log', 'minecraft:birch_log', 'minecraft:birch_log'],
        ['spruce_log', 'minecraft:spruce_log', 'minecraft:spruce_log'],
        ['oak_log', 'minecraft:oak_log', '#minecraft:oak_logs'],
        ['plum', 'croptopia:plum', '#forge:crops/plum'],
        ['persimmon', 'croptopia:persimmon', '#forge:crops/persimmon'],
        ['pecan', 'croptopia:pecan', '#forge:crops/pecan'],
        ['pear', 'croptopia:pear', '#forge:crops/pear'],
        ['crimson_stem', 'minecraft:crimson_stem', 'minecraft:crimson_stem'],
        ['warped_stem', 'minecraft:warped_stem', 'minecraft:warped_stem'],
        ['archwood', 'ars_nouveau:red_archwood_log', '#forge:logs/archwood'],
        ['dirt', 'minecraft:dirt', 'minecraft:dirt'],
        ['coarse_dirt', 'minecraft:coarse_dirt', 'minecraft:coarse_dirt'],
        ['podzol', 'minecraft:podzol', 'minecraft:podzol'],
        ['grass_block', 'minecraft:grass_block', 'minecraft:grass_block'],
        ['rooted_dirt', 'minecraft:rooted_dirt', 'minecraft:rooted_dirt'],
        ['moss_block', 'minecraft:moss_block', 'minecraft:moss_block'],
        ['mud', 'minecraft:mud', 'minecraft:mud'],
        ['muddy_mangrove_roots', 'minecraft:muddy_mangrove_roots', 'minecraft:muddy_mangrove_roots'],
        ['sand', 'minecraft:sand', '#forge:sand/colorless'],
        ['cobbled_deepslate', 'minecraft:cobbled_deepslate', '#forge:cobblestone/deepslate'],
        ['deepslate', 'minecraft:deepslate', 'minecraft:deepslate'],
        ['mossy_cobblestone', 'minecraft:mossy_cobblestone', '#forge:cobblestone/mossy'],
        ['infested_cobblestone', 'minecraft:infested_cobblestone', '#forge:cobblestone/infested'],
        ['cobblestone', 'minecraft:cobblestone', '#forge:cobblestone/normal'],
        ['infested_stone', 'minecraft:infested_stone', 'minecraft:infested_stone'],
        ['stone', 'minecraft:stone', 'minecraft:stone'],
        ['soul_soil', 'minecraft:soul_soil', 'minecraft:soul_soil'],
        ['soul_sand', 'minecraft:soul_sand', 'minecraft:soul_sand'],
        ['netherrack', 'minecraft:netherrack', '#forge:netherrack'],
        ['gravel', 'minecraft:gravel', 'minecraft:gravel'],
        ['red_sand', 'minecraft:red_sand', '#forge:sand/red'],
        ['granite', 'minecraft:granite', 'minecraft:granite'],
        ['diorite', 'minecraft:diorite', 'minecraft:diorite'],
        ['andesite', 'minecraft:andesite', 'minecraft:andesite'],
        ['blackstone', 'minecraft:blackstone', 'minecraft:blackstone'],
        ['basalt', 'minecraft:basalt', 'minecraft:basalt'],
        ['sandstone', 'minecraft:sandstone', 'minecraft:sandstone'],
        ['red_sandstone', 'minecraft:red_sandstone', 'minecraft:red_sandstone'],
        ['clay_ball', 'minecraft:clay_ball', 'minecraft:clay_ball'],
        ['terracotta', 'minecraft:terracotta', '#minecraft:terracotta'],
        ['crimson_nylium', 'minecraft:crimson_nylium', 'minecraft:crimson_nylium'],
        ['warped_nylium', 'minecraft:warped_nylium', 'minecraft:warped_nylium'],
        ['end_stone', 'minecraft:end_stone', '#forge:end_stones'],
        ['silver', 'embers:silver_ingot', '#forge:ingots/silver'],
        ['copper', 'minecraft:copper_ingot', '#forge:ingots/copper'],
        ['iron', 'minecraft:iron_ingot', '#forge:ingots/iron'],
        ['lava_bucket', 'theurgy:crystallized_lava', 'theurgy:crystallized_lava'],
        ['water_bucket', 'theurgy:crystallized_water', 'theurgy:crystallized_water'],
        ['magma_block', 'minecraft:magma_block', 'minecraft:magma_block'],
        ['ice', 'minecraft:packed_ice', 'minecraft:packed_ice'],
        ['snowball', 'minecraft:snow', 'minecraft:snow'],
        ['crying_obsidian', 'minecraft:crying_obsidian', 'minecraft:crying_obsidian'],
        ['obsidian', 'minecraft:obsidian', 'minecraft:obsidian'],
        ['mycelium', 'minecraft:mycelium', 'minecraft:mycelium'],
        ['purpur_block', 'minecraft:purpur_block', 'minecraft:purpur_block'],
        ['gold', 'minecraft:gold_ingot', '#forge:ingots/gold'],
        ['netherite', 'minecraft:netherite_ingot', '#forge:ingots/netherite'],
        ['uranium', 'mekanism:ingot_uranium', '#forge:ingots/uranium'],
        ['zinc', 'create:zinc_ingot', '#forge:ingots/zinc'],
        ['osmium', 'mekanism:ingot_osmium', '#forge:ingots/osmium'],
        ['lead', 'embers:lead_ingot', '#forge:ingots/lead'],
        ['tin', 'mekanism:ingot_tin', '#forge:ingots/tin'],
        ['demonite', 'bloodmagic:ingot_hellforged', '#forge:ingots/demonite'],
        ['diamond', 'minecraft:diamond', '#forge:gems/diamond'],
        ['emerald', 'minecraft:emerald', '#forge:gems/emerald'],
        ['lapis', 'minecraft:lapis_lazuli', '#forge:gems/lapis'],
        ['quartz', 'minecraft:quartz', '#forge:gems/quartz'],
        ['amethyst', 'minecraft:amethyst_shard', '#forge:gems/amethyst'],
        ['prismarine', 'minecraft:prismarine_crystals', '#forge:gems/prismarine'],
        ['fluorite', 'mekanism:fluorite_gem', '#forge:gems/fluorite'],
        ['sal_ammoniac', 'theurgy:sal_ammoniac_crystal', '#forge:gems/sal_ammoniac'],
        ['certus_quartz', 'ae2:certus_quartz_crystal', '#forge:gems/certus_quartz'],
        ['fluix', 'ae2:fluix_crystal', '#forge:gems/fluix'],
        ['redstone', 'minecraft:redstone', '#forge:dusts/redstone'],
        ['coal', 'minecraft:coal_ore', 'minecraft:coal_ore'],
        ['glowstone', 'minecraft:glowstone_dust', '#forge:dusts/glowstone']
    ]

    const sulfur_niter = [
        ['theurgy:alchemical_sulfurs/earthen_matters/abundant', 'theurgy:alchemical_sulfur_earthen_matters_abundant'],
        ['theurgy:alchemical_sulfurs/earthen_matters/common', 'theurgy:alchemical_sulfur_earthen_matters_common'],
        ['theurgy:alchemical_sulfurs/gems/abundant', 'theurgy:alchemical_sulfur_gems_abundant'],
        ['theurgy:alchemical_sulfurs/gems/common', 'theurgy:alchemical_sulfur_gems_common'],
        ['theurgy:alchemical_sulfurs/gems/rare', 'theurgy:alchemical_sulfur_gems_rare'],
        ['theurgy:alchemical_sulfurs/gems/precious', 'theurgy:alchemical_sulfur_gems_precious'],
        ['theurgy:alchemical_sulfurs/metals/abundant', 'theurgy:alchemical_sulfur_metals_abundant'],
        ['theurgy:alchemical_sulfurs/metals/common', 'theurgy:alchemical_sulfur_metals_common'],
        ['theurgy:alchemical_sulfurs/metals/rare', 'theurgy:alchemical_sulfur_metals_rare'],
        ['theurgy:alchemical_sulfurs/metals/precious', 'theurgy:alchemical_sulfur_metals_precious'],
        ['theurgy:alchemical_sulfurs/other_minerals/abundant', 'theurgy:alchemical_sulfur_metals_abundant'],
        ['theurgy:alchemical_sulfurs/other_minerals/common', 'theurgy:alchemical_sulfur_other_minerals_common'],
        ['theurgy:alchemical_sulfurs/other_minerals/rare', 'theurgy:alchemical_sulfur_other_minerals_rare'],
        ['theurgy:alchemical_sulfurs/logs', 'theurgy:alchemical_sulfur_logs_abundant'],
        ['theurgy:alchemical_sulfurs/crops', 'theurgy:alchemical_sulfur_crops_abundant'],
        ['theurgy:alchemical_sulfurs/animals/abundant', 'theurgy:alchemical_sulfur_animals_abundant'],
        ['theurgy:alchemical_sulfurs/animals/common', 'theurgy:alchemical_sulfur_animals_common'],
        ['theurgy:alchemical_sulfurs/animals/rare', 'theurgy:alchemical_sulfur_animals_rare'],
        ['theurgy:alchemical_sulfurs/mobs/abundant', 'theurgy:alchemical_sulfur_mobs_abundant'],
        ['theurgy:alchemical_sulfurs/mobs/common', 'theurgy:alchemical_sulfur_mobs_common'],
        ['theurgy:alchemical_sulfurs/mobs/rare', 'theurgy:alchemical_sulfur_mobs_rare'],
        ['theurgy:alchemical_sulfurs/mobs/precious', 'theurgy:alchemical_sulfur_mobs_precious']
    ]

    function sulfur_infuse(input, output) {
        event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemicalInput": {
                "amount": 10,
                "tag": "reclamation:mercury"
            },
            "itemInput": {
                "ingredient": {
                    "item": "theurgy:alchemical_sulfur_" + input
                }
            },
            "output": {
                "item": output
            }
        })
    }

    function inject_to_sulfur(input, output, source) {
        event.custom({
            "type": "mekanism:injecting",
            "chemicalInput": {
                "amount": 1,
                "tag": "reclamation:sal_ammoniac"
            },
            "itemInput": {
                "ingredient": {
                    "item": input
                }
            },
            "output": {
                "item": "theurgy:alchemical_sulfur_" + output,
                "nbt": {
                    "theurgy:sulfur.source.id": source
                }
            }
        })
    }

    function sulfur_to_niter(input, output) {
        event.custom({
            "type": "mekanism:enriching",
            "input": {
                "ingredient": {
                    "tag": input
                }
            },
            "output": {
                "item": output
            }
        })
    }

    sulfurs.forEach(([sulfur, item, source]) => {
        sulfur_infuse(sulfur, item)
        inject_to_sulfur(item, sulfur, source)
    })

    sulfur_niter.forEach(([tag, item]) => {
        sulfur_to_niter(tag, item)
    })

    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "theurgy:mercury_shard"
            }
        },
        "output": {
            "amount": 10,
            "infuse_type": "reclamation:mercury"
        }
    })
    event.custom({
        "type": "mekanism:infusion_conversion",
        "input": {
            "ingredient": {
                "item": "theurgy:mercury_crystal"
            }
        },
        "output": {
            "amount": 40,
            "infuse_type": "reclamation:mercury"
        }
    })

    event.custom({
        "type": "mekanism:gas_conversion",
        "input":
        {
            "ingredient":
            {
                "item": "theurgy:mercury_shard"
            }
        },
        "output":
        {
            "amount": 100,
            "gas": "reclamation:mercury"
        }
    })

    event.custom({
        "type": "mekanism:gas_conversion",
        "input":
        {
            "ingredient":
            {
                "item": "theurgy:sal_ammoniac_crystal"
            }
        },
        "output":
        {
            "amount": 200,
            "gas": "reclamation:sal_ammoniac"
        }
    })
})