const express = require('express');
const router = express.Router();
const usersService = require('../../services/users.service');

const data = [{
    "first_name": "Lanna",
    "last_name": "Purshouse",
    "email": "lpurshouse0@photobucket.com",
    "gender": "Female",
    "ip_address": "249.161.201.183"
  },
  {
    "first_name": "Dore",
    "last_name": "Terrelly",
    "email": "dterrelly1@dyndns.org",
    "gender": "Male",
    "ip_address": "30.70.156.190"
  },
  {
    "first_name": "Kalle",
    "last_name": "Chatenier",
    "email": "kchatenier2@prlog.org",
    "gender": "Male",
    "ip_address": "81.73.150.40"
  },
  {
    "first_name": "Norry",
    "last_name": "Bevington",
    "email": "nbevington3@baidu.com",
    "gender": "Female",
    "ip_address": "52.88.112.237"
  },
  {
    "first_name": "Stephen",
    "last_name": "Standall",
    "email": "sstandall4@hexun.com",
    "gender": "Male",
    "ip_address": "169.177.194.0"
  },
  {
    "first_name": "Dallas",
    "last_name": "Culp",
    "email": "dculp5@google.co.jp",
    "gender": "Male",
    "ip_address": "161.190.35.9"
  },
  {
    "first_name": "Candie",
    "last_name": "Flacknell",
    "email": "cflacknell6@cbc.ca",
    "gender": "Female",
    "ip_address": "45.46.39.98"
  },
  {
    "first_name": "Ashby",
    "last_name": "Szymoni",
    "email": "aszymoni7@statcounter.com",
    "gender": "Male",
    "ip_address": "242.203.7.53"
  },
  {
    "first_name": "Manfred",
    "last_name": "Mouth",
    "email": "mmouth8@devhub.com",
    "gender": "Male",
    "ip_address": "221.40.175.137"
  },
  {
    "first_name": "Damaris",
    "last_name": "Cosgrove",
    "email": "dcosgrove9@rediff.com",
    "gender": "Female",
    "ip_address": "159.233.246.207"
  },
  {
    "first_name": "Ailene",
    "last_name": "Meader",
    "email": "ameadera@feedburner.com",
    "gender": "Female",
    "ip_address": "92.38.18.180"
  },
  {
    "first_name": "Evvie",
    "last_name": "Coulson",
    "email": "ecoulsonb@thetimes.co.uk",
    "gender": "Female",
    "ip_address": "207.169.108.53"
  },
  {
    "first_name": "Jean",
    "last_name": "Maslin",
    "email": "jmaslinc@buzzfeed.com",
    "gender": "Male",
    "ip_address": "48.165.21.156"
  },
  {
    "first_name": "Tabb",
    "last_name": "Giorgio",
    "email": "tgiorgiod@moonfruit.com",
    "gender": "Male",
    "ip_address": "138.49.53.5"
  },
  {
    "first_name": "Dorothea",
    "last_name": "Belcham",
    "email": "dbelchame@dmoz.org",
    "gender": "Female",
    "ip_address": "227.8.44.252"
  },
  {
    "first_name": "Thane",
    "last_name": "Worham",
    "email": "tworhamf@instagram.com",
    "gender": "Male",
    "ip_address": "14.165.106.224"
  },
  {
    "first_name": "Lothaire",
    "last_name": "Procter",
    "email": "lprocterg@europa.eu",
    "gender": "Male",
    "ip_address": "121.77.232.203"
  },
  {
    "first_name": "Rip",
    "last_name": "Wollrauch",
    "email": "rwollrauchh@tinypic.com",
    "gender": "Male",
    "ip_address": "187.97.99.161"
  },
  {
    "first_name": "Lyndel",
    "last_name": "Brimmicombe",
    "email": "lbrimmicombei@livejournal.com",
    "gender": "Female",
    "ip_address": "65.152.51.14"
  },
  {
    "first_name": "Marji",
    "last_name": "Alentyev",
    "email": "malentyevj@mediafire.com",
    "gender": "Female",
    "ip_address": "162.163.156.71"
  },
  {
    "first_name": "Wilfrid",
    "last_name": "Grace",
    "email": "wgracek@phpbb.com",
    "gender": "Male",
    "ip_address": "107.71.248.231"
  },
  {
    "first_name": "Kathi",
    "last_name": "Prestland",
    "email": "kprestlandl@cmu.edu",
    "gender": "Female",
    "ip_address": "249.253.38.24"
  },
  {
    "first_name": "Reinaldo",
    "last_name": "Claricoats",
    "email": "rclaricoatsm@reddit.com",
    "gender": "Male",
    "ip_address": "225.123.182.175"
  },
  {
    "first_name": "Gabi",
    "last_name": "Ramirez",
    "email": "gramirezn@deviantart.com",
    "gender": "Male",
    "ip_address": "47.94.152.40"
  },
  {
    "first_name": "Illa",
    "last_name": "Overil",
    "email": "ioverilo@hexun.com",
    "gender": "Female",
    "ip_address": "56.32.214.199"
  },
  {
    "first_name": "Humfried",
    "last_name": "Pietrusiak",
    "email": "hpietrusiakp@addtoany.com",
    "gender": "Male",
    "ip_address": "125.188.24.50"
  },
  {
    "first_name": "Merrili",
    "last_name": "Watters",
    "email": "mwattersq@nymag.com",
    "gender": "Female",
    "ip_address": "103.115.166.181"
  },
  {
    "first_name": "Lissie",
    "last_name": "Kneebone",
    "email": "lkneeboner@howstuffworks.com",
    "gender": "Female",
    "ip_address": "202.155.178.4"
  },
  {
    "first_name": "Crista",
    "last_name": "Thrussell",
    "email": "cthrussells@berkeley.edu",
    "gender": "Female",
    "ip_address": "182.95.156.139"
  },
  {
    "first_name": "Stanwood",
    "last_name": "Ruprechter",
    "email": "sruprechtert@youtube.com",
    "gender": "Male",
    "ip_address": "37.27.240.77"
  },
  {
    "first_name": "Errick",
    "last_name": "Gahan",
    "email": "egahanu@seattletimes.com",
    "gender": "Male",
    "ip_address": "73.143.3.131"
  },
  {
    "first_name": "Cobbie",
    "last_name": "Chaffyn",
    "email": "cchaffynv@apache.org",
    "gender": "Male",
    "ip_address": "247.69.190.24"
  },
  {
    "first_name": "Pandora",
    "last_name": "Roff",
    "email": "proffw@wix.com",
    "gender": "Female",
    "ip_address": "1.74.200.195"
  },
  {
    "first_name": "Tracey",
    "last_name": "Wybourne",
    "email": "twybournex@g.co",
    "gender": "Female",
    "ip_address": "139.199.211.5"
  },
  {
    "first_name": "Borden",
    "last_name": "Barrie",
    "email": "bbarriey@discuz.net",
    "gender": "Male",
    "ip_address": "227.49.196.162"
  },
  {
    "first_name": "Paul",
    "last_name": "Clail",
    "email": "pclailz@linkedin.com",
    "gender": "Male",
    "ip_address": "251.174.10.237"
  },
  {
    "first_name": "Immanuel",
    "last_name": "Bore",
    "email": "ibore10@spiegel.de",
    "gender": "Male",
    "ip_address": "105.147.94.147"
  }
];

