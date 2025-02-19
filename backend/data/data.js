const pokemons = [
  {
    id: 1,
    name: 'Bulbasaur',
    type: ['Grass', 'Poison'],
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
    description:
      'For some time after its birth, it uses the nutrients that are packed into the seed on its back in order to grow.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  },
  {
    id: 2,
    name: 'Ivysaur',
    type: ['Grass', 'Poison'],
    stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      specialAttack: 80,
      specialDefense: 80,
      speed: 60,
    },
    description:
      'The more sunlight Ivysaur bathes in, the more strength wells up within it, allowing the bud on its back to grow larger.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
  },
  {
    id: 3,
    name: 'Venusaur',
    type: ['Grass', 'Poison'],
    stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      specialAttack: 100,
      specialDefense: 100,
      speed: 80,
    },
    description:
      'While it basks in the sun, it can convert the light into energy. As a result, it is more powerful in the summertime.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
  },
  {
    id: 4,
    name: 'Charmander',
    type: ['Fire'],
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      specialAttack: 60,
      specialDefense: 50,
      speed: 65,
    },
    description:
      'The flame on its tail shows the strength of its life-force. If Charmander is weak, the flame also burns weakly.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  },
  {
    id: 5,
    name: 'Charmeleon',
    type: ['Fire'],
    stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      specialAttack: 80,
      specialDefense: 65,
      speed: 80,
    },
    description:
      'When it swings its burning tail, the temperature around it rises higher and higher, tormenting its opponents.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
  },
  {
    id: 6,
    name: 'Charizard',
    type: ['Fire', 'Flying'],
    stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      specialAttack: 109,
      specialDefense: 85,
      speed: 100,
    },
    description:
      'If Charizard becomes truly angered, the flame at the tip of its tail burns in a light blue shade.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
  },
  {
    id: 7,
    name: 'Squirtle',
    type: ['Water'],
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      specialAttack: 50,
      specialDefense: 64,
      speed: 43,
    },
    description:
      'After birth, its back swells and hardens into a shell. It spays a potent foam from its mouth.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  },
  {
    id: 8,
    name: 'Wartortle',
    type: ['Water'],
    stats: {
      hp: 59,
      attack: 63,
      defense: 80,
      specialAttack: 65,
      specialDefense: 80,
      speed: 58,
    },
    description:
      "Wartortle's long, furry tail is a symbol of longevity, so this pokemon is quite popular among older people.",
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
  },
  {
    id: 9,
    name: 'Blastoise',
    type: ['Water'],
    stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      specialAttack: 85,
      specialDefense: 105,
      speed: 78,
    },
    description:
      'It deliberately increases its body weight so it can withstand the recoil of the water jets it fires.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
  },
  {
    id: 10,
    name: 'Caterpie',
    type: ['Bug'],
    stats: {
      hp: 45,
      attack: 30,
      defense: 35,
      specialAttack: 20,
      specialDefense: 20,
      speed: 45,
    },
    description:
      'For protection, it releases a horrible stench from the antenna on its head to drive away enemies.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
  },
  {
    id: 11,
    name: 'Metapod',
    type: ['Bug'],
    stats: {
      hp: 50,
      attack: 20,
      defense: 55,
      specialAttack: 25,
      specialDefense: 25,
      speed: 30,
    },
    description:
      'It is waiting for the moment to envolve. At this stage, it can only harden, so it remains motionless to avoid attack.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
  },
  {
    id: 12,
    name: 'Butterfree',
    type: ['Bug', 'Flying'],
    stats: {
      hp: 60,
      attack: 45,
      defense: 50,
      specialAttack: 90,
      specialDefense: 80,
      speed: 70,
    },
    description:
      'It loves the nectar of flowers and can locate flower patches that have even tiny amounts of pollen.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
  },
  {
    id: 13,
    name: 'Weedle',
    type: ['Bug', 'Poison'],
    stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      specialAttack: 20,
      specialDefense: 20,
      speed: 50,
    },
    description:
      'Beware of the sharp stinger on its head. It hides in grass and bushes where it eats leaves.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
  },
  {
    id: 14,
    name: 'Kakuna',
    type: ['Bug', 'Poison'],
    stats: {
      hp: 45,
      attack: 25,
      defense: 50,
      specialAttack: 25,
      specialDefense: 25,
      speed: 35,
    },
    description:
      'Able to move only slightly. When endangered, it may stick out its stinger and poison its enemy.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
  },
  {
    id: 15,
    name: 'Beedrill',
    type: ['Bug', 'Poison'],
    stats: {
      hp: 65,
      attack: 90,
      defense: 40,
      specialAttack: 45,
      specialDefense: 80,
      speed: 75,
    },
    description:
      'It has three poisonous stingers on its forelegs and its tail. They are used to jab its enemy repeatedly.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
  },
  {
    id: 16,
    name: 'Pidgey',
    type: ['Normal', 'Flying'],
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      specialAttack: 35,
      specialDefense: 35,
      speed: 56,
    },
    description:
      'Very docile. If attacked, it will often kick up sand to protect itself rather than fight back.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
  },
  {
    id: 17,
    name: 'Pidgeotto',
    type: ['Normal', 'Flying'],
    stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      specialAttack: 50,
      specialDefense: 50,
      speed: 71,
    },
    description:
      'This pokemon is full of vitality. It constantly flies around its large territory in search of prey.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
  },
  {
    id: 18,
    name: 'Pidgeot',
    type: ['Normal', 'Flying'],
    stats: {
      hp: 83,
      attack: 80,
      defense: 75,
      specialAttack: 70,
      specialDefense: 70,
      speed: 101,
    },
    description:
      'This pokemon flies at Mach 2 speed, seeking prey. Its large talons are feared as wicked weapons.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
  },
  {
    id: 19,
    name: 'Rattata',
    type: ['Normal'],
    stats: {
      hp: 30,
      attack: 56,
      defense: 35,
      specialAttack: 25,
      specialDefense: 35,
      speed: 72,
    },
    description:
      'Will chew on anything with its fangs. If you see one, you can be certain that 40 more live in the area.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
  },
  {
    id: 20,
    name: 'Raticate',
    type: ['Normal'],
    description:
      'Its hind feet are webbed. They act as flippers, so it can swim in rivers and hunt for prey.',
    img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
  },
]

export default pokemons
