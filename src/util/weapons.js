const path = require('path');
const imageFolder = path.join(__dirname, '../images/weapons/');

// "": {
//     name: "",
//     icon: imageFolder + '.png',
//     stats: {
//         damage: 0,
//         firerate: 0,
//         ammo: 0,
//         maxammo: 0,
//         difficulty: 0
//     },
//     type: "",
//     scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
//     operators: []
// },

module.exports = {
    "m4": {
        name: "M4",
        icon: imageFolder + 'm4.png',
        stats: {
            damage: 44,
            firerate: 750,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Recruit", "Maverick"]
    },
    "m249": {
        name: "M249",
        icon: imageFolder + 'm249.png',
        stats: {
            damage: 48,
            firerate: 650,
            ammo: 100,
            maxammo: 301,
            difficulty: 2
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Recruit", "Capitao"]
    },
    "5.7_usg": {
        name: "5.7 USG",
        icon: imageFolder + '5.7_usg.png',
        stats: {
            damage: 42,
            firerate: 1,
            ammo: 20,
            maxammo: 121,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Recruit", "Ash", "Thermite", "Nokk", "Zero", "Castle", "Pulse", "Fenrir"]
    },
    "ita12s": {
        name: "ITA12S",
        icon: imageFolder + 'ita12s.png',
        stats: {
            damage: 29,
            firerate: 1,
            ammo: 5,
            maxammo: 36,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Recruit", "Ram", "Melusi"]
    },
    "m590a1": {
        name: "M59OA1",
        icon: imageFolder + 'm590a1.png',
        stats: {
            damage: 48,
            firerate: 1,
            ammo: 7,
            maxammo: 50,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Sledge", "Thatcher", "Deimos", "Smoke", "Mute", "Warden"]
    },
    "l85a2": {
        name: "L85A2",
        icon: imageFolder + 'l85a2.png',
        stats: {
            damage: 47,
            firerate: 670,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Sledge", "Thatcher"]
    },
    "p226_mk_25": {
        name: "P226 MK 25",
        icon: imageFolder + 'p226_mk_25.png',
        stats: {
            damage: 50,
            firerate: 1,
            ammo: 15,
            maxammo: 97,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Sledge", "Thatcher", "Kali", "Smoke", "Mute", "Tubarao"]
    },
    "ar33": {
        name: "AR33",
        icon: imageFolder + 'ar33.png',
        stats: {
            damage: 41,
            firerate: 749,
            ammo: 25,
            maxammo: 176,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Thatcher", "Flores"]
    },
    "g36c": {
        name: "G36C",
        icon: imageFolder + 'g36c.png',
        stats: {
            damage: 38,
            firerate: 780,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ash", "Iana"]
    },
    "r4-c": {
        name: "R4-C",
        icon: imageFolder + 'r4-c.png',
        stats: {
            damage: 39,
            firerate: 860,
            ammo: 30,
            maxammo: 181,
            difficulty: 4
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ash", "Ram"]
    },
    "m45_meusoc": {
        name: "M45 Meusoc",
        icon: imageFolder + 'm45_meusoc.png',
        stats: {
            damage: 58,
            firerate: 1,
            ammo: 7,
            maxammo: 78,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Ash", "Thermite", "Castle", "Pulse"]
    },
    "m1014": {
        name: "M1014",
        icon: imageFolder + 'm1014.png',
        stats: {
            damage: 28,
            firerate: 1,
            ammo: 8,
            maxammo: 49,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Thermite", "Ace", "Castle", "Pulse"]
    },
    "556xi": {
        name: "556XI",
        icon: imageFolder + '556xi.png',
        stats: {
            damage: 47,
            firerate: 690,
            ammo: 30,
            maxammo: 181,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Thermite", "Osa"]
    },
    "f2": {
        name: "F2",
        icon: imageFolder + 'f2.png',
        stats: {
            damage: 37,
            firerate: 980,
            ammo: 25,
            maxammo: 176,
            difficulty: 4
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Twitch"]
    },
    "417": {
        name: "417",
        icon: imageFolder + '417.png',
        stats: {
            damage: 69,
            firerate: 1,
            ammo: 20,
            maxammo: 161,
            difficulty: 2
        },
        type: "Marksman Rifle",
        scopes: ["Telescopic A", "Telescopic B", "Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Twitch", "Lion", "Sens"]
    },
    "sg-cqb": {
        name: "SG-CQB",
        icon: imageFolder + 'sg-cqb.png',
        stats: {
            damage: 44,
            firerate: 1,
            ammo: 7,
            maxammo: 50,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Twich", "Lion", "Grim", "Doc", "Rook"]
    },
    "p9": {
        name: "P9",
        icon: imageFolder + 'p9.png',
        stats: {
            damage: 45,
            firerate: 1,
            ammo: 16,
            maxammo: 113,
            difficulty: 1
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Twich", "Montagne", "Lion", "Ace", "Doc", "Rook"]
    },
    "lfp586": {
        name: "LFP586",
        icon: imageFolder + 'lfp586.png',
        stats: {
            damage: 78,
            firerate: 1,
            ammo: 6,
            maxammo: 61,
            difficulty: 3
        },
        type: "Revolver",
        scopes: ["Custom Sight"],
        operators: ["Twitch", "Montagne", "Lion", "Doc", "Rook", "Kaid"]
    },
    "0ts-03": {
        name: "0Ts-03",
        icon: imageFolder + '0ts-03.png',
        stats: {
            damage: 71,
            firerate: 1,
            ammo: 15,
            maxammo: 106,
            difficulty: 2
        },
        type: "Sniper Rifle",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Glaz"]
    },
    "pmm": {
        name: "PMM",
        icon: imageFolder + 'pmm.png',
        stats: {
            damage: 61,
            firerate: 1,
            ammo: 8,
            maxammo: 81,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Glaz", "Fuze", "Finka", "Osa", "Kapkan", "Tachanka"]
    },
    "gonne-6": {
        name: "Gonne-6",
        icon: imageFolder + 'gonne-6.png',
        stats: {
            damage: 10,
            firerate: 1,
            ammo: 1,
            maxammo: 1,
            difficulty: 1
        },
        type: "Unknown",
        scopes: ["Custom Sight"],
        operators: ["Glaz", "Capitao", "Dokkaebi", "Amaru", "Iana", "Zero"]
    },
    "bearing_9": {
        name: "Bearing 9",
        icon: imageFolder + 'bearing_9.png',
        stats: {
            damage: 33,
            firerate: 1100,
            ammo: 25,
            maxammo: 126,
            difficulty: 5
        },
        type: "Machine Pistol",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Glaz", "Hibana", "Tachanka", "Echo", "Thunderbird"]
    },
    "6p41": {
        name: "6P41",
        icon: imageFolder + '6p41.png',
        stats: {
            damage: 46,
            firerate: 680,
            ammo: 100,
            maxammo: 301,
            difficulty: 3
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Fuze", "Finka"]
    },
    "ak-12": {
        name: "AK-12",
        icon: imageFolder + 'ak-12.png',
        stats: {
            damage: 40,
            firerate: 850,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Fuze", "Ace"]
    },
    "gsh-18": {
        name: "GSH-18",
        icon: imageFolder + 'gsh-18.png',
        stats: {
            damage: 44,
            firerate: 1,
            ammo: 18,
            maxammo: 109,
            difficulty: 1
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Fuze", "Finka", "Flores", "Kapkan", "Tachanka"]
    },
    "p12": {
        name: "P12",
        icon: imageFolder + 'p12.png',
        stats: {
            damage: 44,
            firerate: 1,
            ammo: 15,
            maxammo: 106,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Blitz", "Iq", "Jager", "Bandit", "Wamai"]
    },
    "aug_a2": {
        name: "AUG A2",
        icon: imageFolder + 'aug_a2.png',
        stats: {
            damage: 42,
            firerate: 720,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Iq", "Wamai"]
    },
    "552_commando": {
        name: "552 Commando",
        icon: imageFolder + '552_commando.png',
        stats: {
            damage: 43,
            firerate: 690,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Iq", "Grim"]
    },
    "g8a1": {
        name: "G8A1",
        icon: imageFolder + 'g8a1.png',
        stats: {
            damage: 37,
            firerate: 850,
            ammo: 50,
            maxammo: 251,
            difficulty: 2
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Iq", "Amaru"]
    },
    "c8-sfw": {
        name: "C8-SFW",
        icon: imageFolder + 'c8-sfw.png',
        stats: {
            damage: 40,
            firerate: 837,
            ammo: 30,
            maxammo: 181,
            difficulty: 4
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Buck"]
    },
    "camrs": {
        name: "CAMRS",
        icon: imageFolder + 'camrs.png',
        stats: {
            damage: 69,
            firerate: 1,
            ammo: 20,
            maxammo: 141,
            difficulty: 2
        },
        type: "Marksman Rifle",
        scopes: ["Telescopic A", "Telescopic B", "Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Buck", "Brava"]
    },
    "mk1_9mm": {
        name: "MK1 9mm",
        icon: imageFolder + 'mk1_9mm.png',
        stats: {
            damage: 48,
            firerate: 1,
            ammo: 13,
            maxammo: 105,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Buck", "Iana", "Ram", "Frost"]
    },
    "mk17_cqb": {
        name: "MK17 CQB",
        icon: imageFolder + 'mk17_cqb.png',
        stats: {
            damage: 40,
            firerate: 585,
            ammo: 20,
            maxammo: 181,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Blackbeard"]
    },
    "sr-25": {
        name: "SR-25",
        icon: imageFolder + 'sr-25.png',
        stats: {
            damage: 61,
            firerate: 1,
            ammo: 20,
            maxammo: 141,
            difficulty: 3
        },
        type: "Marksman Rifle",
        scopes: ["Telescopic A", "Telescopic B", "Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Blackbeard", "Flores"]
    },
    "d-50": {
        name: "D-50",
        icon: imageFolder + 'd-50.png',
        stats: {
            damage: 71,
            firerate: 1,
            ammo: 7,
            maxammo: 64,
            difficulty: 3
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Blackbeard", "Nokk", "Valkyrie", "Azami"]
    },
    "para-308": {
        name: "Para-308",
        icon: imageFolder + 'para-308.png',
        stats: {
            damage: 47,
            firerate: 650,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Capitao", "Brava"]
    },
    "prb92": {
        name: "PRB92",
        icon: imageFolder + 'prb92.png',
        stats: {
            damage: 42,
            firerate: 1,
            ammo: 15,
            maxammo: 106,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Capitao", "Nomad", "Aruni"]
    },
    "type-89": {
        name: "Type-89",
        icon: imageFolder + 'type-89.png',
        stats: {
            damage: 40,
            firerate: 850,
            ammo: 20,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Hibana"]
    },
    "supernova": {
        name: "Supernova",
        icon: imageFolder + 'supernova.png',
        stats: {
            damage: 48,
            firerate: 1,
            ammo: 7,
            maxammo: 57,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Hibana", "Amaru", "Echo"]
    },
    "p229": {
        name: "P229",
        icon: imageFolder + 'p229.png',
        stats: {
            damage: 51,
            firerate: 1,
            ammo: 12,
            maxammo: 97,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Hibana", "Grim", "Echo", "Goyo"]
    },
    "c7e": {
        name: "C7E",
        icon: imageFolder + 'c7e.png',
        stats: {
            damage: 42,
            firerate: 800,
            ammo: 30,
            maxammo: 176,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Jackal"]
    },
    "pdw9": {
        name: "PWD9",
        icon: imageFolder + 'pdw9.png',
        stats: {
            damage: 34,
            firerate: 800,
            ammo: 50,
            maxammo: 201,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Jackal", "Osa"]
    },
    "ita12l": {
        name: "ITA12L",
        icon: imageFolder + 'ita12l.png',
        stats: {
            damage: 41,
            firerate: 1,
            ammo: 8,
            maxammo: 57,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Jackal", "Mira", "Solis"]
    },
    "usp40": {
        name: "USP40",
        icon: imageFolder + 'usp40.png',
        stats: {
            damage: 48,
            firerate: 1,
            ammo: 12,
            maxammo: 97,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Jackal", "Brava", "Mira", "Oryx"]
    },
    "ita12s": {
        name: "ITA12S",
        icon: imageFolder + 'ita12s.png',
        stats: {
            damage: 29,
            firerate: 1,
            ammo: 5,
            maxammo: 36,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Jackal", "Amaru", "Frost", "Mira"]
    },
    "t-95_lsw": {
        name: "T-95 LSW",
        icon: imageFolder + 't-95_lsw.png',
        stats: {
            damage: 46,
            firerate: 650,
            ammo: 80,
            maxammo: 241,
            difficulty: 2
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ying"]
    },
    "six12": {
        name: "Six12",
        icon: imageFolder + 'six12.png',
        stats: {
            damage: 46,
            firerate: 1,
            ammo: 6,
            maxammo: 55,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ying"]
    },
    "q-929": {
        name: "Q-929",
        icon: imageFolder + 'q-929.png',
        stats: {
            damage: 60,
            firerate: 1,
            ammo: 10,
            maxammo: 101,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Ying", "Lesion", "Thunderbird"]
    },
    "lmg-e": {
        name: "LMG-E",
        icon: imageFolder + 'lmg-e.png',
        stats: {
            damage: 41,
            firerate: 720,
            ammo: 150,
            maxammo: 301,
            difficulty: 2
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Zofia", "Ram"]
    },
    "m762": {
        name: "M762",
        icon: imageFolder + 'm762.png',
        stats: {
            damage: 45,
            firerate: 730,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Zofia"]
    },
    "rg15": {
        name: "RG15",
        icon: imageFolder + 'rg15.png',
        stats: {
            damage: 38,
            firerate: 1,
            ammo: 15,
            maxammo: 106,
            difficulty: 1
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Zofia", "Ela", "Melusi"]
    },
    "mk_14_ebr": {
        name: "Mk 14 EBR",
        icon: imageFolder + 'mk_14_ebr.png',
        stats: {
            damage: 60,
            firerate: 1,
            ammo: 20,
            maxammo: 121,
            difficulty: 3
        },
        type: "Marksman Rifle",
        scopes: ["Telescopic A", "Telescopic B", "Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Dokkaebi", "Aruni"]
    },
    "bosg.12.2": {
        name: "BOSG.12.2",
        icon: imageFolder + 'bosg.12.2.png',
        stats: {
            damage: 125,
            firerate: 1,
            ammo: 2,
            maxammo: 61,
            difficulty: 2
        },
        type: "Slug Shotgun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Dokkaebi", "Vigil"]
    },
    "smg-12": {
        name: "SMG-12",
        icon: imageFolder + 'smg-12.png',
        stats: {
            damage: 28,
            firerate: 1270,
            ammo: 32,
            maxammo: 129,
            difficulty: 4
        },
        type: "Machine Pistol",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Dokkaebi", "Vigil", "Warden"]
    },
    "c75_auto": {
        name: "C75 Auto",
        icon: imageFolder + 'c75_auto.png',
        stats: {
            damage: 35,
            firerate: 1000,
            ammo: 26,
            maxammo: 131,
            difficulty: 3
        },
        type: "Machine Pistol",
        scopes: ["Custom Sight"],
        operators: ["Dokkaebi", "Kali", "Sentry", "Vigil", "Thorn"]
    },
    "v308": {
        name: "V308",
        icon: imageFolder + 'v308.png',
        stats: {
            damage: 44,
            firerate: 700,
            ammo: 50,
            maxammo: 201,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Lion"]
    },
    "spear_.308": {
        name: "Spear .308",
        icon: imageFolder + 'spear_.308.png',
        stats: {
            damage: 42,
            firerate: 700,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Finka", "Thunberbird"]
    },
    "sasg-12": {
        name: "Sasg-12",
        icon: imageFolder + 'sasg-12.png',
        stats: {
            damage: 26,
            firerate: 1,
            ammo: 10,
            maxammo: 61,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Finka", "Kapkan", "Fenrir"]
    },
    "ar-15.50": {
        name: "AR-15.50",
        icon: imageFolder + 'ar-15.50.png',
        stats: {
            damage: 67,
            firerate: 1,
            ammo: 10,
            maxammo: 101,
            difficulty: 2
        },
        type: "Marksman Rifle",
        scopes: ["Telescopic A", "Telescopic B", "Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Maverick", "Tubarao"]
    },
    "1911_tacops": {
        name: "1911 Tacops",
        icon: imageFolder + '1911_tacops.png',
        stats: {
            damage: 55,
            firerate: 1,
            ammo: 8,
            maxammo: 73,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Maverick", "Thorn"]
    },
    "ak-74m": {
        name: "AK-74M",
        icon: imageFolder + 'ak-74m.png',
        stats: {
            damage: 44,
            firerate: 650,
            ammo: 40,
            maxammo: 201,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Nomad", "Deimos"]
    },
    "arx200": {
        name: "ARX200",
        icon: imageFolder + 'arx200.png',
        stats: {
            damage: 47,
            firerate: 700,
            ammo: 20,
            maxammo: 181,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Nomad", "Iana"]
    },
    ".44_mag_semi-auto": {
        name: ".44 Mag Semi-Auto",
        icon: imageFolder + '.44_mag_semi-auto.png',
        stats: {
            damage: 54,
            firerate: 1,
            ammo: 7,
            maxammo: 71,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Nomad", "Kaid"]
    },
    "f90": {
        name: "F90",
        icon: imageFolder + 'f90.png',
        stats: {
            damage: 38,
            firerate: 780,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Gridlock"]
    },
    "m249_saw": {
        name: "M249 SAW",
        icon: imageFolder + 'm249_saw.png',
        stats: {
            damage: 48,
            firerate: 650,
            ammo: 60,
            maxammo: 241,
            difficulty: 2
        },
        type: "Light Machine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Gridlock"]
    },
    "super_shorty": {
        name: "Super Shorty",
        icon: imageFolder + 'super_shorty.png',
        stats: {
            damage: 35,
            firerate: 1,
            ammo: 3,
            maxammo: 46,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Gridlock", "Brava", "Sentry", "Castle", "Lesion", "Clash"]
    },
    "sdp_9mm": {
        name: "SDP 9mm",
        icon: imageFolder + 'sdp_9mm.png',
        stats: {
            damage: 47,
            firerate: 1,
            ammo: 16,
            maxammo: 113,
            difficulty: 2
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Gridlock", "Sens", "Mozzie"]
    },
    "fmg-9": {
        name: "FMG-9",
        icon: imageFolder + 'fmg-9.png',
        stats: {
            damage: 34,
            firerate: 800,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Nokk", "Smoke"]
    },
    "six12_sd": {
        name: "SIX12 SD",
        icon: imageFolder + 'six12_sd.png',
        stats: {
            damage: 46,
            firerate: 1,
            ammo: 6,
            maxammo: 55,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Nokk", "Lesion"]
    },
    "smg-11": {
        name: "SMG-11",
        icon: imageFolder + 'smg-11.png',
        stats: {
            damage: 32,
            firerate: 1270,
            ammo: 16,
            maxammo: 113,
            difficulty: 5
        },
        type: "Machine Pistol",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Amaru", "Smoke", "Mute", "Solis"]
    },
    "csrx_300": {
        name: "CSRX 300",
        icon: imageFolder + 'csrx_300.png',
        stats: {
            damage: 135,
            firerate: 1,
            ammo: 5,
            maxammo: 36,
            difficulty: 2
        },
        type: "Sniper Rifle",
        scopes: ["Custom Sight"],
        operators: ["Kali"]
    },
    "spsmg9": {
        name: "SPSMG9",
        icon: imageFolder + 'spsmg9.png',
        stats: {
            damage: 33,
            firerate: 980,
            ammo: 20,
            maxammo: 121,
            difficulty: 4
        },
        type: "Machine Pistol",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Kali", "Clash"]
    },
    "sc3000k": {
        name: "SC3000K",
        icon: imageFolder + 'sc3000k.png',
        stats: {
            damage: 45,
            firerate: 800,
            ammo: 25,
            maxammo: 176,
            difficulty: 2
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Zero"]
    },
    "mp7": {
        name: "MP7",
        icon: imageFolder + 'mp7.png',
        stats: {
            damage: 32,
            firerate: 900,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Zero", "Bandit", "Fenrir"]
    },
    "pof-9": {
        name: "POF-9",
        icon: imageFolder + 'pof-9.png',
        stats: {
            damage: 35,
            firerate: 740,
            ammo: 50,
            maxammo: 201,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Sens"]
    },
    "bailiff_410": {
        name: "Bailiff 410",
        icon: imageFolder + 'bailiff_410.png',
        stats: {
            damage: 30,
            firerate: 1,
            ammo: 5,
            maxammo: 46,
            difficulty: 2
        },
        type: "Revolver",
        scopes: ["Custom Sight"],
        operators: ["Grim", "Doc", "Maestro", "Alibi", "Oryx", "Fenrir"]
    },
    ".44_vendetta": {
        name: ".44 Vendetta",
        icon: imageFolder + '.44_vendetta.png',
        stats: {
            damage: 78,
            firerate: 1,
            ammo: 6,
            maxammo: 66,
            difficulty: 1
        },
        type: "Revolver",
        scopes: ["Custom Sight"],
        operators: ["Deimos"]
    },
    "commando_9": {
        name: "Commando 9",
        icon: imageFolder + 'commando_9.png',
        stats: {
            damage: 40,
            firerate: 780,
            ammo: 25,
            maxammo: 176,
            difficulty: 1
        },
        type: "Assault Rifle",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Sentry", "Mozzie"]
    },
    "m870": {
        name: "M870",
        icon: imageFolder + 'm870.png',
        stats: {
            damage: 42,
            firerate: 1,
            ammo: 7,
            maxammo: 50,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Sentry", "Jager", "Bandit", "Thorn"]
    },
    "mp5k": {
        name: "MP5K",
        icon: imageFolder + 'mp5k.png',
        stats: {
            damage: 30,
            firerate: 900,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Mute", "Wamai"]
    },
    "ump45": {
        name: "UMP45",
        icon: imageFolder + 'ump45.png',
        stats: {
            damage: 42,
            firerate: 600,
            ammo: 25,
            maxammo: 176,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Castle", "Pulse"]
    },
    "mp5": {
        name: "MP5",
        icon: imageFolder + 'mp5.png',
        stats: {
            damage: 27,
            firerate: 800,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Doc", "Rook", "Melusi"]
    },
    "p90": {
        name: "P90",
        icon: imageFolder + 'p90.png',
        stats: {
            damage: 22,
            firerate: 970,
            ammo: 50,
            maxammo: 201,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Doc", "Rook", "Solis"]
    },
    "9x19vsn": {
        name: "9x19VSN",
        icon: imageFolder + '9x19vsn.png',
        stats: {
            damage: 34,
            firerate: 750,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Kapkan", "Tachanka", "Azami"]
    },
    "dp27": {
        name: "DP27",
        icon: imageFolder + 'dp27.png',
        stats: {
            damage: 60,
            firerate: 550,
            ammo: 70,
            maxammo: 281,
            difficulty: 1
        },
        type: "Light Machine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Reflex D", "Iron Sight"],
        operators: ["Tachanka"]
    },
    "416-c_carbine": {
        name: "416-C Carbine",
        icon: imageFolder + '416-c_carbine.png',
        stats: {
            damage: 38,
            firerate: 740,
            ammo: 25,
            maxammo: 176,
            difficulty: 3
        },
        type: "Assault Rifle",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Jager"]
    },
    "super_90": {
        name: "Super 90",
        icon: imageFolder + 'super_90.png',
        stats: {
            damage: 27,
            firerate: 1,
            ammo: 8,
            maxammo: 49,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Frost", "Melusi"]
    },
    "9mm_c1": {
        name: "9mm C1",
        icon: imageFolder + '9mm_c1.png',
        stats: {
            damage: 36,
            firerate: 575,
            ammo: 34,
            maxammo: 171,
            difficulty: 1
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Frost"]
    },
    "mpx": {
        name: "MPX",
        icon: imageFolder + 'mpx.png',
        stats: {
            damage: 26,
            firerate: 830,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Valkyrie", "Warden", "Tubarao"]
    },
    "spas-12": {
        name: "Spas-12",
        icon: imageFolder + 'spas-12.png',
        stats: {
            damage: 31,
            firerate: 1,
            ammo: 7,
            maxammo: 50,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Valkyrie", "Oryx"]
    },
    "m12": {
        name: "M12",
        icon: imageFolder + 'm12.png',
        stats: {
            damage: 40,
            firerate: 550,
            ammo: 30,
            maxammo: 181,
            difficulty: 1
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Caveria"]
    },
    "spas-15": {
        name: "spas-15",
        icon: imageFolder + 'spas-15.png',
        stats: {
            damage: 24,
            firerate: 1,
            ammo: 6,
            maxammo: 49,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Caveria", "Thunderbird"]
    },
    "mp5sd": {
        name: "MP5SD",
        icon: imageFolder + 'mp5sd.png',
        stats: {
            damage: 30,
            firerate: 800,
            ammo: 30,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Echo"]
    },
    "vector_.45_acp": {
        name: "Vector .45 ACP",
        icon: imageFolder + 'vector_.45_acp.png',
        stats: {
            damage: 23,
            firerate: 1200,
            ammo: 25,
            maxammo: 176,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Mira", "Goyo"]
    },
    "t-5_smg": {
        name: "T-5 SMG",
        icon: imageFolder + 't-5_smg.png',
        stats: {
            damage: 28,
            firerate: 900,
            ammo: 30,
            maxammo: 181,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Lesion", "Oryx"]
    },
    "scorpion_evo_3_a1": {
        name: "Scorpion Evo 3 A1",
        icon: imageFolder + 'scorpion_evo_3_a1.png',
        stats: {
            damage: 23,
            firerate: 1800,
            ammo: 40,
            maxammo: 201,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ela"]
    },
    "fo-12": {
        name: "FO-12",
        icon: imageFolder + 'fo-12.png',
        stats: {
            damage: 26,
            firerate: 1,
            ammo: 10,
            maxammo: 71,
            difficulty: 1
        },
        type: "Shotgun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Ela"]
    },
    "k1a": {
        name: "K1A",
        icon: imageFolder + 'k1a.png',
        stats: {
            damage: 36,
            firerate: 720,
            ammo: 30,
            maxammo: 181,
            difficulty: 1
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Vigil"]
    },
    "alda_5.56": {
        name: "Alda 5.56",
        icon: imageFolder + 'alda_5.56.png',
        stats: {
            damage: 35,
            firerate: 900,
            ammo: 80,
            maxammo: 241,
            difficulty: 3
        },
        type: "Light Machine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Maestro"]
    },
    "acs12": {
        name: "ACS12",
        icon: imageFolder + 'acs12.png',
        stats: {
            damage: 69,
            firerate: 300,
            ammo: 30,
            maxammo: 121,
            difficulty: 4
        },
        type: "Slug Shotgun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Maestro", "Alibi", "Azami"]
    },
    "keratos_.357": {
        name: "Keratos .357",
        icon: imageFolder + 'keratos_.357.png',
        stats: {
            damage: 78,
            firerate: 1,
            ammo: 6,
            maxammo: 61,
            difficulty: 3
        },
        type: "Revolver",
        scopes: ["Custom Sight"],
        operators: ["Maestro", "Alibi", "Wamai"]
    },
    "mx4_storm": {
        name: "Mx4 Storm",
        icon: imageFolder + 'mx4_storm.png',
        stats: {
            damage: 26,
            firerate: 950,
            ammo: 30,
            maxammo: 181,
            difficulty: 4
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Alibi"]
    },
    "p-10c": {
        name: "P-10C",
        icon: imageFolder + 'p-10c.png',
        stats: {
            damage: 40,
            firerate: 1,
            ammo: 15,
            maxammo: 106,
            difficulty: 1
        },
        type: "Handgun",
        scopes: ["Custom Sight"],
        operators: ["Clash", "Warden"]
    },
    "aug_a3": {
        name: "AUG A3",
        icon: imageFolder + 'aug_a3.png',
        stats: {
            damage: 40,
            firerate: 700,
            ammo: 31,
            maxammo: 187,
            difficulty: 3
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Kaid"]
    },
    "tcsg12": {
        name: "TCSG12",
        icon: imageFolder + 'tcsg12.png',
        stats: {
            damage: 63,
            firerate: 1,
            ammo: 10,
            maxammo: 121,
            difficulty: 3
        },
        type: "Slug Shotgun",
        scopes: ["Magnified A", "Magnified B", "Magnified C", "Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Kaid", "Goyo"]
    },
    "p10_roni": {
        name: "P10 Roni",
        icon: imageFolder + 'p10_roni.png',
        stats: {
            damage: 26,
            firerate: 980,
            ammo: 15,
            maxammo: 181,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Mozzie", "Aruni"]
    },
    "uzk50gi": {
        name: "UZK50GI",
        icon: imageFolder + 'uzk50gi.png',
        stats: {
            damage: 40,
            firerate: 700,
            ammo: 22,
            maxammo: 177,
            difficulty: 2
        },
        type: "Submachine Gun",
        scopes: ["Red Dot A", "Red Dot B", "Red Dot C", "Holo A", "Holo B", "Holo C", "Holo D", "Reflex A", "Reflex B", "Reflex C", "Iron Sight"],
        operators: ["Thorn"]
    },
}