router.post('/setup', (req, res, next) => {
  usersService.setup(data);
  res.send('OK');
});

// get all users
router.get('/', (req, res, next) => {
  usersService.get(data)
    .then((users) => {
      res.json({
        d: users
      });
    }, (err) => {
      res.status(500).send({
        error: err
      });
    });
});

// get by id
router.get('/:id', (req, res, next) => {
  let userId = req.params.id;
  usersService.getById(userId)
    .then((user) => {
      if (user) {
        res.json({
          d: user
        });
      } else {
        res.status(404).send();
      }
    }, (err) => {
      res.status(500).send({
        error: err
      });
    });
});

// create new user
router.post('/', (req, res, next) => {
  let newUser = req.body;
  usersService.create(newUser)
    .then((user) => {
      res.json({
        d: user
      });
    }, (err) => {
      res.status(err.code).send(err);
    });
});

// update existing
router.put('/:id', (req, res, next) => {
  let user = req.body;
  user._id = req.params.id;
  usersService.update(user)
    .then((updatedUser) => {
      res.json({
        d: updatedUser
      });
    }, (err) => {
      res.status(err.code).send(err);
    });
});

// delete by id
router.delete('/:id', (req, res, next) => {
  let userId = req.params.id;
  usersService.deleteById(userId)
    .then((removedUser) => {
      res.json({
        d: removedUser
      });
    }, (err) => {
      res.status(err.code).send(err);
    });
});

module.exports = router;