/* English for Iraq – 5th Primary : curriculum data
   Words/phrases follow the book map; reading texts and chants are original summaries. */
const F = c => "flag:" + c;

const UNITS = [
/* ───────────── UNIT 1 ───────────── */
{id:1,key:"u1",no:"الوحدة الأولى",en:"Where are you from?",ar:"من أين أنت؟",emoji:"🌍",
 lessons:[["I'm from ...","أنا من ..."],["This is my flag.","هذا علمي."],["My nationality","جنسيتي"],["Where's it from?","من أين هو؟"],["Learning English","تعلّم الإنكليزية"],["My magazine: Country information file","مجلتي: ملف معلومات عن بلد"],["Check my understanding","أتحقق من فهمي"],["Let's sing!","لنُغنِّ!"]],
 vocab:[
  {g:"Countries",ga:"الدول",items:[["Thailand","تايلاند",F("th")],["France","فرنسا",F("fr")],["Japan","اليابان",F("jp")],["Egypt","مصر",F("eg")],["England","إنكلترا",F("gb")],["Iraq","العراق",F("iq")],["Turkey","تركيا",F("tr")],["Italy","إيطاليا",F("it")],["India","الهند",F("in")],["China","الصين",F("cn")],["Australia","أستراليا",F("au")]]},
  {g:"Nationalities",ga:"الجنسيات",items:[["Egyptian","مصري"],["Italian","إيطالي"],["Iraqi","عراقي"],["English","إنكليزي"],["Turkish","تركي"],["Japanese","ياباني"],["Thai","تايلاندي"],["French","فرنسي"]]},
  {g:"Talking about countries",ga:"نتحدث عن البلدان",items:[["map","خريطة","🗺️"],["country","بلد"],["capital","عاصمة"],["flag","علم","🏳️"],["nationality","جنسية"],["panda","باندا","🐼"],["elephant","فيل","🐘"],["curry","كاري","🍛"],["kangaroo","كنغر","🦘"],["internet","إنترنت","🌐"],["language","لغة"],["study","يدرس","📚"],["palace","قصر","🏰"],["coastline","ساحل"]]},
  {g:"Adjectives",ga:"صفات",items:[["famous","مشهور","⭐"],["high","عالٍ","⛰️"],["interesting","ممتع، مثير للاهتمام"],["beautiful","جميل","🌸"]]}
 ],
 hard:[["around the world","حول العالم"],["Asia","آسيا"],["castle","قلعة"],["different","مختلف"],["Europe","أوروبا"],["important","مهم"],["learn","يتعلّم"],["marshes","أهوار"],["mountain range","سلسلة جبال"],["symbol","رمز"],["Taj Mahal","تاج محل"],["think and discuss","فكّر وناقش"],["tower","برج"],["capital","عاصمة"],["nationality","جنسية"],["palace","قصر"],["coastline","ساحل"]],
 talk:[["I'm from Iraq.","أنا من العراق."],["He's from Japan.","هو من اليابان."],["She's from Japan.","هي من اليابان."],["They're from Italy.","هم من إيطاليا."],["Where's Dalia from?","من أين داليا؟"],["Are Murad and Ali from Turkey?","هل مراد وعلي من تركيا؟"],["Yes, they are. / No, they aren't.","نعم، هم كذلك. / لا، ليسوا كذلك."],["What nationality are you?","ما جنسيتك؟"],["I'm Iraqi.","أنا عراقي."],["He's French and she's Japanese.","هو فرنسي وهي يابانية."],["Where are pandas from?","من أين الباندا؟"],["They're from China.","هي من الصين."],["I want to learn English because ...","أريد تعلّم الإنكليزية لأن ..."]],
 tips:[
  {ar:"للسؤال عن شخص واحد نستعمل Is، وعن أكثر من شخص نستعمل Are.",ex:["Is he from Iraq?  Yes, he is. / No, he isn't.","Are they from Turkey?  Yes, they are. / No, they aren't."]},
  {ar:"نكتب أسماء الدول والجنسيات بحرف كبير (Capital letter).",ex:["Iraq → Iraqi","France → French","Japan → Japanese"]},
  {ar:"مع الجمع نقول They're. ومع المفرد نقول He's أو She's.",ex:["Pandas are from China. They're from China.","Dalia is from Iraq. She's from Iraq."]}],
 reads:[
  {title:"Country information file: Iraq",tar:"ملف معلومات: العراق",en:"Iraq is a country in Asia. Its capital is Baghdad. The Tigris and the Euphrates are two famous rivers. People in Iraq speak Arabic and Kurdish. There are many interesting places to visit, like Babylon, the Marshes and the Malwiya Minaret.",ar:"العراق بلد في آسيا. عاصمته بغداد. دجلة والفرات نهران مشهوران. يتحدث الناس في العراق العربية والكردية. هناك أماكن كثيرة ممتعة للزيارة مثل بابل والأهوار وملوية سامراء."},
  {title:"Why do I learn English?",tar:"لماذا أتعلّم الإنكليزية؟",en:"I want to learn English because lots of people in the world speak it. There are songs, books and films in English. There is a lot of English on the internet, too. I also want to travel to other countries one day.",ar:"أريد تعلّم الإنكليزية لأن كثيراً من الناس في العالم يتحدثونها. هناك أغانٍ وكتب وأفلام بالإنكليزية. وهناك الكثير من الإنكليزية على الإنترنت أيضاً. وأريد أن أسافر إلى بلدان أخرى يوماً ما."}],
 chant:{title:"Friends from everywhere (original chant)",en:"Iraq, Japan, Italy, Spain,\nHello, hello, again and again!\nDifferent flags and different names,\nBut we are friends in all the games!",ar:"العراق واليابان وإيطاليا وإسبانيا،\nمرحباً مرحباً مراراً وتكراراً!\nأعلام مختلفة وأسماء مختلفة،\nلكننا أصدقاء في كل الألعاب!"},
 project:"مشروع: ملصق عن بلد (Country poster). اختر بلداً، ارسم علمه، واكتب: عاصمته، لغته، حيوانه المشهور، وأماكن جميلة فيه.",
 qs:[
  {a:"اختر الكلمة الصحيحة:",e:"She ___ from Japan.",o:["is","are","am"],x:"مع he / she نستعمل is."},
  {a:"اختر الكلمة الصحيحة:",e:"They ___ from Italy.",o:["are","is","am"],x:"مع they نستعمل are."},
  {a:"اختر الكلمة الصحيحة:",e:"I ___ Iraqi.",o:["am","is","are"],x:"مع I نستعمل am."},
  {a:"جنسية شخص من فرنسا:",e:"A person from France is ___.",o:["French","Italian","Japanese","Thai"],x:"France ← French."},
  {a:"جنسية شخص من اليابان:",e:"A person from Japan is ___.",o:["Japanese","Thai","Turkish","Egyptian"],x:"Japan ← Japanese."},
  {a:"اختر الجواب الصحيح:",e:"Where are pandas from?",o:["They're from China.","He's from China.","It's from China.","I'm from China."],x:"pandas جمع، فنقول They're."},
  {a:"اختر الجواب الصحيح:",e:"Are Murad and Ali from Turkey?  No, ___.",o:["they aren't","he isn't","I'm not","we is"],x:"السؤال عن اثنين، فالجواب they aren't."},
  {a:"ما عاصمة العراق؟",e:"What is the capital of Iraq?",o:["Baghdad","Basra","Mosul","Erbil"],x:"عاصمة العراق بغداد."},
  {a:"أي جملة مكتوبة بشكل صحيح؟",e:"",o:["She is Turkish.","She is turkish.","she is Turkish.","She Is turkish."],x:"الجنسية تبدأ بحرف كبير وكذلك بداية الجملة."},
  {a:"اختر الكلمة المناسبة:",e:"I want to learn English ___ I want to travel.",o:["because","but","or","so that is"],x:"because تعني لأن."},
  {a:"علم مصر أحمر وأبيض و...",e:"The flag of Egypt is red, white and ___.",o:["black","blue","yellow","green"],x:"علم مصر: أحمر وأبيض وأسود."},
  {a:"اختر الكلمة المناسبة:",e:"The Tigris and the Euphrates are two famous ___ in Iraq.",o:["rivers","mountains","cities","flags"],x:"نهران = rivers."},
  {a:"ما جنسيتك؟",e:"What nationality are you?  I'm ___.",o:["Iraqi","Iraq","Irakian","Irak"],x:"الجنسية من العراق هي Iraqi."},
  {e:"Paris is the capital of France.",tf:true,x:"باريس عاصمة فرنسا."},
  {e:"The Taj Mahal is in Egypt.",tf:false,x:"تاج محل في الهند وليس في مصر."},
  {e:"Kangaroos are from Australia.",tf:true,x:"الكنغر من أستراليا."},
  {e:"Pandas are from Turkey.",tf:false,x:"الباندا من الصين."}
 ]},

/* ───────────── UNIT 2 ───────────── */
{id:2,key:"u2",no:"الوحدة الثانية",en:"Routines and animals",ar:"الروتين اليومي والحيوانات",emoji:"🦁",
 lessons:[["About time","عن الوقت"],["Mr Hadi's day","يوم السيد هادي"],["Things we do every day","ما نفعله كل يوم"],["What's it like?","كيف هو؟"],["Thinking about animals","نفكر في الحيوانات"],["My magazine: Insects in our life","مجلتي: الحشرات في حياتنا"],["Check my understanding","أتحقق من فهمي"],["Let's read! The competition","لنقرأ! المسابقة"]],
 vocab:[
  {g:"Days of the week",ga:"أيام الأسبوع",items:[["Monday","الاثنين"],["Tuesday","الثلاثاء"],["Wednesday","الأربعاء"],["Thursday","الخميس"],["Friday","الجمعة"],["Saturday","السبت"],["Sunday","الأحد"]]},
  {g:"Daily activities",ga:"أنشطة يومية",items:[["clean","ينظّف","🧹"],["wash clothes","يغسل الملابس","🧺"],["cook","يطبخ","🍳"],["watch TV","يشاهد التلفاز","📺"],["help my children","أساعد أطفالي","🧒"],["see friends","يرى أصدقاءه","👫"],["go shopping","يتسوّق","🛒"],["get up","يستيقظ","⏰"],["have breakfast","يتناول الفطور","🥣"],["leave the house","يغادر البيت","🚪"],["get home","يصل إلى البيت","🏠"]]},
  {g:"Animals and insects",ga:"حيوانات وحشرات",items:[["butterfly","فراشة","🦋"],["ant","نملة","🐜"],["fly","ذبابة","🪰"],["caterpillar","يرقة","🐛"],["ladybird","دعسوقة","🐞"],["bee","نحلة","🐝"],["spider","عنكبوت","🕷️"],["dove","حمامة","🕊️"],["dolphin","دلفين","🐬"],["horse","حصان","🐴"],["shark","قرش","🦈"],["lion","أسد","🦁"],["eagle","نسر","🦅"],["owl","بومة","🦉"]]},
  {g:"Adjectives",ga:"صفات",items:[["dangerous","خطير","⚠️"],["greedy","جشع"],["friendly","ودود","😊"],["playful","مرح، يحب اللعب"],["gentle","لطيف، وديع"],["lazy","كسول","😴"],["intelligent","ذكي","🧠"],["brave","شجاع","💪"],["fast","سريع","⚡"],["big","كبير"],["small","صغير"],["long","طويل"]]}
 ],
 hard:[["adjective","صفة"],["adult","بالغ"],["animal","حيوان"],["beak","منقار"],["buzz","يطنّ"],["cage","قفص"],["carry","يحمل"],["colony","مستعمرة"],["colourful","ملوّن"],["disease","مرض"],["feed","يُطعِم"],["fixing","إصلاح"],["get home","يصل إلى البيت"],["grow","ينمو"],["grow up","يكبر"],["human","إنسان"],["insects","حشرات"],["leave","يغادر"],["nectar","رحيق"],["peace","سلام"],["pick up","يلتقط، يرفع"],["plants","نباتات"],["positive","إيجابي"],["negative","سلبي"],["sleepy","نعسان"],["social","اجتماعي"],["special","مميز"],["weight","وزن"]],
 talk:[["It's eleven fifteen.","الساعة الحادية عشرة والربع."],["What time do you finish school?","في أي وقت تنهي المدرسة؟"],["I finish school at 12:30.","أنهي المدرسة عند 12:30."],["Mr Hadi leaves the house at seven thirty.","السيد هادي يغادر البيت عند السابعة والنصف."],["What does she do on Tuesday?","ماذا تفعل يوم الثلاثاء؟"],["When does she go shopping?","متى تذهب إلى التسوق؟"],["She goes shopping on Saturday.","تذهب إلى التسوق يوم السبت."],["Does she clean the house on Thursday?","هل تنظّف البيت يوم الخميس؟"],["Yes, she does. / No, she doesn't.","نعم تفعل. / لا، لا تفعل."],["What's a shark like?","كيف هو القرش؟"],["It's dangerous.","إنه خطير."],["A cat is playful.","القطة مرحة."]],
 tips:[
  {ar:"مع he / she / it نضيف s أو es للفعل.",ex:["I get up. → He gets up.","I wash. → She washes.","I watch TV. → She watches TV.","I have. → He has (شاذ)."]},
  {ar:"في الأسئلة نستعمل does ثم الفعل بدون s.",ex:["Does she clean the house?","When does he feed the animals?"]},
  {ar:"للتسلسل نستعمل: First, Then, After that, Finally.",ex:["First, he gets up.","Then, he has breakfast.","Finally, he gets home."]},
  {ar:"He و She للأشخاص. أما It فللحيوانات والأشياء.",ex:["A dog? It's friendly.","My teacher? She is gentle."]}],
 reads:[
  {title:"Insects in our life",tar:"الحشرات في حياتنا",en:"Butterflies have four wings. A butterfly starts as an egg, then it is a caterpillar. Ants live together in a big home called a colony. An ant is very strong for its size. Flies have two wings. They can carry disease, so we keep food covered.",ar:"للفراشات أربعة أجنحة. تبدأ الفراشة بيضة ثم تصبح يرقة. تعيش النمل معاً في بيت كبير يسمى مستعمرة. النملة قوية جداً بالنسبة لحجمها. للذباب جناحان. يمكنه أن يحمل الأمراض لذلك نغطي الطعام."},
  {title:"The competition (story summary)",tar:"المسابقة (ملخص القصة)",en:"Lion is the king and he is kind. Each of his friends is good at something. Eagle is strong and can fix things. Flamingo dances. Yellow bird is clever. Owl likes to sleep. At the end, Lion has a picnic for everyone.",ar:"الأسد هو الملك وهو طيب. كل واحد من أصدقائه بارع في شيء ما. النسر قوي ويستطيع إصلاح الأشياء. الفلامنغو يرقص. العصفور الأصفر ذكي. والبومة تحب النوم. وفي النهاية يقيم الأسد نزهة للجميع."}],
 chant:{title:"My busy day (original chant)",en:"I get up, I wash, I eat my bread,\nI go to school with a smile ahead.\nA lazy cat sleeps all day,\nA playful dog wants to play!",ar:"أستيقظ، وأغسل وجهي، وآكل خبزي،\nوأذهب إلى المدرسة مبتسماً.\nالقطة الكسولة تنام طوال اليوم،\nوالكلب المرح يريد أن يلعب!"},
 project:"مشروع: اكتب جدول يوم أسبوعك. استعمل First, Then, After that, Finally واذكر الساعة.",
 qs:[
  {a:"اختر الصحيح:",e:"He ___ up at six o'clock.",o:["gets","get","getting","gets up at"],x:"مع he نضيف s: gets."},
  {a:"اختر الصحيح:",e:"She ___ clothes on Friday.",o:["washes","wash","washs","washing"],x:"الفعل المنتهي بـ sh نضيف له es."},
  {a:"اختر الصحيح:",e:"Does she ___ the house on Thursday?",o:["clean","cleans","cleaning","cleaned"],x:"بعد does نستعمل الفعل بدون s."},
  {a:"أكمل الجواب:",e:"Does he watch TV?  No, he ___.",o:["doesn't","don't","isn't","not"],x:"الجواب المختصر: No, he doesn't."},
  {a:"7:30 تُقرأ:",e:"7:30 → seven ___",o:["thirty","three","thirteen","thirty-five"],x:"30 = thirty."},
  {a:"12:00 تُقرأ:",e:"12:00 → twelve ___",o:["o'clock","clock","hour","half"],x:"الساعة بالضبط نقول o'clock."},
  {a:"اختر الصفة المناسبة:",e:"A shark is ___.",o:["dangerous","lazy","playful","gentle"],x:"القرش خطير."},
  {a:"اختر الصفة المناسبة:",e:"A cat that likes to play is ___.",o:["playful","dangerous","greedy","sleepy"],x:"playful = مرح."},
  {a:"ما عكس lazy تقريباً؟",e:"The opposite of lazy is ___.",o:["hard-working","sleepy","slow","greedy"],x:"عكس كسول: مجتهد hard-working."},
  {a:"كم جناحاً للفراشة؟",e:"A butterfly has ___ wings.",o:["four","two","six","eight"],x:"للفراشة أربعة أجنحة."},
  {a:"ماذا نسمّي بيت النمل الكبير؟",e:"A big home for ants is called a ___.",o:["colony","cage","nest","tower"],x:"colony = مستعمرة."},
  {a:"ترتيب الأحداث:",e:"First, he gets up. ___, he has breakfast.",o:["Then","Finally","Because","And"],x:"Then = بعد ذلك."},
  {a:"أيها يُستعمل للحيوانات والأشياء؟",e:"",o:["it","he","she","they are"],x:"It للحيوانات والأشياء."},
  {e:"Flies are dangerous because they carry disease.",tf:true,x:"الذباب ينقل الأمراض."},
  {e:"A dove is a symbol of war.",tf:false,x:"الحمامة رمز السلام peace."},
  {e:"Owl likes to sleep.",tf:true,x:"البومة تحب النوم."}
 ]},

/* ───────────── UNIT 3 ───────────── */
{id:3,key:"u3",no:"الوحدة الثالثة",en:"Sports",ar:"الرياضة",emoji:"⚽",
 lessons:[["Sports I like","رياضات أحبها"],["Play or go or do?","play أم go أم do؟"],["How often do you ...?","كم مرة ...؟"],["At the weekend","في عطلة الأسبوع"],["A class survey","استبيان الصف"],["My magazine: Sports are great","مجلتي: الرياضة رائعة"],["Check my understanding","أتحقق من فهمي"],["Let's play!","لنلعب!"]],
 vocab:[
  {g:"Sports",ga:"الرياضات",items:[["tennis","التنس","🎾"],["boxing","الملاكمة","🥊"],["running","الجري","🏃"],["karate","الكاراتيه","🥋"],["cycling","ركوب الدراجات","🚴"],["swimming","السباحة","🏊"],["football","كرة القدم","⚽"],["gymnastics","الجمباز","🤸"],["rowing","التجديف","🚣"],["basketball","كرة السلة","🏀"],["volleyball","الكرة الطائرة","🏐"]]},
  {g:"Why do sports?",ga:"لماذا نمارس الرياضة؟",items:[["keep healthy","يحافظ على صحته"],["make friends","يكوّن أصدقاء"],["learn rules","يتعلم القواعد"],["have fun","يستمتع"],["learn a new sport","يتعلم رياضة جديدة"],["play outside","يلعب في الخارج"],["be in a team","يكون في فريق"]]},
  {g:"Weekend activities",ga:"أنشطة عطلة الأسبوع",items:[["see a film","يشاهد فيلماً","🎬"],["go to a museum","يزور متحفاً","🏛️"],["play with friends","يلعب مع الأصدقاء","🧒"],["help at home","يساعد في البيت","🏠"],["play in the park","يلعب في الحديقة","🌳"],["have a picnic","يقيم نزهة","🧺"]]},
  {g:"How often?",ga:"كم مرة؟",items:[["always","دائماً"],["often","غالباً"],["sometimes","أحياناً"],["never","أبداً"],["once a day","مرة في اليوم"],["twice a week","مرتين في الأسبوع"],["three times a month","ثلاث مرات في الشهر"],["four times a year","أربع مرات في السنة"]]},
  {g:"Survey words",ga:"كلمات الاستبيان",items:[["all the pupils","كل التلاميذ"],["most pupils","معظم التلاميذ"],["only eight pupils","ثمانية تلاميذ فقط"],["everybody","الجميع"]]}
 ],
 hard:[["always","دائماً"],["boxing","ملاكمة"],["ground","أرض، ملعب"],["health","صحة"],["healthy","صحي"],["in order","بالترتيب"],["inside","داخل"],["outside","خارج"],["never","أبداً"],["often","غالباً"],["once","مرة واحدة"],["phrase","عبارة"],["prefer","يفضّل"],["rowing","تجديف"],["rules","قواعد، قوانين"],["sometimes","أحياناً"],["sports club","نادٍ رياضي"],["survey","استبيان"],["touch","يلمس"],["twice","مرتين"]],
 talk:[["What's your favourite sport?","ما رياضتك المفضلة؟"],["I like swimming and tennis.","أحب السباحة والتنس."],["I play football.","ألعب كرة القدم."],["I go swimming.","أذهب للسباحة."],["I do gymnastics.","أمارس الجمباز."],["Where do you go swimming?","أين تذهب للسباحة؟"],["At the sports club.","في النادي الرياضي."],["How often do you clean your teeth?","كم مرة تنظف أسنانك؟"],["I always clean my teeth after breakfast.","أنظف أسناني دائماً بعد الفطور."],["How often do you help at home?","كم مرة تساعد في البيت؟"],["Twice a week, on Friday and Saturday.","مرتين في الأسبوع، يوم الجمعة والسبت."],["I never help at home.","لا أساعد في البيت أبداً."],["What are you going to watch on Tuesday?","ماذا ستشاهد يوم الثلاثاء؟"],["I'm going to watch basketball.","سأشاهد كرة السلة."]],
 tips:[
  {ar:"play مع الألعاب والكرات. go مع الأنشطة التي تنتهي بـ ing. do مع بقية الأنشطة.",ex:["play football, play tennis","go swimming, go cycling, go running","do karate, do gymnastics, do boxing"]},
  {ar:"كلمات التكرار ترتّب من الأكثر للأقل:",ex:["always → often → sometimes → never"]},
  {ar:"كلمة التكرار تأتي قبل الفعل.",ex:["I always play football.","She never watches TV."]},
  {ar:"للسؤال عن عدد المرات نقول:",ex:["How often do you go swimming?","Twice a week."]}],
 reads:[
  {title:"Sports are great",tar:"الرياضة رائعة",en:"I love sports! Sports keep me healthy and help me make friends. I go swimming three times a week at the water park. I think swimming is the best sport. My brother prefers computer games, but I always play outside.",ar:"أحب الرياضة! الرياضة تحافظ على صحتي وتساعدني على تكوين أصدقاء. أذهب للسباحة ثلاث مرات في الأسبوع في مدينة الألعاب المائية. أعتقد أن السباحة أفضل رياضة. أخي يفضل ألعاب الحاسوب، أما أنا فألعب في الخارج دائماً."},
  {title:"Our class survey",tar:"استبيان صفنا",en:"We did a survey in our class. All the pupils watch TV. Most pupils help at home. Only eight pupils don't help at home. Everybody likes sports.",ar:"أجرينا استبياناً في صفنا. كل التلاميذ يشاهدون التلفاز. معظم التلاميذ يساعدون في البيت. ثمانية تلاميذ فقط لا يساعدون في البيت. الجميع يحبون الرياضة."}],
 chant:{title:"Play, go, do (original chant)",en:"Play football, play tennis too,\nGo swimming, go cycling — that's what we do!\nDo karate, do gymnastics, hey!\nSports are fun every day!",ar:"العب كرة القدم والتنس أيضاً،\nاذهب للسباحة وركوب الدراجة — هذا ما نفعله!\nمارس الكاراتيه والجمباز، هيا!\nالرياضة ممتعة كل يوم!"},
 project:"مشروع: ملصق عن رياضتك المفضلة (Sports poster). اكتب: كم مرة تلعبها؟ وأين؟ ولماذا تحبها؟",
 qs:[
  {a:"اختر الفعل المناسب:",e:"I ___ football every Friday.",o:["play","go","do","make"],x:"مع الكرات نستعمل play."},
  {a:"اختر الفعل المناسب:",e:"She ___ swimming on Tuesday.",o:["goes","plays","does","makes"],x:"go + swimming. ومع she نقول goes."},
  {a:"اختر الفعل المناسب:",e:"We ___ karate at school.",o:["do","go","play","are"],x:"karate مع do."},
  {a:"اختر الفعل المناسب:",e:"He ___ gymnastics twice a week.",o:["does","goes","plays","is"],x:"gymnastics مع do، ومع he نقول does."},
  {a:"أين توضع كلمة التكرار؟",e:"I ___ clean my teeth.  (always)",o:["always","always,","always.","to always"],x:"تأتي قبل الفعل: I always clean."},
  {a:"رتّب من الأكثر للأقل:",e:"",o:["always, often, sometimes, never","never, sometimes, often, always","often, always, never, sometimes","sometimes, never, always, often"],x:"always أكثر تكرار وnever أقله."},
  {a:"اختر الصحيح:",e:"She doesn't like chocolate. She ___ eats chocolate.",o:["never","always","often","sometimes"],x:"لا تحبها إذن never."},
  {a:"اختر الجواب:",e:"How often do you help at home?",o:["Twice a week.","At the park.","In Mosul.","Because I like it."],x:"how often تسأل عن عدد المرات."},
  {a:"اختر الجواب:",e:"Where do you go swimming?",o:["At the sports club.","Twice a week.","Yes, I do.","I like tennis."],x:"where تسأل عن المكان."},
  {a:"اختر المعنى:",e:"twice a week = ___",o:["two times a week","once a week","three times a week","two weeks"],x:"twice = مرتين."},
  {a:"اختر الكلمة:",e:"___ pupils help at home. (معظم التلاميذ)",o:["Most","Only","All","Never"],x:"most = معظم."},
  {a:"اختر الكلمة:",e:"Swimming and running keep you ___.",o:["healthy","lazy","sleepy","angry"],x:"الرياضة تجعلك صحياً."},
  {a:"أي رياضة ليست مع go؟",e:"",o:["boxing","swimming","cycling","running"],x:"نقول do boxing. أما الباقي فمع go."},
  {e:"We say 'play karate'.",tf:false,x:"الصحيح do karate."},
  {e:"We say 'go cycling'.",tf:true,x:"go مع الأنشطة المنتهية بـ ing."},
  {e:"'Never' means every day.",tf:false,x:"never تعني أبداً."}
 ]},

/* ───────────── UNIT 4 (Revision) ───────────── */
{id:4,key:"u4",no:"الوحدة الرابعة",en:"Revision (Units 1–3)",ar:"مراجعة الوحدات 1 – 3",emoji:"🔁",rev:[1,2,3],
 lessons:[["Revision lesson 1","مراجعة 1"],["Revision lesson 2","مراجعة 2"],["Revision lesson 3","مراجعة 3"],["The Faces game","لعبة الوجوه"]],
 vocab:[],hard:[],
 talk:[["I'm Iraqi. I'm from Iraq.","أنا عراقي. أنا من العراق."],["What time do you finish school?","في أي وقت تنهي المدرسة؟"],["What's a dolphin like?","كيف هو الدلفين؟"],["How often do you help at home?","كم مرة تساعد في البيت؟"]],
 tips:[
  {ar:"مراجعة الوحدة 1: Is / Are، والجنسيات بحرف كبير.",ex:["Is she Japanese?  Yes, she is."]},
  {ar:"مراجعة الوحدة 2: he / she تأخذ s، وبعد does نستعمل الفعل بدون s.",ex:["She gets up at six.","Does she get up at six?"]},
  {ar:"مراجعة الوحدة 3: play / go / do وكلمات التكرار.",ex:["I always go swimming.","I sometimes play football."]},
  {ar:"لعبة الوجوه: اختر رقماً، أجب عن السؤال، فإن أصبت جمعت الوجه. الفائز من جمع أكثر الوجوه.",ex:["Make a sentence using 'sometimes'.","Correct: I clean always my teeth."]}],
 reads:[{title:"My new sports club (email)",tar:"ناديي الرياضي الجديد (بريد)",en:"Yesterday, my mum and dad took me to a new sports club. There is a swimming pool and a big playground. I'm going to go swimming twice a week. My sister is going to do gymnastics.",ar:"أمس أخذني أبي وأمي إلى نادٍ رياضي جديد. فيه مسبح وملعب كبير. سأذهب للسباحة مرتين في الأسبوع. وأختي ستمارس الجمباز."}],
 chant:null,project:"مراجعة: أسئلة هذه الوحدة تأتي من الوحدات 1 و2 و3.",qs:[]},

/* ───────────── UNIT 5 ───────────── */
{id:5,key:"u5",no:"الوحدة الخامسة",en:"Food and drink",ar:"الطعام والشراب",emoji:"🍎",
 lessons:[["Food and drink","الطعام والشراب"],["What can you count?","ماذا تستطيع أن تعدّ؟"],["Would you like ...?","هل تريد ...؟"],["Are you healthy?","هل أنت بصحة جيدة؟"],["My lunch box","علبة غدائي"],["My magazine: Picnic by the lake","مجلتي: نزهة قرب البحيرة"],["Check my understanding","أتحقق من فهمي"],["Let's sing!","لنُغنِّ!"]],
 vocab:[
  {g:"Food and drink",ga:"طعام وشراب",items:[["water","ماء","💧"],["bread","خبز","🍞"],["fish","سمك","🐟"],["milk","حليب","🥛"],["strawberries","فراولة","🍓"],["chicken","دجاج","🍗"],["rice","رز","🍚"],["apples","تفاح","🍎"],["cookies","بسكويت","🍪"],["meat","لحم","🥩"],["cherries","كرز","🍒"],["salad","سلطة","🥗"],["cucumber","خيار","🥒"],["onion","بصل","🧅"],["potato","بطاطا","🥔"],["tomato","طماطم","🍅"],["lettuce","خس","🥬"],["carrot","جزر","🥕"],["lemonade","عصير ليمون","🍋"],["tea","شاي","🍵"],["cheese","جبن","🧀"],["ice cream","آيس كريم","🍦"],["banana","موز","🍌"],["eggs","بيض","🥚"],["grapes","عنب","🍇"]]},
  {g:"Containers",ga:"أوعية وعبوات",items:[["tin","علبة معدنية","🥫"],["box","صندوق، علبة","📦"],["cup","كوب","☕"],["bottle","زجاجة","🍼"],["packet","رزمة، علبة صغيرة"],["bag","كيس","🛍️"]]},
  {g:"Healthy things",ga:"أشياء صحية",items:[["eat lots of fruit and vegetables","يأكل الكثير من الفواكه والخضار"],["sleep nine hours every night","ينام تسع ساعات كل ليلة"],["drink enough water","يشرب ماءً كافياً"],["exercise","يمارس الرياضة"]]},
  {g:"Unhealthy things",ga:"أشياء غير صحية",items:[["eat lots of sweets","يأكل الكثير من الحلوى"],["watch lots of TV","يشاهد التلفاز كثيراً"],["play lots of computer games","يلعب ألعاب الحاسوب كثيراً"]]},
  {g:"Grammar words",ga:"كلمات القواعد",items:[["countable","معدود"],["uncountable","غير معدود"]]}
 ],
 hard:[["cherries","كرز"],["compare","يقارن"],["container","وعاء، علبة"],["countable","معدود"],["uncountable","غير معدود"],["cucumber","خيار"],["delicious","لذيذ"],["diagram","رسم توضيحي"],["dinner","عشاء"],["fishing","صيد السمك"],["lettuce","خس"],["onion","بصل"],["plate","صحن"],["practise","يتدرّب"],["punctuation","علامات الترقيم"],["sticks of wood","أعواد خشب"],["tea","شاي"],["tin","علبة معدنية"],["unpack","يُخرج الأغراض"]],
 talk:[["Do you like fish?","هل تحب السمك؟"],["Yes, I do. / No, I don't.","نعم أحبه. / لا لا أحبه."],["Are there any cherries?","هل توجد كرز؟"],["Yes, there are lots. / No, there aren't.","نعم يوجد الكثير. / لا لا يوجد."],["Is there any bread?","هل يوجد خبز؟"],["Yes, there is a lot. / No, there isn't.","نعم يوجد الكثير. / لا لا يوجد."],["Would you like some salad?","هل تريد بعض السلطة؟"],["Yes, please. / No, thank you.","نعم من فضلك. / لا شكراً."],["Would you like tea or lemonade?","هل تريد شاياً أم عصير ليمون؟"],["I'd prefer tea, please.","أفضّل الشاي من فضلك."],["There isn't any ice cream.","لا يوجد آيس كريم."],["Can I have two bags of rice?","هل يمكن أن آخذ كيسين من الرز؟"],["I'd like four bananas.","أرغب في أربع موزات."]],
 tips:[
  {ar:"الأشياء المعدودة (apples, cherries) نسأل عنها بـ Are there any؟",ex:["Are there any apples?","Yes, there are lots."]},
  {ar:"الأشياء غير المعدودة (bread, rice, milk) نسأل عنها بـ Is there any؟",ex:["Is there any bread?","Yes, there is a lot."]},
  {ar:"لا نستطيع عدّ السوائل مباشرة، لكن نعدّ عبواتها.",ex:["two bottles of water","three cups of tea","a bag of rice"]},
  {ar:"للعرض اللطيف نستعمل Would you like ...؟ والجواب:",ex:["Yes, please.","No, thank you."]}],
 reads:[
  {title:"Picnic by the lake (story summary)",tar:"نزهة قرب البحيرة (ملخص)",en:"A family goes on a picnic by a lake. Dad drives the car and the children sit in the back. First, they unpack the picnic bag. Then Dad goes fishing. The children collect sticks for a fire. They cook the fish and enjoy a delicious picnic.",ar:"تذهب عائلة في نزهة إلى بحيرة. الأب يقود السيارة والأطفال يجلسون في الخلف. أولاً يُخرجون أغراض النزهة من الحقيبة. ثم يذهب الأب لصيد السمك. ويجمع الأطفال أعواداً للنار. يطبخون السمك ويستمتعون بنزهة لذيذة."},
  {title:"Are you healthy?",tar:"هل أنت بصحة جيدة؟",en:"To be healthy, eat lots of fruit and vegetables. Drink enough water and sleep nine hours every night. Exercise every day. Don't eat too many sweets and don't watch too much TV.",ar:"لتكون بصحة جيدة كُل الكثير من الفواكه والخضار. اشرب ماءً كافياً ونم تسع ساعات كل ليلة. مارس الرياضة كل يوم. لا تأكل حلويات كثيرة ولا تشاهد التلفاز كثيراً."}],
 chant:{title:"Fruit and rice (original chant)",en:"Apples, bananas, carrots, rice,\nA cup of milk is very nice!\nWould you like some? Yes, please!\nThank you, thank you, I say with ease!",ar:"تفاح وموز وجزر ورز،\nوكوب حليب لذيذ جداً!\nهل تريد بعضاً؟ نعم من فضلك!\nشكراً شكراً أقولها بسهولة!"},
 project:"مشروع: ملصق لنزهة (Picnic poster). اكتب قائمة بالطعام والشراب، وماذا ستفعل في النزهة.",
 qs:[
  {a:"اختر الصحيح:",e:"Are there any ___?",o:["apples","bread","milk","rice"],x:"apples معدودة وبصيغة الجمع."},
  {a:"اختر الصحيح:",e:"Is there any ___?",o:["bread","apples","cherries","cookies"],x:"bread غير معدود."},
  {a:"أيها غير معدود؟",e:"",o:["milk","apple","carrot","egg"],x:"milk لا نعدّه مباشرة."},
  {a:"أكمل الجواب:",e:"Are there any cherries?  Yes, there ___ lots.",o:["are","is","do","be"],x:"cherries جمع فنستعمل are."},
  {a:"أكمل الجواب:",e:"Is there any bread?  No, there ___.",o:["isn't","aren't","don't","not"],x:"bread مفرد: there isn't."},
  {a:"اختر العبارة الصحيحة:",e:"two ___ of water",o:["bottles","bottle","bottled","bottling"],x:"two بعدها جمع: bottles."},
  {a:"ماذا تقول عند الموافقة على عرض؟",e:"Would you like some salad?",o:["Yes, please.","Yes, I like.","Yes, I would like not.","Please yes thank."],x:"Yes, please."},
  {a:"ماذا تقول عند الرفض بلطف؟",e:"Would you like some tea?",o:["No, thank you.","No, please.","Not, thanks you.","Yes, thank."],x:"No, thank you."},
  {a:"أيها صحي؟",e:"",o:["Drink enough water.","Eat lots of sweets.","Play computer games all day.","Never exercise."],x:"شرب الماء كافياً صحي."},
  {a:"أيها غير صحي؟",e:"",o:["Watch lots of TV.","Sleep nine hours.","Eat fruit.","Exercise."],x:"مشاهدة التلفاز كثيراً غير صحية."},
  {a:"اختر الكلمة:",e:"There isn't ___ ice cream.",o:["any","some","a","an"],x:"في النفي نستعمل any."},
  {a:"اختر الصحيح:",e:"I'd like four ___.",o:["bananas","banana","bread","rice"],x:"four بعدها جمع معدود."},
  {a:"اختر الصحيح:",e:"Can I have two ___ of rice?",o:["bags","bag","apple","bread"],x:"bags of rice = كيسان من الرز."},
  {e:"We can count bread.",tf:false,x:"bread غير معدود، لكن نقول two loaves أو slices of bread."},
  {e:"Cherries are countable.",tf:true,x:"نقول one cherry, two cherries."},
  {e:"Dad caught a fish at the lake.",tf:true,x:"في قصة النزهة، اصطاد الأب سمكة."}
 ]},

/* ───────────── UNIT 6 ───────────── */
{id:6,key:"u6",no:"الوحدة السادسة",en:"Where is it?",ar:"أين هو؟",emoji:"🏙️",
 lessons:[["In the capital city","في العاصمة"],["Excuse me. Where's ...?","لو سمحت، أين ...؟"],["Helping Mum","مساعدة أمي"],["At Fun City","في مدينة الألعاب"],["Souvenirs","التذكارات"],["My magazine: Water World","مجلتي: عالم الماء"],["Check my understanding","أتحقق من فهمي"],["The shopping list","قائمة التسوق"]],
 vocab:[
  {g:"Shops and places",ga:"المحلات والأماكن",items:[["clothes shop","محل ملابس","👕"],["butcher's","محل جزارة","🥩"],["shoe shop","محل أحذية","👟"],["pharmacy","صيدلية","💊"],["fruit and vegetable stall","بسطة فواكه وخضار","🍎"],["bank","مصرف","🏦"],["toy shop","محل ألعاب","🧸"],["bakery","مخبز","🥖"],["mosque","جامع","🕌"],["school","مدرسة","🏫"],["park","حديقة","🌳"],["zoo","حديقة حيوان","🦁"],["supermarket","سوبرماركت","🛒"],["street","شارع"]]},
  {g:"Prepositions",ga:"حروف الجر (أين؟)",items:[["behind","خلف"],["next to","بجانب"],["opposite","مقابل"],["between","بين"],["in","في"],["on","على"],["at","عند"]]},
  {g:"Fun City",ga:"مدينة الألعاب",items:[["roller coaster","قطار الملاهي","🎢"],["bumper cars","سيارات التصادم","🚗"],["merry-go-round","دوّارة الخيل","🎠"],["super slide","زحليقة كبيرة"],["karting","سباق العربات الصغيرة","🏎️"],["big wheel","الدولاب الدوّار","🎡"],["super swing","أرجوحة كبيرة"],["clown","مهرّج","🤡"],["rides","ألعاب الملاهي"],["baby rides","ألعاب للصغار"]]},
  {g:"Souvenirs",ga:"التذكارات",items:[["postcard","بطاقة بريدية","💌"],["mug","قدح","☕"],["T-shirt","تي شيرت","👕"],["key ring","حلقة مفاتيح","🔑"],["baseball cap","قبعة بيسبول","🧢"],["doll","دمية","🪆"]]}
 ],
 hard:[["bakery","مخبز"],["baseball cap","قبعة بيسبول"],["bumper cars","سيارات التصادم"],["butcher's","محل جزارة"],["cost","يكلّف"],["Eiffel Tower","برج إيفل"],["karting","سباق العربات الصغيرة"],["key ring","حلقة مفاتيح"],["merry-go-round","دوّارة الخيل"],["opposite","مقابل"],["pharmacy","صيدلية"],["roller coaster","قطار الملاهي"],["souvenir","تذكار"],["super slide","زحليقة كبيرة"]],
 talk:[["Excuse me. I'm lost.","لو سمحت، لقد تهت."],["Where's the shoe shop?","أين محل الأحذية؟"],["It's on Green Street.","إنه في شارع غرين."],["It's between the clothes shop and the bakery.","إنه بين محل الملابس والمخبز."],["It's on Red Street opposite the butcher's.","إنه في شارع ريد مقابل الجزار."],["I want to buy some bread.","أريد أن أشتري خبزاً."],["Where was Rahaf at 11:30?","أين كانت رهف في 11:30؟"],["She was at the park.","كانت في الحديقة."],["Where were you at nine o'clock yesterday?","أين كنت أمس عند التاسعة؟"],["I was at school.","كنت في المدرسة."],["Would you like to go on the big wheel?","هل تود أن تركب الدولاب الدوّار؟"],["Yes, I would. / No, I wouldn't. It's too fast.","نعم أود. / لا لا أود، إنه سريع جداً."],["Would you like to go karting?  No, thank you. It's dangerous.","هل تود سباق العربات؟ لا شكراً، إنه خطير."]],
 tips:[
  {ar:"was / were هما الماضي لـ is / are.",ex:["I / he / she / it  →  was","you / we / they  →  were"]},
  {ar:"للجواب المختصر نكرر الفاعل وwas أو were.",ex:["Who was at the bank?  Mum was."]},
  {ar:"حروف الجر للأماكن:",ex:["next to = بجانب","opposite = مقابل","between = بين اثنين","behind = خلف"]},
  {ar:"نستعمل too قبل الصفة بمعنى «أكثر من اللازم».",ex:["It's too fast.","It's too dangerous."]}],
 reads:[
  {title:"A postcard from Babylon",tar:"بطاقة بريدية من بابل",en:"Hi Sara! This is a postcard from Babil in Iraq. Yesterday was great fun. We visited the ruins of Babylon. It is a very famous ancient city. Today, we are going around the city. See you soon!",ar:"مرحباً سارة! هذه بطاقة بريدية من بابل في العراق. كان أمس ممتعاً جداً. زرنا آثار بابل. إنها مدينة قديمة مشهورة جداً. اليوم سنتجول في المدينة. أراك قريباً!"},
  {title:"The shopping list (story summary)",tar:"قائمة التسوق (ملخص)",en:"Sami's mum asks him to go to the shop. But he loses the shopping list! He tries to remember what to buy. He walks past the zoo and Grandma's chickens. At the supermarket he buys lots of things and puts everything in a big box. At home, Mum is not happy!",ar:"تطلب أم سامي منه أن يذهب إلى المتجر. لكنه يضيّع قائمة التسوق! يحاول أن يتذكر ما يشتريه. يمر قرب حديقة الحيوان ودجاجات جدته. في السوبرماركت يشتري أشياء كثيرة ويضع كل شيء في صندوق كبير. وفي البيت لا تكون أمه سعيدة!"}],
 chant:{title:"Where is it? (original chant)",en:"Next to the bank, opposite the shop,\nBetween the bakery and the bus stop!\nExcuse me, please, where is the park?\nTurn left, turn right, before it's dark!",ar:"بجانب المصرف ومقابل المحل،\nوبين المخبز وموقف الحافلة!\nلو سمحت، أين الحديقة؟\nانعطف يساراً ثم يميناً قبل حلول الظلام!"},
 project:"مشروع: ارسم خريطة شارع فيها مخبز ومصرف وصيدلية، ثم اسأل صديقك: Where's the bank؟",
 qs:[
  {a:"اختر الصحيح:",e:"I ___ at school yesterday.",o:["was","were","am","is"],x:"مع I في الماضي نستعمل was."},
  {a:"اختر الصحيح:",e:"They ___ at the park at 3 o'clock.",o:["were","was","are","is"],x:"مع they نستعمل were."},
  {a:"اختر الصحيح:",e:"Where ___ you at nine o'clock?",o:["were","was","are","is"],x:"مع you نستعمل were."},
  {a:"أكمل الجواب:",e:"Who was at the bank?  Mum ___.",o:["was","were","is","are"],x:"Mum مفرد: was."},
  {a:"المخبز يبيع:",e:"A bakery sells ___.",o:["bread","medicine","shoes","toys"],x:"المخبز يبيع الخبز."},
  {a:"الصيدلية تبيع:",e:"A pharmacy sells ___.",o:["medicine","bread","meat","shoes"],x:"الصيدلية تبيع الأدوية."},
  {a:"أين نشتري اللحم؟",e:"Where can you get meat from?",o:["The butcher's","The bank","The bakery","The toy shop"],x:"اللحم من الجزار."},
  {a:"أين نحصل على المال؟",e:"Where can you get money from?",o:["The bank","The bakery","The pharmacy","The zoo"],x:"المال من المصرف."},
  {a:"اختر حرف الجر:",e:"The shoe shop is ___ the clothes shop and the bakery.",o:["between","behind","in","at"],x:"between تُستعمل بين شيئين."},
  {a:"اختر حرف الجر:",e:"The shop is ___ the bank. (على الجهة المقابلة)",o:["opposite","between","on","in"],x:"opposite = مقابل."},
  {a:"اختر الجواب:",e:"Would you like to go on the big wheel?  No, ___. It's too fast.",o:["I wouldn't","I don't","I'm not","I haven't"],x:"No, I wouldn't."},
  {a:"أيها تذكار؟",e:"",o:["key ring","bakery","bank","street"],x:"key ring تذكار."},
  {a:"نقول عن شارع:",e:"The pharmacy is ___ Green Street.",o:["on","in","at","by"],x:"نقول on + اسم الشارع."},
  {e:"A merry-go-round is a ride in Fun City.",tf:true,x:"دوّارة الخيل من ألعاب الملاهي."},
  {e:"We buy bread from the pharmacy.",tf:false,x:"الخبز من المخبز."},
  {e:"Sami forgot the shopping list.",tf:true,x:"في القصة ضيّع سامي القائمة."}
 ]},

/* ───────────── UNIT 7 ───────────── */
{id:7,key:"u7",no:"الوحدة السابعة",en:"Seasons and holidays",ar:"الفصول والعطل",emoji:"🏖️",
 lessons:[["The seasons","فصول السنة"],["Going on a summer holiday","الذهاب في عطلة صيفية"],["At the airport","في المطار"],["Presents for everyone","هدايا للجميع"],["Holiday weather","طقس العطلة"],["My magazine: How we travel","مجلتي: كيف نسافر"],["Check my understanding","أتحقق من فهمي"],["Let's play!","لنلعب!"]],
 vocab:[
  {g:"Seasons",ga:"الفصول",items:[["winter","الشتاء","❄️"],["spring","الربيع","🌸"],["summer","الصيف","☀️"],["autumn","الخريف","🍂"]]},
  {g:"Months",ga:"الشهور",items:[["January","كانون الثاني"],["February","شباط"],["March","آذار"],["April","نيسان"],["May","أيار"],["June","حزيران"],["July","تموز"],["August","آب"],["September","أيلول"],["October","تشرين الأول"],["November","تشرين الثاني"],["December","كانون الأول"]]},
  {g:"Weather",ga:"الطقس",items:[["sunny","مشمس","☀️"],["hot","حار","🥵"],["dry","جاف"],["cold","بارد","🥶"],["rainy","ممطر","🌧️"],["cloudy","غائم","☁️"],["cool","منعش"],["mild","معتدل"],["warm","دافئ"],["windy","عاصف","💨"],["humid","رطب"]]},
  {g:"Travelling",ga:"السفر",items:[["flight","رحلة جوية","🛫"],["airport","مطار","🛬"],["mountains","جبال","⛰️"],["marshes","أهوار"],["beach","شاطئ","🏖️"],["market","سوق","🛍️"],["by car","بالسيارة","🚗"],["by train","بالقطار","🚆"],["by plane","بالطائرة","✈️"],["by ferry boat","بالعبّارة","⛴️"]]},
  {g:"Presents",ga:"هدايا",items:[["flowers","زهور","💐"],["watch","ساعة","⌚"],["chocolates","شوكولاتة","🍫"],["crayons","ألوان شمعية","🖍️"],["scarf","وشاح","🧣"],["slippers","خُفّ","🩴"],["sweets","حلويات","🍬"],["key ring","حلقة مفاتيح","🔑"]]}
 ],
 hard:[["airport","مطار"],["Citadel in Erbil","قلعة أربيل"],["cool","منعش"],["Dead Sea","البحر الميت"],["dream","حلم"],["early","مبكراً"],["exciting","مثير"],["ferry boat","عبّارة"],["flight","رحلة جوية"],["hope","يأمل"],["humid","رطب"],["mansaf","منسف"],["pyramid","هرم"],["sandcastle","قلعة رملية"],["sea","بحر"],["season","فصل"],["ship","سفينة"],["slipper","خُفّ"],["warm","دافئ"]],
 talk:[["What's the weather like in spring?","كيف الطقس في الربيع؟"],["It's cool, rainy and mild.","إنه منعش وممطر ومعتدل."],["What was the weather like on your holiday?","كيف كان الطقس في عطلتك؟"],["It was sunny and very hot.","كان مشمساً وحاراً جداً."],["We didn't take any photos because it was windy.","لم نلتقط صوراً لأن الجو كان عاصفاً."],["Last summer, we went to visit our grandparents in Basra.","في الصيف الماضي ذهبنا لزيارة جدّينا في البصرة."],["I'm going to give my grandmother slippers.","سأعطي جدتي خُفّاً."],["I bought you some flowers.","اشتريت لك بعض الزهور."],["Thank you, they're lovely.","شكراً، إنها جميلة."],["The red bag is mine.","الحقيبة الحمراء لي."],["It's your book. It's yours.","إنه كتابك. إنه لك."],["It's her pencil case. It's hers.","إنها حقيبة أقلامها. إنها لها."],["Whose big, black bag is this?","لمن هذه الحقيبة الكبيرة السوداء؟"],["It's his black bag. It's his.","إنها حقيبته السوداء. إنها له."]],
 tips:[
  {ar:"الماضي البسيط: بعض الأفعال تتغير بالكامل (شاذة).",ex:["go → went","buy → bought","take → took","see → saw","is/are → was/were"]},
  {ar:"للنفي في الماضي نستعمل didn't + الفعل الأصلي.",ex:["We didn't take any photos.","I didn't see much."]},
  {ar:"للتخطيط للمستقبل نستعمل going to.",ex:["I'm going to give my dad a key ring.","We're going to fly by plane."]},
  {ar:"ضمائر الملكية: my / mine ، your / yours ، his / his ، her / hers.",ex:["It's my bag. It's mine.","It's her pen. It's hers."]}],
 reads:[
  {title:"How we travel",tar:"كيف نسافر",en:"People travel in different ways. We can go by car, by train, by plane or by ferry boat. A plane is very fast. A train is comfortable. A ferry boat is great for a picnic on the water. Which one do you like best?",ar:"يسافر الناس بطرق مختلفة. نستطيع الذهاب بالسيارة أو بالقطار أو بالطائرة أو بالعبّارة. الطائرة سريعة جداً. القطار مريح. والعبّارة رائعة لنزهة على الماء. أيها تحب أكثر؟"},
  {title:"My holiday",tar:"عطلتي",en:"Last summer, we went to the beach. It was sunny and very hot. We built a sandcastle and ate ice cream. Then we went shopping in the market and I bought a key ring. It was an exciting holiday!",ar:"في الصيف الماضي ذهبنا إلى الشاطئ. كان الجو مشمساً وحاراً جداً. بنينا قلعة رملية وأكلنا آيس كريم. ثم ذهبنا للتسوق في السوق واشتريت حلقة مفاتيح. كانت عطلة مثيرة!"}],
 chant:{title:"Four seasons (original chant)",en:"Winter is cold and spring is mild,\nSummer is hot — let's play and smile!\nAutumn is windy, leaves fall down,\nFour seasons come around and around!",ar:"الشتاء بارد والربيع معتدل،\nوالصيف حار — لنلعب ونبتسم!\nالخريف عاصف وتتساقط الأوراق،\nأربعة فصول تدور وتدور!"},
 project:"مشروع: ملصق عن عطلتك (Holiday poster). اكتب: أين ذهبت؟ كيف كان الطقس؟ ماذا اشتريت؟",
 qs:[
  {a:"اختر الماضي الصحيح:",e:"Last summer, we ___ to Basra.",o:["went","go","goes","going"],x:"ماضي go هو went."},
  {a:"اختر الماضي الصحيح:",e:"I ___ you some flowers.",o:["bought","buy","buyed","buys"],x:"ماضي buy هو bought."},
  {a:"اختر الصحيح:",e:"We didn't ___ any photos.",o:["take","took","taken","taking"],x:"بعد didn't نستعمل الفعل الأصلي."},
  {a:"أكمل الجملة:",e:"What was the weather like?  It ___ sunny.",o:["was","were","is","are"],x:"It مفرد: was."},
  {a:"اختر الصحيح:",e:"I'm ___ to give my dad a key ring.",o:["going","go","went","goes"],x:"going to للمستقبل."},
  {a:"اختر الكلمة:",e:"It's my bag. It's ___.",o:["mine","my","me","I"],x:"my + اسم، أما mine فتقف وحدها."},
  {a:"اختر الكلمة:",e:"It's her pen. It's ___.",o:["hers","her","she","hers'"],x:"hers = لها."},
  {a:"اختر الكلمة:",e:"The red bag is ___. (أنت)",o:["yours","your","you","yourself"],x:"yours = لك."},
  {a:"أي فصل بارد؟",e:"",o:["winter","summer","spring","autumn"],x:"الشتاء بارد."},
  {a:"ماذا نلبس في يوم ممطر؟",e:"It's rainy. Take an ___.",o:["umbrella","ice cream","sandcastle","scarf and sun"],x:"المظلة umbrella للمطر."},
  {a:"اختر وسيلة السفر:",e:"We go to Egypt ___ plane.",o:["by","in","on","at"],x:"نقول by plane, by car, by train."},
  {a:"عكس cold:",e:"The opposite of cold is ___.",o:["hot","cool","cloudy","dry"],x:"hot = حار."},
  {a:"أي كلمة تعني فصل؟",e:"",o:["season","flight","beach","market"],x:"season = فصل."},
  {e:"Autumn is a season.",tf:true,x:"autumn = الخريف."},
  {e:"A ferry boat flies in the sky.",tf:false,x:"العبّارة تسير على الماء."},
  {e:"'Went' is the past of 'go'.",tf:true,x:"go ← went."}
 ]},

/* ───────────── UNIT 8 (Revision) ───────────── */
{id:8,key:"u8",no:"الوحدة الثامنة",en:"Revision (Units 5–7)",ar:"مراجعة الوحدات 5 – 7",emoji:"🎉",rev:[5,6,7],
 lessons:[["Revision lesson 1","مراجعة 1"],["Revision lesson 2","مراجعة 2"],["Let's sing!","لنُغنِّ!"],["Party time","وقت الحفلة"]],
 vocab:[],hard:[],
 talk:[["Would you like some salad?","هل تريد بعض السلطة؟"],["Where's the bank?","أين المصرف؟"],["Where were you yesterday?","أين كنت أمس؟"],["I'm going to travel by plane.","سأسافر بالطائرة."]],
 tips:[
  {ar:"مراجعة الوحدة 5: any مع الأسئلة والنفي، وsome مع العروض.",ex:["Is there any milk?","Would you like some tea?"]},
  {ar:"مراجعة الوحدة 6: was / were وحروف الجر.",ex:["The bank is next to the bakery.","I was at school."]},
  {ar:"مراجعة الوحدة 7: الماضي وgoing to وضمائر الملكية.",ex:["We went to the beach.","It's hers."]},
  {ar:"نهاية السنة: سنقيم حفلة! نستعمل going to.",ex:["We're going to have a party.","There's going to be a quiz."]}],
 reads:[{title:"Our end-of-year party",tar:"حفلة نهاية السنة",en:"At the end of Year 5, we are going to have a party. We're going to have a picnic in the park. There is going to be lots of food and games. Everybody is going to come!",ar:"في نهاية الصف الخامس سنقيم حفلة. سنقيم نزهة في الحديقة. سيكون هناك الكثير من الطعام والألعاب. وسيأتي الجميع!"}],
 chant:{title:"Party time! (original chant)",en:"We're going to sing, we're going to play,\nWe're going to have a party today!\nCake and cherries, games and fun,\nHooray, hooray, Year 5 is done!",ar:"سنغني وسنلعب،\nسنقيم حفلة اليوم!\nكعك وكرز وألعاب ومرح،\nهورا هورا، انتهى الخامس!"},
 project:"مراجعة: أسئلة هذه الوحدة تأتي من الوحدات 5 و6 و7.",qs:[]}
];

