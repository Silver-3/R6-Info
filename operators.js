const fs = require('fs');
const path = require('path');

module.exports.attack = {
    striker: {
        name: 'Striker',
        ability: {
            name: 'Gadget Kit',
            description: 'Equips two gadets instead of a gadget and an ability. Can select any gadget on the team, but not the same one twice.'
        },
        icon: path.join(__dirname, './icons/striker.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Undefined',
            nickname: 'Striker',
            org: 'ROS',
            squad: 'Undefined',
            height: 'Undefined',
            weight: 'Undefined',
            dateofbirth: 'Undefined',
            placeofbirth: 'Undefined',
        },
        guns: {
            primary: [
                "M4",
                "M249"
            ],
            secondary: [
                "5.7 USG",
                "ITA12S"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymore",
            "Impact emp grenade",
            "Frag grenade",
            "Hard breach charge",
            "Smoke grenade",
            "Stun grenade",
        ],
        season: 'Y9S2 - New Blood'
    },
    sledge: {
        name: 'Sledge',
        ability: {
            name: 'Breaching Hammer',
            description: 'Uses a Breaching Hammer to breach through destructible surfaces.'
        },
        icon: path.join(__dirname, './icons/sledge.png'),
        specialies: [
            "Breach",
            "Anti-Gadget"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Seamus Cowden',
            nickname: 'Sledge',
            org: 'SAS',
            squad: 'Redhammer',
            height: '1.92m',
            weight: '95kg',
            dateofbirth: 'April 2nd (Age 35)',
            placeofbirth: 'John O’Groats, Scotland'
        },
        guns: {
            primary: [
                "M590A1",
                "L85A2"
            ],
            secondary: [
                "P226 MK 25"
            ]
        },
        gadgets: [
            "Frag grenade",
            "Stun grenade",
            "Impact emp grenade"
        ],
        season: 'Release'
    },
    thatcher: {
        name: 'Thatcher',
        ability: {
            name: 'EMP Grenade',
            description: 'Uses EMP Grenades to disable any electonics in range.'
        },
        icon: path.join(__dirname, './icons/thatcher.png'),
        specialies: [
            "Anti-Gadget",
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Mike Baker',
            nickname: 'Thatcher',
            org: 'SAS',
            squad: 'Viperstrike',
            height: '1.8m',
            weight: '72kg',
            dateofbirth: 'June 22nd (Age 56)',
            placeofbirth: 'Bideford, England',
        },
        guns: {
            primary: [
                "AR33",
                "L85A2",
                "M59OA1"
            ],
            secondary: [
                "P226 MK 25"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymore",
        ],
        season: 'Release'
    },
    ash: {
        name: 'Ash',
        ability: {
            name: 'Breaching Round',
            description: 'Fires an explosive Breach Round that burrows into a surface and utomatically detonates.'
        },
        icon: path.join(__dirname, './icons/ash.png'),
        specialies: [
            "Breach",
            "Front-Line"
        ],
        stats: {
            health: 2,
            speed: 3,
            difficulty: 1
        },
        bio: {
            realname: 'Eliza Cohen',
            nickname: 'Ash',
            org: 'FBI Swat',
            squad: 'Redhammer',
            height: '1.7m',
            weight: '63kg',
            dateofbirth: 'December 24th (Age 33)',
            placeofbirth: 'Jerusalem, Israel',
        },
        guns: {
            primary: [
                "G36C",
                "R4-C"
            ],
            secondary: [
                "M45 MEUSOC",
                "5.7 USG"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymore",
        ],
        season: 'Release'
    },
    thermite: {
        name: 'thermite',
        ability: {
            name: 'Exothermic Charge',
            description: 'Sets an exothermic charge that destroys reinforced walls.'
        },
        icon: path.join(__dirname, './icons/thermite.png'),
        specialies: [
            "Breach",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Jordan Trace',
            nickname: 'Thermite',
            org: 'FBI Swat',
            squad: 'Redhammer',
            height: '1.78m',
            weight: '80kg',
            dateofbirth: 'March 14th (Age 35)',
            placeofbirth: 'Plano, Texas',
        },
        guns: {
            primary: [
                "M1O14",
                "556XI"
            ],
            secondary: [
                "M45 MEUSOC",
                "5.7 USG"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Stun grenade",
        ],
        season: 'Release'
    },
    twitch: {
        name: 'Twitch',
        ability: {
            name: 'Shock Drone',
            description: 'Drone that manually fires lasers to destroy opponent devices.'
        },
        icon: path.join(__dirname, './icons/twitch.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Emmanuelle Pichon',
            nickname: 'Twitch',
            org: 'GIGN',
            squad: 'Wolfguard',
            height: '1.68m',
            weight: '58kg',
            dateofbirth: 'October 12th (Age 28)',
            placeofbirth: 'Nancy, France',
        },
        guns: {
            primary: [
                "F2",
                "417",
                "SG-CQB"
            ],
            secondary: [
                "P9",
                "LFP586"
            ]
        },
        gadgets: [
            "Claymore",
            "Smoke grenade",
        ],
        season: 'Release'
    },
    montagne: {
        name: 'Mogtagne',
        ability: {
            name: 'Le Roc Shield',
            description: 'Can expand his Extendable Shield to offer full protection while standing.'
        },
        icon: path.join(__dirname, './icons/montagne.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 3
        },
        bio: {
            realname: 'Gilles Toure',
            nickname: 'Montagne',
            org: 'GIGN',
            squad: 'Wolfguard',
            height: '1.9m',
            weight: '90kg',
            dateofbirth: 'October 11th (Age 48)',
            placeofbirth: 'Bordeaux, France',
        },
        guns: {
            primary: [
                "None"
            ],
            secondary: [
                "P9",
                "LFP586"
            ]
        },
        gadgets: [
            "Hard breach charge",
            "Smoke grenade",
            "Impact emp grenade"
        ],
        season: 'Release'
    },
    glaz: {
        name: 'Glaz',
        ability: {
            name: 'Flip Sight',
            description: 'Toggles a magnifcation scope with sophisticated image sensors outlining long range marks, even through smoke.'
        },
        icon: path.join(__dirname, './icons/glaz.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 2
        },
        bio: {
            realname: 'Timur Glazkov',
            nickname: 'Glaz',
            org: 'SPETSNAZ',
            squad: 'Ghosteyes',
            height: '1.78m',
            weight: '79kg',
            dateofbirth: 'July 2nd (Age 30)',
            placeofbirth: 'Vladivostok, Russia',
        },
        guns: {
            primary: [
                "OTs-03"
            ],
            secondary: [
                "PMM",
                "GONNE-6",
                "BEARING 9"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Frag grenade",
            "Claymore"
        ],
        season: 'Release'
    },
    fuze: {
        name: 'Fuze',
        ability: {
            name: 'Cluster Charge',
            description: 'Charge that\' deployed on soft or reinforced surfaces to clear Operators and devices on the other side.'
        },
        icon: path.join(__dirname, './icons/fuze.png'),
        specialies: [
            "Anti-Gadget"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Shuhrat Kessikbayev',
            nickname: 'Fuze',
            org: 'SPETSNAZ',
            squad: 'Redhammer',
            height: '1.8m',
            weight: '80kg',
            dateofbirth: 'October 12th (Age 34)',
            placeofbirth: 'Samarkand, Uzbekistan',
        },
        guns: {
            primary: [
                "Ballistic Shield",
                "6P41",
                "AK-12"
            ],
            secondary: [
                "PMM",
                "GSH-18"
            ]
        },
        gadgets: [
            "Breach charge",
            "Hard breach charge",
            "Smoke grenade"
        ],
        season: 'Release'
    },
    blitz: {
        name: 'Blitz',
        ability: {
            name: 'G52-Tactical Shield',
            description: 'Triggers the flash attached to his ballistic shield to temporaily blind enemies.'
        },
        icon: path.join(__dirname, './icons/blitz.png'),
        specialies: [
            "Front-Line",
            "Map-Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Elias Kotz',
            nickname: 'Blitz',
            org: 'GSG 9',
            squad: 'Viperstrike',
            height: '1.75m',
            weight: '75kg',
            dateofbirth: 'April 2nd (Age 37)',
            placeofbirth: 'Bremen, Germany',
        },
        guns: {
            primary: [
                "G52-Tactical Shield"
            ],
            secondary: [
                "P12"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Breach charge",
        ],
        season: 'Release'
    },
    iq: {
        name: 'IQ',
        ability: {
            name: 'Electronics Detector',
            description: 'Uses the Electronics Detector to locate any electronics in range through obstacles such as walls.'
        },
        icon: path.join(__dirname, './icons/iq.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Monika Weiss',
            nickname: 'IQ',
            org: 'GSG 9',
            squad: 'Nighthaven',
            height: '1.75m',
            weight: '70kg',
            dateofbirth: 'August 1st (Age 38)',
            placeofbirth: 'Leipzig, Germany',
        },
        guns: {
            primary: [
                "AUG A2",
                "552 Commando",
                "G8A1"
            ],
            secondary: [
                "P12"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymore",
            "Frag grenade"
        ],
        season: 'Release'
    },
    buck: {
        name: 'Buck',
        ability: {
            name: 'Skeleton Key',
            description: 'Toggles under-barrel shotgun attachment on his main weapon.'
        },
        icon: path.join(__dirname, './icons/buck.png'),
        specialies: [
            "Breach",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Sebastien Cote',
            nickname: 'Buck',
            org: 'JTF2',
            squad: 'Redhammer',
            height: '1.78m',
            weight: '78kg',
            dateofbirth: 'August 20th (Age 36)',
            placeofbirth: 'Montreal, Quebec',
        },
        guns: {
            primary: [
                "C8-SFW",
                "CAMRS"
            ],
            secondary: [
                "MK1 9mm",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Stun grenades",
            "Hard breach cahrge", 
        ],
        season: 'Y1S1 - Black Ice'
    },
    blackbeard: {
        name: 'Blackbeard',
        ability: {
            name: 'Rifle-Shield',
            description: 'Deploys a ballistic shield on his rifle that can be swapped if the first one gets damaged.'
        },
        icon: path.join(__dirname, './icons/blackbeard.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Craig Jenson',
            nickname: 'Blackbeard',
            org: 'Navy Seal',
            squad: 'Redhammer',
            height: '1.8m',
            weight: '84kg',
            dateofbirth: 'March 12th (Age 32)',
            placeofbirth: 'Bellevue, Washington',
        },
        guns: {
            primary: [
                "MK17 CQB",
                "SR-25"
            ],
            secondary: [
                "D-50"
            ]
        },
        gadgets: [
            "Claymore",
            "Stun grenade",
            "Frag grenade" 
        ],
        season: 'Y1S2 - Dust Line'
    },
    capitao: {
        name: 'Capitao',
        ability: {
            name: 'Tactical Crossbow',
            description: 'Tactical crossbow that fires incendiary bolts and micro smoke grenades.'
        },
        icon: path.join(__dirname, './icons/capitao.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 2
        },
        bio: {
            realname: 'Vicente Souza',
            nickname: 'Capitao',
            org: 'BOPE',
            squad: 'Viperstrike',
            height: '1.83m',
            weight: '86kg',
            dateofbirth: 'November 17th (Age 49)',
            placeofbirth: 'Nova Iguacu, Brazil',
        },
        guns: {
            primary: [
                "PARA-308",
                "M249"
            ],
            secondary: [
                "PRB92",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Claymore",
            "Hard breach charge", 
            "Impact emp grenade"
        ],
        season: 'Y1S3 - Skull Rain'
    },
    hibana: {
        name: 'Hibana',
        ability: {
            name: 'X-Kairdos',
            description: 'A 40mm grenade launcher firing explsive pallets that can be detonated from a distance.'
        },
        icon: path.join(__dirname, './icons/hibana.png'),
        specialies: [
            "Breach",
            "Front-Line"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 1
        },
        bio: {
            realname: 'Yumiko Imagawa',
            nickname: 'Hibana',
            org: 'SAT',
            squad: 'Viperstrike',
            height: '1.73m',
            weight: '57kg',
            dateofbirth: 'July 12th (Age 34)',
            placeofbirth: 'Nagoya, Japan',
        },
        guns: {
            primary: [
                "Type-89",
                "Supernova"
            ],
            secondary: [
                "P229",
                "BEARING 9"
            ]
        },
        gadgets: [
            "Stun grenades",
            "Breach charge", 
        ],
        season: 'Y1S4 - Red Crow'
    },
    jackal: {
        name: 'Jackal',
        ability: {
            name: 'Eyenox Model III',
            description: 'Tracking optics that locates targets by revealing and identifying recent footsteps.'
        },
        icon: path.join(__dirname, './icons/jackal.png'),
        specialies: [
            "Intel",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Ryad Ramirez AI-Hassar',
            nickname: 'Jackal',
            org: 'GEO',
            squad: 'Viperstrike',
            height: '1.9m',
            weight: '78kg',
            dateofbirth: 'Febuary 29th (Age 49)',
            placeofbirth: 'Ceuta, Spain',
        },
        guns: {
            primary: [
                "C7E",
                "PDW9",
                "ITA12L"
            ],
            secondary: [
                "USP40",
                "ITA1S2"
            ]
        },
        gadgets: [
            "Claymore",
            "Smoke grenade", 
        ],
        season: 'Y2S1 - Velvet Shell'
    },
    ying: {
        name: 'Ying',
        ability: {
            name: 'Candela',
            description: 'Cluster of flash charges that can either be anchored on surfaces or rolled out as a grenade.'
        },
        icon: path.join(__dirname, './icons/ying.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Sie Mei Lin',
            nickname: 'Ying',
            org: 'SDU',
            squad: 'Wolfguard',
            height: '1.6m',
            weight: '52kg',
            dateofbirth: 'May 12th (Age 33)',
            placeofbirth: 'Hong Kong, Central',
        },
        guns: {
            primary: [
                "T-85 LSW",
                "SIX12"
            ],
            secondary: [
                "Q-929"
            ]
        },
        gadgets: [
            "Hard breach charge",
            "Smoke grenade", 
        ],
        season: 'Y2S3'
    },
    zofia: {
        name: 'Zofia',
        ability: {
            name: 'KS79 Lifeline',
            description: 'Double barrel launcher that can fire both concussion and impact grenades.'
        },
        icon: path.join(__dirname, './icons/zofia.png'),
        specialies: [
            "Brach",
            "Anti-Gadget"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Zofia Bosak',
            nickname: 'Zofia',
            org: 'GROM',
            squad: 'Ghosteyes',
            height: '1.79m',
            weight: '72kg',
            dateofbirth: 'January 28th (Age 36)',
            placeofbirth: 'Wroctaw, Poland',
        },
        guns: {
            primary: [
                "LMG-E",
                "M762"
            ],
            secondary: [
                "RG15"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymor", 
        ],
        season: 'Y2S4 - White Noise'
    },
    dokkaebi: {
        name: 'Dokkaebi',
        ability: {
            name: 'Logic Bomb',
            description: 'Calls Defenders phones to compromise their locations and interrupt the use of Observation Tools.'
        },
        icon: path.join(__dirname, './icons/dokkaebi.png'),
        specialies: [
            "Intel",
            "Map Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 2
        },
        bio: {
            realname: 'Grace Nam',
            nickname: 'Dokkaebi',
            org: '707th SMB',
            squad: 'Viperstrike',
            height: '1.69m',
            weight: '62kg',
            dateofbirth: 'February 2nd (Age 29)',
            placeofbirth: 'Seoul, South Korea',
        },
        guns: {
            primary: [
                "Mk 14 EBR",
                "BOSG.12.2"
            ],
            secondary: [
                "SMG-12",
                "C75 Auto",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Stun grenade", 
            "Impact emp grenade"
        ],
        season: 'Y2S4 - White Noise'
    },
    lion: {
        name: 'Lion',
        ability: {
            name: 'EE-ONE-D',
            description: 'The EE-ONE-D detects enemy movement, tagging their position during the scan.'
        },
        icon: path.join(__dirname, './icons/lion.png'),
        specialies: [
            "Intel",
            "Map control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Olivier Flament',
            nickname: 'Lion',
            org: 'CBRN Threat Unit',
            squad: 'Wolfguard',
            height: '1.85m',
            weight: '87kg',
            dateofbirth: 'August 29th (Age 31)',
            placeofbirth: 'Toulouse, France',
        },
        guns: {
            primary: [
                "V308",
                "417",
                "SG-CQB"
            ],
            secondary: [
                "LFP586",
                "P9"
            ]
        },
        gadgets: [
            "Stun grenade",
            "Claymore",
            "Grenade" 
        ],
        season: 'Y3S1 - Chimera'
    },
    finka: {
        name: 'Finka',
        ability: {
            name: 'Adrenal Surge',
            description: 'Activates nanobots to give allies an HP boost and revive those who are downed, including herself.'
        },
        icon: path.join(__dirname, './icons/finka.png'),
        specialies: [
            "Front-Line",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Lera Melnikova',
            nickname: 'Finka',
            org: 'CBRN Threat Unit',
            squad: 'Nighthaven',
            height: '1.71m',
            weight: '68kg',
            dateofbirth: 'June 7th (Age 27)',
            placeofbirth: 'Gomel, Belarus',
        },
        guns: {
            primary: [
                "Spear.308",
                "GP41",
                "SASG-12"
            ],
            secondary: [
                "PMM",
                "GSH-18"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Stun grenade",
            "Frag grenade" 
        ],
        season: 'Y3S1 - Chimera'
    },
    maverick: {
        name: 'Maverick',
        ability: {
            name: 'Breacing Torch',
            description: 'Blowtorch capable of burning holes through reinforced walls at an almost inaudible level.'
        },
        icon: path.join(__dirname, './icons/maverick.png'),
        specialies: [
            "Breach",
            "Front-Line"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 2
        },
        bio: {
            realname: 'Erik Thorn',
            nickname: 'Maverick',
            org: 'GSUTR',
            squad: 'Ghosteyes',
            height: '1.8m',
            weight: '82kg',
            dateofbirth: 'April 20th (Age 36)',
            placeofbirth: 'Boston, Massachusetts',
        },
        guns: {
            primary: [
                "AR-15.50",
                "M4"
            ],
            secondary: [
                "1911 Tacops",
            ]
        },
        gadgets: [
            "Stun grenade",
            "Claymore",
            "Smoke grenade" 
        ],
        season: 'Y3S3 - Grim sky'
    },
    nomad: {
        name: 'Nomad',
        ability: {
            name: 'Airjab Launcher',
            description: 'Rifle attachment shooting an adhesive repulsion device that deonates by proximity.'
        },
        icon: path.join(__dirname, './icons/nomad.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Sanaa El Maktoub',
            nickname: 'Nomad',
            org: 'GIGR',
            squad: 'Wolfguard',
            height: '1.71m',
            weight: '63kg',
            dateofbirth: 'July 27th (Age 39)',
            placeofbirth: 'Marrakesh, Morocoo',
        },
        guns: {
            primary: [
                "AK-74M",
                "ARX200"
            ],
            secondary: [
                ".44 Mag Semi-Auto",
                "PRB92"
            ]
        },
        gadgets: [
            "Stun grenade",
            "Breach charge", 
        ],
        season: 'Y3S4 - Wind Bastion'
    },
    gridlock: {
        name: 'Gridlock',
        ability: {
            name: 'Trax Stingers',
            description: 'Thrown gadget that deploys barbed mats capable of shlowing down and hurting enemies to traverse them.'
        },
        icon: path.join(__dirname, './icons/gridlock.png'),
        specialies: [
            "Support",
            "Map Control"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Tori Tallyo Fairous',
            nickname: 'Gridlock',
            org: 'SASR',
            squad: 'Redhammer',
            height: '1.77m',
            weight: '102kg',
            dateofbirth: 'August 5th (Age 36)',
            placeofbirth: 'Longreach, Central Queensland, Australia',
        },
        guns: {
            primary: [
                "F90",
                "M249 SAW"
            ],
            secondary: [
                "Super Shorty",
                "SDP 9mm"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Impact emp grenade",
            "Frag grenade" 
        ],
        season: 'Y4S1 - Burnt Horizon'
    },
    nokk: {
        name: 'Nokk',
        ability: {
            name: 'Hel Presence Reduction',
            description: 'Counter-intel that wipes their presence from Observation Tools.'
        },
        icon: path.join(__dirname, './icons/nokk.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: '[REDACTED]',
            nickname: 'Nokk',
            org: 'Jaeger Corps',
            squad: 'Ghosteyes',
            height: '[REDACTED]',
            weight: '[REDACTED]',
            dateofbirth: '[REDACTED]',
            placeofbirth: '[REDACTED]',
        },
        guns: {
            primary: [
                "FMG-9",
                "SIX12 SD"
            ],
            secondary: [
                "5.7 USG",
                "D-50"
            ]
        },
        gadgets: [
            "Frag grenade",
            "Hard breach charge",
            "Impact emp grenade" 
        ],
        season: 'Y4S2 - Phantom Sight'
    },
    amaru: {
        name: 'Amaru',
        ability: {
            name: 'Garra Hook',
            description: 'A high-tensile grappling gun used for fast access to rappel points and hatches, or to enter via exterior windows at limited distances.'
        },
        icon: path.join(__dirname, './icons/amaru.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Azucena Rocio Quispe',
            nickname: 'Amaru',
            org: 'APCA',
            squad: 'Redhammer',
            height: '1.89m',
            weight: '84kg',
            dateofbirth: 'May 6th (Age 48)',
            placeofbirth: 'Cojata, Peru',
        },
        guns: {
            primary: [
                "G8A1",
                "Supernova"
            ],
            secondary: [
                "SMG-11",
                "ITA12S",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Hard breach charge",
            "Stun grenade", 
        ],
        season: 'Y4S3 - Ember rise'
    },
    kali: {
        name: 'Kali',
        ability: {
            name: 'LV Explosive Lance',
            description: 'Under-barrel mechanical projectile that explodes within a set radius to destroy gadgets on both sides of breaking and reinforced surfaces.'
        },
        icon: path.join(__dirname, './icons/kali.png'),
        specialies: [
            "Anti-Gadget",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Jaimini Kalimohan Shah',
            nickname: 'Kali',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.7m',
            weight: '67kg',
            dateofbirth: 'August 21st (Age 34)',
            placeofbirth: 'Amreli, India',
        },
        guns: {
            primary: [
                "CSRX 300"
            ],
            secondary: [
                "SPSMG9",
                "C75 Auto",
                "P226 MK 25"
            ]
        },
        gadgets: [
            "Claymore",
            "Breach charge", 
        ],
        season: 'Y4S4 - Shifting Tides'
    },
    iana: {
        name: 'Iana',
        ability: {
            name: 'Gemini Replicator',
            description: 'Deploys a remote-controlled holographic copy of Iana to fool oppents and gather intel.'
        },
        icon: path.join(__dirname, './icons/iana.png'),
        specialies: [
            "Front-Line",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Nienke Meijer',
            nickname: 'Iana',
            org: 'REU',
            squad: 'Ghosteyes',
            height: '1.57m',
            weight: '56kg',
            dateofbirth: 'August 27th (Age 35)',
            placeofbirth: 'Kawijk, the Netherlands',
        },
        guns: {
            primary: [
                "ARX200",
                "G36C"
            ],
            secondary: [
                "MK1 9mm",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Impact emp grenade",
            "Smoke grenade", 
        ],
        season: 'Y5S1 - Void Edge'
    },
    ace: {
        name: 'Ace',
        ability: {
            name: 'S.E.L.M.A. Aqua Breacher',
            description: 'Thrown gadget that deploys hydraulic pressure pellets to breach breakable and reinforced surfaces.'
        },
        icon: path.join(__dirname, './icons/ace.png'),
        specialies: [
            "Breach",
            "Anti-Gadget"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Havard Haugland',
            nickname: 'Ace',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.87m',
            weight: '75kg',
            dateofbirth: 'March 15th (Age 33)',
            placeofbirth: 'Laerdalsoyri, Norway',
        },
        guns: {
            primary: [
                "AK-12",
                "M1014"
            ],
            secondary: [
                "P9"
            ]
        },
        gadgets: [
            "Breach charge",
            "Claymore", 
        ],
        season: 'Y5S2 - Steel Wave'
    },
    zero: {
        name: 'Zero',
        ability: {
            name: 'Argus Launcher',
            description: 'Launcher that deploys cameras which can pierce through breakable and reinforced surfaces to surveil either side and shoot a laser.'
        },
        icon: path.join(__dirname, './icons/zero.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 1
        },
        bio: {
            realname: 'Samuel Leo Fisher',
            nickname: 'Zero',
            org: 'ROS',
            squad: 'Ghosteyes',
            height: '1.78m',
            weight: '77kg',
            dateofbirth: 'August 8th (Age 63)',
            placeofbirth: 'Baltimore, Maryland',
        },
        guns: {
            primary: [
                "SC3000K",
                "MP7"
            ],
            secondary: [
                "5.7 USG",
                "GONNE-6"
            ]
        },
        gadgets: [
            "Hard breach charge",
            "Claymore", 
        ],
        season: 'Y5S3 - Shadow Legacy'
    },
    flores: {
        name: 'Flores',
        ability: {
            name: 'RCE-Ratero Charge',
            description: 'Remote control charge that anchors to a surface, becomes bulletproof, then detonates after a set time period.'
        },
        icon: path.join(__dirname, './icons/flores.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Santiago Miguel Lucero',
            nickname: 'Flores',
            org: 'Unaffiliated',
            squad: 'Ghosteyes',
            height: '1.81m',
            weight: '72kg',
            dateofbirth: 'October 2nd (Age 38)',
            placeofbirth: 'Buenos Aires, Argentina',
        },
        guns: {
            primary: [
                "AR33",
                "SR-25"
            ],
            secondary: [
                "GSH-18"
            ]
        },
        gadgets: [
            "Stun grenades",
            "Claymore", 
        ],
        season: 'Y6S1 - Crimson Heist'
    },
    osa: {
        name: 'Osa',
        ability: {
            name: 'Talon-8 Shield',
            description: 'Transparent bulletproof shield that can be carried for deployed on floors and window frames.'
        },
        icon: path.join(__dirname, './icons/osa.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Anja Katarina Jankovic',
            nickname: 'Osa',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.8m',
            weight: '71kg',
            dateofbirth: 'April 29th (Age 27)',
            placeofbirth: 'Split, Croatia',
        },
        guns: {
            primary: [
                "556XI",
                "PDW9"
            ],
            secondary: [
                "PMM"
            ]
        },
        gadgets: [
            "Claymore",
            "Frag grenade", 
            "Impact emp grenade"
        ],
        season: 'Y6S3 - Crystal Guard'
    },
    sens: {
        name: 'Sens',
        ability: {
            name: 'R.O.U. Projector System',
            description: 'Trowablle rolling device with a lighting system that projects a screen to obstruct visibility.'
        },
        icon: path.join(__dirname, './icons/sens.png'),
        specialies: [
            "Support",
            "Map Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 2
        },
        bio: {
            realname: 'Neon Ngoma Mutombo',
            nickname: 'Sens',
            org: 'SFG',
            squad: 'Wolfguard',
            height: '1.78m',
            weight: '73kg',
            dateofbirth: 'March 3rd (Age 30)',
            placeofbirth: 'Brussels, Belgium',
        },
        guns: {
            primary: [
                "POF-9",
                "417"
            ],
            secondary: [
                "SDP 9mm"
            ]
        },
        gadgets: [
            "Hard breach charge",
            "Claymore",
            "Frag grenade" 
        ],
        season: 'Y7S2 - Vector Glare'
    },
    grim: {
        name: 'Grim',
        ability: {
            name: 'Kawan Hive Launcher',
            description: 'Launcher that fires a canister, releasing a swarm of bots that reveals opponents passing through it for a limited time.'
        },
        icon: path.join(__dirname, './icons/grim.png'),
        specialies: [
            "Front-Line",
            "Map Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 1
        },
        bio: {
            realname: 'Charlie Tho Keng Boon',
            nickname: 'Grim',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.79m',
            weight: '89.8kg',
            dateofbirth: 'April 5th (Age 39)',
            placeofbirth: 'Jurong, Singapore',
        },
        guns: {
            primary: [
                "552 Commando",
                "SQ-CQB"
            ],
            secondary: [
                "P229",
                "Bailiff 410"
            ]
        },
        gadgets: [
            "Impact emp grenade",
            "Claymore",
            "Hard breach charge" 
        ],
        season: 'Y7S3 - Brutal Swarm'
    },
    brava: {
        name: 'Brava',
        ability: {
            name: 'Kludge Drone',
            description: 'Deployable drone that either takes control of electronic devices or destroys them after a short delay.'
        },
        icon: path.join(__dirname, './icons/brava.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Nayara Cardoso',
            nickname: 'Brava',
            org: 'COT',
            squad: 'Viperstrike',
            height: '1.7m',
            weight: '71kg',
            dateofbirth: 'January 10th (Age 40)',
            placeofbirth: 'Curitiba, Brazil',
        },
        guns: {
            primary: [
                "PARA-308",
                "CAMRS"
            ],
            secondary: [
                "Super Shorty",
                "USP40"
            ]
        },
        gadgets: [
            "Smoke grenade",
            "Claymore", 
        ],
        season: 'Y8S1 - Commanding Force'
    },
    ram: {
        name: 'Ram',
        ability: {
            name: 'BU-GI Auto-Breacher',
            description: 'Deployable mini-tank that moves along a set path destroying devices and breakable surfaces in its way.'
        },
        icon: path.join(__dirname, './icons/ram.png'),
        specialies: [
            "Breach",
            "Anti-Gadget"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Bo-Ram Choi',
            nickname: 'Ram',
            org: '35th Commando Battalion',
            squad: 'Redhammer',
            height: '1.78m',
            weight: '68kg',
            dateofbirth: 'April 25th (Age 37)',
            placeofbirth: 'Busan, South Korea',
        },
        guns: {
            primary: [
                "R4-C",
                "LMG-E"
            ],
            secondary: [
                "MK1 9mm",
                "ITA12S"
            ]
        },
        gadgets: [
            "Stun grenade",
            "Smoke grenade", 
        ],
        season: 'Y8S3 - Heavy Mettle'
    },
    deimos: {
        name: 'Deimos',
        ability: {
            name: 'Deathmark Tracker',
            description: 'Small probe that reveals an Opponent and Deimos to each other for a limited time.'
        },
        icon: path.join(__dirname, './icons/deimos.png'),
        specialies: [
            "Intel",
            "Map Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Gerald Morris',
            nickname: 'Deimos',
            org: 'Keres Legion',
            squad: 'Unknown',
            height: '1.86km',
            weight: '94kg',
            dateofbirth: 'December 24th (Age 51)',
            placeofbirth: 'Birmingham, Alabama',
        },
        guns: {
            primary: [
                "AK-74M",
                "M59OA1"
            ],
            secondary: [
                ".44 Vendetta"
            ]
        },
        gadgets: [
            "Frag grenade",
            "Hard breach charge", 
        ],
        season: 'Y9S1 - Deadly Omen'
    },
}

// --------------------------------------------------------------- \\

module.exports.defense = {
    sentry: {
        name: 'Sentry',
        ability: {
            name: 'Gadget Kit',
            description: 'Equips two gadets instead of a gadget and an ability. Can select any gadget on the team, but not the same one twice.'
        },
        icon: path.join(__dirname, './icons/sentry.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Undefined',
            nickname: 'Sentry',
            org: 'ROS',
            squad: 'Undefined',
            height: 'Undefined',
            weight: 'Undefined',
            dateofbirth: 'Undefined',
            placeofbirth: 'Undefined',
        },
        guns: {
            primary: [
                "Commando 9",
                "M870"
            ],
            secondary: [
                "C75 Auto",
                "Super Shorty"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Bulletproof camera",
            "Deployable shield",
            "Observation blocker",
            "Impact grenade",
            "Nitro cell",
            "Proximity Alarm"
        ],
        season: 'Y9S2 - New Blood'
    },
    smoke: {
        name: 'Smoke',
        ability: {
            name: 'Remote Gas Grenade',
            description: 'Sets remote detonated toxic gas charges.'
        },
        icon: path.join(__dirname, './icons/smoke.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'James Porter',
            nickname: 'Smoke',
            org: 'SAS',
            squad: 'Nighthaven',
            height: '1.73m',
            weight: '70kg',
            dateofbirth: 'May 14th (Age 36)',
            placeofbirth: 'London, England (King\'s Cross)',
        },
        guns: {
            primary: [
                "FMG-9",
                "M59OA1"
            ],
            secondary: [
                "P226 MK 25",
                "SMG-11"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Proximity alarm",
        ],
        season: 'Release'
    },
    mute: {
        name: 'Mute',
        ability: {
            name: 'Signal Disruptor',
            description: 'Jammer which makes electronic gadgets in range malfunction.'
        },
        icon: path.join(__dirname, './icons/mute.png'),
        specialies: [
            "Anti-Gadget",
            "Crowd-Control"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Mark R. Chandar',
            nickname: 'Mute',
            org: 'SAS',
            squad: 'Viperstrike',
            height: '1.85m',
            weight: '80kg',
            dateofbirth: 'October 11th (Age 25)',
            placeofbirth: 'York, England',
        },
        guns: {
            primary: [
                "MP5K",
                "M59OA1"
            ],
            secondary: [
                "P226 MK 25",
                "SMG-11"
            ]
        },
        gadgets: [
            "Nitro cell",
            "Bulletproof camera",
        ],
        season: 'Release'
    },
    castle: {
        name: 'Castle',
        ability: {
            name: 'Armor Panel',
            description: 'Sets bulletproof barricades that are more resistant than standard ones.'
        },
        icon: path.join(__dirname, './icons/castle.png'),
        specialies: [
            "Anti-Entry",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Miles Campbell',
            nickname: 'Castle',
            org: 'FBI Swat',
            squad: 'Wolfguard',
            height: '1.85m',
            weight: '86kg',
            dateofbirth: 'September 20th (Age 36)',
            placeofbirth: 'Sherman Oaks, California',
        },
        guns: {
            primary: [
                "UMP45",
                "M1O14"
            ],
            secondary: [
                "5.7 USG",
                "Super Shorty",
                "M45 MEUSOC"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Proximity alarm",
        ],
        season: 'Release'
    },
    pulse: {
        name: 'Pulse',
        ability: {
            name: 'Cardiac Sensor',
            description: 'Detects heartbeats at a short distance through obstacles.'
        },
        icon: path.join(__dirname, './icons/pulse.png'),
        specialies: [
            "Intel",
            "Suppot"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Jack Estrada',
            nickname: 'Pulse',
            org: 'FBI Swat',
            squad: 'Nighthaven',
            height: '1.88m',
            weight: '85kg',
            dateofbirth: 'October 11th (Age 32',
            placeofbirth: 'Goldsboro, North Carolina',
        },
        guns: {
            primary: [
                "M1O14",
                "UMP45"
            ],
            secondary: [
                "M45 MEUSOC",
                "5.7 USG"
            ]
        },
        gadgets: [
            "Nitro cell",
            "Deployable shield",
        ],
        season: 'Release'
    },
    doc: {
        name: 'Doc',
        ability: {
            name: 'Stim Pistol',
            description: 'Fires a shot that provides Doc and his team with a health boost or revive from a distance.'
        },
        icon: path.join(__dirname, './icons/doc.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Gustave Kateb',
            nickname: 'Doc',
            org: 'GIGN',
            squad: 'Wolfguard',
            height: '1.77m',
            weight: '74kg',
            dateofbirth: 'September 16th (Age 39)',
            placeofbirth: 'Paris, France',
        },
        guns: {
            primary: [
                "SG-CQB",
                "MP5",
                "P90"
            ],
            secondary: [
                "P9",
                "LFP586",
                "Bailiff 410"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Barbed wire",
        ],
        season: 'Release'
    },
    rook: {
        name: 'Rook',
        ability: {
            name: 'Armor Pack',
            description: 'Drops a supply bag full of armor plates for his team to use.'
        },
        icon: path.join(__dirname, './icons/rook.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Julien Nizan',
            nickname: 'Rook',
            org: 'GIGN',
            squad: 'Viperstrike',
            height: '1.75m',
            weight: '72kg',
            dateofbirth: 'January 6th (Age 27)',
            placeofbirth: 'Tours, France',
        },
        guns: {
            primary: [
                "P90",
                "MP5",
                "SG-CQB"
            ],
            secondary: [
                "LFP586",
                "P9"
            ]
        },
        gadgets: [
            "Proximity alarm",
            "Impact grenade",
            "Observation blocker"
        ],
        season: 'Release'
    },
    kapkan: {
        name: 'Kapkan',
        ability: {
            name: 'Entry Denial Device',
            description: 'Sets booby traps on windows and door frames.'
        },
        icon: path.join(__dirname, './icons/kapkan.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Maxim Basuda',
            nickname: 'Kapkan',
            org: 'SPETSNAZ',
            squad: 'Redhammer',
            height: '1.8m',
            weight: '80kg',
            dateofbirth: 'May 14th (Age 38)',
            placeofbirth: 'Korov, Russia',
        },
        guns: {
            primary: [
                "9x19VSN",
                "SASG-12"
            ],
            secondary: [
                "PMM",
                "GSH-18"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Nitro cell", 
        ],
        season: 'Release'
    },
    tachanka: {
        name: 'Tachanka',
        ability: {
            name: 'Shumikha Launcher',
            description: 'Launcher firing havy incendiary grenades with a timed fuse activated on the first bounce. (Lord Tachanka)'
        },
        icon: path.join(__dirname, './icons/tachanka.png'),
        specialies: [
            "Anti-Entry",
            "Crowd Control"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Alexsandr Senaviev',
            nickname: 'Tachanka',
            org: 'SPETSNAZ',
            squad: 'Redhammer',
            height: '1.83m',
            weight: '86kg',
            dateofbirth: 'November 3rd (Age 48)',
            placeofbirth: 'Saint Petersburg, Russia',
        },
        guns: {
            primary: [
                "DP27",
                "9x19VSN"
            ],
            secondary: [
                "GSH-18",
                "PMM",
                "BEARING 9"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Deployable shield", 
            "Proximity alarm"
        ],
        season: 'Release'
    },
    jager: {
        name: 'Jager',
        ability: {
            name: 'Active Defense',
            description: 'Uses an Active Defense system to intercept grenades before they detonate.'
        },
        icon: path.join(__dirname, './icons/jager.png'),
        specialies: [
            "Anti-Gadget",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Marius Sreicher',
            nickname: 'Jager',
            org: 'GSG 9',
            squad: 'Viperstrie',
            height: '1.8m',
            weight: '64kg',
            dateofbirth: 'March 9th (Age 39)',
            placeofbirth: 'Dusseldorf, Germany',
        },
        guns: {
            primary: [
                "M870",
                "416-C Carbine"
            ],
            secondary: [
                "P12"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Observation blocker", 
        ],
        season: 'Release'
    },
    bandit: {
        name: 'Bandit',
        ability: {
            name: 'Shock Wire',
            description: 'Sets up a Crude Electrical Devicce that electrifies other gadgets and damages anything that comes within contact.'
        },
        icon: path.join(__dirname, './icons/bandit.png'),
        specialies: [
            "Anti-Entry",
            "anti-Gadget"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 1
        },
        bio: {
            realname: 'Dominic Brunsmeier',
            nickname: 'Bandit',
            org: 'GSG 9',
            squad: 'Wolfguard',
            height: '1.8m',
            weight: '68kg',
            dateofbirth: 'August 13th (Age 42)',
            placeofbirth: 'Berlin, Germany',
        },
        guns: {
            primary: [
                "MP7",
                "M870"
            ],
            secondary: [
                "P12"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Nitro cell", 
        ],
        season: 'Release'
    },
    frost: {
        name: 'Frost',
        ability: {
            name: 'Welcome Mat',
            description: 'Uses a mechanical trap to incapacitate enemies.'
        },
        icon: path.join(__dirname, './icons/frost.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 0,
            speed: 0,
            difficulty: 0
        },
        bio: {
            realname: '',
            nickname: '',
            org: '',
            squad: '',
            height: '',
            weight: '',
            dateofbirth: '',
            placeofbirth: '',
        },
        guns: {
            primary: [
                "Super 90",
                "9mm C1"
            ],
            secondary: [
                "MK1 9mm",
                "ITA12S"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Deployable shield", 
        ],
        season: 'Y1S1 - Black Ice'
    },
    valkyrie: {
        name: 'Valkyrie',
        ability: {
            name: 'Black Eye',
            description: 'Can set up "Black Eye" cameras, feed accessible by whole team via observation tools.'
        },
        icon: path.join(__dirname, './icons/valkyrie.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Meghan J. Castellano',
            nickname: 'Valkyrie',
            org: 'Navy Seal',
            squad: 'Ghosteyes',
            height: '1.7m',
            weight: '61kg',
            dateofbirth: 'July 21st (July 31)',
            placeofbirth: '',
        },
        guns: {
            primary: [
                "MPX",
                "SPAS-12"
            ],
            secondary: [
                "D-50"
            ]
        },
        gadgets: [
            "Impact grenade",
            "Nitro cell", 
        ],
        season: 'Y1S2 - Dust Line'
    },
    caveira: {
        name: 'Caveira',
        ability: {
            name: 'Silent Step',
            description: 'Caveira\'s predatory stealth, the "Silent Step," allows her to lurk on her prey, almost inaudible, until it\' too late.'
        },
        icon: path.join(__dirname, './icons/caveira.png'),
        specialies: [
            "Intel",
            "Crowd Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Taina',
            nickname: 'Pereira',
            org: 'BOPE',
            squad: 'Ghosteyes',
            height: '1.77m',
            weight: '72kg',
            dateofbirth: 'October 15th (Age 27)',
            placeofbirth: 'Rinopolis, Brazil',
        },
        guns: {
            primary: [
                "M12",
                "SPAS-15"
            ],
            secondary: [
                "Lusion"
            ]
        },
        gadgets: [
            "Impact grenade",
            "Proximity alarm", 
        ],
        season: 'Y1S3 - Skull Rain'
    },
    echo: {
        name: 'Echo',
        ability: {
            name: 'Yokai',
            description: 'Hovering drone that releases disorienting sonic bursts. Yokai also transmits a video feed to the Operator.'
        },
        icon: path.join(__dirname, './icons/echo.png'),
        specialies: [
            "Intel",
            "Crowd Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Masaru Enatsu',
            nickname: 'Echo',
            org: 'SAT',
            squad: 'Viperstrike',
            height: '1.8m',
            weight: '72kg',
            dateofbirth: 'October 31st (Age 36)',
            placeofbirth: 'Tokyo, Japan (Suginami-ku)',
        },
        guns: {
            primary: [
                "MP5SD",
                "Supernova"
            ],
            secondary: [
                "P229",
                "BEARING 9"
            ]
        },
        gadgets: [
            "Impact grenades",
            "Deployable shield", 
        ],
        season: 'Y1S4 - Red Crow'
    },
    mira: {
        name: 'Mira',
        ability: {
            name: 'Black Mirror',
            description: 'Deploys a one-way bulletproof mirror on breakable and reinforced walls. Can also be ejected to create a murder hole.'
        },
        icon: path.join(__dirname, './icons/mira.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 3
        },
        bio: {
            realname: 'Elena Maria Alvarez',
            nickname: 'Mira',
            org: 'GEO',
            squad: 'Viperstrike',
            height: '1.65m',
            weight: '60kg',
            dateofbirth: 'November 18th (Age 39)',
            placeofbirth: 'Madrid, Spain',
        },
        guns: {
            primary: [
                "Vector .45 ACP",
                "ITA12L"
            ],
            secondary: [
                "USP40",
                "ITA12S"
            ]
        },
        gadgets: [
            "Proximity alarm",
            "Nitro cell", 
        ],
        season: 'Y2S1 - Velvet Shell'
    },
    lesion: {
        name: 'Lesion',
        ability: {
            name: 'Gu',
            description: 'Toxic mines that inject a compound, injuring opponents and limiting their speed.'
        },
        icon: path.join(__dirname, './icons/lesion.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Liu Tze Long',
            nickname: 'Lesion',
            org: 'SDU',
            squad: 'Ghosteyes',
            height: '1.74m',
            weight: '82kg',
            dateofbirth: 'July 2nd (Age 44)',
            placeofbirth: 'Hong Kong, Junk Bay (Tseung Kwan O)',
        },
        guns: {
            primary: [
                "SIX12",
                "T-5 SMG"
            ],
            secondary: [
                "Q-929",
                "Super Shorty"
            ]
        },
        gadgets: [
            "Observation blocker",
            "Bulletproof camera", 
        ],
        season: 'Y2S3 - Blood Orchid'
    },
    ela: {
        name: 'Ela',
        ability: {
            name: 'Grzmot Mine',
            description: 'Concussion proximity mines that can be anchored on surfaces, impairing hearing and causing a dizzying effect.'
        },
        icon: path.join(__dirname, './icons/ela.png'),
        specialies: [
            "Crowd Control",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Elzbieta Bosak',
            nickname: 'Ela',
            org: 'GROM',
            squad: 'Nighthaven',
            height: '1.73m',
            weight: '68kg',
            dateofbirth: 'November 8th (Age 31)',
            placeofbirth: 'Wroctaw, Poland',
        },
        guns: {
            primary: [
                "Scorpion Evo 3 A1",
                "FO-12"
            ],
            secondary: [
                "RG15"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Deployable shield",
            "Observation blocker" 
        ],
        season: 'Y2S3 - Blood Orchid'
    },
    vigil: {
        name: 'Vigil',
        ability: {
            name: 'ERC-7',
            description: 'Vigil scans surrounding devices to whipe his image from cameras and drones.'
        },
        icon: path.join(__dirname, './icons/vigil.png'),
        specialies: [
            "Anti-Gadget",
            "Crowd Control"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Chul Kyung Hwa',
            nickname: 'Vigil',
            org: '707th SMB',
            squad: 'Ghosteyes',
            height: '1.73m',
            weight: '73kg',
            dateofbirth: 'January 7th (Age 34)',
            placeofbirth: '[REDACTED]',
        },
        guns: {
            primary: [
                "K1A",
                "BOSG.12.2"
            ],
            secondary: [
                "C75 Auto",
                "SMG-12"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Impact grenade", 
        ],
        season: 'Y2S4 - White Noise'
    },
    maestro: {
        name: 'Maestro',
        ability: {
            name: 'Evil Eye',
            description: 'A remote controlled bulletproof camera armed with a high-energy laser.'
        },
        icon: path.join(__dirname, './icons/maestro.png'),
        specialies: [
            "Anti-Gadget",
            "Intl"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Adriano Martello',
            nickname: 'Maestro',
            org: 'GIS',
            squad: 'Viperstrike',
            height: '1.85m',
            weight: '87kg',
            dateofbirth: 'April 13th (Age 45)',
            placeofbirth: 'Rome, Italy',
        },
        guns: {
            primary: [
                "Alda 5.56",
                "ACS12"
            ],
            secondary: [
                "Bailiff 410",
                "Keratos .357"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Impact grenade",
            "Observation blocker" 
        ],
        season: 'Y3S2 - Para Bellum'
    },
    alibi: {
        name: 'Alibi',
        ability: {
            name: 'Prisma',
            description: 'Deploys holograms of Alibi and tags hostiles when fired upon.'
        },
        icon: path.join(__dirname, './icons/alibi.png'),
        specialies: [
            "Intel",
            "Trapper"
        ],
        stats: {
            health: 1,
            speed: 3,
            difficulty: 3
        },
        bio: {
            realname: 'Aria de Luca',
            nickname: 'Alibi',
            org: 'GIS',
            squad: 'Viperstrike',
            height: '1.71m',
            weight: '63kg',
            dateofbirth: 'December 15th (Age 37)',
            placeofbirth: 'Tripoli, Libya',
        },
        guns: {
            primary: [
                "Mx4 Storm",
                "ACS12"
            ],
            secondary: [
                "Karatos .357",
                "Bailiff 410"
            ]
        },
        gadgets: [
            "Proximity alarm",
            "Observation blocker", 
        ],
        season: 'Y3S2 - Para Bellum'
    },
    clash: {
        name: 'Clash',
        ability: {
            name: 'CCE Shield',
            description: 'Extendable ecltro shield capable of slowing down enemies, causing damage over time.'
        },
        icon: path.join(__dirname, './icons/clash.png'),
        specialies: [
            "Inte;",
            "Crowd Control"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 3
        },
        bio: {
            realname: 'Morowa Evans',
            nickname: 'Clash',
            org: 'GSUTR',
            squad: 'Wolfguard',
            height: '1.79m',
            weight: '73kg',
            dateofbirth: 'June 7th (Age 35)',
            placeofbirth: 'London, England',
        },
        guns: {
            primary: [
                "None"
            ],
            secondary: [
                "Super Shorty",
                "SPSMG9",
                "P-10C"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Impact grenade",
            "Deployable shield"
        ],
        season: 'Y3S3 - Grim Sky'
    },
    kaid: {
        name: 'Kaid',
        ability: {
            name: 'Rtila Electroclaw',
            description: 'Electrifies reinforced walls and hatches, barbed wire and deployable shields in its affected area.'
        },
        icon: path.join(__dirname, './icons/kaid.png'),
        specialies: [
            "Anti-Entry",
            "Anti-Gadget"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Jalal El Fassi',
            nickname: 'Kaid',
            org: 'GIGR',
            squad: 'Redhammer',
            height: '1.95m',
            weight: '98kg',
            dateofbirth: 'June 26th (Age 58)',
            placeofbirth: 'Aroumd, Morocco',
        },
        guns: {
            primary: [
                "AUG A3",
                "TCSG12"
            ],
            secondary: [
                ".44 Mag Semi-Auto",
                "LFP586"
            ]
        },
        gadgets: [
            "Nitro cell",
            "Barbed wire",
            "Observation blocker" 
        ],
        season: 'Y3S4 - Wind Bastion'
    },
    mozzie: {
        name: 'Mozzie',
        ability: {
            name: 'Pest Launcher',
            description: 'Launches autonomous bots that latch onto nearby enemy drones, hijacking their controls.'
        },
        icon: path.join(__dirname, './icons/mozzie.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Max Goose',
            nickname: 'Mozzie',
            org: 'SASR',
            squad: 'Ghosteyes',
            height: '1.62m',
            weight: '57kg',
            dateofbirth: 'February 15th (Age 35)',
            placeofbirth: 'Portland, Australia',
        },
        guns: {
            primary: [
                "Commando 9",
                "P10 Roni"
            ],
            secondary: [
                "SDP 9mm"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Nitro cell", 
        ],
        season: 'Y4S1 - Burnt Horizon'
    },
    warden: {
        name: 'Warden',
        ability: {
            name: 'Glance Smart Glasses',
            description: 'Eyewear that improves visibility in smoke while standing still. Can also be activated to protect again or reduce flash blindness.'
        },
        icon: path.join(__dirname, './icons/warden.png'),
        specialies: [
            "Anti-Gadget",
            "Intel"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Collinn McKinley',
            nickname: 'Warden',
            org: 'Secret Service',
            squad: 'Ghosteyes',
            height: '1.83m',
            weight: '80kg',
            dateofbirth: 'March 18th (Age 48)',
            placeofbirth: 'Louisville, Kentucky',
        },
        guns: {
            primary: [
                "M59OA1",
                "MPX"
            ],
            secondary: [
                "P-10C",
                "SMG-12"
            ]
        },
        gadgets: [
            "Deployable shield",
            "Nitro cell",
            "Observation blocker" 
        ],
        season: 'Y4S2 - Phantom Sight'
    },
    goyo: {
        name: 'Goyo',
        ability: {
            name: 'Volcan Canister',
            description: 'Incendiary bomb that can be deployed on floors or walls and explodes when destroyed.'
        },
        icon: path.join(__dirname, './icons/goyo.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Cesar Ruiz Hernandez',
            nickname: 'Goyo',
            org: 'Fuerzas Especiales',
            squad: 'Redhammer',
            height: '1.71m',
            weight: '83kg',
            dateofbirth: 'June 20th (Age 31)',
            placeofbirth: 'Culiacan Rosales, Mexico',
        },
        guns: {
            primary: [
                "Vector .45 ACP",
                "TCSG12"
            ],
            secondary: [
                "P229"
            ]
        },
        gadgets: [
            "Proximity alarm",
            "Bulletproof camera",
            "Impact grenade" 
        ],
        season: 'Y4S3 - Ember Rise'
    },
    wamai: {
        name: 'Wamai',
        ability: {
            name: 'Mag-net System',
            description: 'Throwable device that sticks to a surface, captures an incoming projectile, then detonates it and self-destructs.'
        },
        icon: path.join(__dirname, './icons/wamai.png'),
        specialies: [
            "Anti-Gadget",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Ngugi Muchoki Furaha',
            nickname: 'Wamai',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.87m',
            weight: '83kg',
            dateofbirth: 'June 1st (Age 28)',
            placeofbirth: 'Lamu, Kenya',
        },
        guns: {
            primary: [
                "AUG A2",
                "MP5K"
            ],
            secondary: [
                "Keratos .357",
                "P12"
            ]
        },
        gadgets: [
            "Impact grenade",
            "Proximity alarm"
        ],
        season: 'Y4S4 - Shifting Tides'
    },
    oryx: {
        name: 'Oryx',
        ability: {
            name: 'Remah Dash',
            description: 'Fast dash that allows for faster roaming, breaches breakable walls, and pushes back opponents.'
        },
        icon: path.join(__dirname, './icons/oryx.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Saif Al Hadid',
            nickname: 'Oryx',
            org: 'Unaffiliated',
            squad: 'Redhammer',
            height: '1.95m',
            weight: '130kg',
            dateofbirth: 'July 3rd (Age 45)',
            placeofbirth: 'Azraq, Jordan',
        },
        guns: {
            primary: [
                "T-5 SMG",
                "SPAS-12"
            ],
            secondary: [
                "Bailiff 410",
                "USP40"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Proximity alarm" 
        ],
        season: 'Y5S1 - Void Edge'
    },
    melusi: {
        name: 'Melusi',
        ability: {
            name: 'Banshee Sonic Defense',
            description: 'Deployable device with a bulletproof shell and exposed center that emits sound to slow down opponents in range.'
        },
        icon: path.join(__dirname, './icons/melusi.png'),
        specialies: [
            "Intel",
            "Crowd Control"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 1
        },
        bio: {
            realname: 'Thandiwe Ndlovu',
            nickname: 'Melusi',
            org: 'Inkaba Task Force',
            squad: 'Wolfguard',
            height: '1.72m',
            weight: '68kg',
            dateofbirth: 'June 16th (Age 32)',
            placeofbirth: 'Louwsburg, South Africa',
        },
        guns: {
            primary: [
                "MP5",
                "Super 90"
            ],
            secondary: [
                "RG15"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Impact grenade"
        ],
        season: 'Y5S2 - Steel Wave'
    },
    aruni: {
        name: 'Aruni',
        ability: {
            name: 'Surya Gate',
            description: 'Laser-generating device set on walls or entry points that deactivates after damaging gadgets or opponents, and is reactivatable.'
        },
        icon: path.join(__dirname, './icons/aruni.png'),
        specialies: [
            "Anti-Entry",
            "Anti-Gadget"
        ],
        stats: {
            health: 3,
            speed: 1,
            difficulty: 2
        },
        bio: {
            realname: 'Apha Tawanroong',
            nickname: 'Aruni',
            org: 'Nighthaven',
            squad: 'Nighthaven',
            height: '1.6m',
            weight: '58kg',
            dateofbirth: 'August 9th (Age 42)',
            placeofbirth: 'Ta Phraya District, Thailand',
        },
        guns: {
            primary: [
                "P10 Roni",
                "Mk 14 EBR"
            ],
            secondary: [
                "PRB92"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Bulletproof camera", 
        ],
        season: 'Y5S4 - Neon Dawn'
    },
    thunderbird: {
        name: 'Thunderbird',
        ability: {
            name: 'Kona Station',
            description: 'Deployable device that gives an HP boost or offers a revive to a downed Operator in proximity.'
        },
        icon: path.join(__dirname, './icons/thunderbird.png'),
        specialies: [
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Mina Sky',
            nickname: 'Thunderbird',
            org: 'Star-net Aviation',
            squad: 'Wolfguard',
            height: '1.72m',
            weight: '70kg',
            dateofbirth: 'April 1st (Age 36)',
            placeofbirth: 'Nakoda Territories',
        },
        guns: {
            primary: [
                "Spear .308",
                "SPAS-15"
            ],
            secondary: [
                "BEARING 9",
                "Q-929"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Bulletproof camera", 
            "Deployable shield"
        ],
        season: 'Y6S2 - North Star'
    },
    thorn: {
        name: 'Thorn',
        ability: {
            name: 'Razorbloom Shell',
            description: 'Throwable device that sticks to surfaces and propels a set of sharp blades shortly after detecting nearby opponents.'
        },
        icon: path.join(__dirname, './icons/thorn.png'),
        specialies: [
            "Anti-Entry",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 1
        },
        bio: {
            realname: 'Brianna Skehan',
            nickname: 'Thorn',
            org: 'Emergency Reponse Unit',
            squad: 'Redhammer',
            height: '1.88m',
            weight: '78kg',
            dateofbirth: 'June 18th (Age 28)',
            placeofbirth: 'Country Kildare, Ireland',
        },
        guns: {
            primary: [
                "UZK50GI",
                "M870"
            ],
            secondary: [
                "1911 Tacops",
                "C75 Auto"
            ]
        },
        gadgets: [
            "Deployable shield",
            "Barbed wire"
        ],
        season: 'Y6S4 - High Calibre'
    },
    azami: {
        name: 'Azami',
        ability: {
            name: 'Kiba Barrier',
            description: 'Throwable device that sticks to surfaces and releases a gas that solidifers to create a barrier.'
        },
        icon: path.join(__dirname, './icons/azami.png'),
        specialies: [
            "Anti-Entry",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Kuna Fujiwara',
            nickname: 'Azami',
            org: 'Unaffiliated',
            squad: 'Viperstrike',
            height: '1.64m',
            weight: '56.7kg',
            dateofbirth: 'September 6th (Age 28)',
            placeofbirth: 'Kyoto, Japan',
        },
        guns: {
            primary: [
                "9x19VSN",
                "ACS12"
            ],
            secondary: [
                "D-50"
            ]
        },
        gadgets: [
            "Barbed wire",
            "Impact grenade", 
        ],
        season: 'Y7S1 - Demon Veil'
    },
    solis: {
        name: 'Solis',
        ability: {
            name: 'Spec-io Electro-Sensor',
            description: 'Device that identifies opponent electronic devices, then scans them to ping their locations.'
        },
        icon: path.join(__dirname, './icons/solis.png'),
        specialies: [
            "Intel",
            "Support"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Ana Valentina Diaz',
            nickname: 'Solis',
            org: 'AFEAU',
            squad: 'Ghosteyes',
            height: '1.66m',
            weight: '65kg',
            dateofbirth: 'September 18th (Age 37)',
            placeofbirth: 'Zipaquria, Colombia',
        },
        guns: {
            primary: [
                "P90",
                "ITA12L"
            ],
            secondary: [
                "SMG-11"
            ]
        },
        gadgets: [
            "Proximity alarm",
            "Bulletproof camera", 
        ],
        season: 'Y7S4 - Solar Raid'
    },
    fenrir: {
        name: 'Fenrir',
        ability: {
            name: 'F-Natt Dread Mine',
            description: 'Throwable device that sticks to surfaces and releases a fear-inducing gas when it detects nearby opponents.'
        },
        icon: path.join(__dirname, './icons/fenrir.png'),
        specialies: [
            "Crowd Control",
            "Trapper"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 3
        },
        bio: {
            realname: 'Emil Svensson',
            nickname: 'Fenrir',
            org: 'Unaffiliated',
            squad: 'Redhammer',
            height: '1.76m',
            weight: '74kg',
            dateofbirth: 'December 3rd (Age 34)',
            placeofbirth: '',
        },
        guns: {
            primary: [
                "MP7",
                "SASG-12"
            ],
            secondary: [
                "Bailiff 410",
                "5.7 USG"
            ]
        },
        gadgets: [
            "Bulletproof camera",
            "Observation blocker", 
        ],
        season: 'Y8S2'
    },
    tubarao: {
        name: 'Tubarao',
        ability: {
            name: 'Zoto Canister',
            description: 'Throwable device that stcks to surfaces and releases a freezing gas, deactivating devices and slowing enemies.'
        },
        icon: path.join(__dirname, './icons/tubarao.png'),
        specialies: [
            "Anti-Gadget",
            "Crowd Control"
        ],
        stats: {
            health: 2,
            speed: 2,
            difficulty: 2
        },
        bio: {
            realname: 'Issac Nunes Oliveira',
            nickname: 'Tubarao',
            org: 'DAE',
            squad: 'Wolfguard',
            height: '1.73m',
            weight: '69kg',
            dateofbirth: 'November 24th (Age 35)',
            placeofbirth: 'Ponta Delgada, Portugal',
        },
        guns: {
            primary: [
                "MPX",
                "AR-15.50"
            ],
            secondary: [
                "P226 MK 25"
            ]
        },
        gadgets: [
            "Nitro cell",
            "Proximity alarm", 
        ],
        season: 'Y8S4 - Deep Freeze'
    },
}

// OPERATOR: {
//     name: '',
//     ability: {
//         name: '',
//         description: ''
//     },
//     icon: path.join(__dirname, './icons/OPERATOR.png'),
//     specialies: [
//         "",
//         ""
//     ],
//     stats: {
//         health: 0,
//         speed: 0,
//         difficulty: 0
//     },
//     bio: {
//         realname: '',
//         nickname: '',
//         org: '',
//         squad: '',
//         height: '',
//         weight: '',
//         dateofbirth: '',
//         placeofbirth: '',
//     },
//     guns: {
//         primary: [
//             "",
//             ""
//         ],
//         secondary: [
//             "",
//             ""
//         ]
//     },
//     gadgets: [
//         "",
//         "", 
//     ],
//     season: ''
// },