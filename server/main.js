import { Meteor } from 'meteor/meteor';
import { Parties } from '../imports/api/parties';

Meteor.startup(() => {
  if (Parties.find().count() === 0) {
    const parties = [{
      name: 'Frank',
      description: '',
      url: 'http://podcast.timlradio.co.uk/frankskinner/20170812141458.mp3?awCollectionId=frankskinner&awEpisodeId=90631'
    }, {
      name: 'IGN',
      description: '',
      url: 'http://feeds.ign.com/~r/ignfeeds/podcasts/games/~5/B89l1iWLApk/IGN_UK_Podcast_396__The_Defenders_Special.mp3'
    }];

    parties.forEach((party) => {
      Parties.insert(party)
    });
  }
});
