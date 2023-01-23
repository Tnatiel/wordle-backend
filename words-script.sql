

DROP TABLE IF EXISTS words;

CREATE TABLE words (
	word VARCHAR(50) PRIMARY KEY,
	used BOOLEAN
);

INSERT INTO  words (word, used)
VALUES
('abbey', false),
('about', false),
('above', false),
('abuse', false),
('actor', false),
('acute', false),
('adapt', false),
('admit', false),
('adobe', false),
('adopt', false),
('adult', false),
('after', false),
('again', false),
('agent', false),
('aging', false),
('agony', false),
('agree', false),
('ahead', false),
('aisle', false),
('alarm', false),
('album', false),
('alert', false),
('alien', false),
('align', false),
('alike', false),
('alive', false),
('alley', false),
('allow', false),
('alloy', false),
('alone', false),
('along', false),
('aloud', false),
('alpha', false),
('altar', false),
('alter', false),
('amber', false),
('amend', false),
('amino', false),
('among', false),
('ample', false),
('angel', false),
('anger', false),
('angle', false),
('angry', false),
('ankle', false),
('apart', false),
('apple', false),
('apply', false),
('arena', false),
('argue', false),
('arise', false),
('armor', false),
('arose', false),
('array', false),
('arrow', false),
('aside', false),
('assay', false),
('asset', false),
('atlas', false),
('audio', false),
('audit', false),
('avoid', false),
('await', false),
('awake', false),
('award', false),
('aware', false),
('awful', false),
('bacon', false),
('badge', false),
('badly', false),
('baked', false),
('baker', false),
('baron', false),
('bases', false),
('basic', false),
('basil', false),
('basin', false),
('basis', false),
('batch', false),
('beach', false),
('beard', false),
('beast', false),
('began', false),
('begin', false),
('begun', false),
('being', false),
('belly', false),
('below', false),
('bench', false),
('berry', false),
('billy', false),
('birth', false),
('black', false),
('blade', false),
('blame', false),
('blank', false),
('blast', false),
('blaze', false),
('bleak', false),
('blend', false),
('blind', false),
('block', false),
('blood', false),
('bloom', false),
('blown', false),
('blues', false),
('blunt', false),
('board', false),
('boast', false),
('bobby', false),
('bonus', false),
('boost', false),
('booth', false),
('borne', false),
('bound', false),
('bowel', false),
('boxer', false),
('brain', false),
('brake', false),
('brand', false),
('brass', false),
('brave', false),
('bread', false),
('break', false),
('breed', false),
('brent', false),
('brick', false),
('bride', false),
('brief', false),
('bring', false),
('brink', false),
('brisk', false),
('broad', false),
('broke', false),
('brook', false),
('brown', false),
('brush', false),
('buddy', false),
('build', false),
('built', false),
('bunch', false),
('burke', false),
('burnt', false),
('burst', false),
('buyer', false),
('cabin', false),
('cable', false),
('cache', false),
('calif', false),
('canal', false),
('candy', false),
('canon', false),
('cargo', false),
('carol', false),
('carry', false),
('catch', false),
('cater', false),
('cause', false),
('cease', false),
('chain', false),
('chair', false),
('chalk', false),
('chaos', false),
('charm', false),
('chart', false),
('chase', false),
('cheap', false),
('check', false),
('cheek', false),
('cheer', false),
('chess', false),
('chest', false),
('chick', false),
('chief', false),
('child', false),
('chile', false),
('chill', false),
('china', false),
('choir', false),
('chose', false),
('chuck', false),
('cisco', false),
('civic', false),
('civil', false),
('claim', false),
('clash', false),
('class', false),
('clean', false),
('clear', false),
('clerk', false),
('click', false),
('cliff', false),
('climb', false),
('clock', false),
('close', false),
('cloth', false),
('cloud', false),
('coach', false),
('coast', false),
('colon', false),
('color', false),
('comic', false),
('condo', false),
('coral', false),
('corps', false),
('costa', false),
('couch', false),
('cough', false),
('could', false),
('count', false),
('court', false),
('cover', false),
('crack', false),
('craft', false),
('crane', false),
('crash', false),
('crazy', false),
('cream', false),
('creed', false),
('creek', false),
('crest', false),
('cried', false),
('cries', false),
('crime', false),
('crisp', false),
('cross', false),
('crowd', false),
('crown', false),
('crude', false),
('cruel', false),
('crush', false),
('crust', false),
('cubic', false),
('curry', false),
('curve', false),
('cycle', false),
('daddy', false),
('daily', false),
('dairy', false),
('daisy', false),
('dance', false),
('dated', false),
('dealt', false),
('death', false),
('debit', false),
('debut', false),
('decay', false),
('decor', false),
('delay', false),
('delta', false),
('dense', false),
('depot', false),
('depth', false),
('derby', false),
('deter', false),
('devil', false),
('diary', false),
('digit', false),
('dirty', false),
('dodge', false),
('doing', false),
('donor', false),
('doubt', false),
('dozen', false),
('draft', false),
('drain', false),
('drama', false),
('drank', false),
('drawn', false),
('dream', false),
('dress', false),
('dried', false),
('drift', false),
('drill', false),
('drink', false),
('drive', false),
('drove', false),
('drunk', false),
('dusty', false),
('dying', false),
('eager', false),
('eagle', false),
('early', false),
('earth', false),
('eaten', false),
('eight', false),
('elbow', false),
('elder', false),
('elect', false),
('elite', false),
('empty', false),
('enemy', false),
('enjoy', false),
('enter', false),
('entry', false),
('equal', false),
('error', false),
('essay', false),
('ethic', false),
('event', false),
('every', false),
('exact', false),
('excel', false),
('exert', false),
('exile', false),
('exist', false),
('extra', false),
('faint', false),
('fairy', false),
('faith', false),
('false', false),
('famed', false),
('fancy', false),
('fatal', false),
('fatty', false),
('fault', false),
('favor', false),
('feast', false),
('fence', false),
('ferry', false),
('fetch', false),
('fever', false),
('fiber', false),
('fibre', false),
('field', false),
('fiery', false),
('fifth', false),
('fifty', false),
('fight', false),
('final', false),
('first', false),
('fitch', false),
('fixed', false),
('flame', false),
('flash', false),
('fleet', false),
('flesh', false),
('flies', false),
('flint', false),
('float', false),
('flock', false),
('flood', false),
('floor', false),
('flora', false),
('flour', false),
('flown', false),
('fluid', false),
('flung', false),
('flush', false),
('focal', false),
('focus', false),
('force', false),
('forge', false),
('forth', false),
('forty', false),
('forum', false),
('found', false),
('frame', false),
('frank', false),
('fraud', false),
('fresh', false),
('fried', false),
('front', false),
('frost', false),
('fruit', false),
('fully', false),
('funny', false),
('gamma', false),
('gauge', false),
('genre', false),
('ghost', false),
('giant', false),
('given', false),
('glass', false),
('globe', false),
('glory', false),
('glove', false),
('going', false),
('grace', false),
('grade', false),
('grain', false),
('grams', false),
('grand', false),
('grant', false),
('graph', false),
('grasp', false),
('grass', false),
('grave', false),
('great', false),
('greed', false),
('green', false),
('greet', false),
('grief', false),
('grill', false),
('gross', false),
('group', false),
('grove', false),
('grown', false),
('guard', false),
('guess', false),
('guest', false),
('guide', false),
('guild', false),
('guilt', false),
('habit', false),
('handy', false),
('happy', false),
('hardy', false),
('harry', false),
('harsh', false),
('hatch', false),
('haven', false),
('heart', false),
('heath', false),
('heavy', false),
('hedge', false),
('hefty', false),
('hello', false),
('hence', false),
('henry', false),
('hobby', false),
('holly', false),
('homer', false),
('honey', false),
('honor', false),
('horse', false),
('hotel', false),
('house', false),
('human', false),
('hurry', false),
('ideal', false),
('image', false),
('imply', false),
('incur', false),
('index', false),
('inner', false),
('input', false),
('Intel', false),
('inter', false),
('irony', false),
('issue', false),
('ivory', false),
('japan', false),
('jenny', false),
('jewel', false),
('jimmy', false),
('joint', false),
('jones', false),
('judge', false),
('juice', false),
('knife', false),
('knock', false),
('known', false),
('label', false),
('labor', false),
('laden', false),
('lance', false),
('large', false),
('laser', false),
('later', false),
('laugh', false),
('layer', false),
('learn', false),
('lease', false),
('least', false),
('leave', false),
('legal', false),
('lemon', false),
('level', false),
('lever', false),
('lewis', false),
('light', false),
('limit', false),
('linen', false),
('links', false),
('liver', false),
('lives', false),
('lobby', false),
('local', false),
('lodge', false),
('logic', false),
('loose', false),
('lotus', false),
('lover', false),
('lower', false),
('loyal', false),
('lucky', false),
('lunch', false),
('lying', false),
('lynch', false),
('magic', false),
('major', false),
('maker', false),
('manor', false),
('maple', false),
('march', false),
('maria', false),
('marry', false),
('marsh', false),
('mason', false),
('match', false),
('maxim', false),
('maybe', false),
('mayor', false),
('meant', false),
('medal', false),
('media', false),
('mercy', false),
('merge', false),
('merit', false),
('merry', false),
('metal', false),
('meter', false),
('metre', false),
('metro', false),
('micro', false),
('midst', false),
('might', false),
('minor', false),
('minus', false),
('Mitch', false),
('mixed', false),
('model', false),
('modem', false),
('moist', false),
('molly', false),
('money', false),
('monte', false),
('month', false),
('moody', false),
('moral', false),
('motif', false),
('motor', false),
('mound', false),
('mount', false),
('mouse', false),
('mouth', false),
('movie', false),
('mummy', false),
('music', false),
('naive', false),
('naked', false),
('nancy', false),
('nasty', false),
('naval', false),
('needs', false),
('nerve', false),
('never', false),
('newly', false),
('niche', false),
('night', false),
('ninth', false),
('noble', false),
('noise', false),
('noisy', false),
('north', false),
('notch', false),
('noted', false),
('novel', false),
('nurse', false),
('nylon', false),
('occur', false),
('ocean', false),
('offer', false),
('often', false),
('olive', false),
('onion', false),
('onset', false),
('opera', false),
('optic', false),
('orbit', false),
('order', false),
('organ', false),
('other', false),
('ought', false),
('ounce', false),
('outer', false),
('overt', false),
('oxide', false),
('ozone', false),
('paint', false),
('panel', false),
('panic', false),
('paper', false),
('party', false),
('pasta', false),
('paste', false),
('patch', false),
('patio', false),
('pause', false),
('peace', false),
('pearl', false),
('Peggy', false),
('penny', false),
('perry', false),
('peter', false),
('petty', false),
('phase', false),
('phone', false),
('photo', false),
('piano', false),
('piece', false),
('piles', false),
('pilot', false),
('pinch', false),
('piper', false),
('pitch', false),
('pizza', false),
('place', false),
('plain', false),
('plane', false),
('plant', false),
('plate', false),
('plaza', false),
('point', false),
('polar', false),
('pound', false),
('power', false),
('press', false),
('price', false),
('pride', false),
('prime', false),
('print', false),
('prior', false),
('prize', false),
('probe', false),
('prone', false),
('proof', false),
('prose', false),
('proud', false),
('prove', false),
('proxy', false),
('pulse', false),
('punch', false),
('pupil', false),
('purse', false),
('queen', false),
('query', false),
('quest', false),
('queue', false),
('quick', false),
('quiet', false),
('quite', false),
('quota', false),
('quote', false),
('radar', false),
('radio', false),
('raise', false),
('rally', false),
('ralph', false),
('ranch', false),
('randy', false),
('range', false),
('rapid', false),
('ratio', false),
('reach', false),
('react', false),
('ready', false),
('realm', false),
('rebel', false),
('refer', false),
('rehab', false),
('reign', false),
('relax', false),
('relay', false),
('renal', false),
('renew', false),
('repay', false),
('reply', false),
('resin', false),
('rider', false),
('ridge', false),
('rifle', false),
('right', false),
('rigid', false),
('riley', false),
('risky', false),
('rival', false),
('river', false),
('roast', false),
('robin', false),
('robot', false),
('rocky', false),
('roger', false),
('roman', false),
('rouge', false),
('rough', false),
('round', false),
('route', false),
('rover', false),
('royal', false),
('ruler', false),
('rural', false),
('rusty', false),
('saint', false),
('salad', false),
('sally', false),
('salon', false),
('sandy', false),
('sauce', false),
('scale', false),
('scare', false),
('scene', false),
('scent', false),
('scope', false),
('score', false),
('scout', false),
('scrap', false),
('screw', false),
('seize', false),
('sense', false),
('serum', false),
('serve', false),
('setup', false),
('seven', false),
('shade', false),
('shaft', false),
('shake', false),
('shaky', false),
('shall', false),
('shame', false),
('shape', false),
('share', false),
('sharp', false),
('sheep', false),
('sheer', false),
('sheet', false),
('shelf', false),
('shell', false),
('shift', false),
('shine', false),
('shiny', false),
('shirt', false),
('shock', false),
('shook', false),
('shoot', false),
('shore', false),
('short', false),
('shout', false),
('shown', false),
('sided', false),
('siege', false),
('sight', false),
('sigma', false),
('silly', false),
('since', false),
('sixth', false),
('sixty', false),
('sized', false),
('skies', false),
('skill', false),
('skirt', false),
('skull', false),
('slate', false),
('slave', false),
('sleek', false),
('sleep', false),
('slept', false),
('slice', false),
('slide', false),
('slope', false),
('slump', false),
('small', false),
('smart', false),
('smash', false),
('smell', false),
('smile', false),
('smith', false),
('smoke', false),
('snack', false),
('snake', false),
('solar', false),
('solid', false),
('solve', false),
('sorry', false),
('sound', false),
('south', false),
('space', false),
('spare', false),
('spark', false),
('speak', false),
('speed', false),
('spell', false),
('spend', false),
('spent', false),
('spike', false),
('spill', false),
('spine', false),
('spite', false),
('split', false),
('spoke', false),
('spoon', false),
('sport', false),
('spray', false),
('squad', false),
('stack', false),
('staff', false),
('stage', false),
('stake', false),
('stall', false),
('stamp', false),
('stand', false),
('stare', false),
('stark', false),
('start', false),
('state', false),
('steak', false),
('steal', false),
('steam', false),
('steel', false),
('steep', false),
('steer', false),
('stein', false),
('stern', false),
('stick', false),
('stiff', false),
('still', false),
('sting', false),
('stock', false),
('stole', false),
('stone', false),
('stood', false),
('stool', false),
('store', false),
('storm', false),
('story', false),
('straw', false),
('strip', false),
('stuck', false),
('study', false),
('stuff', false),
('style', false),
('sugar', false),
('suite', false),
('sunny', false),
('super', false),
('surge', false),
('swear', false),
('sweat', false),
('sweep', false),
('sweet', false),
('swell', false),
('swept', false),
('swift', false),
('swing', false),
('sword', false),
('sworn', false),
('swung', false),
('table', false),
('taken', false),
('tales', false),
('taste', false),
('taxes', false),
('teach', false),
('teddy', false),
('teeth', false),
('telco', false),
('tense', false),
('tenth', false),
('terry', false),
('texas', false),
('thank', false),
('theft', false),
('their', false),
('theme', false),
('there', false),
('these', false),
('thick', false),
('thief', false),
('thigh', false),
('thing', false),
('think', false),
('third', false),
('those', false),
('three', false),
('threw', false),
('throw', false),
('thumb', false),
('tiger', false),
('tight', false),
('times', false),
('tired', false),
('title', false),
('toast', false),
('today', false),
('token', false),
('tommy', false),
('tonne', false),
('tooth', false),
('topic', false),
('torch', false),
('total', false),
('touch', false),
('tough', false),
('towel', false),
('tower', false),
('toxic', false),
('trace', false),
('track', false),
('tract', false),
('trade', false),
('trail', false),
('train', false),
('trash', false),
('treat', false),
('trend', false),
('trial', false),
('tribe', false),
('trick', false),
('tried', false),
('tries', false),
('troop', false),
('trout', false),
('truck', false),
('truly', false),
('trunk', false),
('trust', false),
('truth', false),
('tutor', false),
('twice', false),
('twist', false),
('tying', false),
('ultra', false),
('uncle', false),
('under', false),
('undue', false),
('union', false),
('unite', false),
('unity', false),
('until', false),
('upper', false),
('upset', false),
('urban', false),
('urine', false),
('usage', false),
('usual', false),
('utter', false),
('vague', false),
('valid', false),
('value', false),
('valve', false),
('vapor', false),
('vault', false),
('venue', false),
('verge', false),
('verse', false),
('video', false),
('villa', false),
('vinyl', false),
('viral', false),
('virus', false),
('visit', false),
('vista', false),
('vital', false),
('vivid', false),
('vocal', false),
('voice', false),
('voter', false),
('wagon', false),
('waist', false),
('waste', false),
('watch', false),
('water', false),
('weary', false),
('weber', false),
('weigh', false),
('weird', false),
('welsh', false),
('wheat', false),
('wheel', false),
('where', false),
('which', false),
('while', false),
('white', false),
('whole', false),
('whose', false),
('widow', false),
('width', false),
('wired', false),
('witch', false),
('wives', false),
('woman', false),
('women', false),
('world', false),
('worry', false),
('worse', false),
('worst', false),
('worth', false),
('would', false),
('wound', false),
('woven', false),
('wrist', false),
('write', false),
('wrong', false),
('wrote', false),
('yacht', false),
('yield', false),
('young', false),
('yours', false),
('youth', false),
('zebra', false),
('zonal', false),
('zloty', false),
('zingy', false),
('zippy', false),
('zilch', false),
('zappy', false),
('zowie', false),
('zineb', false),
('zazen', false),
('zebec', false),
('zamia', false),
('zayin', false),
('zibet', false),
('zooid', false),
('zooms', false),
('zoons', false),
('zoril', false),
('zoris', false),
('zonae', false),
('zoned', false),
('zombi', false),
('zonks', false),
('zones', false),
('zooey', false),
('zings', false),
('zines', false),
('zinky', false),
('zills', false),
('zincs', false),
('zizit', false),
('zoeae', false),
('zoeas', false),
('zaxes', false),
('zaire', false),
('zebus', false),
('zeals', false),
('zeros', false),
('zetas', false),
('zesty', false),
('zests', false),
('zuzim', false),
('zakat', false),
('zhlub', false),
('zends', false),
('ziffs', false),
('zunis', false),
('zulus', false),
('zilla', false),
('zokor', false),
('zoism', false),
('zoide', false),
('zomba', false),
('zonar', false),
('zorse', false),
('zuche', false),
('ziega', false),
('zibit', false),
('zohar', false),
('zocle', false),
('zocco', false),
('zocor', false),
('zizka', false),
('zizel', false),
('zippo', false),
('zenik', false),
('zemni', false),
('zeism', false),
('zeist', false),
('zelig', false),
('zebub', false),
('zerda', false),
('zeppo', false),
('zaman', false),
('zambo', false),
('zaidi', false),
('zadar', false),
('zacco', false),
('zaria', false),
('zarqa', false),
('zapas', false),
('zante', false),
('zapus', false),
('zayat', false),
('zumba', false),
('zumic', false),
('zweig', false)