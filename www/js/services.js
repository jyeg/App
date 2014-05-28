angular.module('starter.services', ['ngResource'])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' , mood: 'positive' },
    { id: 1, name: 'G.I. Joe' , mood: 'assertive'},
    { id: 2, name: 'Miss Frizzle' , mood: 'balanced'},
    { id: 3, name: 'Ash Ketchum' , mood: 'energized'}
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }


})

// Shared data from settings needed by different controllers
.factory('SettingsService', function() {
    var _variables = {};

    return {
        get: function(varname) {
            return (typeof _variables[varname] !== 'undefined') ? _variables[varname] : false;
        },
        set: function(varname, value) {
            _variables[varname] = value;
        }
    };
})
/**
 * A simple example service that returns some data.
 */

.factory('MusicService', function($resource) {
  var musicList = $resource('/music/musiclist.json');

  return {
    all: function() {
      return musicList.get(function(data){
        return data.songs;
      });
    },
    get: function(songId) {
      // Simple index lookup
      return musicList[songId];
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Songs', function() {
  //Might use a resource here that returns a JSON array

  //Some fake testing data
  var songs = [
    {"id":1,"first_name":"Patrick","last_name":"Rogers","country":"Cyprus","ip_address":"153.88.89.148","email":"progers@yata.net"},
{"id":2,"first_name":"Janet","last_name":"Gordon","country":"Croatia","ip_address":"209.73.121.212","email":"jgordon@skivee.biz"},
{"id":3,"first_name":"Kathy","last_name":"Hamilton","country":"Armenia","ip_address":"164.214.217.162","email":"khamilton@rhynyx.biz"},
{"id":4,"first_name":"Stephanie","last_name":"Johnson","country":"Mauritius","ip_address":"8.199.242.67","email":"sjohnson@jabbertype.mil"},
{"id":5,"first_name":"Jerry","last_name":"Palmer","country":"Thailand","ip_address":"230.207.100.163","email":"jpalmer@avamm.org"},
{"id":6,"first_name":"Lillian","last_name":"Franklin","country":"Germany","ip_address":"150.190.116.1","email":"lfranklin@eare.mil"},
{"id":7,"first_name":"Melissa","last_name":"Gordon","country":"Serbia","ip_address":"162.156.29.99","email":"mgordon@flashset.org"},
{"id":8,"first_name":"Sarah","last_name":"Burns","country":"Grenada","ip_address":"13.177.156.223","email":"sburns@eimbee.info"},
{"id":9,"first_name":"Willie","last_name":"Burton","country":"Croatia","ip_address":"115.133.81.82","email":"wburton@dynazzy.info"},
{"id":10,"first_name":"Tina","last_name":"Simmons","country":"United States Virgin Islands","ip_address":"113.49.63.18","email":"tsimmons@devpulse.mil"},
{"id":11,"first_name":"Kenneth","last_name":"Larson","country":"Mexico","ip_address":"92.89.76.196","email":"klarson@browseblab.info"},
{"id":12,"first_name":"Philip","last_name":"Welch","country":"Cuba","ip_address":"223.180.48.70","email":"pwelch@skippad.edu"},
{"id":13,"first_name":"Nicholas","last_name":"Parker","country":"British Indian Ocean Territory","ip_address":"200.150.119.13","email":"nparker@twitternation.net"},
{"id":14,"first_name":"Nicole","last_name":"Webb","country":"Moldova","ip_address":"47.66.237.205","email":"nwebb@midel.biz"},
{"id":15,"first_name":"Clarence","last_name":"Schmidt","country":"China","ip_address":"134.84.246.67","email":"cschmidt@dazzlesphere.net"},
{"id":16,"first_name":"Jessica","last_name":"Murray","country":"Sao Tome and Principe","ip_address":"211.30.32.109","email":"jmurray@jumpxs.net"},
{"id":17,"first_name":"Willie","last_name":"Schmidt","country":"US Minor Outlying Islands","ip_address":"158.40.109.208","email":"wschmidt@babbleset.edu"},
{"id":18,"first_name":"Margaret","last_name":"Evans","country":"Bhutan","ip_address":"252.123.77.101","email":"mevans@voolia.info"},
{"id":19,"first_name":"Arthur","last_name":"Morales","country":"Faroe Islands","ip_address":"116.5.126.29","email":"amorales@brainlounge.biz"},
{"id":20,"first_name":"Charles","last_name":"Perez","country":"Italy","ip_address":"10.43.255.4","email":"cperez@avaveo.net"},
{"id":21,"first_name":"Jeffrey","last_name":"Webb","country":"Liechtenstein","ip_address":"55.140.114.8","email":"jwebb@mynte.net"},
{"id":22,"first_name":"Andrea","last_name":"Simpson","country":"Nauru","ip_address":"22.243.12.86","email":"asimpson@browsetype.mil"},
{"id":23,"first_name":"Steve","last_name":"Reynolds","country":"Morocco","ip_address":"21.166.38.112","email":"sreynolds@topiclounge.biz"},
{"id":24,"first_name":"Gerald","last_name":"Reyes","country":"Isle of Man","ip_address":"235.115.15.46","email":"greyes@voolith.biz"},
{"id":25,"first_name":"Judy","last_name":"Washington","country":"Sweden","ip_address":"39.120.240.182","email":"jwashington@oyondu.net"},
{"id":26,"first_name":"Brandon","last_name":"Patterson","country":"Vietnam","ip_address":"18.176.165.38","email":"bpatterson@skyba.org"},
{"id":27,"first_name":"Jacqueline","last_name":"Stephens","country":"Cambodia","ip_address":"207.226.109.97","email":"jstephens@fivespan.net"},
{"id":28,"first_name":"Carlos","last_name":"Harrison","country":"Burkina Faso","ip_address":"130.22.96.6","email":"charrison@yacero.gov"},
{"id":29,"first_name":"Carol","last_name":"Payne","country":"Estonia","ip_address":"194.1.83.133","email":"cpayne@brightbean.com"},
{"id":30,"first_name":"David","last_name":"Baker","country":"Montenegro","ip_address":"39.212.209.46","email":"dbaker@youspan.name"},
{"id":31,"first_name":"Justin","last_name":"Watkins","country":"Timor-Leste","ip_address":"8.56.161.224","email":"jwatkins@centimia.net"},
{"id":32,"first_name":"Roy","last_name":"Meyer","country":"Seychelles","ip_address":"166.207.153.210","email":"rmeyer@quire.com"},
{"id":33,"first_name":"Kelly","last_name":"Richardson","country":"Central African Republic","ip_address":"74.86.34.94","email":"krichardson@agivu.net"},
{"id":34,"first_name":"Howard","last_name":"Mason","country":"Portugal","ip_address":"139.237.150.73","email":"hmason@wikivu.info"},
{"id":35,"first_name":"Karen","last_name":"Jackson","country":"Swaziland","ip_address":"143.153.219.220","email":"kjackson@kazio.net"},
{"id":36,"first_name":"Christine","last_name":"Bennett","country":"France","ip_address":"102.220.71.37","email":"cbennett@pixoboo.edu"},
{"id":37,"first_name":"Ashley","last_name":"Jordan","country":"Svalbard and Jan Mayen Islands","ip_address":"217.38.155.41","email":"ajordan@oba.edu"},
{"id":38,"first_name":"David","last_name":"Lopez","country":"Mongolia","ip_address":"87.83.224.164","email":"dlopez@gevee.net"},
{"id":39,"first_name":"Andrew","last_name":"Pierce","country":"Vatican City State (Holy See)","ip_address":"107.33.80.251","email":"apierce@einti.info"},
{"id":40,"first_name":"Michael","last_name":"Hughes","country":"New Caledonia","ip_address":"230.246.102.4","email":"mhughes@roodel.name"},
{"id":41,"first_name":"Earl","last_name":"Henderson","country":"Wallis and Futuna Islands","ip_address":"209.198.245.189","email":"ehenderson@youspan.name"},
{"id":42,"first_name":"Frank","last_name":"Simpson","country":"Uruguay","ip_address":"101.40.193.226","email":"fsimpson@browseblab.edu"},
{"id":43,"first_name":"Jane","last_name":"Simpson","country":"New Zealand","ip_address":"232.49.15.188","email":"jsimpson@jayo.net"},
{"id":44,"first_name":"Sarah","last_name":"Cook","country":"Thailand","ip_address":"91.41.176.224","email":"scook@jumpxs.com"},
{"id":45,"first_name":"Marilyn","last_name":"Tucker","country":"Western Sahara","ip_address":"146.77.96.245","email":"mtucker@zoomzone.mil"},
{"id":46,"first_name":"Scott","last_name":"Lewis","country":"Spain","ip_address":"119.197.8.105","email":"slewis@kwilith.com"},
{"id":47,"first_name":"Tammy","last_name":"Mills","country":"Spain","ip_address":"48.52.175.97","email":"tmills@dabz.gov"},
{"id":48,"first_name":"Susan","last_name":"Crawford","country":"Slovenia","ip_address":"23.120.101.112","email":"scrawford@voonyx.biz"},
{"id":49,"first_name":"Barbara","last_name":"Palmer","country":"Oman","ip_address":"143.107.3.220","email":"bpalmer@blogtag.org"},
{"id":50,"first_name":"Stephanie","last_name":"Diaz","country":"Equatorial Guinea","ip_address":"175.115.251.194","email":"sdiaz@meevee.com"},
{"id":51,"first_name":"Jeremy","last_name":"Adams","country":"Dominica","ip_address":"241.55.31.83","email":"jadams@photobug.net"},
{"id":52,"first_name":"Sean","last_name":"Hill","country":"British Virgin Islands","ip_address":"90.12.16.198","email":"shill@zoonder.net"},
{"id":53,"first_name":"Joseph","last_name":"Evans","country":"Honduras","ip_address":"11.196.63.202","email":"jevans@youtags.gov"},
{"id":54,"first_name":"Carlos","last_name":"Rice","country":"Zimbabwe","ip_address":"149.111.117.160","email":"crice@jabbersphere.mil"},
{"id":55,"first_name":"Beverly","last_name":"Little","country":"Turkmenistan","ip_address":"3.207.62.33","email":"blittle@realbuzz.net"},
{"id":56,"first_name":"Craig","last_name":"Jacobs","country":"Saint Lucia","ip_address":"5.35.113.171","email":"cjacobs@oodoo.net"},
{"id":57,"first_name":"Marilyn","last_name":"Fowler","country":"Guinea","ip_address":"174.243.134.212","email":"mfowler@skibox.info"},
{"id":58,"first_name":"Henry","last_name":"Rice","country":"Antigua and Barbuda","ip_address":"225.52.24.230","email":"hrice@brainbox.mil"},
{"id":59,"first_name":"Kathy","last_name":"Wilson","country":"Belarus","ip_address":"130.145.74.55","email":"kwilson@innojam.gov"},
{"id":60,"first_name":"Arthur","last_name":"Moore","country":"Honduras","ip_address":"111.109.31.249","email":"amoore@camimbo.com"},
{"id":61,"first_name":"Ralph","last_name":"Palmer","country":"\u00c5land","ip_address":"206.171.95.11","email":"rpalmer@izio.mil"},
{"id":62,"first_name":"Daniel","last_name":"Welch","country":"Estonia","ip_address":"8.176.157.98","email":"dwelch@brainsphere.net"},
{"id":63,"first_name":"Carl","last_name":"Young","country":"Bahamas","ip_address":"13.78.159.235","email":"cyoung@skinte.edu"},
{"id":64,"first_name":"Frank","last_name":"Gordon","country":"Aruba","ip_address":"237.73.82.92","email":"fgordon@myworks.com"},
{"id":65,"first_name":"Louise","last_name":"Gonzalez","country":"Suriname","ip_address":"126.51.181.207","email":"lgonzalez@kimia.info"},
{"id":66,"first_name":"Rebecca","last_name":"Gibson","country":"Romania","ip_address":"116.158.158.141","email":"rgibson@eabox.org"},
{"id":67,"first_name":"Denise","last_name":"Holmes","country":"Korea, North","ip_address":"93.176.44.109","email":"dholmes@nlounge.gov"},
{"id":68,"first_name":"Robert","last_name":"Sanders","country":"Saint Barthelemy","ip_address":"189.26.144.238","email":"rsanders@twimm.info"},
{"id":69,"first_name":"Willie","last_name":"Spencer","country":"Nigeria","ip_address":"91.75.186.243","email":"wspencer@podcat.name"},
{"id":70,"first_name":"Stephen","last_name":"Carpenter","country":"Nicaragua","ip_address":"130.128.211.48","email":"scarpenter@minyx.mil"},
{"id":71,"first_name":"Fred","last_name":"Ortiz","country":"British Indian Ocean Territory","ip_address":"120.159.251.238","email":"fortiz@yodel.edu"},
{"id":72,"first_name":"Wanda","last_name":"Perkins","country":"Laos","ip_address":"253.202.205.247","email":"wperkins@feedfire.org"},
{"id":73,"first_name":"Annie","last_name":"Martinez","country":"Macau","ip_address":"12.86.26.187","email":"amartinez@janyx.edu"},
{"id":74,"first_name":"Mildred","last_name":"Riley","country":"Jordan","ip_address":"122.193.38.233","email":"mriley@skyvu.mil"},
{"id":75,"first_name":"Judy","last_name":"Reyes","country":"Montserrat","ip_address":"90.53.38.131","email":"jreyes@bubbletube.biz"},
{"id":76,"first_name":"Frances","last_name":"Garza","country":"Sierra Leone","ip_address":"225.91.134.230","email":"fgarza@twinder.mil"},
{"id":77,"first_name":"Henry","last_name":"Martinez","country":"Norway","ip_address":"248.79.218.194","email":"hmartinez@blogspan.org"},
{"id":78,"first_name":"Louise","last_name":"Walker","country":"Guinea","ip_address":"63.231.11.79","email":"lwalker@ozu.info"},
{"id":79,"first_name":"Scott","last_name":"Reynolds","country":"Armenia","ip_address":"32.254.156.45","email":"sreynolds@kayveo.com"},
{"id":80,"first_name":"Lori","last_name":"Graham","country":"Guatemala","ip_address":"224.124.51.229","email":"lgraham@fliptune.biz"},
{"id":81,"first_name":"Doris","last_name":"Simpson","country":"Angola","ip_address":"97.41.220.195","email":"dsimpson@zazio.biz"},
{"id":82,"first_name":"Paul","last_name":"Thompson","country":"Senegal","ip_address":"209.85.23.120","email":"pthompson@ooba.biz"},
{"id":83,"first_name":"Joyce","last_name":"Peters","country":"Burundi","ip_address":"241.211.15.35","email":"jpeters@mita.edu"},
{"id":84,"first_name":"Frank","last_name":"Lewis","country":"Jamaica","ip_address":"44.242.1.182","email":"flewis@riffpedia.com"},
{"id":85,"first_name":"Ann","last_name":"Long","country":"Sudan","ip_address":"28.157.150.166","email":"along@flipbug.org"},
{"id":86,"first_name":"Christopher","last_name":"Garrett","country":"Tokelau","ip_address":"33.1.139.145","email":"cgarrett@youfeed.name"},
{"id":87,"first_name":"Barbara","last_name":"Thompson","country":"Korea, South","ip_address":"204.36.83.216","email":"bthompson@wikizz.com"},
{"id":88,"first_name":"Albert","last_name":"Bennett","country":"Colombia","ip_address":"23.85.194.236","email":"abennett@mycat.info"},
{"id":89,"first_name":"Lillian","last_name":"Powell","country":"Belgium","ip_address":"121.222.67.105","email":"lpowell@rhynoodle.biz"},
{"id":90,"first_name":"Mary","last_name":"Sims","country":"Spain","ip_address":"128.140.40.39","email":"msims@chatterpoint.mil"},
{"id":91,"first_name":"Brian","last_name":"Dunn","country":"Togo","ip_address":"55.154.79.45","email":"bdunn@topicstorm.net"},
{"id":92,"first_name":"Arthur","last_name":"Young","country":"Mali","ip_address":"145.154.211.229","email":"ayoung@feedbug.com"},
{"id":93,"first_name":"Johnny","last_name":"Hayes","country":"Uruguay","ip_address":"174.122.33.82","email":"jhayes@dynabox.edu"},
{"id":94,"first_name":"Ryan","last_name":"Sanchez","country":"United Kingdom","ip_address":"198.130.111.182","email":"rsanchez@plambee.biz"},
{"id":95,"first_name":"Juan","last_name":"Garrett","country":"Malaysia","ip_address":"125.254.68.198","email":"jgarrett@oloo.name"},
{"id":96,"first_name":"Christina","last_name":"Matthews","country":"Iran","ip_address":"183.207.119.4","email":"cmatthews@voonte.gov"},
{"id":97,"first_name":"Timothy","last_name":"Taylor","country":"Bermuda","ip_address":"152.64.69.240","email":"ttaylor@jaxworks.edu"},
{"id":98,"first_name":"Marie","last_name":"Ramos","country":"Netherlands","ip_address":"189.22.125.214","email":"mramos@snaptags.gov"},
{"id":99,"first_name":"Jimmy","last_name":"Adams","country":"Armenia","ip_address":"107.67.178.233","email":"jadams@leexo.name"},
{"id":100,"first_name":"Edward","last_name":"Hill","country":"Korea, North","ip_address":"107.148.55.95","email":"ehill@dabz.com"},
{"id":101,"first_name":"Beverly","last_name":"Hernandez","country":"Kuwait","ip_address":"44.16.39.87","email":"bhernandez@twinder.name"},
{"id":102,"first_name":"Rose","last_name":"Lawrence","country":"Uruguay","ip_address":"71.145.158.88","email":"rlawrence@skiba.org"},
{"id":103,"first_name":"Clarence","last_name":"Hudson","country":"Guinea","ip_address":"235.85.45.161","email":"chudson@myworks.gov"},
{"id":104,"first_name":"Louise","last_name":"Rodriguez","country":"Vanuatu","ip_address":"220.105.132.71","email":"lrodriguez@nlounge.biz"},
{"id":105,"first_name":"Deborah","last_name":"Payne","country":"Eritrea","ip_address":"49.63.134.50","email":"dpayne@voolia.edu"},
{"id":106,"first_name":"Victor","last_name":"Morales","country":"Mexico","ip_address":"246.18.66.68","email":"vmorales@youfeed.org"},
{"id":107,"first_name":"Tina","last_name":"Wheeler","country":"France","ip_address":"60.133.98.109","email":"twheeler@camimbo.biz"},
{"id":108,"first_name":"Christopher","last_name":"Banks","country":"Turkmenistan","ip_address":"40.14.238.123","email":"cbanks@meembee.info"},
{"id":109,"first_name":"Ralph","last_name":"Hunt","country":"Israel","ip_address":"113.233.241.111","email":"rhunt@trunyx.gov"},
{"id":110,"first_name":"Brenda","last_name":"Fox","country":"Israel","ip_address":"114.241.198.161","email":"bfox@twitterbridge.biz"},
{"id":111,"first_name":"Helen","last_name":"Wright","country":"Czech Republic","ip_address":"220.114.68.160","email":"hwright@realcube.biz"},
{"id":112,"first_name":"Maria","last_name":"Wagner","country":"Russia","ip_address":"87.86.105.141","email":"mwagner@innotype.net"},
{"id":113,"first_name":"Roger","last_name":"Smith","country":"Serbia","ip_address":"169.67.215.240","email":"rsmith@yadel.edu"},
{"id":114,"first_name":"Gregory","last_name":"Hamilton","country":"India","ip_address":"220.7.175.184","email":"ghamilton@tagcat.name"},
{"id":115,"first_name":"Dorothy","last_name":"Ramos","country":"Jamaica","ip_address":"52.184.196.106","email":"dramos@kwilith.org"},
{"id":116,"first_name":"Timothy","last_name":"Lynch","country":"Bouvet Island","ip_address":"232.187.22.3","email":"tlynch@thoughtstorm.name"},
{"id":117,"first_name":"Heather","last_name":"Nelson","country":"Albania","ip_address":"108.178.141.142","email":"hnelson@dabshots.com"},
{"id":118,"first_name":"Linda","last_name":"Reynolds","country":"Switzerland","ip_address":"141.189.184.132","email":"lreynolds@voonyx.net"},
{"id":119,"first_name":"Ernest","last_name":"Duncan","country":"South Georgia and the South Sandwich Islands","ip_address":"19.180.56.117","email":"eduncan@tagtune.mil"},
{"id":120,"first_name":"Jack","last_name":"Hughes","country":"Yugoslavia","ip_address":"142.73.75.165","email":"jhughes@fiveclub.biz"},
{"id":121,"first_name":"Benjamin","last_name":"Boyd","country":"Tuvalu","ip_address":"41.40.172.79","email":"bboyd@devcast.org"},
{"id":122,"first_name":"Justin","last_name":"Cruz","country":"Gambia","ip_address":"143.185.152.49","email":"jcruz@shufflester.org"},
{"id":123,"first_name":"Susan","last_name":"Smith","country":"Cambodia","ip_address":"100.89.128.222","email":"ssmith@reallinks.info"},
{"id":124,"first_name":"Keith","last_name":"Harvey","country":"Burundi","ip_address":"122.199.164.91","email":"kharvey@shufflester.name"},
{"id":125,"first_name":"Catherine","last_name":"Peterson","country":"Laos","ip_address":"234.124.235.80","email":"cpeterson@zoonoodle.gov"},
{"id":246,"first_name":"Bobby","last_name":"Harvey","country":"Monaco","ip_address":"193.191.16.250","email":"bharvey@meejo.name"}
  ];

  return {
    all: function() {
      return songs;
    },
    get: function(songId) {
      // Simple index lookup
      return songs[songId];
    }
  }
  
});
