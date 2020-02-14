import Card from './mainCards';

const card1 = new Card({
    type: 'main_card-flights',
    title: 'Travel with our Flight Tours',
    description: `We have provided you with an exciting trip to Sydney, during the tour you will learn about the rich culture
    of Australia. We will open the doors welcoming Australia. Sydney is one of the most beautiful cities
    in Australia. Business card of Hungary are thermal spas, and in this you can see by visiting the hot springs
    with curative water. A Australian cuisine is bright and wonderful, will not leave you indifferent. Next we go to
    some of the most magnificent cities in Australia, Melbourne. Melbourne, capital of Australia, the imperial
    form of which is evident in every corner of the city and artfully combined with modern art, music and lifestyle.`,
  })
  card1.render('.main-cards');

  const card2 = new Card({
    type: 'main_card-trains',
    title: 'Travel with our Train Tours',
    description: `Spain, a country which is not possible to forget! Barcelona is a city of paints, which in your memory for a
    long time will leave pleasant memories. You will visit the most famous places in Barcelona. Next you will
    visit the Principality of Monaco is a tiny state, the main attraction of which is the most famous casino of
    Monte Carlo. We will also visit Italy: Milan is the fashion capital! Encounter rich historical landmarks with
    expert guides. Visit locations designated as World Heritage Sites by the United Nations. Learn about local
    culture with in-depth tours and activities. Explore the waters of the world by cruise, kayak or surf board.
    Get in touch with Mother Earth.`,
  })
  card2.render('.main-cards');