/* ترجمة جمل الأسئلة (تظهر بزر «ترجمة السؤال») */
const TQ={
"She ___ from Japan.":"هي ___ من اليابان.","They ___ from Italy.":"هم ___ من إيطاليا.","I ___ Iraqi.":"أنا ___ عراقي.",
"A person from France is ___.":"الشخص من فرنسا جنسيته ___.","A person from Japan is ___.":"الشخص من اليابان جنسيته ___.",
"Where are pandas from?":"من أين الباندا؟","Are Murad and Ali from Turkey?  No, ___.":"هل مراد وعلي من تركيا؟ لا، ___.",
"What is the capital of Iraq?":"ما عاصمة العراق؟","I want to learn English ___ I want to travel.":"أريد تعلّم الإنكليزية ___ أريد أن أسافر.",
"The flag of Egypt is red, white and ___.":"علم مصر أحمر وأبيض و___.","The Tigris and the Euphrates are two famous ___ in Iraq.":"دجلة والفرات ___ مشهوران في العراق.",
"What nationality are you?  I'm ___.":"ما جنسيتك؟ أنا ___.","Paris is the capital of France.":"باريس عاصمة فرنسا.","The Taj Mahal is in Egypt.":"تاج محل في مصر.",
"Kangaroos are from Australia.":"الكنغر من أستراليا.","Pandas are from Turkey.":"الباندا من تركيا.",
"He ___ up at six o'clock.":"هو ___ عند الساعة السادسة.","She ___ clothes on Friday.":"هي ___ الملابس يوم الجمعة.","Does she ___ the house on Thursday?":"هل ___ البيت يوم الخميس؟",
"Does he watch TV?  No, he ___.":"هل يشاهد التلفاز؟ لا، هو ___.","7:30 → seven ___":"7:30 ← السابعة و___","12:00 → twelve ___":"12:00 ← الثانية عشرة ___",
"A shark is ___.":"القرش ___.","A cat that likes to play is ___.":"القطة التي تحب اللعب ___.","The opposite of lazy is ___.":"عكس كسول هو ___.",
"A butterfly has ___ wings.":"للفراشة ___ أجنحة.","A big home for ants is called a ___.":"البيت الكبير للنمل يسمى ___.","First, he gets up. ___, he has breakfast.":"أولاً يستيقظ. ___ يتناول الفطور.",
"Flies are dangerous because they carry disease.":"الذباب خطير لأنه يحمل الأمراض.","A dove is a symbol of war.":"الحمامة رمز الحرب.","Owl likes to sleep.":"البومة تحب النوم.",
"I ___ football every Friday.":"أنا ___ كرة القدم كل جمعة.","She ___ swimming on Tuesday.":"هي ___ للسباحة يوم الثلاثاء.","We ___ karate at school.":"نحن ___ الكاراتيه في المدرسة.",
"He ___ gymnastics twice a week.":"هو ___ الجمباز مرتين في الأسبوع.","I ___ clean my teeth.  (always)":"أنا ___ أنظف أسناني. (دائماً)","She doesn't like chocolate. She ___ eats chocolate.":"هي لا تحب الشوكولاتة. هي ___ تأكلها.",
"How often do you help at home?":"كم مرة تساعد في البيت؟","Where do you go swimming?":"أين تذهب للسباحة؟","twice a week = ___":"twice a week = ___ (بالعربية: مرتين في الأسبوع)",
"___ pupils help at home. (معظم التلاميذ)":"___ التلاميذ يساعدون في البيت.","Swimming and running keep you ___.":"السباحة والجري تجعلك ___.",
"We say 'play karate'.":"نقول 'play karate'.","We say 'go cycling'.":"نقول 'go cycling'.","'Never' means every day.":"كلمة 'never' تعني كل يوم.",
"Are there any ___?":"هل توجد ___؟","Is there any ___?":"هل يوجد ___؟","Are there any cherries?  Yes, there ___ lots.":"هل توجد كرز؟ نعم، ___ الكثير.",
"Is there any bread?  No, there ___.":"هل يوجد خبز؟ لا، ___.","two ___ of water":"اثنتان من ___ الماء","Would you like some salad?":"هل تريد بعض السلطة؟",
"Would you like some tea?":"هل تريد بعض الشاي؟","There isn't ___ ice cream.":"لا يوجد ___ آيس كريم.","I'd like four ___.":"أرغب في أربع ___.",
"Can I have two ___ of rice?":"هل يمكن أن آخذ اثنين من ___ الرز؟","We can count bread.":"نستطيع عدّ الخبز.","Cherries are countable.":"الكرز معدود.",
"Dad caught a fish at the lake.":"اصطاد أبي سمكة في البحيرة.","I ___ at school yesterday.":"أنا ___ في المدرسة أمس.","They ___ at the park at 3 o'clock.":"هم ___ في الحديقة عند الثالثة.",
"Where ___ you at nine o'clock?":"أين ___ أنت عند التاسعة؟","Who was at the bank?  Mum ___.":"من كان في المصرف؟ أمي ___.","A bakery sells ___.":"المخبز يبيع ___.",
"A pharmacy sells ___.":"الصيدلية تبيع ___.","Where can you get meat from?":"من أين تحصل على اللحم؟","Where can you get money from?":"من أين تحصل على المال؟",
"The shoe shop is ___ the clothes shop and the bakery.":"محل الأحذية ___ محل الملابس والمخبز.","The shop is ___ the bank. (على الجهة المقابلة)":"المحل ___ المصرف. (على الجهة المقابلة)",
"Would you like to go on the big wheel?  No, ___. It's too fast.":"هل تود ركوب الدولاب الدوّار؟ لا، ___. إنه سريع جداً.","The pharmacy is ___ Green Street.":"الصيدلية ___ شارع غرين.",
"A merry-go-round is a ride in Fun City.":"دوّارة الخيل لعبة في مدينة الألعاب.","We buy bread from the pharmacy.":"نشتري الخبز من الصيدلية.","Sami forgot the shopping list.":"نسي سامي قائمة التسوق.",
"Last summer, we ___ to Basra.":"في الصيف الماضي ___ إلى البصرة.","I ___ you some flowers.":"أنا ___ لك بعض الزهور.","We didn't ___ any photos.":"نحن لم ___ أي صور.",
"What was the weather like?  It ___ sunny.":"كيف كان الطقس؟ كان ___ مشمساً.","I'm ___ to give my dad a key ring.":"أنا ___ أن أعطي أبي حلقة مفاتيح.","It's my bag. It's ___.":"هذه حقيبتي. إنها ___.",
"It's her pen. It's ___.":"هذا قلمها. إنه ___.","The red bag is ___. (أنت)":"الحقيبة الحمراء ___. (لك)","It's rainy. Take an ___.":"الجو ممطر. خذ ___.",
"We go to Egypt ___ plane.":"نذهب إلى مصر ___ الطائرة.","The opposite of cold is ___.":"عكس بارد هو ___.","Autumn is a season.":"الخريف فصل.",
"A ferry boat flies in the sky.":"العبّارة تطير في السماء.","'Went' is the past of 'go'.":"'Went' ماضي 'go'."
};
